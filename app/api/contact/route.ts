import { NextResponse } from "next/server"
import { Resend } from "resend"
import { contactFormSchema } from "@/lib/validators"
import {
  getClientIp,
  globalRateLimitDaily,
  ipRateLimitDaily,
  ipRateLimitHourly,
} from "@/lib/rate-limit"

const resend = new Resend(process.env.RESEND_API_KEY)

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? ""
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ??
  "Portfolio Contact <onboarding@resend.dev>"

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const parsed = contactFormSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const { name, email, message, website } = parsed.data

  // Honeypot: silently accept but do not send. Returning 200 prevents bots
  // from learning that they were rejected.
  if (website && website.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 })
  }

  const ip = getClientIp(request)

  const [ipHourly, ipDaily, globalDaily] = await Promise.all([
    ipRateLimitHourly.limit(ip),
    ipRateLimitDaily.limit(ip),
    globalRateLimitDaily.limit("global"),
  ])

  if (!ipHourly.success || !ipDaily.success || !globalDaily.success) {
    return NextResponse.json(
      { error: "Rate limit exceeded" },
      { status: 429 }
    )
  }

  if (!TO_EMAIL) {
    console.error("CONTACT_TO_EMAIL is not set")
    return NextResponse.json(
      { error: "Server misconfigured" },
      { status: 500 }
    )
  }

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${name}님의 메시지`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
        <hr />
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    })

    if (result.error) {
      console.error("Resend error:", result.error)
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    console.error("Email send failed:", error)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}

"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { contactFormSchema, type ContactFormValues } from "@/lib/validators"

type SubmitResult =
  | { kind: "idle" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string }

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<SubmitResult>({ kind: "idle" })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      message: "",
      website: "",
    },
  })

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true)
    setResult({ kind: "idle" })
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        setResult({
          kind: "success",
          message: "메시지가 전송되었습니다. 빠른 시일 내 회신드리겠습니다.",
        })
        reset()
        return
      }

      if (response.status === 429) {
        setResult({
          kind: "error",
          message:
            "죄송합니다. 오늘 받을 수 있는 한도를 초과했습니다. jacejung.dev@gmail.com로 직접 보내주세요.",
        })
        return
      }

      setResult({
        kind: "error",
        message:
          "죄송합니다. 전송에 실패했습니다. 잠시 후 다시 시도해주세요.",
      })
    } catch {
      setResult({
        kind: "error",
        message:
          "죄송합니다. 전송에 실패했습니다. 잠시 후 다시 시도해주세요.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Honeypot — kept off-screen, hidden from screen readers, not tabbable */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {result.kind !== "idle" && (
        <div
          role={result.kind === "error" ? "alert" : "status"}
          aria-live={result.kind === "error" ? "assertive" : "polite"}
          className={cn(
            "rounded-md border px-4 py-3 text-base text-foreground md:text-[17px]",
            result.kind === "success" && "border-primary/30 bg-primary/10",
            result.kind === "error" &&
              "border-destructive/40 bg-destructive/10"
          )}
        >
          {result.message}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label
            htmlFor="contact-name"
            className="text-base md:text-[17px]"
          >
            Your Name
          </Label>
          <Input
            id="contact-name"
            placeholder="홍길동"
            autoComplete="name"
            aria-invalid={!!errors.name}
            className="h-11 text-base md:h-12 md:text-[17px]"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-destructive md:text-[15px]">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="contact-email"
            className="text-base md:text-[17px]"
          >
            Your Email
          </Label>
          <Input
            id="contact-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            className="h-11 text-base md:h-12 md:text-[17px]"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-destructive md:text-[15px]">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="contact-message"
          className="text-base md:text-[17px]"
        >
          Your Message
        </Label>
        <Textarea
          id="contact-message"
          rows={10}
          placeholder="문의하실 내용을 작성해주세요"
          className="min-h-[260px] resize-none text-base md:text-[17px]"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-destructive md:text-[15px]">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="text-base md:text-[16px]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </div>
    </form>
  )
}

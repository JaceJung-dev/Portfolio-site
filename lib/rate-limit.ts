import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

const redis = Redis.fromEnv()

// Per-IP: 3 requests per 1 hour (sliding window)
export const ipRateLimitHourly = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "1 h"),
  prefix: "contact:ip:hourly",
  analytics: true,
})

// Per-IP: 5 requests per 24 hours
export const ipRateLimitDaily = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "24 h"),
  prefix: "contact:ip:daily",
  analytics: true,
})

// Global cap: 50 requests per 24 hours across all IPs.
// Resend free tier allows 100/day, so this leaves a 50% safety margin.
export const globalRateLimitDaily = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(50, "24 h"),
  prefix: "contact:global",
  analytics: true,
})

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim()
    if (first) return first
  }
  const real = request.headers.get("x-real-ip")
  if (real) return real
  return "unknown"
}

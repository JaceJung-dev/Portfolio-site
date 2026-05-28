import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

type RateLimiters = {
  ipHourly: Ratelimit
  ipDaily: Ratelimit
  globalDaily: Ratelimit
}

let cached: RateLimiters | null = null

function buildLimiters(): RateLimiters {
  const redis = Redis.fromEnv()
  return {
    // Per-IP: 3 requests per 1 hour (sliding window)
    ipHourly: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, "1 h"),
      prefix: "contact:ip:hourly",
      analytics: true,
    }),
    // Per-IP: 5 requests per 24 hours
    ipDaily: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "24 h"),
      prefix: "contact:ip:daily",
      analytics: true,
    }),
    // Global cap: 50 requests per 24 hours across all IPs.
    // Resend free tier allows 100/day, so this leaves a 50% safety margin.
    globalDaily: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(50, "24 h"),
      prefix: "contact:global",
      analytics: true,
    }),
  }
}

export function getRateLimiters(): RateLimiters {
  if (!cached) cached = buildLimiters()
  return cached
}

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

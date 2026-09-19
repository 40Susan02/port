export interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetAt: number;
}

class InMemoryRateLimiter {
  private store: Map<string, { count: number; resetAt: number }>;
  private maxAttempts: number;
  private windowMs: number;
  private cleanupInterval: NodeJS.Timeout;

  constructor(maxAttempts: number, windowMs: number) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
    this.store = new Map();

    // Auto-cleanup every 60 seconds
    this.cleanupInterval = setInterval(() => this.cleanup(), 60000);
    // Prevent the interval from keeping the process alive
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  check(key: string): RateLimitResult {
    const now = Date.now();
    const entry = this.store.get(key);

    if (!entry || entry.resetAt < now) {
      this.store.set(key, { count: 1, resetAt: now + this.windowMs });
      return { success: true, remaining: this.maxAttempts - 1, resetAt: now + this.windowMs };
    }

    if (entry.count < this.maxAttempts) {
      entry.count += 1;
      return { success: true, remaining: this.maxAttempts - entry.count, resetAt: entry.resetAt };
    }

    return { success: false, remaining: 0, resetAt: entry.resetAt };
  }

  private cleanup() {
    const now = Date.now();
    for (const [key, entry] of Array.from(this.store.entries())) {
      if (entry.resetAt < now) {
        this.store.delete(key);
      }
    }
  }
}

// NOTE: This is for single-instance deployments and should be replaced with Upstash Redis for production multi-instance.
export const rateLimiter = new InMemoryRateLimiter(5, 600000);

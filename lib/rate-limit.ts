/**
 * Simple in-memory rate limiter
 * Note: For production with multiple serverless instances, consider using
 * a distributed solution like @upstash/ratelimit with Redis
 */

interface RateLimitEntry {
	count: number;
	resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

/**
 * Rate limit configuration
 */
export interface RateLimitConfig {
	/**
	 * Maximum number of requests allowed
	 */
	maxRequests: number;
	/**
	 * Time window in milliseconds
	 */
	windowMs: number;
}

const defaultConfig: RateLimitConfig = {
	maxRequests: 10, // Allow 10 requests
	windowMs: 60 * 1000, // Per 60 seconds (1 minute)
};

/**
 * Get client identifier from request
 */
function getClientId(request: Request): string {
	// Try to get IP from various headers (for production behind proxies)
	const forwarded = request.headers.get("x-forwarded-for");
	const realIp = request.headers.get("x-real-ip");
	const cfConnectingIp = request.headers.get("cf-connecting-ip");

	const ip =
		cfConnectingIp || realIp || forwarded?.split(",")[0]?.trim() || "unknown";

	return ip;
}

/**
 * Clean up expired entries periodically
 */
function cleanupExpiredEntries() {
	const now = Date.now();
	for (const [key, entry] of rateLimitStore.entries()) {
		if (entry.resetTime < now) {
			rateLimitStore.delete(key);
		}
	}
}

// Clean up every 5 minutes
if (typeof setInterval !== "undefined") {
	setInterval(cleanupExpiredEntries, 5 * 60 * 1000);
}

/**
 * Check if request should be rate limited
 * @param request - The incoming request
 * @param config - Rate limit configuration
 * @returns Object with `allowed` boolean and `remaining` requests count
 */
export function rateLimit(
	request: Request,
	config: RateLimitConfig = defaultConfig,
): { allowed: boolean; remaining: number; resetTime: number } {
	const clientId = getClientId(request);
	const now = Date.now();

	// Clean up expired entries
	cleanupExpiredEntries();

	const entry = rateLimitStore.get(clientId);

	if (!entry || entry.resetTime < now) {
		// No entry or expired, create new entry
		const resetTime = now + config.windowMs;
		rateLimitStore.set(clientId, {
			count: 1,
			resetTime,
		});

		return {
			allowed: true,
			remaining: config.maxRequests - 1,
			resetTime,
		};
	}

	// Entry exists and is within window
	if (entry.count >= config.maxRequests) {
		return {
			allowed: false,
			remaining: 0,
			resetTime: entry.resetTime,
		};
	}

	// Increment count
	entry.count++;
	rateLimitStore.set(clientId, entry);

	return {
		allowed: true,
		remaining: config.maxRequests - entry.count,
		resetTime: entry.resetTime,
	};
}

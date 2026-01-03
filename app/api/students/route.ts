import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
	// Apply rate limiting (5 requests per minute per IP)
	const rateLimitResult = rateLimit(request, {
		maxRequests: 5,
		windowMs: 60 * 1000, // 1 minute
	});

	if (!rateLimitResult.allowed) {
		const retryAfterSeconds = Math.ceil(
			(rateLimitResult.resetTime - Date.now()) / 1000,
		);
		const retryAfterMinutes = Math.ceil(retryAfterSeconds / 60);

		// Format user-friendly message
		const retryMessage =
			retryAfterSeconds < 60
				? `Please try again after ${retryAfterSeconds} second${
						retryAfterSeconds !== 1 ? "s" : ""
					}`
				: `Please try again after ${retryAfterMinutes} minute${
						retryAfterMinutes !== 1 ? "s" : ""
					}`;

		return NextResponse.json(
			{
				error: `Too many requests. ${retryMessage}.`,
			},
			{
				status: 429,
				headers: {
					"Retry-After": String(retryAfterSeconds),
					"X-RateLimit-Limit": "5",
					"X-RateLimit-Remaining": "0",
					"X-RateLimit-Reset": String(
						Math.ceil(rateLimitResult.resetTime / 1000),
					),
				},
			},
		);
	}

	try {
		const body = await request.json();
		const { serial_number, register_no } = body;

		// Validate required fields
		if (!serial_number || !register_no) {
			return NextResponse.json(
				{ error: "serial_number and register_no are required" },
				{
					status: 400,
					headers: {
						"X-RateLimit-Limit": "5",
						"X-RateLimit-Remaining": String(rateLimitResult.remaining),
						"X-RateLimit-Reset": String(
							Math.ceil(rateLimitResult.resetTime / 1000),
						),
					},
				},
			);
		}

		// Validate field types and minimum length
		if (typeof serial_number !== "string" || typeof register_no !== "string") {
			return NextResponse.json(
				{ error: "serial_number and register_no must be strings" },
				{
					status: 400,
					headers: {
						"X-RateLimit-Limit": "5",
						"X-RateLimit-Remaining": String(rateLimitResult.remaining),
						"X-RateLimit-Reset": String(
							Math.ceil(rateLimitResult.resetTime / 1000),
						),
					},
				},
			);
		}

		if (serial_number.length < 3 || register_no.length < 3) {
			return NextResponse.json(
				{
					error:
						"serial_number and register_no must be at least 3 characters long",
				},
				{
					status: 400,
					headers: {
						"X-RateLimit-Limit": "5",
						"X-RateLimit-Remaining": String(rateLimitResult.remaining),
						"X-RateLimit-Reset": String(
							Math.ceil(rateLimitResult.resetTime / 1000),
						),
					},
				},
			);
		}

		// Query the database for the student
		const result = await sql`
      SELECT name, register_no, serial_number 
      FROM students 
      WHERE serial_number = ${serial_number} 
      AND register_no = ${register_no}
      LIMIT 1
    `;

		if (result.length === 0) {
			return NextResponse.json(
				{ error: "Student not found" },
				{
					status: 404,
					headers: {
						"X-RateLimit-Limit": "5",
						"X-RateLimit-Remaining": String(rateLimitResult.remaining),
						"X-RateLimit-Reset": String(
							Math.ceil(rateLimitResult.resetTime / 1000),
						),
					},
				},
			);
		}

		const student = result[0];
		return NextResponse.json(
			{
				name: student.name,
				register_no: student.register_no,
				serial_number: student.serial_number,
			},
			{
				headers: {
					"X-RateLimit-Limit": "5",
					"X-RateLimit-Remaining": String(rateLimitResult.remaining),
					"X-RateLimit-Reset": String(
						Math.ceil(rateLimitResult.resetTime / 1000),
					),
				},
			},
		);
	} catch (error) {
		console.error("Database error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{
				status: 500,
				headers: {
					"X-RateLimit-Limit": "5",
					"X-RateLimit-Remaining": String(rateLimitResult.remaining),
					"X-RateLimit-Reset": String(
						Math.ceil(rateLimitResult.resetTime / 1000),
					),
				},
			},
		);
	}
}

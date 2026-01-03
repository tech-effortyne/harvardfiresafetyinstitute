import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET() {
	try {
		const result = await sql`
      SELECT * FROM students
    `;

		return NextResponse.json(result);
	} catch (error) {
		console.error("Database error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { serial_number, register_no } = body;

		// Validate required fields
		if (!serial_number || !register_no) {
			return NextResponse.json(
				{ error: "serial_number and register_no are required" },
				{ status: 400 },
			);
		}

		// Validate field types and minimum length
		if (typeof serial_number !== "string" || typeof register_no !== "string") {
			return NextResponse.json(
				{ error: "serial_number and register_no must be strings" },
				{ status: 400 },
			);
		}

		if (serial_number.length < 3 || register_no.length < 3) {
			return NextResponse.json(
				{
					error:
						"serial_number and register_no must be at least 3 characters long",
				},
				{ status: 400 },
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
			return NextResponse.json({ error: "Student not found" }, { status: 404 });
		}

		const student = result[0];
		return NextResponse.json({
			name: student.name,
			register_no: student.register_no,
			serial_number: student.serial_number,
		});
	} catch (error) {
		console.error("Database error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}

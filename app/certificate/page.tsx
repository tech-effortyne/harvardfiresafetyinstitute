"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Award,
	Search,
	CheckCircle,
	XCircle,
	AlertCircle,
	Clock,
} from "lucide-react";
type VerificationStatus =
	| "idle"
	| "loading"
	| "verified"
	| "not_found"
	| "error"
	| "rate_limited";

interface StudentData {
	name: string;
	register_no: string;
	serial_number: string;
	year: number;
}

export default function CertificatePage() {
	const [serialNumber, setSerialNumber] = useState("");
	const [fsNumber, setFsNumber] = useState("");
	const [status, setStatus] = useState<VerificationStatus>("idle");
	const [studentData, setStudentData] = useState<StudentData | null>(null);
	const [rateLimitMessage, setRateLimitMessage] = useState<string>("");

	// Helper function to safely track events with Rybbit
	const trackEvent = (
		eventName: string,
		properties?: Record<string, string | number>,
	) => {
		if (typeof window !== "undefined" && window.rybbit) {
			try {
				window.rybbit.event(eventName, properties);
			} catch (error) {
				console.error("Rybbit tracking error:", error);
			}
		}
	};

	const handleVerify = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!serialNumber.trim() || !fsNumber.trim()) {
			return;
		}

		const trimmedSerialNumber = serialNumber.trim();
		const trimmedFsNumber = fsNumber.trim();

		// Track form submission
		trackEvent("certificate_verification_submitted", {
			serial_number: trimmedSerialNumber,
			register_no: trimmedFsNumber,
		});

		setStatus("loading");
		setStudentData(null);
		setRateLimitMessage("");

		try {
			const response = await fetch("/api/students", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					serial_number: trimmedSerialNumber,
					register_no: trimmedFsNumber,
				}),
			});

			const data = await response.json();

			if (response.ok && data.name) {
				setStudentData(data);
				setStatus("verified");
				// Track successful verification
				trackEvent("certificate_verification_success", {
					serial_number: data.serial_number,
					register_no: data.register_no,
					year: data.year,
				});
			} else if (response.status === 404) {
				setStatus("not_found");
				// Track not found
				trackEvent("certificate_verification_not_found", {
					serial_number: trimmedSerialNumber,
					register_no: trimmedFsNumber,
				});
			} else if (response.status === 429) {
				setRateLimitMessage(
					data.error || "Too many requests. Please try again later.",
				);
				setStatus("rate_limited");
				// Track rate limit
				trackEvent("certificate_verification_rate_limited", {
					serial_number: trimmedSerialNumber,
					register_no: trimmedFsNumber,
				});
			} else {
				setStatus("error");
				// Track error
				trackEvent("certificate_verification_error", {
					serial_number: trimmedSerialNumber,
					register_no: trimmedFsNumber,
					status_code: response.status,
				});
			}
		} catch (error) {
			console.error("Verification error:", error);
			setStatus("error");
			// Track error
			trackEvent("certificate_verification_error", {
				serial_number: trimmedSerialNumber,
				register_no: trimmedFsNumber,
				error_type: "network_error",
			});
		}
	};

	const handleReset = () => {
		setSerialNumber("");
		setFsNumber("");
		setStatus("idle");
		setStudentData(null);
		setRateLimitMessage("");
	};

	return (
		<>
			{/* Hero Section */}
			<section className="bg-primary py-20">
				<div className="container-custom">
					<div className="max-w-3xl">
						<span className="text-gold font-medium text-sm uppercase tracking-wider">
							Verification Portal
						</span>
						<h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-6">
							Certificate Verification
						</h1>
						<p className="text-primary-foreground/90 text-lg leading-relaxed">
							Verify the authenticity of certificates issued by our institution.
							Employers and institutions can confirm the validity of our
							graduates' credentials.
						</p>
					</div>
				</div>
			</section>

			{/* Verification Form */}
			<section className="section-padding">
				<div className="container-custom max-w-2xl">
					<Card className="border-border">
						<CardHeader className="text-center pb-2">
							<div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
								<Award className="w-8 h-8 text-gold" />
							</div>
							<CardTitle className="font-heading text-2xl text-foreground">
								Verify Certificate
							</CardTitle>
							<p className="text-muted-foreground mt-2">
								Enter the certificate details to verify its authenticity
							</p>
						</CardHeader>
						<CardContent className="pt-6">
							<form onSubmit={handleVerify} className="space-y-6">
								<div className="space-y-2">
									<Label htmlFor="serialNumber">Serial Number (Sl. No)</Label>
									<Input
										id="serialNumber"
										placeholder="e.g., 000000"
										value={serialNumber}
										onChange={(e) =>
											setSerialNumber(e.target.value.toUpperCase())
										}
										disabled={status === "loading"}
										autoCapitalize="characters"
										style={{ textTransform: "uppercase" }}
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="fsNumber">REGISTER NUMBER</Label>
									<Input
										id="fsNumber"
										placeholder="e.g., HIFSE0000"
										value={fsNumber}
										onChange={(e) => setFsNumber(e.target.value.toUpperCase())}
										disabled={status === "loading"}
										autoCapitalize="characters"
										style={{ textTransform: "uppercase" }}
									/>
								</div>
								<div className="flex gap-4">
									<Button
										type="submit"
										className="flex-1 bg-primary text-primary-foreground hover:bg-navy-light"
										disabled={
											status === "loading" ||
											!serialNumber.trim() ||
											!fsNumber.trim()
										}
									>
										{status === "loading" ? (
											<>
												<div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
												Verifying...
											</>
										) : (
											<>
												<Search className="w-4 h-4 mr-2" />
												Verify Certificate
											</>
										)}
									</Button>
									{(status === "verified" ||
										status === "not_found" ||
										status === "error" ||
										status === "rate_limited") && (
										<Button
											type="button"
											variant="outline"
											onClick={handleReset}
										>
											Reset
										</Button>
									)}
								</div>
							</form>

							{/* Result Display */}
							{status === "verified" && studentData && (
								<div className="mt-8 bg-white rounded-2xl border border-gray-200 p-8">
									<div className="flex items-start gap-4 mb-8">
										<div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
											<CheckCircle className="w-6 h-6 text-white" />
										</div>
										<div className="flex-1">
											<h3 className="text-2xl font-bold text-gray-900 mb-2">
												Certificate Verified
											</h3>
											<p className="text-gray-600">
												This certificate is authentic and was issued by the Fire
												& Safety Institute.
											</p>
										</div>
									</div>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div className="space-y-1">
											<div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
												Name
											</div>
											<div className="text-lg font-semibold text-gray-900">
												{studentData.name}
											</div>
										</div>
										<div className="space-y-1">
											<div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
												Serial No
											</div>
											<div className="text-lg font-semibold text-gray-900">
												{studentData.serial_number}
											</div>
										</div>
										<div className="space-y-1">
											<div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
												Register Number
											</div>
											<div className="text-lg font-semibold text-gray-900">
												{studentData.register_no}
											</div>
										</div>
										<div className="space-y-1">
											<div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
												Year
											</div>
											<div className="text-lg font-semibold text-gray-900">
												{studentData.year}
											</div>
										</div>
									</div>
									<div className="mt-8 pt-6 border-t border-gray-100">
										<div className="flex items-center justify-between">
											<div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
												Status
											</div>
											<div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-50 text-green-700 font-semibold">
												<CheckCircle className="w-4 h-4" />
												Valid
											</div>
										</div>
									</div>
								</div>
							)}

							{status === "not_found" && (
								<div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg animate-fade-in">
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
											<XCircle className="w-6 h-6 text-red-600" />
										</div>
										<div>
											<h3 className="font-semibold text-red-800 text-lg">
												Certificate Not Found
											</h3>
											<p className="text-red-700 mt-1">
												No certificate found with the provided details. Please
												verify the Serial Number and REGISTER NUMBER are
												correct.
											</p>
										</div>
									</div>
								</div>
							)}

							{status === "rate_limited" && (
								<div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg animate-fade-in">
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
											<Clock className="w-6 h-6 text-yellow-600" />
										</div>
										<div>
											<h3 className="font-semibold text-yellow-800 text-lg">
												Too Many Requests
											</h3>
											<p className="text-yellow-700 mt-1">
												{rateLimitMessage ||
													"Too many requests. Please try again later."}
											</p>
											<p className="text-yellow-600 text-sm mt-3">
												You have exceeded the rate limit for verification
												requests. Please wait before trying again.
											</p>
										</div>
									</div>
								</div>
							)}

							{status === "error" && (
								<div className="mt-8 p-6 bg-orange-50 border border-orange-200 rounded-lg animate-fade-in">
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
											<AlertCircle className="w-6 h-6 text-orange-600" />
										</div>
										<div>
											<h3 className="font-semibold text-orange-800 text-lg">
												Unable to Verify Certificate
											</h3>
											<p className="text-orange-700 mt-1">
												We encountered an issue while verifying your
												certificate. Please try again in a few moments.
											</p>
											<p className="text-orange-600 text-sm mt-3">
												If the problem persists, please contact our office for
												assistance.
											</p>
										</div>
									</div>
								</div>
							)}
						</CardContent>
					</Card>

					{/* Info Section */}
					<div className="mt-8 p-6 bg-secondary rounded-lg">
						<div className="flex gap-4">
							<AlertCircle className="w-6 h-6 text-gold shrink-0" />
							<div>
								<h3 className="font-semibold text-foreground mb-2">
									How to Find Certificate Details
								</h3>
								<ul className="text-muted-foreground text-sm space-y-1">
									<li>
										• The <strong>Serial Number</strong> is located at the
										top-right corner of your certificate
									</li>
									<li>
										• The <strong>REGISTER NUMBER</strong> is found below the
										certificate holder's name
									</li>
									<li>
										• Enter both details exactly as they appear on your
										certificate
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

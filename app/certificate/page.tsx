"use client";

import { useState, useEffect } from "react";
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
import { PAGE_METADATA, URLS } from "@/lib/config";

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
}

const structuredData = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	name: PAGE_METADATA.certificate.title,
	description: PAGE_METADATA.certificate.description,
	url: URLS.certificate,
};

export default function CertificatePage() {
	const [serialNumber, setSerialNumber] = useState("");
	const [fsNumber, setFsNumber] = useState("");
	const [status, setStatus] = useState<VerificationStatus>("idle");
	const [studentData, setStudentData] = useState<StudentData | null>(null);
	const [rateLimitMessage, setRateLimitMessage] = useState<string>("");

	useEffect(() => {
		const script = document.createElement("script");
		script.type = "application/ld+json";
		script.text = JSON.stringify(structuredData);
		document.head.appendChild(script);

		return () => {
			document.head.removeChild(script);
		};
	}, []);

	const handleVerify = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!serialNumber.trim() || !fsNumber.trim()) {
			return;
		}

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
					serial_number: serialNumber.trim(),
					register_no: fsNumber.trim(),
				}),
			});

			const data = await response.json();

			if (response.ok && data.name) {
				setStudentData(data);
				setStatus("verified");
			} else if (response.status === 404) {
				setStatus("not_found");
			} else if (response.status === 429) {
				setRateLimitMessage(
					data.error || "Too many requests. Please try again later.",
				);
				setStatus("rate_limited");
			} else {
				setStatus("error");
			}
		} catch (error) {
			console.error("Verification error:", error);
			setStatus("error");
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
										placeholder="e.g., 2024001234"
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
									<Label htmlFor="fsNumber">FS Number</Label>
									<Input
										id="fsNumber"
										placeholder="e.g., FS2024-DFS-0001"
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
								<div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
											<CheckCircle className="w-6 h-6 text-green-600" />
										</div>
										<div>
											<h3 className="font-semibold text-green-800 text-lg">
												Certificate Verified
											</h3>
											<p className="text-green-700 mt-1">
												This certificate is authentic and was issued by the Fire
												& Safety Institute.
											</p>
											<div className="mt-4 space-y-2 text-sm">
												<p>
													<span className="font-medium text-green-800">
														Name:
													</span>{" "}
													<span className="text-green-700">
														{studentData.name}
													</span>
												</p>
												<p>
													<span className="font-medium text-green-800">
														Serial No:
													</span>{" "}
													<span className="text-green-700">
														{studentData.serial_number}
													</span>
												</p>
												<p>
													<span className="font-medium text-green-800">
														FS Number:
													</span>{" "}
													<span className="text-green-700">
														{studentData.register_no}
													</span>
												</p>
												<p>
													<span className="font-medium text-green-800">
														Status:
													</span>{" "}
													<span className="text-green-700">Valid</span>
												</p>
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
												verify the Serial Number and FS Number are correct.
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
										• The <strong>FS Number</strong> (Register No) is found
										below the certificate holder's name
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

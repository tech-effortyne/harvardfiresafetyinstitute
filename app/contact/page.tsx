"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
	MapPin,
	Phone,
	Mail,
	Send,
	Facebook,
	Instagram,
	Linkedin,
	Twitter,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { PAGE_METADATA, URLS, INSTITUTE_NAME, ADDRESS, PHONE, EMAILS } from "@/lib/config";

export default function ContactPage() {
	const { toast } = useToast();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "ContactPage",
		name: PAGE_METADATA.contact.title,
		description: PAGE_METADATA.contact.description,
		url: URLS.contact,
		mainEntity: {
			"@type": "Organization",
			name: INSTITUTE_NAME,
			address: {
				"@type": "PostalAddress",
				addressLocality: ADDRESS.locality,
				addressRegion: ADDRESS.region,
				postalCode: ADDRESS.postalCode,
				addressCountry: ADDRESS.country,
			},
			telephone: PHONE.primary,
			email: EMAILS.info,
		},
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			toast({
				title: "Message Sent!",
				description:
					"Thank you for contacting us. We'll get back to you shortly.",
			});
			setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
			setIsSubmitting(false);
		}, 1500);
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			{/* Hero Section */}
			<section className="bg-primary py-20">
				<div className="container-custom">
					<div className="max-w-3xl">
						<span className="text-gold font-medium text-sm uppercase tracking-wider">
							Get in Touch
						</span>
						<h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-6">
							Contact Us
						</h1>
						<p className="text-primary-foreground/90 text-lg leading-relaxed">
							Have questions about our programs? Want to schedule a campus
							visit? We're here to help. Reach out to us through any of the
							channels below.
						</p>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="section-padding">
				<div className="container-custom">
					<div className="grid lg:grid-cols-3 gap-8 items-start">
						{/* Contact Info */}
						<div className="lg:col-span-1 space-y-6">
							<Card className="border-border">
								<CardContent className="p-6">
									<div className="flex gap-4">
										<div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
											<MapPin className="w-6 h-6 text-gold" />
										</div>
										<div>
											<h3 className="font-semibold text-foreground mb-1">
												Address
											</h3>
											<p className="text-muted-foreground text-sm">
												{ADDRESS.main}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card className="border-border">
								<CardContent className="p-6">
									<div className="flex gap-4">
										<div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
											<Phone className="w-6 h-6 text-gold" />
										</div>
										<div>
											<h3 className="font-semibold text-foreground mb-1">
												Phone
											</h3>
											<p className="text-muted-foreground text-sm">
												<a
													href={`tel:${PHONE.primary}`}
													className="hover:text-gold transition-colors"
												>
													{PHONE.formatted.primary}
												</a>
												<br />
												<a
													href={`tel:${PHONE.secondary}`}
													className="hover:text-gold transition-colors"
												>
													{PHONE.formatted.secondary}
												</a>
											</p>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card className="border-border">
								<CardContent className="p-6">
									<div className="flex gap-4">
										<div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
											<Mail className="w-6 h-6 text-gold" />
										</div>
										<div>
											<h3 className="font-semibold text-foreground mb-1">
												Email
											</h3>
											<p className="text-muted-foreground text-sm">
												<a
													href={`mailto:${EMAILS.info}`}
													className="hover:text-gold transition-colors"
												>
													{EMAILS.info}
												</a>
												<br />
												<a
													href={`mailto:${EMAILS.admissions}`}
													className="hover:text-gold transition-colors"
												>
													{EMAILS.admissions}
												</a>
											</p>
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Social Links */}
							<Card className="border-border">
								<CardContent className="p-6">
									<h3 className="font-semibold text-foreground mb-4">
										Follow Us
									</h3>
									<div className="flex gap-3">
										<button
											type="button"
											className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-gold/10 transition-colors"
											aria-label="Facebook"
										>
											<Facebook className="w-5 h-5 text-foreground" />
										</button>
										<button
											type="button"
											className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-gold/10 transition-colors"
											aria-label="Instagram"
										>
											<Instagram className="w-5 h-5 text-foreground" />
										</button>
										<button
											type="button"
											className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-gold/10 transition-colors"
											aria-label="LinkedIn"
										>
											<Linkedin className="w-5 h-5 text-foreground" />
										</button>
										<button
											type="button"
											className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-gold/10 transition-colors"
											aria-label="Twitter"
										>
											<Twitter className="w-5 h-5 text-foreground" />
										</button>
									</div>
								</CardContent>
							</Card>
						</div>

						{/* Contact Form */}
						<div className="lg:col-span-2">
							<Card className="border-border">
								<CardContent className="p-8">
									<h2 className="font-heading text-2xl font-bold text-foreground mb-6">
										Send Us a Message
									</h2>
									<form onSubmit={handleSubmit} className="space-y-6">
										<div className="grid sm:grid-cols-2 gap-4">
											<div className="space-y-2">
												<Label htmlFor="name">Full Name *</Label>
												<Input
													id="name"
													name="name"
													placeholder="Your full name"
													value={formData.name}
													onChange={handleChange}
													required
												/>
											</div>
											<div className="space-y-2">
												<Label htmlFor="email">Email Address *</Label>
												<Input
													id="email"
													name="email"
													type="email"
													placeholder="your@email.com"
													value={formData.email}
													onChange={handleChange}
													required
												/>
											</div>
										</div>
										<div className="grid sm:grid-cols-2 gap-4">
											<div className="space-y-2">
												<Label htmlFor="phone">Phone Number</Label>
												<Input
													id="phone"
													name="phone"
													placeholder="+91 98765 43210"
													value={formData.phone}
													onChange={handleChange}
												/>
											</div>
											<div className="space-y-2">
												<Label htmlFor="subject">Subject *</Label>
												<Input
													id="subject"
													name="subject"
													placeholder="How can we help?"
													value={formData.subject}
													onChange={handleChange}
													required
												/>
											</div>
										</div>
										<div className="space-y-2">
											<Label htmlFor="message">Message *</Label>
											<Textarea
												id="message"
												name="message"
												placeholder="Your message..."
												rows={8}
												value={formData.message}
												onChange={handleChange}
												required
											/>
										</div>
										<Button
											type="submit"
											className="bg-primary text-primary-foreground hover:bg-navy-light w-full sm:w-auto"
											disabled={isSubmitting}
										>
											{isSubmitting ? (
												<>
													<div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
													Sending...
												</>
											) : (
												<>
													<Send className="w-4 h-4 mr-2" />
													Send Message
												</>
											)}
										</Button>
									</form>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Map Section */}
			<section className="pb-16">
				<div className="container-custom">
					<div className="bg-secondary rounded-lg overflow-hidden">
						<div className="aspect-[21/9] bg-muted flex items-center justify-center">
							<div className="text-center p-8">
								<MapPin className="w-16 h-16 text-gold mx-auto mb-4" />
								<h3 className="font-heading text-xl font-semibold text-foreground mb-2">
									Find Us on the Map
								</h3>
								<p className="text-muted-foreground">
									{ADDRESS.short}
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { ADDRESS, PHONE, EMAILS } from "@/lib/config";

export default function ContactPage() {
	return (
		<>
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-[#7A1E2B] to-[#5a1620] py-20">
				<div className="container-custom">
					<div className="max-w-3xl">
						<span className="text-white font-medium text-sm uppercase tracking-wider">
							Get in Touch
						</span>
						<h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
							Contact Us
						</h1>
						<p className="text-white/90 text-lg leading-relaxed">
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
					<div className="max-w-4xl mx-auto space-y-6">
						{/* Address Card - Full Width */}
						<Card className="border-gray-200">
							<CardContent className="p-6">
								<div className="flex gap-4">
									<div className="w-12 h-12 rounded-lg bg-[#F57C00]/10 flex items-center justify-center shrink-0">
										<MapPin className="w-6 h-6 text-[#F57C00]" />
									</div>
									<div className="flex-1">
										<h3 className="font-semibold text-[#7A1E2B] mb-2 text-lg">
											Our Location
										</h3>
										<p className="text-[#2B2B2B]/70 text-sm leading-relaxed">
											{ADDRESS.main}
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Phone & Email Grid - Two Columns */}
						<div className="grid md:grid-cols-2 gap-6">
							{/* Phone Card */}
							<Card className="border-gray-200">
								<CardContent className="p-6">
									<div className="flex gap-4">
										<div className="w-12 h-12 rounded-lg bg-[#F57C00]/10 flex items-center justify-center shrink-0">
											<Phone className="w-6 h-6 text-[#F57C00]" />
										</div>
										<div className="flex-1">
											<h3 className="font-semibold text-[#7A1E2B] mb-3 text-lg">
												Call Us
											</h3>
											<div className="space-y-2 text-[#2B2B2B]/70 text-sm">
												<a
													href={`tel:${PHONE.primary}`}
													title={`Call us at ${PHONE.primary}`}
													className="flex items-center gap-2 hover:text-[#F57C00] transition-colors"
												>
													<span className="w-1.5 h-1.5 rounded-full bg-[#F57C00]" />
													{PHONE.primary}
												</a>
												<a
													href={`tel:${PHONE.secondary}`}
													title={`Call us at ${PHONE.secondary}`}
													className="flex items-center gap-2 hover:text-[#F57C00] transition-colors"
												>
													<span className="w-1.5 h-1.5 rounded-full bg-[#F57C00]" />
													{PHONE.secondary}
												</a>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Email Card */}
							<Card className="border-gray-200">
								<CardContent className="p-6">
									<div className="flex gap-4">
										<div className="w-12 h-12 rounded-lg bg-[#F57C00]/10 flex items-center justify-center shrink-0">
											<Mail className="w-6 h-6 text-[#F57C00]" />
										</div>
										<div className="flex-1">
											<h3 className="font-semibold text-[#7A1E2B] mb-3 text-lg">
												Email Us
											</h3>
											<a
												href={`mailto:${EMAILS.info}`}
												title={`Send email to ${EMAILS.info}`}
												className="flex items-center gap-2 text-[#2B2B2B]/70 text-sm hover:text-[#F57C00] transition-colors break-all"
											>
												<span className="w-1.5 h-1.5 rounded-full bg-[#F57C00] shrink-0" />
												{EMAILS.info}
											</a>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Map Section */}
			<section className="pb-16">
				<div className="container-custom">
					<div className="bg-secondary rounded-lg overflow-hidden max-w-5xl mx-auto">
						<div className="aspect-[21/9] bg-muted flex items-center justify-center">
							<div className="text-center p-8">
								<MapPin className="w-16 h-16 text-gold mx-auto mb-4" />
								<h3 className="font-heading text-xl font-semibold text-foreground mb-2">
									Find Us on the Map
								</h3>
								<p className="text-muted-foreground">{ADDRESS.short}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

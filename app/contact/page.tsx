import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { ADDRESS, PHONE, EMAILS } from "@/lib/config";

export default function ContactPage() {
	return (
		<>
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
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
						{/* Address Card */}
						<Card className="border-border">
							<CardContent className="p-6">
								<div className="flex gap-4">
									<div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
										<MapPin className="w-6 h-6 text-gold" />
									</div>
									<div>
										<h3 className="font-semibold text-foreground mb-2">
											Address
										</h3>
										<p className="text-muted-foreground text-sm leading-relaxed">
											{ADDRESS.main}
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Phone Card */}
						<Card className="border-border">
							<CardContent className="p-6">
								<div className="flex gap-4">
									<div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
										<Phone className="w-6 h-6 text-gold" />
									</div>
									<div>
										<h3 className="font-semibold text-foreground mb-2">
											Phone
										</h3>
										<div className="space-y-1 text-muted-foreground text-sm">
											<a
												href={`tel:${PHONE.primary}`}
												className="block hover:text-gold transition-colors"
											>
												{PHONE.formatted.primary}
											</a>
											<a
												href={`tel:${PHONE.secondary}`}
												className="block hover:text-gold transition-colors"
											>
												{PHONE.formatted.secondary}
											</a>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Email Card */}
						<Card className="border-border">
							<CardContent className="p-6">
								<div className="flex gap-4">
									<div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
										<Mail className="w-6 h-6 text-gold" />
									</div>
									<div>
										<h3 className="font-semibold text-foreground mb-2">
											Email
										</h3>
										<div className="space-y-1 text-muted-foreground text-sm">
											<a
												href={`mailto:${EMAILS.info}`}
												className="block hover:text-gold transition-colors break-all"
											>
												{EMAILS.info}
											</a>
											<a
												href={`mailto:${EMAILS.admissions}`}
												className="block hover:text-gold transition-colors break-all"
											>
												{EMAILS.admissions}
											</a>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
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

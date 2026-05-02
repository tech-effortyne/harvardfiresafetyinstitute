import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { ADDRESS, PHONE, EMAILS, URLS } from "@/lib/config";
import Link from "next/link";

export default function ContactPage() {
	const branches = [
		{
			name: "Mangalore Branch",
			address: "Laxman Building, 2nd Floor, Kottara Chowki, Mangalore – 575006",
			phones: ["9148028695", "7022943300"],
			email: "hifse.mangalore@gmail.com",
			link: URLS.branches.mangalore,
			borderColor: "border-[#7A1E2B]"
		},
		{
			name: "Tumakuru Branch",
			address: "Beside Apollo Pharmacy, Opp. Hemavathi Canal Division, Near Banashankari Temple, Kunigal Road, Tumakuru – 572101",
			phones: ["70191 27564", "63620 21692"],
			email: "hifse.mangalore@gmail.com",
			link: URLS.branches.tumakuru,
			borderColor: "border-[#F57C00]"
		},
		{
			name: "Raichur Branch",
			address: "Katakam Kristaiah Complex, 1st Floor, City Talkies Road, Raichur",
			phones: ["6361955804"],
			email: "harvardraichur@gmail.com",
			link: URLS.branches.raichur,
			borderColor: "border-emerald-500"
		}
	];

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
							visit? We're here to help. Reach out to us through any of our
							branches below.
						</p>
					</div>
				</div>
			</section>

			{/* Main Contact Section */}
			<section className="py-16">
				<div className="container-custom">
					<div className="text-center mb-10">
						<h2 className="text-3xl font-bold text-[#7A1E2B] mb-2">Head Office</h2>
						<p className="text-[#2B2B2B]/60 italic font-medium">Our primary branch located in Mangalore</p>
					</div>
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

			{/* Branches Section */}
			<section className="py-16 bg-gray-50">
				<div className="container-custom">
					<div className="text-center mb-12">
						<span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#7A1E2B]/10 text-[#7A1E2B] mb-4">
							REGIONAL OFFICES
						</span>
						<h2 className="text-3xl md:text-4xl font-bold text-[#7A1E2B] mb-4">
							Our Branches
						</h2>
						<p className="text-base text-[#2B2B2B]/70 max-w-2xl mx-auto">
							Reach out to your nearest Harvard Institute branch for course inquiries and admissions.
						</p>
					</div>

					<div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{branches.map((branch) => (
							<div
								key={branch.name}
								className={`bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col border-t-4 ${branch.borderColor}`}
							>
								<div className="p-6 flex-1 flex flex-col">
									<h3 className="text-xl font-bold text-[#7A1E2B] mb-4">{branch.name}</h3>

									<div className="space-y-4 flex-1">
										{/* Address */}
										<div className="flex gap-3">
											<MapPin className="w-5 h-5 text-[#F57C00] shrink-0 mt-0.5" />
											<p className="text-sm text-[#2B2B2B]/70 leading-relaxed">
												{branch.address}
											</p>
										</div>

										{/* Phone */}
										<div className="flex gap-3">
											<Phone className="w-5 h-5 text-[#F57C00] shrink-0 mt-0.5" />
											<div className="flex flex-col gap-1">
												{branch.phones.map((phone) => (
													<a
														key={phone}
														href={`tel:${phone.replace(/\s/g, "")}`}
														className="text-sm text-[#2B2B2B]/70 hover:text-[#F57C00] transition-colors"
													>
														{phone}
													</a>
												))}
											</div>
										</div>

										{/* Email */}
										<div className="flex gap-3">
											<Mail className="w-5 h-5 text-[#F57C00] shrink-0 mt-0.5" />
											<a
												href={`mailto:${branch.email}`}
												className="text-sm text-[#2B2B2B]/70 hover:text-[#F57C00] transition-colors break-all"
											>
												{branch.email}
											</a>
										</div>
									</div>

									<Link
										href={branch.link}
										title={`Visit ${branch.name} page`}
										className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#7A1E2B] hover:gap-3 transition-all group"
									>
										View Branch Details
										<ChevronRight className="w-4 h-4" />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Map Section */}
			<section className="py-16">
				<div className="container-custom">
					<div className="bg-secondary rounded-2xl overflow-hidden max-w-5xl mx-auto border border-gray-200">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3889.0336655408355!2d74.836626!3d12.9055568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35bce8a95d395%3A0x7e42cbb0e017092a!2sHarvard%20Institute%20Of%20Fire%20And%20Safety!5e0!3m2!1sen!2sin!4v1772983593055!5m2!1sen!2sin"
							width="100%"
							height="450"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Harvard Institute Map Location"
						></iframe>
					</div>
				</div>
			</section>
		</>
	);
}

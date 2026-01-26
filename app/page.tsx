import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle } from "lucide-react";
import { PAGE_METADATA, URLS, IMAGES, INSTITUTE_NAME } from "@/lib/config";

const courses = [
	{
		title: "Diploma in Construction and Industrial Safety.",
		category: "Specialized",
		description:
			"Specialized training addressing safety management in construction and infrastructure projects, including scaffolding, work-at-height safety, heavy equipment operations, and site risk control.",
		image: "/Harvard_images/Sessions/Sessions_2.webp",
	},
	{
		title: "Diploma in Industrial Safety.",
		category: "Professional",
		description:
			"A career-oriented program covering industrial safety management systems, hazard identification, accident prevention techniques, and compliance with national safety regulations.",
		image: "/Harvard_images/Training/Training_2.webp",
	},
	{
		title: "Diploma in Fire and Industrial Safety.",
		category: "Core Program",
		description:
			"A foundational program focused on fire science, industrial hazard control, emergency preparedness, and statutory safety practices across high-risk workplaces.",
		image: "/Harvard_images/Achievements/Achievements_2.webp",
	},
	{
		title: "Post Diploma in Fire & Industrial Safety Management.",
		category: "Essential",
		description:
			"An advanced management-level course emphasizing safety leadership, fire risk management, safety audits, incident investigation, and organizational safety culture development.",
		image: "/Harvard_images/Sessions/Sessions_3.webp",
	},
	{
		title: "Diploma in Industrial Safety Engineering.",
		category: "Professional",
		description:
			"An engineering-focused program covering safety system design, industrial process safety, loss prevention engineering, and application of safety standards in complex industrial operations.",
		image: "/Harvard_images/Training/Training_1.webp",
	},
];

const features = [
	{
		title: "Affiliated to Mangalore University",
		description:
			"Our programs are officially recognized and affiliated with Mangalore University, ensuring your diploma holds academic credibility and industry value.",
	},
	{
		title: "Approved by Government of Karnataka",
		description:
			"We operate with full government approval, meeting all regulatory standards and ensuring your education meets official safety training requirements.",
	},
	{
		title: "Practical Training Under Diploma Package",
		description:
			"Comprehensive hands-on training integrated into every diploma program, giving you real-world skills alongside theoretical knowledge.",
	},
	{
		title: "Construction Site Visits",
		description:
			"Regular visits to active construction sites provide firsthand exposure to safety protocols, risk management, and on-site safety practices.",
	},
	{
		title: "Industrial Visits & Workshops",
		description:
			"Interactive workshops and industrial facility tours connect you with industry professionals and expose you to diverse safety management systems.",
	},
	{
		title: "98% Students Successfully Placed",
		description:
			"Our strong industry connections and comprehensive career support help nearly all graduates secure rewarding positions in fire and safety management.",
	},
];

export const metadata: Metadata = {
	title: PAGE_METADATA.home.title,
	description: PAGE_METADATA.home.description,
	keywords: PAGE_METADATA.home.keywords,
	openGraph: {
		title: PAGE_METADATA.home.title,
		description: PAGE_METADATA.home.description,
		url: URLS.home,
		images: [
			{
				url: IMAGES.ogImage,
				width: 1200,
				height: 630,
				alt: `${INSTITUTE_NAME} Campus`,
			},
		],
	},
	alternates: {
		canonical: "/",
	},
};

export default function HomePage() {
	return (
		<>
			{/* SECTION 1: Centered Hero (Matching Reference Layout Exactly) */}
			<section className="py-20 md:py-10 bg-gradient-to-b from-white to-[#7A1E2B]/10">
				<div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
					{/* Main Heading */}
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2B2B2B] leading-tight mb-6">
						At the end of the day, our goals are simple:{" "}
						<span className="text-[#7A1E2B]">Quality Safety Training</span>
					</h1>

					{/* Description */}
					<p className="text-base md:text-lg text-[#2B2B2B]/70 leading-relaxed mb-3 max-w-3xl mx-auto">
						Leading institute in fire, industrial, safety, and risk education.
						Offering diploma programs with practical exposure through modern
						equipment, site visits, workshops, and industry training.
					</p>

					<p className="text-sm text-[#2B2B2B]/60 mb-10">
						Affiliation to Mangalore University | Approved by Government of
						Karnataka
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							asChild
							className="bg-[#2B2B2B] text-white hover:bg-[#2B2B2B]/90 rounded-xl px-10 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
						>
							<Link href="#courses">Explore Programs</Link>
						</Button>

						<Button
							asChild
							className="bg-[#7A1E2B] text-white hover:bg-[#7A1E2B]/90 rounded-xl px-10 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
						>
							<Link href="/certificate">Verify Certificate</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* SECTION 2: Bento-Box Card Grid (Exact Reference Layout Structure) */}
			<section className="pb-16 md:pb-20 bg-gradient-to-b from-[#7A1E2B]/10 to-white">
				<div className="w-full px-4 md:px-6 lg:px-8">
					{/* Custom Bento Grid Layout - Matching Reference Image Exactly */}
					<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-10 gap-4 md:gap-5 max-w-[1400px] mx-auto auto-rows-[160px]">
						{/* Card 1: "Be the reason a life is safe" - Top Left */}
						<div className="col-span-2 row-span-1 rounded-[28px] overflow-hidden shadow-lg relative group hover:shadow-2xl transition-all duration-300">
							<Image
								src="/Harvard_images/Achievements/Achievements_2.webp"
								alt="Fire Safety Training"
								fill
								className="object-cover group-hover:scale-105 transition-transform duration-500"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-[#7A1E2B]/80 via-[#7A1E2B]/30 to-transparent" />
							<div className="absolute bottom-6 left-6 text-white">
								<h3 className="text-xl md:text-2xl font-bold leading-tight">
									Be the
									<br />
									reason
									<br />a life is
									<br />
									safe
								</h3>
							</div>
						</div>

						{/* Card 2: "200+ Students trained" - Tall Card */}
						<div className="col-span-2 row-span-2 rounded-[28px] overflow-hidden shadow-lg relative group hover:shadow-2xl transition-all duration-300">
							<Image
								src="/Harvard_images/Sessions/Sessions_2.webp"
								alt="Training Sessions"
								fill
								className="object-cover group-hover:scale-105 transition-transform duration-500"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-[#8B4513]/90 via-[#8B4513]/40 to-transparent" />
							<div className="absolute bottom-8 left-6 text-white">
								<div className="text-5xl md:text-6xl font-bold mb-3">200+</div>
								<p className="text-sm md:text-base font-semibold leading-tight">
									Trained
									<br />
									students
									<br />
									empowering
									<br />
									safety
									<br />
									everyday
								</p>
							</div>
						</div>

						{/* Card 3: "Join 1000+ Safety Professionals" - Center CTA */}
						<div className="col-span-2 row-span-2 rounded-[28px] overflow-hidden shadow-lg relative group hover:shadow-2xl transition-all duration-300">
							<Image
								src="/hero-campus.webp"
								alt="Harvard Institute Campus"
								fill
								className="object-cover group-hover:scale-105 transition-transform duration-500"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-[#7A1E2B]/90 via-[#7A1E2B]/50 to-transparent" />
							<div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-center text-white">
								<h3 className="text-lg md:text-xl font-bold leading-tight">
									Join 1000
									<br />
									people
									<br />
									building a<br />
									better
									<br />
									tomorrow.
								</h3>
							</div>
						</div>

						{/* Card 4: "Inspire safety" - Image Card (Left end, top) */}
						<div className="col-span-2 row-span-1 rounded-[28px] overflow-hidden shadow-lg relative group hover:shadow-2xl transition-all duration-300">
							<Image
								src="/Harvard_images/Training/Training_2.webp"
								alt="Industrial Safety"
								fill
								className="object-cover group-hover:scale-105 transition-transform duration-500"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
							<div className="absolute bottom-6 left-6 text-white">
								<h3 className="text-xl md:text-2xl font-bold leading-tight">
									Inspire change,
									<br />
									Inspire education
								</h3>
							</div>
						</div>

						{/* Card 5: "ONE Institute" - Tall Card (Right of inspire cards) */}
						<div className="col-span-2 row-span-2 rounded-[28px] overflow-hidden shadow-lg relative hover:shadow-2xl transition-all duration-300 group">
							<Image
								src="/Harvard_images/Awards/Awards.webp"
								alt="Awards and Recognition"
								fill
								className="object-cover group-hover:scale-105 transition-transform duration-500"
							/>
							<div className="absolute inset-0 bg-gradient-to-br from-emerald-700/40 to-teal-800/40 backdrop-blur-md" />
							<div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-white">
								<div className="text-center space-y-2">
									<div className="text-5xl md:text-6xl font-bold drop-shadow-lg">
										ONE
									</div>
									<div className="text-base md:text-lg font-medium">
										Institute,
									</div>
									<div className="text-base md:text-lg font-medium">Safety</div>
									<div className="text-base md:text-lg font-medium">Career</div>
									<div className="text-7xl md:text-8xl opacity-20 mt-6">∫</div>
								</div>
							</div>
						</div>

						{/* Card 6: "95% Placement" - Bottom Left Stat */}
						<div className="col-span-2 row-span-1 rounded-[28px] bg-gradient-to-br from-emerald-600 to-teal-700 shadow-lg p-6 flex flex-col justify-center text-white hover:shadow-2xl transition-all duration-300">
							<div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
							<p className="text-xs md:text-sm font-medium leading-tight">
								Placement &<br />
								Career Support
							</p>
						</div>

						{/* Card 7: "Give the gift of safety" - Left end, bottom (under Inspire card) */}
						<div className="col-span-2 row-span-1 rounded-[28px] overflow-hidden shadow-lg relative group hover:shadow-2xl transition-all duration-300">
							<Image
								src="/Harvard_images/Sessions/Sessions_3.webp"
								alt="Safety Education"
								fill
								className="object-cover group-hover:scale-105 transition-transform duration-500"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
							<div className="absolute bottom-6 left-6 text-white">
								<p className="text-xl md:text-2xl font-bold leading-tight">
									Give the gift
									<br />
									of learning
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* What Students Learn */}
			<section className="py-8 bg-gradient-to-r from-[#7A1E2B] to-[#5a1620]">
				<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
					{/* Learning Areas */}
					<div className="flex flex-wrap items-center justify-center gap-3">
						{[
							"Fire Prevention & Protection",
							"Industrial Safety Management",
							"Fire Fighting Techniques",
							"Disaster & Emergency Response",
							"Occupational Health & Safety",
						].map((skill) => (
							<div
								key={skill}
								className="px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
							>
								<span className="text-xs md:text-sm font-semibold tracking-tight text-white">
									{skill}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Welcome / Introduction */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
					<div className="grid lg:grid-cols-[65%_35%] gap-12 items-center">
						{/* Left Content */}
						<div>
							{/* Pill */}
							<span className="inline-flex items-center rounded-full border border-[#7A1E2B]/20 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-[#7A1E2B] mb-6">
								WELCOME
							</span>

							{/* Heading */}
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#7A1E2B] leading-tight mb-6">
								Welcome to Harvard Institute of Fire and Safety Engineering
							</h2>

							{/* Subheading */}
							<p className="text-lg md:text-xl font-semibold text-[#2B2B2B] mb-6">
								At the end of the day, our goals are simple: Quality Safety
								Training.
							</p>

							{/* Description */}
							<p className="text-base md:text-lg text-[#2B2B2B]/70 leading-relaxed text-justify">
								Harvard Institute of Fire and Safety Engineering (HIFSE),
								headquartered in Mangalore, an internationally recognized center
								for educational excellence, is committed to delivering
								industry-relevant education in fire and industrial safety.
								Backed by experienced faculty and state-of-the-art
								infrastructure, the institute focuses on imparting modern
								technical knowledge and practical skills through advanced
								training, industrial and construction site visits, workshops,
								and hands-on learning. With technology-driven teaching
								methodologies and a strong focus on professional readiness,
								HIFSE empowers students to confidently take up challenging roles
								as safety officers, engineers, managers, and HSE professionals
								across India and abroad, contributing to safer workplaces and
								communities.
							</p>
						</div>

						{/* Right Image */}
						<div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
							<div className="relative w-full h-full md:p-8 lg:p-12">
								<Image
									src="/firefighter.png"
									alt="Professional Firefighter Safety Training"
									fill
									className="object-contain object-bottom md:mt-16"
									priority
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Courses Grid */}
			<section
				id="courses"
				className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white"
			>
				<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
					<div className="text-center mb-16">
						<span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#7A1E2B]/10 text-[#7A1E2B] mb-4">
							DIPLOMA PROGRAMS
						</span>
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#7A1E2B] mb-4">
							Our Diploma Programs
						</h2>
						<p className="text-base md:text-lg text-[#2B2B2B]/70 max-w-2xl mx-auto">
							Professional safety education programs designed for industry
							careers
						</p>
					</div>

					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
						{courses.map((course) => (
							<article
								key={course.title}
								className="group relative overflow-hidden rounded-2xl"
							>
								{/* Background Image */}
								<div className="relative aspect-[3/4] overflow-hidden">
									<Image
										src={course.image}
										alt={course.title}
										fill
										className="object-cover group-hover:scale-110 transition-transform duration-700"
									/>
									{/* Gradient Overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B] via-[#2B2B2B]/60 to-transparent" />
								</div>

								{/* Content Overlay */}
								<div className="absolute inset-0 p-4 flex flex-col justify-end">
									{/* Category Badge */}
									<div className="mb-2">
										<span className="inline-block px-2 py-1 rounded-full text-[10px] font-bold bg-[#F57C00] text-white backdrop-blur-sm">
											{course.category}
										</span>
									</div>

									{/* Title */}
									<h3 className="text-sm md:text-base font-bold text-white mb-2 leading-tight">
										{course.title}
									</h3>

									{/* Description */}
									<p className="text-white/90 text-xs leading-relaxed line-clamp-2 mb-2">
										{course.description}
									</p>

									{/* Arrow Icon */}
									<div className="flex items-center text-[#F57C00] font-semibold text-xs">
										<span>Learn More</span>
										<svg
											className="w-3 h-3 ml-1 group-hover:translate-x-2 transition-transform"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
					<div className="text-center max-w-2xl mx-auto mb-14">
						<span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#7A1E2B]/20 text-[#7A1E2B] mb-4">
							Why Choose Us
						</span>
						<h2 className="text-3xl md:text-4xl font-bold text-[#7A1E2B] mb-4">
							Your Success Is Our Priority
						</h2>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{features.map((feature) => (
							<div
								key={feature.title}
								className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
							>
								<div className="w-10 h-10 rounded-xl bg-[#7A1E2B]/10 flex items-center justify-center mb-4">
									<CheckCircle className="w-5 h-5 text-[#7A1E2B]" />
								</div>
								<h3 className="font-semibold text-[#2B2B2B] mb-2">
									{feature.title}
								</h3>
								<p className="text-[#2B2B2B]/70 text-sm">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Certificate Verification CTA */}
			<section className="py-16 bg-[#7A1E2B] text-white">
				<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row items-center justify-between gap-8">
						<div className="text-center md:text-left">
							<h2 className="text-2xl md:text-3xl font-bold mb-2">
								Verify Your Certificate
							</h2>
							<p className="text-white/90">
								Employers and institutions can verify the authenticity of
								certificates issued by our institute.
							</p>
						</div>
						<Button
							asChild
							size="lg"
							className="rounded-xl bg-white text-[#7A1E2B] hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transition-all px-8 py-6"
						>
							<Link
								href="/certificate"
								title="Go to Certificate Verification page"
							>
								<Award className="mr-2 w-5 h-5" />
								Verify Certificate
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-white">
				<div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-[#7A1E2B] mb-4">
						Our Mission
					</h2>
					<p className="text-[#2B2B2B]/70 max-w-2xl mx-auto mb-8 leading-relaxed">
						The mission of the College to provide innovative educational
						environments, opportunities, and experiences that enable individuals
						to develop the knowledge, skills, and attitudes necessary to achieve
						success and to make a positive impact in their communities.
					</p>
				</div>
			</section>
		</>
	);
}

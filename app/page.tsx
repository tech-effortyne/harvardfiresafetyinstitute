import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Award,
	CheckCircle,
	ArrowRight,
	Facebook,
	Instagram,
} from "lucide-react";
import { PAGE_METADATA, URLS, IMAGES, INSTITUTE_NAME } from "@/lib/config";

const courses = [
	{
		title: "Diploma in Fire and Industrial Safety.",
		category: "Core Program",
		description:
			"A foundational program focused on fire science, industrial hazard control, emergency preparedness, and statutory safety practices across high-risk workplaces.",
		image: "/Harvard_images/Training/Training_3.webp",
	},
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
			{/* Hero Section - Two Column Layout */}
			<section className="pt-12 md:pt-16 pb-24 bg-background">
				<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
					{/* Main Container */}
					<div className="grid lg:grid-cols-[60%_40%] rounded-[32px] overflow-hidden bg-muted">
						{/* Left Content */}
						<div className="bg-white p-8 md:p-14 lg:p-16 flex flex-col justify-center">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
								Harvard Institute of Fire and Safety Engineering
							</h1>
							<p className="text-sm md:text-base text-primary font-semibold mb-2">
								At the end of the day, our goals are simple: Quality Safety
								Training.
							</p>
							<p className="text-xs md:text-sm text-muted-foreground mb-4">
								Affiliation to Mangalore University | Approved by Government of
								Karnataka
							</p>

							<p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10">
								Leading institute in fire, industrial, safety, and risk
								education. Offering diploma programs with practical exposure
								through modern equipment, site visits, workshops, and industry
								training. Preparing students for professional safety careers
								globally.
							</p>

							<div className="flex flex-col gap-6">
								{/* Primary CTA */}
								<Button
									asChild
									className="bg-primary text-primary-foreground hover:bg-primary/90 
                       rounded-xl px-10 py-6 text-base font-semibold w-fit"
								>
									<Link href="/certificate">
										Verify Certificate
										<ArrowRight className="ml-2 w-5 h-5" />
									</Link>
								</Button>

								{/* Social Buttons */}
								<div className="flex gap-4">
									<Button
										variant="outline"
										className="
      group rounded-xl px-6 py-6 text-base border-border bg-white
      flex items-center gap-2
      transition-all duration-300 ease-out
      hover:-translate-y-0.5 hover:bg-primary/5 hover:border-primary/30
    "
									>
										<Facebook
											className="
        w-5 h-5 text-muted-foreground
        transition-colors duration-300
        group-hover:text-primary
      "
										/>
										<span
											className="
        text-muted-foreground
        transition-colors duration-300
        group-hover:text-primary
      "
										>
											Facebook
										</span>
									</Button>

									<Button
										variant="outline"
										className="
      group rounded-xl px-6 py-6 text-base border-border bg-white
      flex items-center gap-2
      transition-all duration-300 ease-out
      hover:-translate-y-0.5 hover:bg-primary/5 hover:border-primary/30
    "
									>
										<Instagram
											className="
        w-5 h-5 text-muted-foreground
        transition-colors duration-300
        group-hover:text-primary
      "
										/>
										<span
											className="
        text-muted-foreground
        transition-colors duration-300
        group-hover:text-primary
      "
										>
											Instagram
										</span>
									</Button>
								</div>
							</div>
						</div>

						{/* Right Visual Panel */}
						<div className="relative">
							<Image
								src="/hero-campus.webp"
								alt="Harvard Institute of Fire and Safety Engineering Campus"
								fill
								className="object-cover"
								priority
							/>
							{/* Overlay (optional, helps text contrast if needed later) */}
							<div className="absolute inset-0 bg-black/10" />
						</div>
					</div>
				</div>
			</section>

			{/* What Students Learn */}
			<section className="py-12 border-b border-border bg-primary/5">
				<div className="w-full px-4 md:px-6 lg:px-8">
					{/* Learning Areas */}
					<div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-80">
						{[
							"Fire Prevention & Protection",
							"Industrial Safety Management",
							"Fire Fighting Techniques",
							"Disaster & Emergency Response",
							"Occupational Health & Safety",
						].map((skill) => (
							<span
								key={skill}
								className="text-sm md:text-base font-semibold tracking-tight text-muted-foreground"
							>
								{skill}
							</span>
						))}
					</div>
				</div>
			</section>

			{/* Welcome / Introduction */}
			<section className="py-20 bg-background">
				<div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
					{/* Pill */}
					<span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground mb-6">
						WELCOME
					</span>

					{/* Heading */}
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6">
						Welcome to Harvard Institute of Fire and Safety Engineering
					</h2>

					{/* Subheading */}
					<p className="text-lg md:text-xl font-medium text-foreground mb-6">
						At the end of the day, our goals are simple: Quality Safety
						Training.
					</p>

					{/* Description */}
					<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
						Harvard Institute of Fire and Safety Engineering (HIFSE),
						headquartered in Mangalore—an internationally recognized center for
						educational excellence—is committed to delivering industry-relevant
						education in fire and industrial safety. Backed by experienced
						faculty and state-of-the-art infrastructure, the institute focuses
						on imparting modern technical knowledge and practical skills through
						advanced training, industrial and construction site visits,
						workshops, and hands-on learning. With technology-driven teaching
						methodologies and a strong focus on professional readiness, HIFSE
						empowers students to confidently take up challenging roles as safety
						officers, engineers, managers, and HSE professionals across India
						and abroad, contributing to safer workplaces and communities.
					</p>
				</div>
			</section>

			{/* Courses Grid */}
			<section className="pb-20 md:pb-28 bg-background">
				<div className="px-4 md:px-6 lg:px-8">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
						{courses.map((course) => (
							<article key={course.title} className="group">
								<div className="block">
									<div className="aspect-[4/3] mb-5 overflow-hidden rounded-xl bg-muted relative">
										<Image
											src={course.image}
											alt={course.title}
											fill
											className="object-cover group-hover:scale-105 transition-transform duration-500"
										/>
									</div>

									<span className="badge-category mb-3">{course.category}</span>

									<h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
										{course.title}
									</h3>

									<p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
										{course.description}
									</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="section-padding bg-muted">
				<div className="container-custom">
					<div className="text-center max-w-2xl mx-auto mb-14">
						<span className="badge-category mb-4">Why Choose Us</span>
						<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
							Your Success Is Our Priority
						</h2>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{features.map((feature) => (
							<div
								key={feature.title}
								className="bg-card rounded-xl p-6 border border-border/60"
							>
								<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
									<CheckCircle className="w-5 h-5 text-primary" />
								</div>
								<h3 className="font-semibold text-foreground mb-2">
									{feature.title}
								</h3>
								<p className="text-muted-foreground text-sm">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Certificate Verification CTA - Dark Green Background */}
			<section className="py-16 bg-primary text-primary-foreground">
				<div className="container-custom">
					<div className="flex flex-col md:flex-row items-center justify-between gap-8">
						<div className="text-center md:text-left">
							<h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
								Verify Your Certificate
							</h2>
							<p className="text-primary-foreground/90">
								Employers and institutions can verify the authenticity of
								certificates issued by our institute.
							</p>
						</div>
						<Button
							asChild
							size="lg"
							className="rounded-md bg-background text-foreground hover:bg-background/90 font-semibold"
						>
							<Link href="/certificate">
								<Award className="mr-2 w-5 h-5" />
								Verify Certificate
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="section-padding bg-background">
				<div className="container-custom text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
						Our Mission
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto mb-8">
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

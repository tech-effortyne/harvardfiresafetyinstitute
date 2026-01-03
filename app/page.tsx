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
import { PAGE_METADATA, URLS, IMAGES, INSTITUTE_NAME, TRUST_NAME, UNIVERSITY, STATE, ADDRESS } from "@/lib/config";

const courses = [
	{
		title: "Diploma in Fire & Safety",
		category: "Core Program",
		description:
			"Comprehensive training in fire prevention, firefighting techniques, and emergency response protocols.",
		image: "/Harvard_images/Training/Training_3.webp",
	},
	{
		title: "Advanced Fire Technology",
		category: "Specialized",
		description:
			"Advanced course covering fire detection systems, suppression technology, and risk assessment.",
		image: "/Harvard_images/Sessions/Sessions_2.webp",
	},
	{
		title: "Industrial Safety Management",
		category: "Professional",
		description:
			"Learn to manage safety protocols in industrial environments and manufacturing facilities.",
		image: "/Harvard_images/Training/Training_2.webp",
	},
	{
		title: "Occupational Health & Safety",
		category: "Essential",
		description:
			"Workplace safety, health hazard identification, and regulatory compliance training.",
		image: "/Harvard_images/Sessions/Sessions_3.webp",
	},
];

const features = [
	"Affiliated to Mangalore University",
	"Approved by Government of Karnataka",
	"Practical Training Under Diploma Package",
	"Fire Fighting/Fire Alarm System Training",
	"Construction Site Visits",
	"Industrial Visits & Workshops",
	"98% Students Successfully Placed",
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
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "EducationalOrganization",
		name: INSTITUTE_NAME,
		alternateName: TRUST_NAME,
		description: `${INSTITUTE_NAME} - A Unit of ${TRUST_NAME}. Affiliated to ${UNIVERSITY}, Approved by Government of ${STATE}.`,
		url: URLS.home,
		logo: IMAGES.logo,
		address: {
			"@type": "PostalAddress",
			addressLocality: ADDRESS.locality,
			addressRegion: ADDRESS.region,
			addressCountry: ADDRESS.country,
		},
		affiliation: {
			"@type": "Organization",
			name: UNIVERSITY,
		},
		educationalCredentialAwarded: "Diploma in Fire & Safety Engineering",
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "Fire Safety Courses",
			itemListElement: [
				{
					"@type": "Course",
					name: "Diploma in Fire & Safety",
					description:
						"Comprehensive training in fire prevention, firefighting techniques, and emergency response protocols.",
				},
				{
					"@type": "Course",
					name: "Advanced Fire Technology",
					description:
						"Advanced course covering fire detection systems, suppression technology, and risk assessment.",
				},
			],
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			{/* Hero Section - Two Column Layout */}
			<section className="pt-12 md:pt-16 pb-24 bg-background">
				<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
					{/* Main Container */}
					<div className="grid lg:grid-cols-[60%_40%] rounded-[32px] overflow-hidden bg-muted">
						{/* Left Content */}
						<div className="bg-white p-8 md:p-14 lg:p-16 flex flex-col justify-center">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
								Harvard Fire Safety Institute
							</h1>
							<p className="text-sm md:text-base text-primary font-semibold mb-2">
								A Unit of Pushpadeep Education Trust
							</p>
							<p className="text-xs md:text-sm text-muted-foreground mb-4">
								Affiliation to Mangalore University | Approved by Government of
								Karnataka
							</p>

							<p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10">
								Premier institution for fire, health, safety, and environmental
								education. Get practical training under diploma package with
								fire fighting/fire alarm systems, construction site visits,
								industrial visits, and workshops. 98% students successfully
								placed.
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
								alt="Harvard Fire Safety Institute Campus"
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
						Welcome to Harvard Fire Safety Institute
					</h2>

					{/* Subheading */}
					<p className="text-lg md:text-xl font-medium text-foreground mb-6">
						A Unit of Pushpadeep Education Trust
					</p>

					{/* Description */}
					<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
						Harvard Fire Safety Institute is a premier institution affiliated to
						Mangalore University and approved by Government of Karnataka. We
						offer comprehensive diploma programs with practical training
						including fire fighting/fire alarm systems, construction site
						visits, industrial visits, and workshops. With a remarkable 98%
						placement rate, we are committed to producing highly skilled
						professionals who contribute to building safer communities and
						workplaces across India.
					</p>
				</div>
			</section>

			{/* Courses Grid */}
			<section className="pb-20 md:pb-28 bg-background">
				<div className="px-4 md:px-6 lg:px-8">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
								key={feature}
								className="bg-card rounded-xl p-6 border border-border/60"
							>
								<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
									<CheckCircle className="w-5 h-5 text-primary" />
								</div>
								<h3 className="font-semibold text-foreground mb-2">
									{feature}
								</h3>
								<p className="text-muted-foreground text-sm">
									Ensuring the highest standards in safety education and career
									development.
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
						Ready to Start Your Career in Fire & Safety?
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto mb-8">
						Join thousands of successful alumni who have built rewarding careers
						in fire and safety management.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<Button
							size="lg"
							className="rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
						>
							Apply Now
							<ArrowRight className="ml-2 w-5 h-5" />
						</Button>
						<Button
							asChild
							size="lg"
							variant="outline"
							className="rounded-md border-border"
						>
							<Link href="/contact">Request Information</Link>
						</Button>
					</div>
				</div>
			</section>
		</>
	);
}
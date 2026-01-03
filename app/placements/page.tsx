import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, CheckCircle } from "lucide-react";
import { PAGE_METADATA, URLS } from "@/lib/config";

const stats = [
	{ id: "placement-rate", number: "98%", label: "Placement Rate" },
	{ id: "students-placed", number: "500+", label: "Students Placed Annually" },
	{ id: "partners", number: "50+", label: "Partner Companies" },
	{ id: "package", number: "₹4-12 LPA", label: "Average Package" },
];

const partners = [
	"Reliance Industries",
	"Tata Steel",
	"Larsen & Toubro",
	"ONGC",
	"Indian Oil Corporation",
	"GAIL India",
	"Bharat Petroleum",
	"Hindustan Petroleum",
	"Cairn India",
	"Vedanta Resources",
	"JSW Steel",
	"Adani Group",
];

const placementProcess = [
	{
		id: "resume-building",
		title: "Resume Building",
		description:
			"Professional guidance on creating impactful resumes that highlight your skills and training.",
	},
	{
		id: "interview-prep",
		title: "Interview Preparation",
		description:
			"Mock interviews and coaching sessions to prepare you for recruitment processes.",
	},
	{
		id: "industry-connect",
		title: "Industry Connect",
		description:
			"Regular campus recruitment drives and job fairs with leading companies.",
	},
	{
		id: "ongoing-support",
		title: "Ongoing Support",
		description: "Career counseling and job assistance even after graduation.",
	},
];

const successStories = [
	{
		id: "rahul-sharma",
		name: "Rahul Sharma",
		role: "Safety Officer",
		company: "Reliance Industries",
		quote:
			"The practical training at the institute prepared me well for my role. I got placed even before completing my course.",
	},
	{
		id: "priya-patel",
		name: "Priya Patel",
		role: "Fire Safety Engineer",
		company: "Larsen & Toubro",
		quote:
			"The faculty's industry experience and the institute's placement support were instrumental in my career success.",
	},
	{
		id: "mohammed-khan",
		name: "Mohammed Khan",
		role: "HSE Manager",
		company: "ONGC",
		quote:
			"From a fresher to a managerial position in 5 years - all thanks to the strong foundation I built here.",
	},
];

export const metadata: Metadata = {
	title: PAGE_METADATA.placements.title,
	description: PAGE_METADATA.placements.description,
	keywords: PAGE_METADATA.placements.keywords,
	openGraph: {
		title: PAGE_METADATA.placements.title,
		description: PAGE_METADATA.placements.description,
		url: URLS.placements,
	},
	alternates: {
		canonical: "/placements",
	},
};

export default function PlacementsPage() {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: PAGE_METADATA.placements.title,
		description: PAGE_METADATA.placements.description,
		url: URLS.placements,
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
							Career Success
						</span>
						<h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-6">
							Placements
						</h1>
						<p className="text-primary-foreground/90 text-lg leading-relaxed">
							With a 98% placement rate and partnerships with industry leaders,
							we ensure our graduates find rewarding careers in fire and safety
							management.
						</p>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="bg-gold py-12">
				<div className="container-custom">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{stats.map((item) => (
							<div key={item.id} className="text-center">
								<div className="font-heading text-3xl md:text-4xl font-bold text-navy-dark mb-2">
									{item.number}
								</div>
								<div className="text-navy-dark/80 text-sm md:text-base">
									{item.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Placement Support */}
			<section className="section-padding">
				<div className="container-custom">
					<div className="text-center max-w-2xl mx-auto mb-12">
						<span className="text-gold font-medium text-sm uppercase tracking-wider">
							Our Process
						</span>
						<h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
							Placement Support Process
						</h2>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{placementProcess.map((item, index) => (
							<Card key={item.id} className="text-center">
								<CardContent className="p-6">
									<div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
										<span className="font-heading text-xl font-bold text-primary">
											{index + 1}
										</span>
									</div>
									<h3 className="font-semibold text-foreground mb-2">
										{item.title}
									</h3>
									<p className="text-muted-foreground text-sm">
										{item.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Partner Companies */}
			<section className="section-padding bg-secondary">
				<div className="container-custom">
					<div className="text-center max-w-2xl mx-auto mb-12">
						<span className="text-gold font-medium text-sm uppercase tracking-wider">
							Our Recruiters
						</span>
						<h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
							Partner Organizations
						</h2>
						<p className="text-muted-foreground mt-4">
							Our graduates are recruited by leading companies across oil & gas,
							manufacturing, construction, and more.
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{partners.map((partner) => (
							<div
								key={partner}
								className="bg-card rounded-lg p-4 text-center border border-border hover:border-gold/50 transition-colors"
							>
								<Building2 className="w-8 h-8 text-gold mx-auto mb-2" />
								<span className="text-foreground font-medium text-sm">
									{partner}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Success Stories */}
			<section className="section-padding">
				<div className="container-custom">
					<div className="text-center max-w-2xl mx-auto mb-12">
						<span className="text-gold font-medium text-sm uppercase tracking-wider">
							Alumni Success
						</span>
						<h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
							Student Success Highlights
						</h2>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						{successStories.map((story) => (
							<Card key={story.id} className="border-border">
								<CardContent className="p-6">
									<div className="flex items-center gap-4 mb-4">
										<div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
											<Users className="w-6 h-6 text-primary-foreground" />
										</div>
										<div>
											<h3 className="font-semibold text-foreground">
												{story.name}
											</h3>
											<p className="text-gold text-sm">{story.role}</p>
											<p className="text-muted-foreground text-xs">
												{story.company}
											</p>
										</div>
									</div>
									<p className="text-muted-foreground italic">
										"{story.quote}"
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Sectors */}
			<section className="section-padding bg-primary">
				<div className="container-custom">
					<div className="text-center max-w-2xl mx-auto mb-12">
						<span className="text-gold font-medium text-sm uppercase tracking-wider">
							Career Paths
						</span>
						<h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-2">
							Industries Hiring Our Graduates
						</h2>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{[
							"Oil & Gas",
							"Manufacturing",
							"Construction",
							"Petrochemicals",
							"Mining",
							"Hospitality",
							"Healthcare",
							"Government Agencies",
						].map((sector) => (
							<div
								key={sector}
								className="bg-navy-light/50 rounded-lg p-4 flex items-center gap-3"
							>
								<CheckCircle className="w-5 h-5 text-gold shrink-0" />
								<span className="text-primary-foreground">{sector}</span>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

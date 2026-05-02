/**
 * Centralized configuration for URLs, emails, and metadata
 * Update values here to change them across the entire application
 */

// Base Configuration
export const BASE_URL = "https://harvardfiresafetyinstitute.com";
export const SITE_NAME = "Harvard Institute of Fire and Safety Engineering";
export const INSTITUTE_NAME =
	"Harvard Institute of Fire and Safety Engineering";
export const TRUST_NAME = "Pushpadeep Education Trust";
export const UNIVERSITY = "Mangalore University";
export const STATE = "Karnataka";
export const LOCATION = "Mangalore";

// Page URLs
export const URLS = {
	home: BASE_URL,
	certificate: `${BASE_URL}/certificate`,
	contact: `${BASE_URL}/contact`,
	sitemap: `${BASE_URL}/sitemap.xml`,
	branches: {
		mangalore: `${BASE_URL}/branches/mangalore`,
		tumakuru: `${BASE_URL}/branches/tumakuru`,
		raichur: `${BASE_URL}/branches/raichur`,
	},
} as const;

// Email Addresses
export const EMAILS = {
	info: "hifse.mangalore@gmail.com",
	admissions: "hifse.mangalore@gmail.com",
	mangalore: "hifse.mangalore@gmail.com",
	bangalore: "hifse.mangalore@gmail.com",
	mysore: "hifse.mangalore@gmail.com",
} as const;

// Phone Numbers
export const PHONE = {
	primary: "+91 9148028695",
	secondary: "+91 7022943300",
} as const;

// Address
export const ADDRESS = {
	main: "2nd Floor, Laxman Building, Opposite Honda Showroom, Near Amogha Shipping Agency, Kottara Chowki Junction, N H 66 Main Road, Kottara Chowki, Mangalore-575006, Karnataka",
	short: "2nd Floor, Laxman Building, Kottara Chowki, Mangalore-575006",
	locality: "Mangalore",
	region: "Karnataka",
	postalCode: "575006",
	country: "IN",
} as const;

// Common Metadata
export const METADATA = {
	defaultTitle: INSTITUTE_NAME,
	defaultDescription: `Harvard Fire & Safety Institute - Pushpadeep Education Trust. Affiliated to Mangalore University, Govt. Approved. 98% Placement Success. Practical Training & Industrial Visits.`,
	defaultKeywords: [
		"harvard institute of fire and safety engineering",
		"fire safety engineering",
		"fire safety institute",
		"mangalore university",
		"pushpadeep education trust",
		"fire fighting training",
		"industrial safety",
		"diploma in fire safety",
		"karnataka approved institute",
		"fire alarm system training",
		"construction site visit",
		"industrial visits",
		"workshops",
		"placement",
	].join(", "),
	openGraph: {
		siteName: SITE_NAME,
		locale: "en_IN",
		type: "website" as const,
	},
	twitter: {
		card: "summary_large_image" as const,
	},
	robots:
		"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
} as const;

// Images
export const IMAGES = {
	ogImage: `${BASE_URL}/Harvard_images/Sessions/Sessions_2.webp`,
	logo: "/Harvard_logo.svg",
	hero: "/hero-campus.webp",
} as const;

// Page-specific metadata
export const PAGE_METADATA = {
	home: {
		title: METADATA.defaultTitle,
		description: METADATA.defaultDescription,
		keywords: METADATA.defaultKeywords,
	},
	certificate: {
		title: `Certificate Verification | ${SITE_NAME}`,
		description: `Verify the authenticity of certificates issued by ${SITE_NAME}. Enter Serial Number and FS Number to verify certificate. Employers and institutions can confirm the validity of our graduates' credentials.`,
		keywords:
			"certificate verification, fire safety certificate, certificate check, verify diploma, harvard fire safety certificate verification, FS number verification",
	},
	contact: {
		title: `Contact Us | ${SITE_NAME}`,
		description: `Contact ${SITE_NAME}, ${LOCATION}. Get in touch for admissions, course information, and inquiries. A Unit of ${TRUST_NAME}, Affiliated to ${UNIVERSITY}.`,
		keywords:
			"contact harvard institute of fire and safety engineering, fire safety institute mangalore, admissions fire safety, fire safety course inquiry, pushpadeep education trust contact",
	},
	branches: {
		mangalore: {
			title: `Mangalore Branch | ${SITE_NAME}`,
			description: `${SITE_NAME} – Mangalore Branch. Diploma programs in Fire & Industrial Safety at Kottara Chowki, Mangalore. Approved by Govt. of Karnataka, affiliated to Mangalore University.`,
			keywords: "harvard institute mangalore branch, fire safety mangalore, diploma fire safety mangalore, industrial safety course mangalore, kottara chowki",
		},
		tumakuru: {
			title: `Tumakuru Branch | ${SITE_NAME}`,
			description: `${SITE_NAME} – Tumakuru Branch. Diploma programs in Fire & Industrial Safety at Kunigal Road, Tumakuru. Approved by Govt. of Karnataka, affiliated to Mangalore University.`,
			keywords: "harvard institute tumakuru branch, fire safety tumakuru, diploma fire safety tumakuru, industrial safety course tumakuru, kunigal road",
		},
		raichur: {
			title: `Raichur Branch | ${SITE_NAME}`,
			description: `${SITE_NAME} – Raichur Branch. Diploma programs in Fire & Industrial Safety at City Talkies Road, Raichur. Approved by Govt. of Karnataka, affiliated to Mangalore University.`,
			keywords: "harvard institute raichur branch, fire safety raichur, diploma fire safety raichur, industrial safety course raichur, city talkies road",
		},
	},
} as const;

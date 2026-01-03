/**
 * Centralized configuration for URLs, emails, and metadata
 * Update values here to change them across the entire application
 */

// Base Configuration
export const BASE_URL = "https://harvardfiresafetyinstitute.com";
export const SITE_NAME = "Harvard Fire Safety Institute";
export const INSTITUTE_NAME = "Harvard Fire Safety Institute";
export const TRUST_NAME = "Pushpadeep Education Trust";
export const UNIVERSITY = "Mangalore University";
export const STATE = "Karnataka";
export const LOCATION = "Mangalore";

// Page URLs
export const URLS = {
  home: BASE_URL,
  placements: `${BASE_URL}/placements`,
  branches: `${BASE_URL}/branches`,
  certificate: `${BASE_URL}/certificate`,
  contact: `${BASE_URL}/contact`,
  sitemap: `${BASE_URL}/sitemap.xml`,
} as const;

// Email Addresses
export const EMAILS = {
  info: "info@harvardfiresafetyinstitute.com",
  admissions: "admissions@harvardfiresafetyinstitute.com",
  mangalore: "mangalore@harvardfiresafetyinstitute.com",
  bangalore: "bangalore@harvardfiresafetyinstitute.com",
  mysore: "mysore@harvardfiresafetyinstitute.com",
} as const;

// Phone Numbers
export const PHONE = {
  primary: "+919876543210",
  secondary: "+919876543211",
  formatted: {
    primary: "+91 98765 43210",
    secondary: "+91 98765 43211",
  },
} as const;

// Address
export const ADDRESS = {
  main: "123 Safety Avenue, Industrial District, Adyar, Mangalore - 575001, Karnataka",
  short: "123 Safety Avenue, Mangalore - 575001",
  locality: "Mangalore",
  region: "Karnataka",
  postalCode: "575001",
  country: "IN",
} as const;

// Common Metadata
export const METADATA = {
  defaultTitle: `${INSTITUTE_NAME} | ${TRUST_NAME} | ${UNIVERSITY}`,
  defaultDescription: `${INSTITUTE_NAME} - A Unit of ${TRUST_NAME}. Affiliated to ${UNIVERSITY}, Approved by Government of ${STATE}. 98% Students Successfully Placed. Practical Training, Industrial Visits, Fire Fighting Systems.`,
  defaultKeywords: [
    "harvard fire safety institute",
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
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
} as const;

// Images
export const IMAGES = {
  ogImage: `${BASE_URL}/hero-campus.webp`,
  logo: `${BASE_URL}/placeholder.svg`,
  hero: "/hero-campus.webp",
} as const;

// Social Media (if you add links later)
export const SOCIAL = {
  facebook: "#",
  instagram: "#",
  linkedin: "#",
  twitter: "#",
} as const;

// Page-specific metadata
export const PAGE_METADATA = {
  home: {
    title: METADATA.defaultTitle,
    description: `${METADATA.defaultDescription} Practical Training, Industrial Visits, Fire Fighting Systems, Construction Site Visits.`,
    keywords: METADATA.defaultKeywords,
  },
  placements: {
    title: `Placements - 98% Students Successfully Placed | ${SITE_NAME}`,
    description: `98% Students Successfully Placed at ${SITE_NAME}. Get placement assistance, career guidance, and job opportunities in fire safety, industrial safety, and HSE management.`,
    keywords: "harvard fire safety placements, fire safety placements, industrial safety jobs, HSE manager jobs, fire safety career, placement assistance, job opportunities fire safety, karnataka fire safety jobs",
  },
  branches: {
    title: `Our Branches - ${SITE_NAME} | Mangalore, Bangalore, Mysore`,
    description: `${SITE_NAME} branches across Karnataka. Main campus in Mangalore with additional branches in Bangalore and Mysore. Visit our campuses for admissions and information.`,
    keywords: "harvard fire safety institute branches, fire safety mangalore, fire safety bangalore, fire safety mysore, karnataka fire safety institute locations",
  },
  certificate: {
    title: `Certificate Verification - ${SITE_NAME}`,
    description: `Verify the authenticity of certificates issued by ${SITE_NAME}. Enter Serial Number and FS Number to verify certificate. Employers and institutions can confirm the validity of our graduates' credentials.`,
    keywords: "certificate verification, fire safety certificate, certificate check, verify diploma, harvard fire safety certificate verification, FS number verification",
  },
  contact: {
    title: `Contact Us - ${SITE_NAME} | ${LOCATION}`,
    description: `Contact ${SITE_NAME}, ${LOCATION}. Get in touch for admissions, course information, and inquiries. A Unit of ${TRUST_NAME}, Affiliated to ${UNIVERSITY}.`,
    keywords: "contact harvard fire safety institute, fire safety institute mangalore, admissions fire safety, fire safety course inquiry, pushpadeep education trust contact",
  },
} as const;


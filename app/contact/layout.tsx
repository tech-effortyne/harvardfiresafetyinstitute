import type { Metadata } from "next";
import { PAGE_METADATA, URLS, INSTITUTE_NAME, ADDRESS, PHONE, EMAILS, IMAGES } from "@/lib/config";

export const metadata: Metadata = {
  title: PAGE_METADATA.contact.title,
  description: PAGE_METADATA.contact.description,
  keywords: PAGE_METADATA.contact.keywords,
  openGraph: {
    title: PAGE_METADATA.contact.title,
    description: PAGE_METADATA.contact.description,
    url: URLS.contact,
    images: [
      {
        url: IMAGES.ogImage,
        width: 1200,
        height: 630,
        alt: `${INSTITUTE_NAME} Contact`,
      },
    ],
  },
  alternates: {
    canonical: "/contact",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: PAGE_METADATA.contact.title,
  description: PAGE_METADATA.contact.description,
  url: URLS.contact,
  mainEntity: {
    "@type": "Organization",
    name: INSTITUTE_NAME,
    logo: IMAGES.logo,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.main,
      addressLocality: ADDRESS.locality,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    telephone: PHONE.primary,
    email: EMAILS.info,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PHONE.primary,
        contactType: "General Inquiry",
        email: EMAILS.info,
      },
      {
        "@type": "ContactPoint",
        telephone: PHONE.secondary,
        contactType: "Admissions",
        email: EMAILS.admissions,
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}

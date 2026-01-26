import type { Metadata } from "next";
import { PAGE_METADATA, URLS, INSTITUTE_NAME, IMAGES } from "@/lib/config";

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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

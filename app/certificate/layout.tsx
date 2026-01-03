import type { Metadata } from "next";
import { PAGE_METADATA, URLS } from "@/lib/config";

export const metadata: Metadata = {
  title: PAGE_METADATA.certificate.title,
  description: PAGE_METADATA.certificate.description,
  keywords: PAGE_METADATA.certificate.keywords,
  openGraph: {
    title: PAGE_METADATA.certificate.title,
    description: PAGE_METADATA.certificate.description,
    url: URLS.certificate,
  },
  alternates: {
    canonical: "/certificate",
  },
};

export default function CertificateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


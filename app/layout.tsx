import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ReactQueryProvider } from "./providers";
import {
	BASE_URL,
	INSTITUTE_NAME,
	TRUST_NAME,
	UNIVERSITY,
	STATE,
	METADATA,
	IMAGES,
	URLS,
} from "@/lib/config";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: METADATA.defaultTitle,
  description: METADATA.defaultDescription,
  keywords: METADATA.defaultKeywords,
  authors: [{ name: INSTITUTE_NAME }],
  robots: METADATA.robots,
  openGraph: {
    ...METADATA.openGraph,
    url: URLS.home,
    title: `${INSTITUTE_NAME} | ${TRUST_NAME}`,
    description: METADATA.defaultDescription,
    images: [
      {
        url: IMAGES.ogImage,
        width: 1200,
        height: 630,
        alt: `${INSTITUTE_NAME} Campus`,
      },
    ],
  },
  twitter: {
    ...METADATA.twitter,
    title: `${INSTITUTE_NAME} | ${TRUST_NAME}`,
    description: METADATA.defaultDescription,
    images: [IMAGES.ogImage],
  },
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className={`${dmSans.variable} font-body antialiased`}>
        <ReactQueryProvider>
          <TooltipProvider>
            <Layout>
              {children}
            </Layout>
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import StructuredData from "@/components/structured-data";
import FloatingContact from "@/components/floating-contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://delexllc.com'),
  title: {
    default: "Delex LLC - Professional Trucking Services NJ to FL | 20+ Years Experience",
    template: "%s | Delex LLC - East Coast Freight Solutions"
  },
  description: "Professional trucking company serving NJ, DE, PA, and FL for 20+ years. Dry van, refrigerated freight, FTL & LTL services. 100% on-time delivery. Family-owned. Call (302) 507-2525 for instant quote.",
  keywords: [
    // Primary Keywords
    "trucking company New Jersey", "freight services Delaware", "NJ to Florida shipping", "East Coast trucking",
    // Service Keywords
    "dry van transportation", "refrigerated freight services", "FTL freight services", "LTL shipping", "partial truckload",
    // Location Keywords
    "Wilmington DE trucking", "Cinnaminson NJ freight", "I-95 corridor shipping", "Port Newark logistics",
    // Long-tail Keywords
    "family owned trucking company", "reliable freight delivery NJ", "on-time trucking services", "professional freight transport",
    "refrigerated truck services NJ to FL", "temperature controlled shipping East Coast"
  ],
  authors: [{ name: "Delex LLC", url: "https://delexllc.com" }],
  creator: "Delex LLC",
  publisher: "Delex LLC",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://delexllc.com",
    siteName: "Delex LLC",
    title: "Delex LLC - Professional Trucking Services | NJ, DE, PA, FL",
    description: "20+ years of reliable freight services. Dry van & refrigerated transport. 100% on-time delivery guarantee. Serving the East Coast from New Jersey to Florida.",
    images: [
      {
        url: "/images/main.jpg",
        width: 1200,
        height: 630,
        alt: "Delex LLC Professional Trucking Fleet - East Coast Freight Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delex LLC - Professional Trucking Services | East Coast Freight",
    description: "20+ years of reliable freight services. 100% on-time delivery. Call (302) 507-2525",
    images: ["/images/main.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://delexllc.com",
  },
  category: 'Transportation & Logistics',
  classification: 'Trucking Company, Freight Services, Logistics Provider',
  other: {
    'contact:phone_number': '(302) 507-2525',
    'contact:email': 'info@delexllc.com',
    'geo.region': 'US-NJ;US-DE;US-PA;US-FL',
    'geo.placename': 'Wilmington;Cinnaminson',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Delex LLC - Family-Owned Trucking Services | East Coast Freight Solutions",
    template: "%s | Delex LLC"
  },
  description: "With over 20 years of experience, Delex LLC is a family-owned trucking company providing reliable freight services along the East Coast. Get competitive rates, on-time delivery, and professional service for all your shipping needs from New Jersey to Florida.",
  keywords: ["trucking services", "freight transport", "East Coast shipping", "family-owned trucking", "New Jersey to Florida freight", "dry van transport", "refrigerated freight", "I-95 corridor shipping", "reliable freight delivery"],
  authors: [{ name: "Delex LLC" }],
  creator: "Delex LLC",
  publisher: "Delex LLC",
  openGraph: {
    title: "Delex LLC - Family-Owned Trucking Services",
    description: "Over 20 years of professional freight services along the East Coast with reliable, on-time delivery you can trust.",
    type: "website",
    locale: "en_US",
    siteName: "Delex LLC",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Transportation & Logistics',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

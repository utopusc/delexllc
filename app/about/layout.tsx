import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us - Family-Owned Trucking Company | 20+ Years Experience",
  description: "Learn about Delex LLC, a family-owned trucking company serving the East Coast for over 20 years. Based in Wilmington, DE and Cinnaminson, NJ. Our commitment to reliability, professionalism, and on-time delivery sets us apart.",
  keywords: [
    "family owned trucking company", "trucking company history", "Delaware trucking company", "New Jersey freight company",
    "professional trucking services", "reliable freight carrier", "East Coast logistics company", "trucking company values",
    "Wilmington DE trucking", "Cinnaminson NJ trucking"
  ],
  openGraph: {
    title: "About Delex LLC - Family-Owned Trucking Excellence Since 2004",
    description: "20+ years of professional freight services. Family values, modern fleet, 100% on-time delivery. Serving NJ, DE, PA, and FL.",
    url: "https://delexllc.com/about",
    images: [
      {
        url: "/images/5.jpeg",
        width: 1200,
        height: 630,
        alt: "Delex LLC Team and Fleet - Professional Trucking Operations",
      },
    ],
  },
  alternates: {
    canonical: "https://delexllc.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - Get Freight Quote | (302) 507-2525",
  description: "Contact Delex LLC for reliable trucking services. Call (302) 507-2525 or email info@delexllc.com. Offices in Wilmington, DE and Cinnaminson, NJ. 24/7 customer support. Get instant freight quote.",
  keywords: [
    "contact trucking company", "freight quote", "trucking company phone number", "Delaware trucking contact",
    "New Jersey freight services", "trucking quote request", "freight rate quote", "(302) 507-2525",
    "24/7 trucking support", "freight customer service"
  ],
  openGraph: {
    title: "Contact Delex LLC - Call (302) 507-2525 for Freight Quote",
    description: "24/7 customer support. Offices in Wilmington, DE & Cinnaminson, NJ. Fast response, competitive rates. Email: info@delexllc.com",
    url: "https://delexllc.com/contact",
    images: [
      {
        url: "/images/main.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Delex LLC for Professional Trucking Services",
      },
    ],
  },
  alternates: {
    canonical: "https://delexllc.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

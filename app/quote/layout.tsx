import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Get Free Freight Quote - Instant Trucking Rate | Delex LLC",
  description: "Get your free freight quote instantly! Professional trucking services from NJ to FL. Competitive rates, transparent pricing, no hidden fees. Dry van & refrigerated freight. Call (302) 507-2525 or request online quote 24/7.",
  keywords: [
    "free freight quote", "trucking rate quote", "instant freight quote", "shipping quote calculator",
    "trucking price estimate", "freight cost estimate", "free trucking quote", "LTL quote", "FTL quote",
    "refrigerated freight quote", "dry van quote", "NJ to FL freight quote"
  ],
  openGraph: {
    title: "Free Freight Quote - Get Competitive Trucking Rates Today",
    description: "Request your free freight quote. Fast response, transparent pricing, no obligations. Serving the East Coast for 20+ years.",
    url: "https://delexllc.com/quote",
    images: [
      {
        url: "/images/main.jpg",
        width: 1200,
        height: 630,
        alt: "Get Free Freight Quote from Delex LLC",
      },
    ],
  },
  alternates: {
    canonical: "https://delexllc.com/quote",
  },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

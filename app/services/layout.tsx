import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Trucking Services - Dry Van, Refrigerated Freight, FTL & LTL",
  description: "Professional trucking services including dry van transportation, refrigerated freight, full truckload (FTL), and less-than-truckload (LTL) shipping. Temperature-controlled transport from NJ to FL. 24/7 service, real-time tracking.",
  keywords: [
    "dry van services", "refrigerated trucking", "temperature controlled freight", "FTL trucking services", "LTL shipping",
    "full truckload shipping", "partial truckload", "53 foot trailers", "reefer trucking", "cold chain logistics",
    "pharmaceutical shipping", "perishable goods transport", "East Coast freight services"
  ],
  openGraph: {
    title: "Professional Trucking Services | Dry Van, Refrigerated, FTL & LTL",
    description: "Complete freight solutions: dry van, refrigerated transport, full & partial loads. 20+ years serving the East Coast. Real-time tracking & 24/7 support.",
    url: "https://delexllc.com/services",
    images: [
      {
        url: "/images/2.jpeg",
        width: 1200,
        height: 630,
        alt: "Delex LLC Trucking Services - Dry Van and Refrigerated Freight",
      },
    ],
  },
  alternates: {
    canonical: "https://delexllc.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

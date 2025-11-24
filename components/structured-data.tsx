import Script from 'next/script';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "MovingCompany"],
    "@id": "https://delexllc.com/#organization",
    "name": "Delex LLC",
    "legalName": "Delex LLC",
    "url": "https://delexllc.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://delexllc.com/images/main.jpg",
      "width": 1200,
      "height": 630
    },
    "image": "https://delexllc.com/images/main.jpg",
    "description": "Professional trucking company serving the East Coast with 20+ years of experience. Specializing in dry van, refrigerated freight, FTL and LTL services from New Jersey to Florida.",
    "foundingDate": "2004",
    "founder": {
      "@type": "Person",
      "name": "Delex Family"
    },
    "slogan": "Professional Trucking Services You Can Trust",
    "telephone": "+1-302-507-2525",
    "email": "info@delexllc.com",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Wilmington",
        "addressLocality": "Wilmington",
        "addressRegion": "DE",
        "postalCode": "19801",
        "addressCountry": "US"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Cinnaminson",
        "addressLocality": "Cinnaminson",
        "addressRegion": "NJ",
        "postalCode": "08077",
        "addressCountry": "US"
      }
    ],
    "areaServed": [
      {
        "@type": "State",
        "name": "New Jersey"
      },
      {
        "@type": "State",
        "name": "Delaware"
      },
      {
        "@type": "State",
        "name": "Pennsylvania"
      },
      {
        "@type": "State",
        "name": "Maryland"
      },
      {
        "@type": "State",
        "name": "Virginia"
      },
      {
        "@type": "State",
        "name": "North Carolina"
      },
      {
        "@type": "State",
        "name": "South Carolina"
      },
      {
        "@type": "State",
        "name": "Georgia"
      },
      {
        "@type": "State",
        "name": "Florida"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/delexllc",
      "https://www.linkedin.com/company/delexllc"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Invoice"],
    "openingHours": "Mo-Su 00:00-24:00",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Trucking Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dry Van Transportation",
            "description": "Reliable dry van trucking services for general freight across the East Coast"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Refrigerated Freight",
            "description": "Temperature-controlled shipping for perishable goods"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "FTL Services",
            "description": "Full Truckload shipping for large shipments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LTL Services",
            "description": "Less Than Truckload shipping for smaller freight"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://delexllc.com/#service",
    "serviceType": "Freight Transportation",
    "provider": {
      "@id": "https://delexllc.com/#organization"
    },
    "areaServed": {
      "@type": "GeoShape",
      "name": "East Coast United States",
      "description": "Serving from New Jersey to Florida along the I-95 corridor"
    },
    "category": "Trucking and Logistics",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://delexllc.com",
      "servicePhone": {
        "@type": "ContactPoint",
        "telephone": "+1-302-507-2525",
        "contactType": "Customer Service",
        "areaServed": "US",
        "availableLanguage": ["English"]
      }
    },
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://delexllc.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://delexllc.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": "https://delexllc.com/about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://delexllc.com/contact"
      }
    ]
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
    </>
  );
}

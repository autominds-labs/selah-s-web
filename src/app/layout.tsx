// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Selah's Dry Cleaners & Laundry | Ntinda & Kisaasi, Kampala | Pickup & Delivery",
  description:
    "Premium dry cleaning and laundry service in Ntinda and Kisaasi, Kampala. Door-to-door pickup & delivery, 24-hour turnaround, expert pressing. Book instantly on WhatsApp.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Selah's Dry Cleaners & Laundry — Ntinda · Kisaasi, Kampala",
    description:
      "Premium laundry & dry cleaning with pickup & delivery in Ntinda–Kisaasi. 24-hour turnaround, crisp finishing, live WhatsApp updates. Book in seconds.",
    type: "website",
  },
};

const JSONLD_LOCALBUSINESS = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://selahs.co.ug/#business",
  name: "Selah's Dry Cleaners & Laundry",
  description:
    "Premium dry cleaning and laundry service in Ntinda and Kisaasi, Kampala. Door-to-door pickup and delivery, 24-hour turnaround, expert pressing and ironing.",
  url: "https://selahs.co.ug/",
  telephone: "+256700000000",
  priceRange: "UGX",
  currenciesAccepted: "UGX",
  paymentAccepted: "Cash, Mobile Money",
  image: "https://selahs.co.ug/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ntinda",
    addressRegion: "Kampala",
    addressCountry: "UG",
  },
  geo: { "@type": "GeoCoordinates", latitude: "0.3476", longitude: "32.6217" },
  areaServed: [
    { "@type": "Place", name: "Ntinda, Kampala" },
    { "@type": "Place", name: "Kisaasi, Kampala" },
    { "@type": "Place", name: "Kampala, Uganda" },
  ],
  serviceType: [
    "Dry Cleaning",
    "Laundry",
    "Wash and Fold",
    "Pressing and Ironing",
    "Pickup and Delivery",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+256700000000",
    contactType: "customer service",
    contactOption: "WhatsApp",
    availableLanguage: ["English", "Luganda"],
  },
};

const JSONLD_FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you offer free pickup and delivery in Ntinda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Selah's offers door-to-door pickup and delivery across Ntinda and Kisaasi, Kampala. Book via WhatsApp in seconds.",
      },
    },
    {
      "@type": "Question",
      name: "How long does laundry take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a 24-hour turnaround for most laundry and dry cleaning orders in Kampala.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a pickup with Selah's?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simply WhatsApp us on 0700 000 000 or use the Book Pickup button on our website. We'll arrange collection at a time that suits you.",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD_LOCALBUSINESS) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD_FAQ) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
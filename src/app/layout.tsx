// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://selahs.co.ug";
const BUSINESS_NAME = "Selah's Dry Cleaners & Laundry";
const BUSINESS_PHONE = "+256707455964";
const WHATSAPP_DISPLAY = "0707 455 964";

const LOGO_URL = "/images/hero/logo.jpeg";
const OG_IMAGE_URL = "/images/hero/hero-visual.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Selah's Dry Cleaners & Laundry | Laundry Pickup & Delivery in Kampala",
    template: `%s | ${BUSINESS_NAME}`,
  },

  description:
    "Book premium laundry, dry cleaning, ironing, pressing, curtains, bedding, suits, gowns, and garment care in Ntinda, Kisaasi, and Kampala. Pickup and delivery available through WhatsApp.",

  keywords: [
    "Selah's Dry Cleaners",
    "Selah's Laundry",
    "dry cleaning Kampala",
    "laundry service Kampala",
    "laundry pickup Kampala",
    "laundry delivery Kampala",
    "dry cleaners Ntinda",
    "laundry Kisaasi",
    "wash and fold Kampala",
    "curtain cleaning Kampala",
    "suit dry cleaning Kampala",
    "wedding gown dry cleaning Kampala",
    "ironing service Kampala",
    "premium laundry Uganda",
  ],

  authors: [{ name: BUSINESS_NAME }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  applicationName: BUSINESS_NAME,
  category: "Laundry and Dry Cleaning",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title: "Selah's Dry Cleaners & Laundry — Premium Garment Care in Kampala",
    description:
      "Premium laundry, dry cleaning, ironing, pressing, curtains, bedding, suits, gowns, and pickup delivery for homes, professionals, families, and businesses across Ntinda, Kisaasi, and Kampala.",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    locale: "en_UG",
    type: "website",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Fresh folded laundry from Selah's Dry Cleaners & Laundry",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Selah's Dry Cleaners & Laundry | Kampala",
    description:
      "Premium laundry and dry cleaning pickup and delivery across Ntinda, Kisaasi, and Kampala.",
    images: [OG_IMAGE_URL],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: LOGO_URL,
        type: "image/jpeg",
      },
    ],
    shortcut: "/favicon.ico",
    apple: LOGO_URL,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#e8fbff",
  colorScheme: "light",
};

const JSONLD_LOCALBUSINESS = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS_NAME,
  description:
    "Premium dry cleaning and laundry service in Ntinda and Kisaasi, Kampala. Door-to-door pickup and delivery, expert garment care, ironing, pressing, curtain care, suits, dresses, gowns, bedding, and business laundry support.",
  url: SITE_URL,
  telephone: BUSINESS_PHONE,
  priceRange: "UGX",
  currenciesAccepted: "UGX",
  paymentAccepted: "Cash, Mobile Money",
  image: `${SITE_URL}${OG_IMAGE_URL}`,
  logo: `${SITE_URL}${LOGO_URL}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kampala",
    addressRegion: "Central Region",
    addressCountry: "UG",
  },
  areaServed: [
    { "@type": "Place", name: "Ntinda, Kampala" },
    { "@type": "Place", name: "Kisaasi, Kampala" },
    { "@type": "Place", name: "Kampala, Uganda" },
  ],
  serviceType: [
    "Dry Cleaning",
    "Laundry",
    "Wash and Fold",
    "Ironing",
    "Garment Pressing",
    "Curtain Cleaning",
    "Suit Cleaning",
    "Wedding Gown Cleaning",
    "Bedding Laundry",
    "Pickup and Delivery Laundry",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: BUSINESS_PHONE,
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
      name: "Do you offer laundry pickup and delivery in Ntinda and Kisaasi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Selah's Dry Cleaners & Laundry offers door-to-door pickup and delivery across Ntinda, Kisaasi, and selected areas of Kampala.",
      },
    },
    {
      "@type": "Question",
      name: "What laundry and dry cleaning services do you handle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Selah's handles everyday laundry, dry cleaning, ironing, pressing, suits, dresses, wedding gowns, curtains, bedding, uniforms, and business laundry support.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a pickup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `You can book through WhatsApp on ${WHATSAPP_DISPLAY} or use the booking button on the website. The team will confirm your pickup time and order details.`,
      },
    },
    {
      "@type": "Question",
      name: "Do you serve homes, professionals, and businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Selah's serves individuals, busy professionals, families, salons, offices, guesthouses, Airbnb hosts, and businesses that need reliable garment and fabric care.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-UG">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href={LOGO_URL} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSONLD_LOCALBUSINESS),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSONLD_FAQ),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
"use client";

import { CONTACT } from "@/lib/utils";

const BOOKING_MESSAGE = "Hello Selah's, I would like to book a laundry pickup.";

function cleanUgandaWhatsappNumber(phone: string) {
  const digits = phone.replace(/\D/g, "");

  if (digits.startsWith("256")) return digits;
  if (digits.startsWith("0")) return `256${digits.slice(1)}`;

  return `256${digits}`;
}

export default function MobileCTA() {
  const whatsappNumber = cleanUgandaWhatsappNumber(
    CONTACT?.whatsapp || "0707455964"
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    BOOKING_MESSAGE
  )}`;

  return (
    <div className="mobile-cta-bar" aria-label="Quick mobile actions">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Selah's on WhatsApp"
        className="mobile-cta-btn mobile-cta-whatsapp"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="white"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.01 0C5.39 0 .01 5.38.01 12c0 2.1.55 4.16 1.6 5.98L0 24l6.2-1.6A11.94 11.94 0 0 0 12.01 24C18.63 24 24 18.62 24 12c0-3.2-1.25-6.2-3.48-8.52ZM12.01 22a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.68.95.98-3.58-.23-.37A9.9 9.9 0 1 1 22 12a9.98 9.98 0 0 1-9.99 10Zm5.77-7.42c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.52-.16-.74.16-.22.32-.85 1.05-1.04 1.26-.19.21-.39.24-.7.08-.32-.16-1.36-.5-2.58-1.6-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.22-.32.33-.53.11-.21.05-.4-.03-.56-.08-.16-.74-1.78-1.02-2.44-.27-.65-.55-.56-.74-.57h-.63c-.22 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.68 0 1.58 1.16 3.11 1.32 3.33.16.22 2.28 3.47 5.52 4.86.77.33 1.37.52 1.84.67.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.54.27-.76.27-1.4.19-1.54-.08-.14-.3-.22-.62-.38Z" />
        </svg>
        WhatsApp Us
      </a>

      <a href="#book" className="mobile-cta-btn mobile-cta-book">
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 7h11v10H3V7Zm11 3h4l3 3v4h-7v-7Z"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
          <circle cx="19" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
        </svg>
        Book Pickup
      </a>
    </div>
  );
}
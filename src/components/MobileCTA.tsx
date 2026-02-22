"use client";

import Link from "next/link";
import { CONTACT } from "@/lib/utils";

export default function MobileCTA() {
  const wa = `https://wa.me/256${CONTACT.whatsapp.replace(/^0/, "")}`;

  return (
    <div
      className="
        mobile-cta-bar
        fixed bottom-0 inset-x-0 z-40
        flex items-center gap-2.5 px-4 py-3
        md:hidden
      "
    >
      {/* WhatsApp */}
      <a
        href={wa}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          flex-1 flex items-center justify-center gap-2
          h-12 rounded-xl
          bg-[#25D366] text-white
          font-bold text-sm
          shadow-[0_8px_24px_rgba(37,211,102,0.28)]
          active:scale-[0.97] transition
        "
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.01 0C5.39 0 .01 5.38.01 12c0 2.1.55 4.16 1.6 5.98L0 24l6.2-1.6A11.94 11.94 0 0 0 12.01 24C18.63 24 24 18.62 24 12c0-3.2-1.25-6.2-3.48-8.52ZM12.01 22a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.68.95.98-3.58-.23-.37A9.9 9.9 0 1 1 22 12a9.98 9.98 0 0 1-9.99 10Zm5.77-7.42c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.52-.16-.74.16-.22.32-.85 1.05-1.04 1.26-.19.21-.39.24-.7.08-.32-.16-1.36-.5-2.58-1.6-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.22-.32.33-.53.11-.21.05-.4-.03-.56-.08-.16-.74-1.78-1.02-2.44-.27-.65-.55-.56-.74-.57h-.63c-.22 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.68 0 1.58 1.16 3.11 1.32 3.33.16.22 2.28 3.47 5.52 4.86.77.33 1.37.52 1.84.67.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.54.27-.76.27-1.4.19-1.54-.08-.14-.3-.22-.62-.38Z"/>
        </svg>
        WhatsApp Us
      </a>

      {/* Book Pickup */}
      <Link
        href="/book"
        className="
          flex-1 flex items-center justify-center gap-2
          h-12 rounded-xl
          btn-primary text-[rgb(6_12_18)]
          font-bold text-sm
          active:scale-[0.97] transition
        "
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 7h11v10H3V7Zm11 3h4l3 3v4h-7v-7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="19" cy="18" r="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
        Book Pickup
      </Link>
    </div>
  );
}

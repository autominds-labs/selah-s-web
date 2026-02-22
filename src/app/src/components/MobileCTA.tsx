"use client";

import Link from "next/link";
import { CONTACT } from "@/lib/utils";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-3 left-0 right-0 z-50 md:hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-3 gap-2 rounded-3xl p-2 glass border border-white/10">
          <Link href="/book" className="btn btn-primary !rounded-2xl !py-3">Book</Link>
          <a
            href={`https://wa.me/256${CONTACT.whatsapp.replace(/^0/,"")}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost !rounded-2xl !py-3"
          >
            WhatsApp
          </a>
          <Link href="/track" className="btn btn-ghost !rounded-2xl !py-3">Track</Link>
        </div>
      </div>
    </div>
  );
}

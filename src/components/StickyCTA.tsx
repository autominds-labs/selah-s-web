"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CONTACT } from "@/lib/utils";

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 420);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 hidden md:block">
      <div className="mx-auto max-w-6xl px-4">
        <div className="glass rounded-[2.2rem] px-4 py-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-sm font-semibold text-white truncate">
              Book pickup in seconds — Ntinda–Kisaasi
            </div>
            <div className="text-xs subtle truncate">
              Fast WhatsApp confirmation • Transparent pricing • Order tracking
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link href="/book" className="btn btn-primary !py-2.5">
              Book Pickup
            </Link>
            <a
              href={`https://wa.me/256${CONTACT.whatsapp.replace(/^0/, "")}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost !py-2.5"
            >
              WhatsApp
            </a>
            <Link href="/track" className="btn btn-ghost !py-2.5">
              Track
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

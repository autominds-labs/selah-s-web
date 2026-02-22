"use client";

import Link from "next/link";
import Image from "next/image";
import { CONTACT, SOCIALS } from "@/lib/utils";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        {/* cleaner placement: no mt-3, tight professional bar */}
        <div className="mt-3 rounded-3xl glass">
          <div className="flex items-center justify-between px-5 py-3">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 min-w-0">
              {/* Bigger, more visible logo */}
              <div className="relative h-12 w-12 md:h-14 md:w-14 shrink-0 overflow-hidden rounded-2xl bg-white/10 border border-white/15">
                {/* Put your logo at /public/logo.png */}
                <Image
                  src="/logo.png"
                  alt="Selah's Laundry & Dry Cleaners"
                  fill
                  priority
                  className="object-contain p-1"
                />
              </div>

              {/* Strictly horizontal text */}
              <div className="min-w-0">
                <div className="flex items-baseline gap-2 whitespace-nowrap">
                  <span className="text-base md:text-lg font-semibold leading-none">
                    Selah&apos;s
                  </span>
                  <span className="text-xs md:text-sm subtle leading-none">
                    Laundry &amp; Dry Cleaners
                  </span>
                </div>

                {/* Optional small line (remove if you want it even cleaner) */}
                <div className="mt-1 text-[11px] md:text-xs subtle truncate">
                  {CONTACT.location}
                </div>
              </div>
            </Link>

            {/* Desktop nav (keep it clean, no crowding) */}
            <nav className="hidden md:flex items-center gap-2">
              <Link className="btn btn-ghost" href="/pricing">
                Pricing
              </Link>
              <Link className="btn btn-ghost" href="/track">
                Track
              </Link>

              <a
                className="btn btn-ghost"
                href={`https://wa.me/256${CONTACT.whatsapp.replace(/^0/, "")}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>

              <a
                className="btn btn-ghost"
                href={SOCIALS.instagram}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>

              {/* CTA last (most important) */}
              <Link className="btn btn-primary" href="/book">
                Book Pickup
              </Link>
            </nav>

            {/* Mobile (simple, no clutter) */}
            <div className="md:hidden">
              <Link className="btn btn-primary" href="/book">
                Book
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

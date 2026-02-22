"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT } from "@/lib/utils";

const FEATURES = [
  {
    title: "Pickup & Delivery",
    body: "Door-to-door convenience in Ntinda–Kisaasi. Book in seconds via WhatsApp or online.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M3 7h11v10H3V7Zm11 3h4l3 3v4h-7v-7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    body: "Clear pricing with itemised add-ons. No hidden charges, no surprises at collection.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M7 7h10M7 11h10M7 15h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
  },
  {
    title: "Premium Finishing",
    body: "Every item is quality-checked with a crisp press — your clothes leave looking their best.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M7 21h10M8 21V8l4-5 4 5v13" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M9.5 12h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "WhatsApp Updates",
    body: "Instant confirmations, progress updates, and delivery alerts — right in your chat.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M21 12a8.5 8.5 0 0 1-12.9 7.3L3 21l1.8-5.1A8.5 8.5 0 1 1 21 12Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M8.5 12.2c1.2 2.1 3.2 3.5 5.6 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function WhySelahs() {
  const wa = `https://wa.me/256${CONTACT.whatsapp.replace(/^0/, "")}`;

  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.14 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref as any}
      className={[
        "mt-12 md:mt-16",
        "transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      ].join(" ")}
    >
      <p className="section-label">Why Selah&apos;s</p>

      <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-white max-w-xl">
          Premium laundry that&apos;s modern, fast, and reliable.
        </h2>

        <a
          href={wa}
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex items-center gap-2 self-start md:self-auto
            rounded-full border border-white/15 bg-white/[0.06]
            px-4 py-2 text-sm font-semibold text-white
            backdrop-blur hover:bg-white/[0.10] hover:border-white/25
            transition
          "
        >
          <span className="wa-dot h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
          WhatsApp: {CONTACT.whatsapp}
        </a>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            className="feature-card group"
            style={{
              transitionDelay: visible ? `${i * 75}ms` : "0ms",
              opacity: visible ? 1 : 0,
            }}
          >
            {/* brand glow on hover */}
            <div className="feature-card-glow" />

            <div className="flex items-start gap-4">
              {/* icon box */}
              <div
                className="
                  grid place-items-center flex-shrink-0
                  h-11 w-11 rounded-xl
                  border border-white/15 bg-white/[0.06]
                  text-[rgba(var(--brand),0.9)]
                "
              >
                {f.icon}
              </div>

              <div className="min-w-0">
                <div className="font-semibold text-white leading-tight">{f.title}</div>
                <p className="mt-1 text-sm text-white/70 leading-snug">{f.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HeroRotator() {
  const visualRef = useRef<HTMLDivElement | null>(null);
  const [imgOffset, setImgOffset] = useState(0);

  // ✅ Ensure hero is visible (and still reveal other sections later)
  useEffect(() => {
    const els = document.querySelectorAll(".rv, .rv-l, .rv-r");
    els.forEach((el) => el.classList.add("in")); // force show immediately

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Parallax (super light)
  useEffect(() => {
    const onScroll = () => {
      if (!visualRef.current) return;
      const rect = visualRef.current.getBoundingClientRect();
      const vh = window.innerHeight || 800;

      const progress = 1 - Math.min(Math.max(rect.top / vh, 0), 1);
      const y = -4 + progress * 12; // -4px to +8px (keeps image edges covered)
      setImgOffset(y);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero" id="home">
      {/* LEFT */}
      <div className="rv-l">
        <div className="hero-eyebrow">
          <span className="live" />
          NOW ACCEPTING ORDERS
        </div>

        <h1 className="hero-title">
          Premium care <br />
          for <em>every garment</em>, <br />
          every time.
        </h1>

        <p className="hero-sub">
          Door-to-door laundry &amp; dry cleaning in Ntinda–Kisaasi. Crisp
          finishing, fast turnaround, live WhatsApp updates.
        </p>

        <div className="hero-cta">
          <Link href="/book" className="btn btn-turq">
            Book Pickup
          </Link>
          <Link href="/#services" className="btn btn-outline">
            View Services
          </Link>
        </div>

        <div className="trust-row">
          <div className="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M20 7L10 17l-5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Fast 24hr turnaround
          </div>

          <span className="tsep" />

          <div className="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M20 7L10 17l-5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Pickup &amp; delivery service
          </div>

          <span className="tsep" />

          <div className="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 17.3l-6.2 3.7 1.7-7.1L2 9.2l7.3-.6L12 2l2.7 6.6 7.3.6-5.5 4.7 1.7 7.1L12 17.3Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            4.9 ★ rating
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div ref={visualRef} className="hero-visual rv-r">
        {/* ✅ YOUR IMAGE (make sure filename is EXACTLY hero-visual.jpg) */}
        <img
          className="hero-visual-img"
          src="/images/hero/hero-visual.jpg"
          alt="Fresh laundry with water splash"
          draggable={false}
          onError={() => {
            console.error("Image not found: /images/hero/hero-visual.jpg");
          }}
          style={{
            transform: `translateY(${imgOffset}px) scale(1.05)`,
            transition: "transform 120ms linear",
          }}
        />

        {/* Glass tint overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "radial-gradient(ellipse 80% 70% at 30% 30%, rgba(255,255,255,.22) 0%, transparent 70%), linear-gradient(to bottom, rgba(255,255,255,.10), rgba(255,255,255,.06))",
            pointerEvents: "none",
          }}
        />

        {/* Floating cards */}
        <div className="fcard fc1" style={{ zIndex: 3 }}>
          <span className="fcard-icon">⏱</span>
          Ready in 24 hrs
        </div>

        <div className="fcard fc3" style={{ zIndex: 3 }}>
          <span className="fcard-icon">★</span>
          4.9 Rating
        </div>

        <div className="fcard fc2" style={{ zIndex: 3 }}>
          <span className="fcard-icon">🚚</span>
          Pickup &amp; Delivery
        </div>
      </div>
    </section>
  );
}

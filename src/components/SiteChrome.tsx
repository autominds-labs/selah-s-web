"use client";

import { useEffect, useMemo, useState } from "react";

const WHATSAPP_E164 = "256700000000"; // change later
const WHATSAPP_DISPLAY = "0700 000 000"; // change later

export default function SiteChrome() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  const links = useMemo(
    () => [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "Pricing", href: "#pricing" },
      { label: "Track Order", href: "#track" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // Reveal animations (your IntersectionObserver)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".rv,.rv-l,.rv-r").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const closeDrawer = () => setDrawerOpen(false);
  const openDrawer = () => setDrawerOpen(true);

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        style={{
          position: "absolute",
          top: "-100px",
          left: "1rem",
          zIndex: 9999,
          padding: ".5rem 1rem",
          background: "var(--blue)",
          color: "#fff",
          borderRadius: ".5rem",
          fontWeight: 700,
          transition: "top .2s",
        }}
        onFocus={(e) => ((e.currentTarget.style.top as any) = "1rem")}
        onBlur={(e) => ((e.currentTarget.style.top as any) = "-100px")}
      >
        Skip to main content
      </a>

      {/* NAV */}
      <nav className={`nav ${solid ? "solid" : ""}`} aria-label="Main navigation" role="navigation">
        <a href="#home" aria-label="Selah's Home">
          <div className="logo">
            <div className="logo-name">
              <span className="ls">S</span>elah&apos;s
            </div>
            <div className="logo-tag">Dry Cleaners &amp; Laundry</div>
          </div>
        </a>

        <div className="nav-space" />

        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <a href="#book" className="nav-cta">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
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

        <button
          className={`hamburger ${drawerOpen ? "open" : ""}`}
          aria-label="Menu"
          onClick={drawerOpen ? closeDrawer : openDrawer}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </nav>

      {/* DRAWER */}
      <div className={`drawer ${drawerOpen ? "open" : ""}`} aria-hidden={!drawerOpen}>
        <div className="drawer-bg" onClick={closeDrawer} />
        <div className="drawer-panel">
          <div className="drawer-top">
            <div className="logo" style={{ ["--ln" as any]: "1.28rem", ["--lt" as any]: ".43rem" }}>
              <div className="logo-name">
                <span className="ls">S</span>elah&apos;s
              </div>
              <div className="logo-tag">Dry Cleaners &amp; Laundry</div>
            </div>
            <button className="drawer-close" onClick={closeDrawer} aria-label="Close menu">
              ✕
            </button>
          </div>

          <nav className="drawer-nav">
            {links.map((l, idx) => (
              <a
                key={l.href}
                href={l.href}
                className={`dl ${idx === 0 ? "act" : ""}`}
                onClick={closeDrawer}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="drawer-foot">
            <a href="#book" onClick={closeDrawer}>
              Book Pickup Now
            </a>
            <p>Ntinda · Kisaasi, Kampala</p>
          </div>
        </div>
      </div>

      {/* WA floating bubble */}
      <a
        href={`https://wa.me/${WHATSAPP_E164}`}
        target="_blank"
        className="wa-fab"
        aria-label="Chat on WhatsApp"
        rel="noreferrer"
      >
        <svg width="25" height="25" viewBox="0 0 24 24" fill="white">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.01 0C5.39 0 .01 5.38.01 12c0 2.1.55 4.16 1.6 5.98L0 24l6.2-1.6A11.94 11.94 0 0 0 12.01 24C18.63 24 24 18.62 24 12c0-3.2-1.25-6.2-3.48-8.52Z" />
        </svg>
      </a>

      {/* Mobile bar */}
      <div className="mob-bar">
        <a
          href={`https://wa.me/${WHATSAPP_E164}`}
          target="_blank"
          className="btn mob-wa"
          rel="noreferrer"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.01 0C5.39 0 .01 5.38.01 12c0 2.1.55 4.16 1.6 5.98L0 24l6.2-1.6A11.94 11.94 0 0 0 12.01 24C18.63 24 24 18.62 24 12c0-3.2-1.25-6.2-3.48-8.52Z" />
          </svg>
          WhatsApp
        </a>
        <a href="#book" className="btn btn-turq">
          Book Pickup
        </a>
      </div>

      {/* WhatsApp chip number (for Why section) */}
      <style>{`:root{--waDisplay:"${WHATSAPP_DISPLAY}";}`}</style>
    </>
  );
}
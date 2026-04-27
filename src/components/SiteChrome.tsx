"use client";

import { useEffect, useMemo, useState } from "react";

const WHATSAPP_E164 = "256707455964";
const BOOKING_MESSAGE =
  "Hello Selah's Dry Cleaning, I would like to book a laundry pickup.";

const WHATSAPP_BOOKING_URL = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(
  BOOKING_MESSAGE
)}`;

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
    const onScroll = () => setSolid(window.scrollY > 24);

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

  useEffect(() => {
    const elements = document.querySelectorAll(".rv,.rv-l,.rv-r");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("in");
          io.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  const closeDrawer = () => setDrawerOpen(false);
  const toggleDrawer = () => setDrawerOpen((value) => !value);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <nav
        className={`nav ${solid ? "solid" : ""}`}
        aria-label="Main navigation"
      >
        <a href="#home" aria-label="Go to Selah's homepage" className="nav-logo-link">
          <div className="logo">
            <div className="logo-name">
              <span className="ls">S</span>elah&apos;s
            </div>
            <div className="logo-tag">Dry Cleaners &amp; Laundry</div>
          </div>
        </a>

        <div className="nav-space" />

        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a href="#book" className="nav-cta">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
          type="button"
          className={`hamburger ${drawerOpen ? "open" : ""}`}
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          aria-expanded={drawerOpen}
          onClick={toggleDrawer}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </nav>

      <div className={`drawer ${drawerOpen ? "open" : ""}`} aria-hidden={!drawerOpen}>
        <button
          type="button"
          className="drawer-bg"
          aria-label="Close menu overlay"
          onClick={closeDrawer}
        />

        <aside className="drawer-panel" aria-label="Mobile navigation menu">
          <div className="drawer-top">
            <div
              className="logo"
              style={
                {
                  "--ln": "1.28rem",
                  "--lt": ".43rem",
                } as React.CSSProperties
              }
            >
              <div className="logo-name">
                <span className="ls">S</span>elah&apos;s
              </div>
              <div className="logo-tag">Dry Cleaners &amp; Laundry</div>
            </div>

            <button
              type="button"
              className="drawer-close"
              onClick={closeDrawer}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav className="drawer-nav" aria-label="Mobile links">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`dl ${index === 0 ? "act" : ""}`}
                onClick={closeDrawer}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="drawer-foot">
            <a href="#book" onClick={closeDrawer}>
              Book Pickup Now
            </a>
            <p>Ntinda · Kisaasi · Kampala</p>
          </div>
        </aside>
      </div>

      <a
        href={WHATSAPP_BOOKING_URL}
        target="_blank"
        className="wa-fab"
        aria-label="Chat with Selah's on WhatsApp"
        rel="noreferrer"
      >
        <svg width="25" height="25" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.01 0C5.39 0 .01 5.38.01 12c0 2.1.55 4.16 1.6 5.98L0 24l6.2-1.6A11.94 11.94 0 0 0 12.01 24C18.63 24 24 18.62 24 12c0-3.2-1.25-6.2-3.48-8.52Z" />
        </svg>
      </a>

      <div className="mob-bar">
        <a
          href={WHATSAPP_BOOKING_URL}
          target="_blank"
          className="btn mob-wa"
          rel="noreferrer"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.01 0C5.39 0 .01 5.38.01 12c0 2.1.55 4.16 1.6 5.98L0 24l6.2-1.6A11.94 11.94 0 0 0 12.01 24C18.63 24 24 18.62 24 12c0-3.2-1.25-6.2-3.48-8.52Z" />
          </svg>
          WhatsApp
        </a>

        <a href="#book" className="btn btn-turq">
          Book Pickup
        </a>
      </div>
    </>
  );
}
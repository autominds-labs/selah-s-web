"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const WHATSAPP_E164 = "256707455964";

const LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Track Order", href: "/#track" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");

  const bookingUrl = useMemo(() => {
    const msg = "Hello Selah's, I would like to book a laundry pickup.";
    return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(msg)}`;
  }, []);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash || "#home");

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeDrawer = () => setOpen(false);
  const toggleDrawer = () => setOpen((current) => !current);

  const isActive = (href: string) => {
    if (pathname !== "/") return false;

    const targetHash = href.startsWith("/#") ? href.slice(1) : "#home";
    return (hash || "#home") === targetHash;
  };

  return (
    <>
      <nav
        className={`nav ${solid ? "solid" : ""}`}
        id="nav"
        aria-label="Main navigation"
      >
        <Link href="/#home" aria-label="Go to Selah's homepage" className="nav-logo-link">
          <div className="logo">
            <div className="logo-name">
              <span className="ls">S</span>elah&apos;s
            </div>
            <div className="logo-tag">Dry Cleaners &amp; Laundry</div>
          </div>
        </Link>

        <div className="nav-space" />

        <div className="nav-links">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a href={bookingUrl} target="_blank" rel="noreferrer" className="nav-cta">
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
          className={`hamburger ${open ? "open" : ""}`}
          id="ham"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="drawer"
          onClick={toggleDrawer}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </nav>

      <div className={`drawer ${open ? "open" : ""}`} id="drawer" aria-hidden={!open}>
        <button
          type="button"
          className="drawer-bg"
          id="dbg"
          onClick={closeDrawer}
          aria-label="Close menu overlay"
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
              id="dclose"
              onClick={closeDrawer}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav className="drawer-nav" aria-label="Mobile navigation">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`dl ${isActive(link.href) ? "act" : ""}`}
                onClick={closeDrawer}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="drawer-foot">
            <a href={bookingUrl} target="_blank" rel="noreferrer" onClick={closeDrawer}>
              Book Pickup Now
            </a>
            <p>Ntinda · Kisaasi · Kampala</p>
          </div>
        </aside>
      </div>
    </>
  );
}
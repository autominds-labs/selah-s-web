"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  // Make navbar solid on scroll (matches your HTML: nav.classList.toggle('solid', scrollY>30))
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track hash for active link styles
  useEffect(() => {
    const onHash = () => setHash(window.location.hash || "");
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Lock body scroll when drawer open (matches your HTML)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeDrawer = () => setOpen(false);
  const openDrawer = () => setOpen(true);

  const isActive = (href: string) => {
    // Only treat active on home route
    if (pathname !== "/") return false;

    // href like "/#services" -> "#services"
    const targetHash = href.startsWith("/#") ? href.slice(1) : "";
    const current = hash || "#home";

    // If no hash in URL, Home is active
    if (!hash && targetHash === "#home") return true;

    return current === targetHash;
  };

  return (
    <>
      {/* NAVBAR — uses your HTML classes */}
      <nav className={`nav ${solid ? "solid" : ""}`} id="nav" aria-label="Main navigation" role="navigation">
        <Link href="/#home" aria-label="Selah's Home">
          <div className="logo">
            <div className="logo-name">
              <span className="ls">S</span>elah&apos;s
            </div>
            <div className="logo-tag">Dry Cleaners &amp; Laundry</div>
          </div>
        </Link>

        <div className="nav-space" />

        <div className="nav-links">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>

        <Link href="/#book" className="nav-cta">
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
        </Link>

        <button
          className={`hamburger ${open ? "open" : ""}`}
          id="ham"
          aria-label="Menu"
          aria-expanded={open}
          onClick={open ? closeDrawer : openDrawer}
          type="button"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </nav>

      {/* DRAWER — uses your HTML classes */}
      <div className={`drawer ${open ? "open" : ""}`} id="drawer">
        <div className="drawer-bg" id="dbg" onClick={closeDrawer} aria-hidden="true" />

        <div className="drawer-panel" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="drawer-top">
            <div className="logo" style={{ ["--ln" as any]: "1.28rem", ["--lt" as any]: ".43rem" }}>
              <div className="logo-name">
                <span className="ls">S</span>elah&apos;s
              </div>
              <div className="logo-tag">Dry Cleaners &amp; Laundry</div>
            </div>

            <button className="drawer-close" id="dclose" onClick={closeDrawer} type="button" aria-label="Close menu">
              ✕
            </button>
          </div>

          <nav className="drawer-nav">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`dl ${isActive(l.href) ? "act" : ""}`}
                onClick={closeDrawer}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="drawer-foot">
            <Link href="/#book" onClick={closeDrawer}>
              Book Pickup Now
            </Link>
            <p>Ntinda · Kisaasi, Kampala</p>
          </div>
        </div>
      </div>
    </>
  );
}
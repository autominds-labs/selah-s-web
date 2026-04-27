"use client";

import { useEffect } from "react";

const WHATSAPP_E164 = "256707455964";

const BOOKING_URL = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(
  "Hello Selah's, I would like to book a laundry pickup."
)}`;

export default function HeroRotator() {
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

  return (
    <section className="selah-hero" id="home">
      <div className="selah-hero-inner">
        <div className="selah-hero-copy rv-l">
          <div className="hero-eyebrow">
            <span className="live" />
            Now accepting laundry pickups
          </div>

          <h1 className="selah-hero-title">
            Laundry care
            <br />
            <em>without leaving your door.</em>
          </h1>

          <p className="selah-hero-sub">
            Selah&apos;s handles laundry, dry cleaning, ironing, curtains,
            bedding, and garment care across Ntinda and Kisaasi — with pickup,
            delivery, and clear WhatsApp updates.
          </p>

          <div className="hero-cta">
            <a
              href={BOOKING_URL}
              target="_blank"
              className="btn btn-turq"
              rel="noreferrer"
            >
              Book Pickup
            </a>

            <a href="#services" className="btn btn-outline">
              View Services
            </a>
          </div>

          <div className="selah-hero-metrics">
            <div>
              <strong>24 hr</strong>
              <span>Fast turnaround</span>
            </div>
            <div>
              <strong>Doorstep</strong>
              <span>Pickup &amp; delivery</span>
            </div>
            <div>
              <strong>4.9 ★</strong>
              <span>Client experience</span>
            </div>
          </div>
        </div>

        <div className="selah-hero-visual rv-r">
          <div className="selah-visual-card">
            <img
              src="/images/hero/hero-visual.jpg"
              alt="Fresh folded laundry with clean water splash"
              className="selah-main-photo"
              draggable={false}
            />

            <div className="selah-service-pill pill-one">
              <span>🧺</span>
              <div>
                <strong>Pickup booked</strong>
                <small>We collect from your door</small>
              </div>
            </div>

            <div className="selah-service-pill pill-two">
              <span>✨</span>
              <div>
                <strong>Premium cleaned</strong>
                <small>Sorted, washed, pressed</small>
              </div>
            </div>

            <div className="selah-service-pill pill-three">
              <span>🚚</span>
              <div>
                <strong>Delivered fresh</strong>
                <small>Ready to wear</small>
              </div>
            </div>
          </div>

          <div className="selah-photo-strip">
            <img src="/images/hero/2.jpg" alt="Premium suit dry cleaning" />
            <img src="/images/hero/4.jpg" alt="Dry cleaned shirt" />
            <img src="/images/hero/5.jpg" alt="Curtain cleaning service" />
          </div>
        </div>
      </div>
    </section>
  );
}
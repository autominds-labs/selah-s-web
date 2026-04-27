// src/app/page.tsx
import SiteChrome from "@/components/SiteChrome";
import PricingSection from "@/components/PricingSection";

const WHATSAPP_E164 = "256707455964";
const WHATSAPP_DISPLAY = "0707 455 964";
const PHONE_TEL = "+256707455964";

const BOOKING_MESSAGE =
  "Hello Selah's Dry Cleaning, I would like to book a laundry pickup.";

const TRACK_MESSAGE =
  "Hello Selah's Dry Cleaning, I would like to track my laundry order.";

const stats = [
  { n: "500+", l: "Garments & Orders Handled" },
  { n: "4.9 ★", l: "Customer Experience Rating" },
  { n: "24 hr", l: "Fast Turnaround Available" },
  { n: "100%", l: "Care-Focused Service" },
];

const services = [
  {
    word: "Laundry",
    badge: "Wash & Fold",
    img: "/images/hero/3.jpg",
    text: "Everyday clothes cleaned, dried, folded, and packed neatly so your week feels lighter from the moment they return.",
  },
  {
    word: "Dry Clean",
    badge: "Premium Dry Cleaning",
    img: "/images/hero/4.jpg",
    text: "Suits, dresses, special wear, and delicate garments handled with careful cleaning, finishing, and fabric-aware treatment.",
  },
  {
    word: "Pressing",
    badge: "Ironing & Pressing",
    img: "/images/hero/2.jpg",
    text: "Crisp, sharp finishing for shirts, trousers, dresses, uniforms, and workwear so you always step out polished.",
  },
  {
    word: "Pickup",
    badge: "Doorstep Pickup & Delivery",
    img: "/images/hero/hero-visual.jpg",
    text: "Book from your phone, we collect from your location, clean professionally, and deliver back fresh and ready.",
  },
  {
    word: "Home",
    badge: "Curtains & Bedding",
    img: "/images/hero/5.jpg",
    text: "Freshen up curtains, bedsheets, duvets, pillowcases, and home fabrics with reliable cleaning and careful handling.",
  },
  {
    word: "Business",
    badge: "Business Laundry Support",
    img: "/images/hero/1.jpg",
    text: "Reliable laundry support for offices, salons, guesthouses, Airbnb hosts, teams, and client-facing businesses.",
  },
];

const steps = [
  {
    n: "01",
    h: "Book your pickup",
    p: "Send us a WhatsApp message or call us directly. We confirm the items, location, and pickup time.",
  },
  {
    n: "02",
    h: "We collect",
    p: "Our team picks up your garments from your home, office, apartment, guesthouse, or business location.",
  },
  {
    n: "03",
    h: "We clean & finish",
    p: "Your items are sorted, cleaned, pressed, checked, packed, and prepared with professional care.",
  },
  {
    n: "04",
    h: "We deliver back",
    p: "Fresh, clean, neatly finished clothes are delivered back to you with clear communication from start to finish.",
  },
];

const whyItems = [
  {
    h: "Built for busy clients",
    p: "No unnecessary movement, no long waiting, no guesswork. Selah’s is designed for people who want laundry handled quickly and properly.",
  },
  {
    h: "Professional garment care",
    p: "From daily laundry to delicate pieces, we treat every item with the right level of care, finishing, and attention.",
  },
  {
    h: "Clear communication",
    p: "Book, confirm, and follow up directly on WhatsApp or call us when you need quick support.",
  },
  {
    h: "Reliable local coverage",
    p: "Serving Ntinda, Kisaasi, and selected Kampala areas with pickup and delivery built around your schedule.",
  },
];

const clientTypes = [
  { title: "Busy professionals", img: "/images/hero/2.jpg" },
  { title: "Families & households", img: "/images/hero/1.jpg" },
  { title: "Students & apartment residents", img: "/images/hero/3.jpg" },
  { title: "Offices & teams", img: "/images/hero/4.jpg" },
  { title: "Airbnb & guesthouse hosts", img: "/images/hero/5.jpg" },
  {
    title: "Salons, boutiques & service businesses",
    img: "/images/hero/hero-visual.jpg",
  },
];

const reviews = [
  {
    q: "Pickup was smooth, communication was clear, and the clothes came back fresh and neatly finished.",
    name: "Ntinda Customer",
    role: "Regular laundry client",
  },
  {
    q: "The pressing was sharp and professional. I loved how easy it was to book everything through WhatsApp.",
    name: "Kisaasi Customer",
    role: "Weekly customer",
  },
  {
    q: "This saved me time. They collected, cleaned, and delivered without stress. Very reliable service.",
    name: "Busy Professional",
    role: "Verified customer",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteChrome />

      <main id="main-content">
        {/* HERO */}
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
                bedding, and garment care across Ntinda and Kisaasi — with
                pickup, delivery, WhatsApp booking, and direct call support.
              </p>

              <div className="hero-cta">
                <a
                  href={`https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(
                    BOOKING_MESSAGE
                  )}`}
                  target="_blank"
                  className="btn btn-turq"
                  rel="noreferrer"
                >
                  Book Pickup
                </a>

                <a href={`tel:${PHONE_TEL}`} className="btn btn-outline">
                  Call Now
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
                  <strong>{WHATSAPP_DISPLAY}</strong>
                  <span>Call or WhatsApp</span>
                </div>
              </div>
            </div>

            <div className="selah-hero-visual rv-r">
              <div className="selah-visual-card">
                <img
                  src="/images/hero/hero-visual.jpg"
                  alt="Fresh folded laundry with clean water splash"
                  className="selah-main-photo"
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
                  <span>📞</span>
                  <div>
                    <strong>Call support</strong>
                    <small>{WHATSAPP_DISPLAY}</small>
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

        {/* STATS */}
        <section className="stats-wrap rv" aria-label="Selah's service highlights">
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.l}>
                <div className="stat-n">{s.n}</div>
                <div className="stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="wrap rv" id="services" aria-labelledby="services-heading">
          <p className="sec-label">Services</p>

          <h2 className="sec-h" id="services-heading">
            Laundry and dry cleaning
            <br />
            <em>handled properly.</em>
          </h2>

          <p className="section-lead">
            Selah&apos;s helps you keep your clothes, home fabrics, and business
            laundry clean, fresh, pressed, and ready without wasting your time.
          </p>

          <div className="svc-grid">
            {services.map((c) => (
              <article className="svc" key={c.badge}>
                <div className="svc-top svc-photo">
                  <img src={c.img} alt={c.badge} className="svc-img" />
                  <span className="svc-word">{c.word}</span>
                  <div className="svc-badge">{c.badge}</div>
                </div>

                <div className="svc-body">
                  <p>{c.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="process rv" aria-labelledby="process-heading">
          <div className="process-inner">
            <div className="process-hd">
              <p className="sec-label">How It Works</p>
              <h2 id="process-heading">
                From your door to fresh clothes
                <br />
                <em>without the stress.</em>
              </h2>
              <p>
                Book once and let Selah&apos;s handle pickup, cleaning,
                finishing, and delivery with clear updates along the way.
              </p>
            </div>

            <div className="steps">
              {steps.map((s) => (
                <article className="step" key={s.n}>
                  <div className="step-num">{s.n}</div>
                  <h4>{s.h}</h4>
                  <p>{s.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="wrap rv" aria-labelledby="why-heading">
          <div className="why-shell">
            <div className="why-top">
              <div>
                <p className="sec-label">Why Selah&apos;s</p>
                <h2 className="sec-h" id="why-heading" style={{ marginBottom: 0 }}>
                  Clean clothes.
                  <br />
                  <em>Cleaner process.</em>
                </h2>
              </div>

              <div className="contact-chip-row">
                <a
                  href={`https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(
                    BOOKING_MESSAGE
                  )}`}
                  target="_blank"
                  className="wa-chip"
                  rel="noreferrer"
                >
                  <span className="wdot" />
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>

                <a href={`tel:${PHONE_TEL}`} className="wa-chip call-chip">
                  <span className="call-dot" />
                  Call: {WHATSAPP_DISPLAY}
                </a>
              </div>
            </div>

            <div className="why-grid">
              {whyItems.map((w) => (
                <article className="wc rv" key={w.h}>
                  <div className="wc-icon">✓</div>
                  <h3>{w.h}</h3>
                  <p>{w.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENT TYPES */}
        <section className="wrap rv" aria-labelledby="clients-heading">
          <p className="sec-label">Who We Serve</p>

          <h2 className="sec-h" id="clients-heading">
            Made for homes,
            <br />
            <em>professionals and businesses.</em>
          </h2>

          <div className="svc-grid">
            {clientTypes.map((client) => (
              <article className="svc" key={client.title}>
                <div className="svc-top svc-photo">
                  <img src={client.img} alt={client.title} className="svc-img" />
                  <span className="svc-word">Selah&apos;s</span>
                  <div className="svc-badge">{client.title}</div>
                </div>

                <div className="svc-body">
                  <p>
                    Reliable laundry and garment care designed to save time,
                    protect presentation, and keep daily life moving.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* REAL PRICING COMPONENT */}
        <PricingSection />

        {/* REVIEWS */}
        <section className="wrap rv" style={{ paddingTop: 0 }} id="contact">
          <div className="rev-shell">
            <div className="rev-layout">
              <div className="rev-left">
                <p className="sec-label">Client Feedback</p>
                <h2>Trusted by clients across Kampala</h2>
                <div className="stars">★★★★★</div>
                <p className="rev-avg">4.9 average · Verified customers</p>
                <p className="review-note">
                  Feedback from clients who value convenience, professional
                  finishing, reliable pickup, and clear communication.
                </p>
              </div>

              <div className="rev-cards">
                {reviews.map((r) => (
                  <article className="rc" key={r.name}>
                    <div className="stars" style={{ fontSize: ".9rem" }}>
                      ★★★★★
                    </div>
                    <p className="rc-q">&quot;{r.q}&quot;</p>
                    <div>
                      <div className="rc-name">{r.name}</div>
                      <div className="rc-role">{r.role}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRACK */}
        <section id="track" className="wrap rv">
          <p className="sec-label">Track Your Order</p>

          <h2 className="sec-h">
            Know what is happening,
            <br />
            <em>without chasing.</em>
          </h2>

          <p className="section-lead">
            Track your order by sending a WhatsApp message with your name,
            pickup date, or order reference. You can also call us directly for
            quick assistance.
          </p>

          <div className="inline-action-row">
            <a
              href={`https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(
                TRACK_MESSAGE
              )}`}
              target="_blank"
              className="btn btn-turq"
              rel="noreferrer"
            >
              Track on WhatsApp
            </a>

            <a href={`tel:${PHONE_TEL}`} className="btn btn-outline">
              Call to Track
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-wrap rv" id="book">
          <div className="cta-box">
            <p className="sec-label cta-label">Book Today</p>

            <h2>
              Ready for fresh,
              <br />
              <em>perfectly finished clothes?</em>
            </h2>

            <p>
              Book a pickup in seconds. Selah&apos;s collects, cleans, presses,
              packs, and delivers so you can focus on your day.
            </p>

            <div className="cta-btns">
              <a
                href={`https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(
                  BOOKING_MESSAGE
                )}`}
                target="_blank"
                className="btn btn-white"
                rel="noreferrer"
              >
                Book via WhatsApp
              </a>

              <a href={`tel:${PHONE_TEL}`} className="btn btn-ghost-w">
                Call Now
              </a>

              <a href="#services" className="btn btn-ghost-w">
                View Services
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <div className="footer-logo logo">
            <div className="logo-name">
              <span className="ls">S</span>elah&apos;s
            </div>
            <div className="logo-tag">Dry Cleaners &amp; Laundry</div>
          </div>

          <div className="footer-links">
            <a href="#main-content">Home</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#track">Track Order</a>
            <a href="#contact">Contact</a>
            <a href="#book">Book</a>
          </div>

          <p className="footer-copy">
            © 2026 Selah&apos;s Dry Cleaners &amp; Laundry · Ntinda · Kisaasi ·
            Kampala · Call {WHATSAPP_DISPLAY}
          </p>
        </div>
      </footer>
    </>
  );
}
// src/app/page.tsx
import SiteChrome from "@/components/SiteChrome";
import HeroRotator from "@/components/HeroRotator";

const WHATSAPP_E164 = "256700000000";
const WHATSAPP_DISPLAY = "0700 000 000";

export default function HomePage() {
  return (
    <>
      <SiteChrome />

      <main id="main-content">
        <HeroRotator />

        {/* STATS */}
        <div className="stats-wrap rv">
          <div className="stats">
            {[
              { n: "500+", l: "Orders Completed" },
              { n: "4.9 ★", l: "Customer Rating" },
              { n: "24 hr", l: "Avg Turnaround" },
              { n: "100%", l: "Satisfaction Promise" },
            ].map((s) => (
              <div className="stat" key={s.l}>
                <div className="stat-n">{s.n}</div>
                <div className="stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <section className="wrap rv" id="services" aria-labelledby="services-heading">
          <p className="sec-label">What We Do</p>
          <h2 className="sec-h" id="services-heading">
            Everything you need,
            <br />
            <em>done properly.</em>
          </h2>

          <div className="svc-grid">
            {[
              {
                word: "Wash",
                badge: "🧺 Wash & Fold",
                text: "Everyday clothes cleaned, dried, and neatly folded — soft, fresh, and ready to wear.",
              },
              {
                word: "Dry",
                badge: "✨ Dry Cleaning",
                text: "Suits, dresses, and delicate fabrics handled with expert care and premium finishing.",
              },
              {
                word: "Press",
                badge: "👔 Pressing & Ironing",
                text: "Crisp, sharp press for a confident, polished look every single day.",
              },
              {
                word: "Door",
                badge: "🚗 Pickup & Delivery",
                text: "Convenient door-to-door pickup and delivery in Ntinda–Kisaasi. Book in seconds on WhatsApp.",
              },
            ].map((c) => (
              <article className="svc" key={c.badge}>
                <div className="svc-top">
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
              <h2 id="process-heading">How It Works</h2>
              <p>From your door to ours and back — completely effortless.</p>
            </div>

            <div className="steps">
              {[
                { n: 1, h: "Book", p: "WhatsApp us or book online in under 60 seconds." },
                { n: 2, h: "Collect", p: "We pick up from your door at a time that suits you." },
                { n: 3, h: "Clean", p: "Expert cleaning, pressing, and quality checks done." },
                { n: 4, h: "Deliver", p: "Fresh clothes returned to your door, right on time." },
              ].map((s) => (
                <div className="step" key={s.n}>
                  <div className="step-num">{s.n}</div>
                  <h4>{s.h}</h4>
                  <p>{s.p}</p>
                </div>
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
                  Modern. Fast.
                  <br />
                  <em>Reliable.</em>
                </h2>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_E164}`}
                target="_blank"
                className="wa-chip"
                rel="noreferrer"
              >
                <span className="wdot" />
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
            </div>

            <div className="why-grid">
              {[
                {
                  h: "Pickup & Delivery",
                  p: "Door-to-door in Ntinda–Kisaasi. Book in seconds — we pick up, clean, and deliver end-to-end.",
                },
                {
                  h: "Transparent Pricing",
                  p: "Clear itemised pricing. No hidden charges — know exactly what you pay before booking.",
                },
                {
                  h: "Premium Finishing",
                  p: "Every item quality-checked with a crisp press. Your clothes leave looking their absolute best.",
                },
                {
                  h: "WhatsApp Updates",
                  p: "Instant confirmations, progress alerts, and delivery notices right in your chat.",
                },
              ].map((w) => (
                <div className="wc rv" key={w.h}>
                  <div className="wc-icon">✓</div>
                  <h3>{w.h}</h3>
                  <p>{w.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS / CONTACT */}
        <section
          className="wrap rv"
          style={{ paddingTop: 0 }}
          id="contact"
          aria-labelledby="reviews-heading"
        >
          <div className="rev-shell">
            <div className="rev-layout">
              <div className="rev-left">
                <p className="sec-label">Client Feedback</p>
                <h2 id="reviews-heading">Cherished by our customers</h2>
                <div className="stars">★★★★★</div>
                <p className="rev-avg">4.9 average · Verified customers</p>
                <p style={{ marginTop: ".8rem", fontSize: ".78rem", color: "var(--muted)", lineHeight: 1.65 }}>
                  Real feedback from clients across Ntinda and Kisaasi, Kampala.
                </p>
              </div>

              <div className="rev-cards">
                {[
                  {
                    q: "Pickup was on time and clothes came back perfectly finished. Super convenient — I won't go anywhere else.",
                    name: "Ntinda Customer",
                    role: "Regular client",
                  },
                  {
                    q: "The pressing is so sharp. Love the WhatsApp updates — feels genuinely professional and reliable.",
                    name: "Kisaasi Customer",
                    role: "Weekly subscriber",
                  },
                  {
                    q: "Booked in minutes, handled end-to-end. This genuinely saved my entire week.",
                    name: "Busy Professional",
                    role: "Verified customer",
                  },
                ].map((r) => (
                  <div className="rc" key={r.name}>
                    <div className="stars" style={{ fontSize: ".9rem" }}>
                      ★★★★★
                    </div>
                    <p className="rc-q">"{r.q}"</p>
                    <div>
                      <div className="rc-name">{r.name}</div>
                      <div className="rc-role">{r.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRICING anchor placeholder */}
        <section id="pricing" className="wrap rv" aria-label="Pricing">
          <p className="sec-label">Pricing</p>
          <h2 className="sec-h">
            Clear pricing, <em>no surprises.</em>
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 720 }}>
            (Placeholder) Tell me your exact pricing list and I’ll format it into a premium pricing grid that matches this design.
          </p>
        </section>

        {/* TRACK anchor placeholder */}
        <section id="track" className="wrap rv" aria-label="Track Order">
          <p className="sec-label">Track</p>
          <h2 className="sec-h">
            Track your order, <em>fast.</em>
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 720 }}>
            (Placeholder) When you’re ready, we’ll connect this to your tracking logic or a simple status lookup.
          </p>
        </section>

        {/* CTA / BOOK */}
        <section className="cta-wrap rv" id="book" aria-labelledby="cta-heading">
          <div className="cta-box">
            <p className="sec-label" style={{ color: "rgba(255,255,255,.75)", justifyContent: "center", marginBottom: ".5rem" }}>
              Get Started Today
            </p>

            <h2 id="cta-heading">
              Ready for <em>fresh clothes?</em>
            </h2>
            <p>Book a pickup in seconds. We collect, clean, press, and deliver — you just enjoy.</p>

            <div className="cta-btns">
              <a
                href={`https://wa.me/${WHATSAPP_E164}`}
                target="_blank"
                className="btn btn-white"
                rel="noreferrer"
              >
                Book via WhatsApp
              </a>
              <a href="#pricing" className="btn btn-ghost-w">
                View Pricing
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-logo logo" style={{ ["--ln" as any]: "1.3rem", ["--lt" as any]: ".43rem" }}>
            <div className="logo-name">
              <span className="ls">S</span>elah&apos;s
            </div>
            <div className="logo-tag">Dry Cleaners &amp; Laundry</div>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#track">Track Order</a>
            <a href="#contact">Contact</a>
          </div>

          <p className="footer-copy">© 2026 Selah&apos;s · Ntinda – Kisaasi, Kampala</p>
        </div>
      </footer>
    </>
  );
}

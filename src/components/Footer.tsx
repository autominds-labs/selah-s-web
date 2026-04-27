export default function Footer({
  brand,
}: {
  brand: {
    area: string;
  };
}) {
  const phoneDisplay = "0707 455 964";
  const whatsappE164 = "256707455964";

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-logo logo">
          <div className="logo-name">
            <span className="ls">S</span>elah&apos;s
          </div>
          <div className="logo-tag">Dry Cleaners &amp; Laundry</div>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#track">Track Order</a>
          <a href="#contact">Contact</a>
          <a href="#book">Book Pickup</a>
        </nav>

        <div className="footer-contact">
          <a
            href={`https://wa.me/${whatsappE164}?text=${encodeURIComponent(
              "Hello Selah's, I would like to book a laundry pickup."
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp: {phoneDisplay}
          </a>
          <p>© 2026 Selah&apos;s · {brand.area}</p>
        </div>
      </div>
    </footer>
  );
}
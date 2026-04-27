const pricingGroups = [
  {
    label: "Laundry",
    title: "Wash, Fold & Ironing",
    intro: "Simple everyday laundry options for individuals, homes, students, and families.",
    featured: true,
    items: [
      { name: "Wash & Fold", price: "UGX 5,000 / kg" },
      { name: "Ironing Included", price: "UGX 8,000 / kg" },
      { name: "Small Basket", price: "UGX 10,000" },
      { name: "Medium Basket", price: "UGX 20,000" },
      { name: "Large Basket", price: "UGX 30,000" },
    ],
  },
  {
    label: "Household",
    title: "Bedding, Towels & Curtains",
    intro: "Fresh care for home fabrics, bedding, curtains, and heavier household items.",
    items: [
      { name: "Blanket / Bed Cover — Medium", price: "UGX 20,000" },
      { name: "Blanket / Bed Cover — Large", price: "UGX 25,000" },
      { name: "Bed Sheets — Pair", price: "UGX 8,000" },
      { name: "Towel — Medium", price: "UGX 5,000" },
      { name: "Curtains", price: "UGX 12,000 / sqm" },
      { name: "Net Curtains", price: "UGX 8,000 / sqm" },
    ],
  },
  {
    label: "Men",
    title: "Men’s Garment Care",
    intro: "Dry cleaning and finishing for formal wear, workwear, and everyday men’s clothing.",
    items: [
      { name: "Suit", price: "UGX 18,000" },
      { name: "Shirt", price: "UGX 5,000" },
      { name: "Linen Shirt", price: "UGX 8,000" },
      { name: "Office Pants", price: "UGX 6,000" },
      { name: "Ordinary Trousers", price: "UGX 5,000" },
      { name: "Jean / Cargo Pants", price: "UGX 8,000" },
      { name: "Jacket", price: "UGX 7,000" },
      { name: "Overcoat", price: "UGX 10,000" },
    ],
  },
  {
    label: "Women",
    title: "Women’s Garment Care",
    intro: "Premium care for dresses, gowns, gomesi, suits, coats, and delicate pieces.",
    items: [
      { name: "Wedding Gown — Ordinary", price: "UGX 60,000" },
      { name: "Wedding Gown with Stones", price: "UGX 80,000" },
      { name: "Party Dress", price: "UGX 15,000" },
      { name: "Simple Dress", price: "UGX 8,000" },
      { name: "Ordinary Gomesi", price: "UGX 12,000" },
      { name: "Silk Gomesi", price: "UGX 12,000" },
      { name: "Women’s Suit", price: "UGX 15,000" },
      { name: "Coat / Overcoat", price: "UGX 10,000" },
    ],
  },
];

const quickItems = [
  { name: "Tie", price: "UGX 2,000" },
  { name: "T-shirt", price: "UGX 3,000" },
  { name: "Shorts", price: "UGX 3,000" },
  { name: "Leggings", price: "UGX 3,000" },
  { name: "Blouse", price: "UGX 4,000" },
  { name: "Sweater", price: "UGX 5,000 – 6,000" },
  { name: "Kanzu", price: "UGX 6,000" },
  { name: "Graduation Gown", price: "UGX 18,000" },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-head">
        <p className="sec-label">Pricing</p>

        <h2 className="sec-h">
          Clear prices for
          <br />
          <em>cleaner decisions.</em>
        </h2>

        <p>
          Select the service that fits your items. For mixed laundry, curtains,
          gowns, or special garments, Selah&apos;s can confirm the final amount
          on WhatsApp before pickup.
        </p>
      </div>

      <div className="pricing-feature">
        <div>
          <span>Family Weekend Bundle</span>
          <h3>Bed sheets, pillow cases & blanket</h3>
          <p>
            Includes a pair of bed sheets, 4 pillow cases, and 1 blanket —
            perfect for refreshing your home fabrics for the weekend.
          </p>
        </div>

        <strong>UGX 38,000</strong>
      </div>

      <div className="pricing-grid">
        {pricingGroups.map((group) => (
          <article
            className={`pricing-card ${group.featured ? "pricing-card-featured" : ""}`}
            key={group.title}
          >
            <div className="pricing-card-top">
              <span>{group.label}</span>
            </div>

            <h3>{group.title}</h3>
            <p>{group.intro}</p>

            <ul>
              {group.items.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  <strong>{item.price}</strong>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="quick-prices">
        <div className="quick-prices-head">
          <p className="sec-label">Quick Items</p>
          <h3>Common garment prices</h3>
        </div>

        <div className="quick-price-grid">
          {quickItems.map((item) => (
            <div className="quick-price-item" key={item.name}>
              <span>{item.name}</span>
              <strong>{item.price}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="pricing-note">
        <div>
          <strong>Need pickup and delivery?</strong>
          <p>
            Selah&apos;s serves Ntinda, Kisaasi, and selected Kampala areas.
            Send your location on WhatsApp and the team will confirm pickup
            availability.
          </p>
        </div>

        <a
          href="https://wa.me/256707455964?text=Hello%20Selah%27s%2C%20I%20would%20like%20to%20confirm%20laundry%20pricing%20and%20book%20a%20pickup."
          target="_blank"
          rel="noreferrer"
          className="btn btn-turq"
        >
          Confirm Price on WhatsApp
        </a>
      </div>
    </section>
  );
}
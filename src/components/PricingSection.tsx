export default function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="font-serif text-3xl font-semibold">Pricing</h2>
      <p className="mt-2 text-sm opacity-80">
        Replace these placeholders with your real prices. The section exists so your nav link works.
      </p>

      <div className="mt-6 rounded-3xl border border-white/40 bg-white/15 backdrop-blur-2xl p-6">
        <ul className="space-y-2 text-sm opacity-85">
          <li><strong>Laundry (Wash & Fold):</strong> From UGX ___ / kg</li>
          <li><strong>Dry Cleaning:</strong> Shirts ___ · Suits ___ · Dresses ___</li>
          <li><strong>Pressing:</strong> From UGX ___ / item</li>
          <li><strong>Pickup & Delivery:</strong> Free (Ntinda–Kisaasi) / Otherwise UGX ___</li>
        </ul>
      </div>
    </section>
  );
}
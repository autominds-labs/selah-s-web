import PricingSection from "@/components/PricingSection";

export const metadata = {
  title: "Pricing",
  description:
    "Clear, transparent pricing for laundry and dry cleaning in Ntinda–Kisaasi. No hidden charges.",
};

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <header className="pt-6 md:pt-10 pb-6">
        <p className="section-label">Pricing</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Transparent pricing
        </h1>
        <p className="mt-3 text-white/60 max-w-2xl">
          Clear itemised pricing. Know what you’re paying before booking.
        </p>
      </header>

      <PricingSection />
    </section>
  );
}
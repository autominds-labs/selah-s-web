import TrackSection from "@/components/TrackSection";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "Track Order",
  description:
    "Track your laundry or dry cleaning order with Selah’s. Get updates and support via WhatsApp.",
};

export default function TrackPage() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <header className="pt-6 md:pt-10 pb-6">
        <p className="section-label">Track</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Track your order
        </h1>
        <p className="mt-3 text-white/60 max-w-2xl">
          Check progress and get live help if you need it.
        </p>
      </header>

      <TrackSection brand={BRAND} />
    </section>
  );
}
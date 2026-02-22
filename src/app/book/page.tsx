import BookingSection from "@/components/BookingSection";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "Book Pickup",
  description:
    "Book a pickup for laundry or dry cleaning in Ntinda–Kisaasi. Fast turnaround, crisp finishing, WhatsApp updates.",
};

export default function BookPage() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <header className="pt-6 md:pt-10 pb-6">
        <p className="section-label">Book</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Book a pickup
        </h1>
        <p className="mt-3 text-white/60 max-w-2xl">
          We collect, clean, press, and deliver — you just enjoy.
        </p>
      </header>

      <BookingSection brand={BRAND} />
    </section>
  );
}
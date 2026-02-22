import Link from "next/link";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "Contact",
  description:
    "Contact Selah’s Dry Cleaners & Laundry in Ntinda–Kisaasi. Book and get updates via WhatsApp.",
};

export default function ContactPage() {
  const waLink = `https://wa.me/${BRAND.whatsappE164}`;

  return (
    <section className="mx-auto max-w-6xl px-4">
      <header className="pt-6 md:pt-10 pb-8">
        <p className="section-label">Contact</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Talk to Selah’s
        </h1>
        <p className="mt-3 text-white/60 max-w-2xl">
          Fast replies on WhatsApp. Serving {BRAND.area}.
        </p>
      </header>

      <div className="glass p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">WhatsApp-first support</h2>
            <p className="mt-2 text-white/60">
              Confirmations, updates, and delivery notices right in your chat.
            </p>

            <div className="mt-5 space-y-2 text-white/70">
              <div>
                <span className="text-white/50">Phone:</span>{" "}
                {BRAND.phonesDisplay.join(" · ")}
              </div>
              <div>
                <span className="text-white/50">Area:</span> {BRAND.area}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 min-w-[220px]">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary w-full text-center"
            >
              Chat on WhatsApp
            </a>
            <Link href="/book" className="btn btn-ghost w-full text-center">
              Book Pickup
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
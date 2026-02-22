"use client";

import { useMemo, useState } from "react";

function waUrl(e164: string, msg: string) {
  return `https://wa.me/${e164}?text=${encodeURIComponent(msg)}`;
}

export default function BookingSection({
  brand,
}: {
  brand: { whatsappE164: string; area: string; phonesDisplay: string[] };
}) {
  const minDate = useMemo(() => {
    const d = new Date();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${d.getFullYear()}-${mm}-${dd}`;
  }, []);

  const [v, setV] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    address: "",
    notes: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `New Pickup Request (Website)
Name: ${v.name}
Phone: ${v.phone}
Service: ${v.service}
Pickup Date: ${v.date}
Location: ${v.address}
Notes: ${v.notes || "N/A"}`;

    window.open(waUrl(brand.whatsappE164, msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="book" className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-3xl border border-white/40 bg-white/15 backdrop-blur-2xl p-6 md:p-10 shadow-[0_30px_80px_rgba(80,140,180,.22)] text-center">
        <h2 className="font-serif text-4xl font-semibold">
          Ready for <span className="italic">fresh clothes?</span>
        </h2>
        <p className="mt-3 text-sm opacity-80 max-w-2xl mx-auto">
          Book a pickup in seconds. We collect, clean, press, and deliver — you just enjoy.
        </p>

        <form onSubmit={submit} className="mt-8 grid gap-3 text-left max-w-3xl mx-auto">
          <div className="grid gap-3 md:grid-cols-2">
            <input
              className="rounded-2xl border border-white/60 bg-white/70 p-3 outline-none"
              placeholder="Full Name *"
              required
              value={v.name}
              onChange={(e) => setV({ ...v, name: e.target.value })}
            />
            <input
              className="rounded-2xl border border-white/60 bg-white/70 p-3 outline-none"
              placeholder="Phone *"
              required
              value={v.phone}
              onChange={(e) => setV({ ...v, phone: e.target.value })}
            />
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <select
              className="rounded-2xl border border-white/60 bg-white/70 p-3 outline-none"
              required
              value={v.service}
              onChange={(e) => setV({ ...v, service: e.target.value })}
            >
              <option value="">Select service *</option>
              <option>Wash & Fold</option>
              <option>Dry Cleaning</option>
              <option>Pressing & Ironing</option>
              <option>Mixed Items</option>
            </select>

            <input
              className="rounded-2xl border border-white/60 bg-white/70 p-3 outline-none"
              type="date"
              min={minDate}
              required
              value={v.date}
              onChange={(e) => setV({ ...v, date: e.target.value })}
            />
          </div>

          <input
            className="rounded-2xl border border-white/60 bg-white/70 p-3 outline-none"
            placeholder={`Pickup location (${brand.area}) *`}
            required
            value={v.address}
            onChange={(e) => setV({ ...v, address: e.target.value })}
          />

          <textarea
            className="rounded-2xl border border-white/60 bg-white/70 p-3 outline-none min-h-[110px]"
            placeholder="Notes (optional)"
            value={v.notes}
            onChange={(e) => setV({ ...v, notes: e.target.value })}
          />

          <button className="mt-2 rounded-2xl bg-black text-white font-semibold py-3">
            Send on WhatsApp
          </button>

          <p className="text-xs opacity-70 text-center mt-2">
            Or call: {brand.phonesDisplay.join(" · ")}
          </p>
        </form>
      </div>
    </section>
  );
}
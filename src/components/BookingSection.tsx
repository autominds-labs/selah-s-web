"use client";

import { useMemo, useState } from "react";

type Brand = {
  whatsappE164: string;
  area: string;
  phonesDisplay: string[];
};

type FormState = {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  address: string;
  notes: string;
};

const SERVICES = [
  "Wash & Fold",
  "Premium Dry Cleaning",
  "Pressing & Ironing",
  "Curtains & Bedding",
  "Suits & Formal Wear",
  "Mixed Laundry Items",
  "Business / Bulk Laundry",
];

function waUrl(e164: string, message: string) {
  return `https://wa.me/${e164}?text=${encodeURIComponent(message)}`;
}

export default function BookingSection({ brand }: { brand: Brand }) {
  const minDate = useMemo(() => {
    const today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${today.getFullYear()}-${mm}-${dd}`;
  }, []);

  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    address: "",
    notes: "",
  });

  const updateField = (key: keyof FormState, value: string) => {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = `New Pickup Request from Selah's Website

Client Details
Name: ${form.name}
Phone: ${form.phone}

Pickup Details
Service: ${form.service}
Pickup Date: ${form.date}
Preferred Time: ${form.time || "Flexible"}
Pickup Location: ${form.address}

Extra Notes
${form.notes || "N/A"}

Please confirm pickup availability.`;

    window.open(waUrl(brand.whatsappE164, message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="book" className="booking-section">
      <div className="booking-shell">
        <div className="booking-copy">
          <p className="sec-label">Book Pickup</p>

          <h2>
            Fresh clothes start
            <br />
            <em>with one quick booking.</em>
          </h2>

          <p>
            Tell us what you need cleaned, where we should collect from, and the
            best pickup time. Selah&apos;s will confirm your request directly on
            WhatsApp.
          </p>

          <div className="booking-highlights">
            <span>Doorstep pickup</span>
            <span>WhatsApp confirmation</span>
            <span>Ntinda · Kisaasi · Kampala</span>
          </div>
        </div>

        <form onSubmit={submit} className="booking-form">
          <div className="booking-grid">
            <label>
              <span>Full Name *</span>
              <input
                required
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
              />
            </label>

            <label>
              <span>Phone Number *</span>
              <input
                required
                type="tel"
                placeholder="Your phone number"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
              />
            </label>
          </div>

          <div className="booking-grid">
            <label>
              <span>Service Needed *</span>
              <select
                required
                value={form.service}
                onChange={(e) => updateField("service", e.target.value)}
              >
                <option value="">Select a service</option>
                {SERVICES.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>Pickup Date *</span>
              <input
                required
                type="date"
                min={minDate}
                value={form.date}
                onChange={(e) => updateField("date", e.target.value)}
              />
            </label>
          </div>

          <label>
            <span>Preferred Pickup Time</span>
            <select
              value={form.time}
              onChange={(e) => updateField("time", e.target.value)}
            >
              <option value="">Flexible</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
              <option>Call me to confirm</option>
            </select>
          </label>

          <label>
            <span>Pickup Location *</span>
            <input
              required
              type="text"
              placeholder={`Example: ${brand.area}`}
              value={form.address}
              onChange={(e) => updateField("address", e.target.value)}
            />
          </label>

          <label>
            <span>Notes</span>
            <textarea
              placeholder="Example: 3 shirts, 2 trousers, 1 suit, curtain cleaning..."
              value={form.notes}
              onChange={(e) => updateField("notes", e.target.value)}
            />
          </label>

          <button type="submit" className="booking-submit">
            Send Pickup Request on WhatsApp
          </button>

          <p className="booking-call">
            Prefer calling? {brand.phonesDisplay.join(" · ")}
          </p>
        </form>
      </div>
    </section>
  );
}
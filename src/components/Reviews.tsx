const TESTIMONIALS = [
  {
    name: "Ntinda Customer",
    role: "Regular client",
    quote:
      "Pickup was on time and my clothes came back fresh and perfectly finished. Super convenient — I won't go anywhere else.",
  },
  {
    name: "Kisaasi Customer",
    role: "Weekly subscriber",
    quote:
      "The pressing is clean and sharp. I love the WhatsApp updates and how easy booking is. Feels very professional.",
  },
  {
    name: "Busy Professional",
    role: "Verified customer",
    quote:
      "This saved my week. Booked in minutes and everything was handled smoothly end-to-end. Highly recommend.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="star text-base">★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="mt-12 md:mt-16">
      <div className="glass rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">

          {/* Left — heading */}
          <div className="md:col-span-1">
            <p className="section-label">Client Feedback</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-white leading-tight">
              Cherished by our customers
            </h2>
            <div className="mt-4 flex items-center gap-2.5">
              <Stars />
              <span className="text-sm text-white/60">4.9 avg rating</span>
            </div>
            <p className="mt-3 text-xs text-white/35 leading-relaxed">
              Real feedback from our customers in Ntinda and Kisaasi.
            </p>
          </div>

          {/* Right — cards */}
          <div className="md:col-span-2 grid gap-3 sm:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="
                  rounded-[1.5rem] p-5
                  border border-white/10
                  bg-white/[0.04]
                  backdrop-blur-sm
                  hover:border-white/18
                  hover:bg-white/[0.07]
                  transition-all duration-300
                  flex flex-col gap-3
                "
              >
                <Stars />
                <p className="text-sm text-white/70 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/40">{t.role}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

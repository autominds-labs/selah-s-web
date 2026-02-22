export default function ProcessSteps() {
  const steps = [
    { t: "Book", d: "WhatsApp us or book online in under 60 seconds." },
    { t: "Collect", d: "We pick up from your door at a time that suits you." },
    { t: "Clean", d: "Expert cleaning, pressing, and quality checks done." },
    { t: "Deliver", d: "Fresh clothes returned to your door, right on time." },
  ];

  return (
    <section className="mt-12 bg-white/15 backdrop-blur-2xl border-y border-white/30">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold">How It Works</h2>
          <p className="mt-2 text-sm opacity-80">From your door to ours and back — effortless.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-3xl border border-white/40 bg-white/10">
          {steps.map((s, i) => (
            <div key={s.t} className="p-6 text-center border-white/20 lg:border-r last:border-r-0 border-b lg:border-b-0">
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full border border-white/50 bg-white/20 font-serif text-lg">
                {i + 1}
              </div>
              <h3 className="font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm opacity-80 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
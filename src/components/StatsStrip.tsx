export default function StatsStrip() {
  const stats = [
    { n: "500+", l: "Orders Completed" },
    { n: "4.9 ★", l: "Customer Rating" },
    { n: "24 hr", l: "Avg Turnaround" },
    { n: "100%", l: "Satisfaction Promise" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 -mt-6 md:-mt-10">
      <div className="grid grid-cols-2 md:grid-cols-4 overflow-hidden rounded-3xl border border-white/50 bg-white/20 backdrop-blur-2xl shadow-[0_20px_60px_rgba(80,140,180,.18)]">
        {stats.map((s) => (
          <div key={s.l} className="p-6 text-center border-white/30 md:border-r last:border-r-0 border-r">
            <div className="font-serif text-4xl font-semibold tracking-tight">{s.n}</div>
            <div className="mt-1 text-xs font-medium tracking-wide opacity-80">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
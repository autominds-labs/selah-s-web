export default function TrackSection({ brand }: { brand: { whatsappE164: string } }) {
  return (
    <section id="track" className="mx-auto max-w-6xl px-4 pb-10">
      <h2 className="font-serif text-3xl font-semibold">Track Order</h2>
      <p className="mt-2 text-sm opacity-80">
        For now, tracking happens via WhatsApp updates (confirmed → cleaning → ready → delivery).
      </p>

      <div className="mt-6 rounded-3xl border border-white/40 bg-white/15 backdrop-blur-2xl p-6 flex flex-col gap-3">
        <a
          className="inline-flex items-center justify-center rounded-2xl bg-black text-white font-semibold py-3"
          href={`https://wa.me/${brand.whatsappE164}`}
          target="_blank"
          rel="noreferrer"
        >
          Ask for an update on WhatsApp
        </a>
      </div>
    </section>
  );
}
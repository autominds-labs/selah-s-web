export default function Footer({ brand }: { brand: { area: string } }) {
  return (
    <footer className="mt-10 border-t border-white/20 bg-black/40 backdrop-blur-2xl">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/70">
        <div className="font-semibold text-white">Selah&apos;s</div>
        <div className="text-xs flex gap-4 flex-wrap justify-center">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#track">Track</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="text-xs">© 2026 Selah&apos;s · {brand.area}</div>
      </div>
    </footer>
  );
}
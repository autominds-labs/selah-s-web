"use client";

import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    title: "Wash & Fold",
    body: "Everyday clothes cleaned, dried, and neatly folded — ready to wear.",
    img: "/images/hero/1.jpg",
    icon: "🧺",
  },
  {
    title: "Dry Cleaning",
    body: "Suits, dresses, and delicate fabrics handled with premium finishing.",
    img: "/images/hero/2.jpg",
    icon: "✨",
  },
  {
    title: "Pressing & Ironing",
    body: "Crisp, sharp press for a confident, professional look every time.",
    img: "/images/hero/3.jpg",
    icon: "👔",
  },
  {
    title: "Pickup & Delivery",
    body: "Door-to-door convenience around Ntinda–Kisaasi. Book in seconds.",
    img: "/images/hero/4.jpg",
    icon: "🚗",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref as any}
      id="services"
      className={[
        "mt-12 md:mt-16",
        "transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      ].join(" ")}
    >
      <p className="section-label">Our Services</p>

      <div className="mt-2 flex items-end justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Everything you need, done properly.
        </h2>
      </div>

      {/* 2×2 grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
        {SERVICES.map((s, i) => (
          <article
            key={s.title}
            className="service-card"
            style={{
              transitionDelay: visible ? `${i * 80}ms` : "0ms",
              opacity: visible ? 1 : 0,
            }}
          >
            {/* Image */}
            <div className="relative h-[160px] sm:h-[170px] md:h-[185px]">
              <img
                src={s.img}
                alt={s.title}
                className="absolute inset-0 h-full w-full object-cover"
                draggable={false}
              />
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* title badge */}
              <div className="absolute left-4 bottom-4 right-4">
                <span
                  className="
                    inline-flex items-center gap-1.5 rounded-full
                    border border-white/15 bg-black/40
                    px-3 py-1 text-sm font-semibold text-white
                    backdrop-blur-sm
                  "
                >
                  <span aria-hidden="true">{s.icon}</span>
                  {s.title}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="px-4 py-4">
              <p className="text-sm text-white/75 leading-relaxed">{s.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

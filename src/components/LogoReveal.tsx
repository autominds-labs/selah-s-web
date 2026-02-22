"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LogoReveal() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1450);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            background:
              "radial-gradient(800px 500px at 50% 40%, rgba(72,214,220,0.18), transparent 60%), rgb(8 12 18)",
          }}
        >
          <motion.div
            className="glass rounded-[2.2rem] px-8 py-7 flex items-center gap-4"
            initial={{ scale: 0.92, y: 10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.98, y: -8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <Image src="/logo.png" alt="Selah's logo" fill className="object-cover" priority />
            </div>

            <div className="leading-tight">
              <div className="text-lg font-semibold text-white">Selah&apos;s</div>
              <div className="text-sm subtle">Dry Cleaners & Laundry</div>
            </div>

            <motion.div
              className="ml-3 h-2 w-24 rounded-full"
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              style={{
                background:
                  "linear-gradient(90deg, rgba(72,214,220,0.2), rgba(72,214,220,0.9), rgba(125,220,226,0.2))",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

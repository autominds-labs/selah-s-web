"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LogoReveal() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(false), 2300);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="selah-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
        >
          <motion.div
            className="intro-bubble intro-bubble-one"
            animate={{ y: [-8, -30, -8], opacity: [0.35, 0.9, 0.35] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="intro-bubble intro-bubble-two"
            animate={{ y: [0, -26, 0], opacity: [0.28, 0.8, 0.28] }}
            transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          />
          <motion.div
            className="intro-bubble intro-bubble-three"
            animate={{ y: [-4, -24, -4], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
          />

          <motion.div
            className="intro-card"
            initial={{ scale: 0.92, y: 18, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: -14, opacity: 0 }}
            transition={{ type: "spring", stiffness: 230, damping: 22 }}
          >
            <div className="intro-logo">
              <div className="intro-logo-name">
                <span>S</span>elah&apos;s
              </div>
              <div className="intro-logo-tag">Dry Cleaners &amp; Laundry</div>
            </div>

            <div className="intro-machine" aria-hidden="true">
              <div className="intro-machine-top">
                <div className="intro-machine-slot" />
                <div className="intro-machine-dots">
                  <i />
                  <i />
                  <i />
                </div>
              </div>

              <div className="intro-machine-window">
                <motion.div
                  className="intro-water"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.85, repeat: Infinity, ease: "linear" }}
                >
                  <span />
                  <span />
                  <span />
                </motion.div>
              </div>

              <motion.div
                className="intro-shirt"
                animate={{ y: [0, -5, 0], rotate: [-2, 2, -2] }}
                transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
              >
                ✦
              </motion.div>
            </div>

            <div className="intro-copy">
              <h1>
                Preparing your
                <br />
                <em>fresh experience.</em>
              </h1>
              <p>Pickup. Clean. Press. Deliver.</p>
            </div>

            <div className="intro-progress">
              <motion.span
                initial={{ x: "-100%" }}
                animate={{ x: "165%" }}
                transition={{ duration: 1.45, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
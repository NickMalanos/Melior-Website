"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedShapes() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <div className="animated-shapes" aria-hidden="true">
      <motion.div
        className="shape shape-orb-1"
        animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="shape shape-orb-2"
        animate={{ y: [0, 20, 0], x: [0, -20, 0], scale: [1, 0.92, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="shape shape-orb-3"
        animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="shape shape-ring"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="shape shape-ring-2"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />
      <div className="shape shape-grid" />
    </div>
  );
}

export function SectionGlow({ position = "left" }: { position?: "left" | "right" | "center" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`section-glow section-glow-${position}`}
      aria-hidden="true"
      initial={reduceMotion ? undefined : { opacity: 0 }}
      whileInView={reduceMotion ? undefined : { opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2 }}
    />
  );
}

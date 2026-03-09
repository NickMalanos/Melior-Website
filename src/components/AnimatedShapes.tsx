"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedShapes() {
  return (
    <div className="animated-shapes" aria-hidden="true">
      <div className="shape shape-orb-1" />
      <div className="shape shape-orb-2" />
      <div className="shape shape-orb-3" />
      <div className="shape shape-ring" />
      <div className="shape shape-ring-2" />
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

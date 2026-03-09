"use client";

import { CTAButton } from "@/components/CTAButton";
import { AnimatedShapes } from "@/components/AnimatedShapes";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const industries = [
  "hospitality",
  "professional services",
  "manufacturing",
  "healthcare",
  "construction",
  "property development",
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % industries.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="top">
      <AnimatedShapes />
      <div className="container hero-inner">
        <motion.p
          className="eyebrow"
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          AI Automation Consulting
        </motion.p>
        <motion.h1
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          AI automation, built around how you work.
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Custom AI tools that automate your operations, replace your
          spreadsheets, and give you real-time visibility — for{" "}
          <span className="rotating-word-wrap">
            <AnimatePresence mode="wait">
              <motion.span
                key={industries[index]}
                className="rotating-word"
                initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                {industries[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <CTAButton href="#contact">Book a Discovery Call</CTAButton>
          <CTAButton href="#what-we-do" secondary>
            See What We Do
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}

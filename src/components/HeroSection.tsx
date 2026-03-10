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
        <p className="eyebrow hero-entry">AI Automation Consulting</p>
        <h1 className="hero-entry">AI automation, built around how you work.</h1>
        <p className="hero-subtitle hero-entry">
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
        </p>
        <div className="hero-actions hero-entry">
          <CTAButton
            href="https://calendly.com/meliorsolutions-info/30min"
            glow
            newTab
          >
            Book a Discovery Call
          </CTAButton>
          <CTAButton href="#what-we-do" secondary>
            See Our Work
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

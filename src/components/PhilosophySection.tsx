"use client";

import { CTAButton } from "@/components/CTAButton";
import { FadeInOnView } from "@/components/motion/FadeInOnView";
import { SectionGlow } from "@/components/AnimatedShapes";

export function PhilosophySection() {
  return (
    <section id="contact" className="cta-section">
      <SectionGlow position="center" />
      <div className="container">
        <FadeInOnView>
          <div className="cta-inner">
            <p className="eyebrow eyebrow-center">Get in Touch</p>
            <h2 className="section-title">
              Let&apos;s talk about what&apos;s slowing your business down.
            </h2>
            <p className="section-subtitle">
              Book a 20-minute call. We&apos;ll map your biggest automation
              opportunities and give you a clear plan — whether you work with
              us or not.
            </p>
            <ul className="cta-list">
              <li>See examples relevant to your industry</li>
              <li>Map your biggest automation opportunities</li>
              <li>Get a clear plan — no obligation</li>
            </ul>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <CTAButton href="mailto:hello@melior.ai">
                Book a Discovery Call
              </CTAButton>
            </div>
            <p className="cta-tagline">Better by design.</p>
          </div>
        </FadeInOnView>
      </div>
    </section>
  );
}

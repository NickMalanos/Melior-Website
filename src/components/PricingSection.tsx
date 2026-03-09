"use client";

import { CTAButton } from "@/components/CTAButton";
import { FadeInOnView } from "@/components/motion/FadeInOnView";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

const models = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Project-based",
    body: "Defined scope, fixed deliverable, clear timeline. You know exactly what you're getting and when.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
    title: "Ongoing retainer",
    body: "Embedded in your business with continuous improvement. Your tools evolve as your operations do.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Discovery session",
    body: "One-off strategic session to map your automation opportunities and build a clear action plan.",
  },
];

export function PricingSection() {
  return (
    <section className="pricing-section section-light" id="pricing">
      <div className="container">
        <FadeInOnView>
          <p className="eyebrow eyebrow-center">Pricing</p>
          <h2 className="section-title">Every business is different</h2>
          <p className="section-subtitle">
            We scope each engagement based on what you need and what will deliver
            the most value. Book a call to discuss your situation.
          </p>
        </FadeInOnView>
        <StaggerChildren className="pricing-grid">
          {models.map((m) => (
            <StaggerItem key={m.title}>
              <div className="light-card pricing-card">
                <div className="card-icon">{m.icon}</div>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
        <FadeInOnView>
          <div className="pricing-cta">
            <CTAButton href="#contact">Book a Discovery Call</CTAButton>
          </div>
        </FadeInOnView>
      </div>
    </section>
  );
}

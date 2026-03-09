"use client";

import { FadeInOnView } from "@/components/motion/FadeInOnView";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

const steps = [
  {
    number: "1",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "Discovery",
    body: "We learn how your business actually operates. The manual processes, the spreadsheets, the pain points.",
  },
  {
    number: "2",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    title: "Design",
    body: "We map the solution architecture. You see exactly what we're building before we write a line of code.",
  },
  {
    number: "3",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Build",
    body: "Custom-built, tested end to end. Typically live within 1–2 weeks.",
  },
  {
    number: "4",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Support",
    body: "Ongoing refinement. Your business changes, your tools evolve with it.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="how-section">
      <div className="container">
        <FadeInOnView>
          <p className="eyebrow eyebrow-center">How We Work</p>
          <h2 className="section-title">From discovery to delivery</h2>
        </FadeInOnView>
        <StaggerChildren className="steps-grid four-up">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="step-card">
                <span className="step-bg-number">{step.number}</span>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

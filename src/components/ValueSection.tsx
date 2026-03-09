"use client";

import { FadeInOnView } from "@/components/motion/FadeInOnView";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

const services = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: "Process Automation",
    body: "Replace manual workflows with intelligent systems. Data entry, reconciliation, reporting — automated end to end.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Custom Business Tools",
    body: "Web apps built for exactly how your business works. Not off-the-shelf software that almost fits — tools designed around your process.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
        <path d="M8.56 13.44A4 4 0 0 0 12 22a4 4 0 0 0 3.44-6" />
        <path d="M12 2C8 2 4 6 4 12s8 10 8 10 8-4 8-10S16 2 12 2z" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: "AI-Powered Intelligence",
    body: "Document extraction, smart matching, predictive insights. Your data working harder so your team doesn't have to.",
  },
];

export function ValueSection() {
  return (
    <section className="features-section section-light" id="what-we-do">
      <div className="container">
        <FadeInOnView>
          <p className="eyebrow eyebrow-center">What We Do</p>
          <h2 className="section-title">
            Custom AI solutions for how your business actually works
          </h2>
          <p className="section-subtitle">
            Not off-the-shelf SaaS. We build tools tailored to your operations,
            your data, and your team.
          </p>
        </FadeInOnView>
        <StaggerChildren className="features-grid three-up">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <div className="light-card">
                <div className="feature-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

"use client";

import { FadeInOnView } from "@/components/motion/FadeInOnView";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

const outcomes = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    headline: "Weeks, not months",
    detail: "Most solutions live within 1–2 weeks",
    body: "We scope tight and deliver fast. No drawn-out discovery phases or six-month roadmaps.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
        <path d="M15.4 14.89a3.98 3.98 0 0 0-6.8 0" />
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="18" x2="16" y2="18" />
      </svg>
    ),
    headline: "Built for your process",
    detail: "Not adapted from a template",
    body: "Designed around how you actually work. Your workflows, your data, your team.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    headline: "Real-time visibility",
    detail: "See what's happening now",
    body: "Dashboards and tools that show you what's happening now, not last month.",
  },
];

export function OutcomesSection() {
  return (
    <section className="outcomes-section section-light" id="outcomes">
      <div className="container">
        <FadeInOnView>
          <p className="eyebrow eyebrow-center">Why It Works</p>
          <h2 className="section-title">Results that matter</h2>
          <p className="section-subtitle">
            We build tools that deliver measurable impact from day one.
          </p>
        </FadeInOnView>
        <StaggerChildren className="outcomes-grid">
          {outcomes.map((o) => (
            <StaggerItem key={o.headline}>
              <div className="light-card">
                <div className="card-icon">{o.icon}</div>
                <h3>{o.headline}</h3>
                <span className="outcome-detail">{o.detail}</span>
                <p>{o.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

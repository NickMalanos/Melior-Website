"use client";

import { FadeInOnView } from "@/components/motion/FadeInOnView";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

const industries = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
        <path d="M9 9v.01" /><path d="M9 12v.01" /><path d="M9 15v.01" /><path d="M9 18v.01" />
      </svg>
    ),
    title: "Construction & Property Development",
    body: "Finish scheduling, cost reconciliation, claim analysis, budget tracking",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2l3 3-3 3" />
        <path d="M11 2l3 3-3 3" />
        <path d="M18.5 14.5A2.5 2.5 0 0 0 16 12H3" />
        <path d="M6 5h15v5a7 7 0 0 1-7 7H3" />
      </svg>
    ),
    title: "Hospitality & Food Service",
    body: "Booking automation, order capture, customer enquiry handling",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Professional Services",
    body: "Workflow automation, document processing, reporting dashboards",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Small & Medium Business",
    body: "Operations streamlining, spreadsheet replacement, process digitisation",
  },
];

export function IndustriesCardSection() {
  return (
    <section className="industries-cards-section section-light" id="industries">
      <div className="container">
        <FadeInOnView>
          <p className="eyebrow eyebrow-center">Industries</p>
          <h2 className="section-title">
            Built for businesses that run on process
          </h2>
          <p className="section-subtitle">
            We work across industries where manual processes, spreadsheets, and
            disconnected tools are holding the business back.
          </p>
        </FadeInOnView>
        <StaggerChildren className="industries-cards-grid">
          {industries.map((ind) => (
            <StaggerItem key={ind.title}>
              <div className="light-card industry-card">
                <div className="card-icon">{ind.icon}</div>
                <h3>{ind.title}</h3>
                <p>{ind.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

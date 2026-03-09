"use client";

import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";

export function TopNav() {
  return (
    <header className="top-nav-wrap">
      <div className="container top-nav">
        <a
          className="brand"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Image src="/melior-text.png" alt="Melior Solutions" width={180} height={20} />
        </a>
        <nav className="top-links" aria-label="Primary">
          <a href="#what-we-do">What We Do</a>
          <a href="#industries">Industries</a>
          <a href="#how-it-works">How We Work</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="top-cta">
          <CTAButton href="#contact">Book a Call</CTAButton>
        </div>
      </div>
    </header>
  );
}

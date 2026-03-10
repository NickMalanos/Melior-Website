"use client";

import { FadeInOnView } from "@/components/motion/FadeInOnView";

const checkIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="9 12 12 15 16 10" />
  </svg>
);

const mailIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const phoneIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export function ContactSection() {
  return (
    <section className="contact-section section-light" id="contact">
      <div className="container">
        <div className="contact-grid">
          <FadeInOnView>
            <div className="contact-text">
              <p className="eyebrow">Get in Touch</p>
              <h2>
                Let&apos;s talk about what&apos;s slowing your business down
              </h2>
              <p className="contact-desc">
                Book a 20-minute call. We&apos;ll map your biggest automation
                opportunities and give you a clear plan — whether you work with
                us or not.
              </p>
              <ul className="contact-list">
                <li>
                  {checkIcon}
                  Map your biggest automation opportunities
                </li>
                <li>
                  {checkIcon}
                  Get a clear plan — whether you work with us or not
                </li>
                <li>
                  {checkIcon}
                  See examples relevant to your industry
                </li>
              </ul>
              <div className="contact-info">
                <a href="mailto:meliorsolutions.info@gmail.com">
                  {mailIcon}
                  meliorsolutions.info@gmail.com
                </a>
              </div>
            </div>
          </FadeInOnView>
          <FadeInOnView>
            <div className="calendly-wrap" id="calendly">
              <iframe
                src="https://calendly.com/meliorsolutions-info/30min"
                title="Book a Discovery Call"
              />
            </div>
          </FadeInOnView>
        </div>
      </div>
    </section>
  );
}

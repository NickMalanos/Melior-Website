import { HeroSection } from "@/components/HeroSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { ValueSection } from "@/components/ValueSection";
import { IndustriesCardSection } from "@/components/IndustriesCardSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { OutcomesSection } from "@/components/OutcomesSection";
import { PricingSection } from "@/components/PricingSection";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";
import { TopNav } from "@/components/TopNav";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function HomePage() {
  return (
    <>
      <ScrollToTop />
      <TopNav />
      <main>
        <HeroSection />
        <IndustriesSection />
        <ValueSection />
        <IndustriesCardSection />
        <HowItWorksSection />
        <OutcomesSection />
        <PricingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

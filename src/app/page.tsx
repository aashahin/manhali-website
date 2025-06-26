import { HeroSection } from "@/components/home/sections/hero";
import { ProblemStatementSection } from "@/components/home/sections/problem-statement-section";
import { HowItWorksSection } from "@/components/home/sections/user-journey";
import { PricingSection } from "@/components/home/sections/pricing";
import { CtaSection } from "@/components/home/sections/cta-section";
import { websiteMetadata } from "@/lib/seo";

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <HeroSection />

      {/* Problem Statement */}
      <ProblemStatementSection />

      {/* How It Works - User Journey */}
      <HowItWorksSection />

      {/* Pricing - Value Focused */}
      <PricingSection />

      {/* Final CTA */}
      <CtaSection />
    </main>
  );
}

export const metadata = websiteMetadata;

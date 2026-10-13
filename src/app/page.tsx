import React from "react";
import { buildMetadata } from "@/lib/seo";
import { HeroSection } from "@/components/home/HeroSection";
import { BismillahSection } from "@/components/home/BismillahSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { TrustVerificationSection } from "@/components/home/TrustVerificationSection";
import { VerificationFaqSection } from "@/components/home/VerificationFaqSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { MatchAndFilterSection } from "@/components/home/MatchAndFilterSection";
import { PrivacyAndIslamicValuesSection } from "@/components/home/PrivacyAndIslamicValuesSection";
import { MatchMakingShowcaseSection } from "@/components/home/MatchMakingShowcaseSection";
import { StatsSection } from "@/components/home/StatsSection";
import { SuccessStoriesAndProfilesSection } from "@/components/home/SuccessStoriesAndProfilesSection";
import { ValuesBlogGallerySection } from "@/components/home/ValuesBlogGallerySection";
import { FaqSection } from "@/components/home/FaqSection";
import { CityLinksSection } from "@/components/home/CityLinksSection";
import { CtaBannerSection } from "@/components/home/CtaBannerSection";

export const metadata = buildMetadata({
  title: "HumNikah – Verified Muslim Matrimony Across India",
  absoluteTitle: "HumNikah – Verified Muslim Matrimony Across India",
  description:
    "Verified Muslim matrimony across India. Personal matchmaking, home verification, Wali involvement and complete privacy. Submit your biodata free.",
  path: "/",
});

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream overflow-hidden">
      <HeroSection />
      <BismillahSection />
      <WhyChooseUsSection />
      <TrustVerificationSection />
      <VerificationFaqSection />
      <HowItWorksSection />
      <MatchAndFilterSection />
      <PrivacyAndIslamicValuesSection />
      <MatchMakingShowcaseSection />
      <StatsSection />
      <SuccessStoriesAndProfilesSection />
      <ValuesBlogGallerySection />
      <FaqSection />
      <CityLinksSection />
      <CtaBannerSection />
    </main>
  );
}


"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Home, ShieldCheck, Lock, Headphones } from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

interface FeatureCard {
  title: string;
  description: string;
  image: string;
  fallbackGradient: string;
  icon: React.ElementType;
  badgeBg: string;
  badgeTextColor: string;
}

const features: FeatureCard[] = [
  {
    title: "Physical Home Visits",
    description:
      "In-person representative visit to candidate's home to verify family background and residence.",
    image: "/images/why-choose/home-visit.png",
    fallbackGradient: "from-emerald-800/60 via-emerald-900/80 to-slate-900",
    icon: Home,
    badgeBg: "bg-[#E6F4F1]",
    badgeTextColor: "text-[#1E7A6E]",
  },
  {
    title: "5-Layer Background Check",
    description:
      "CNIC, degree audit, employment check, and 2+ verified family references.",
    image: "/images/why-choose/background-check.png",
    fallbackGradient: "from-slate-700/60 via-indigo-950/80 to-slate-900",
    icon: ShieldCheck,
    badgeBg: "bg-[#EBEBF8]",
    badgeTextColor: "text-[#4C4B92]",
  },
  {
    title: "Privacy & Modesty First",
    description:
      "Wali-controlled profile access, blur options, and 100% data security.",
    image: "/images/why-choose/privacy-first.png",
    fallbackGradient: "from-amber-900/60 via-amber-950/80 to-slate-900",
    icon: Lock,
    badgeBg: "bg-[#FAF0E6]",
    badgeTextColor: "text-[#C28447]",
  },
  {
    title: "Dedicated Support",
    description:
      "Personalized matchmaker support helping families every step of the way.",
    image: "/images/why-choose/dedicated-support.png",
    fallbackGradient: "from-rose-950/60 via-stone-900/80 to-slate-900",
    icon: Headphones,
    badgeBg: "bg-[#FCEAEE]",
    badgeTextColor: "text-[#8B263E]",
  },
];

export function WhyChooseUsSection() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FDFBF7] border-y border-brand-border/40 relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C58D5F_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-[#C58D5F] uppercase tracking-[0.25em]">
            WHY CHOOSE HUMNIKAH?
          </span>
          <div className="w-10 h-[2px] bg-[#C58D5F]/60 mx-auto my-2.5 rounded-full" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-[#1D184C] mt-2">
            A Platform You Can <span className="text-[#C58D5F]">Trust</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed max-w-xl mx-auto font-sans">
            We go beyond profiles to ensure safety, privacy, and genuine connections for a blessed future.
          </p>
        </ScrollReveal>

        {/* 4 Cards Grid */}
        <ScrollReveal
          variant="fade-up"
          staggerChildren={0.12}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const hasError = imageErrors[idx];

            return (
              <ScrollRevealItem key={idx} variant="fade-up">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-brand-gold/30 transition-all duration-300 flex flex-col h-full group"
                >
                  {/* Next.js Image Container with 1:1 Aspect Ratio */}
                  <div className={`relative w-full aspect-square overflow-hidden bg-[#F5F2EB] ${hasError ? `bg-gradient-to-br ${feature.fallbackGradient}` : ''}`}>
                    {!hasError && (
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={600}
                        height={600}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        onError={() => handleImageError(idx)}
                        priority={idx === 0}
                      />
                    )}
                  </div>

                  {/* Overlapping Badge Icon */}
                  <div className="-mt-7 ml-5 sm:ml-6 relative z-10">
                    <div
                      className={`w-[50px] h-[50px] rounded-full border-4 border-white shadow-md flex items-center justify-center ${feature.badgeBg} ${feature.badgeTextColor} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon size={22} strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 pt-3 flex flex-col flex-1">
                    <h3 className="text-lg sm:text-xl font-playfair font-bold text-[#1D184C] mb-2 group-hover:text-[#C58D5F] transition-colors leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollRevealItem>
            );
          })}
        </ScrollReveal>

        {/* Social Impact Highlight Banner */}
        <ScrollReveal variant="fade-up" className="mt-14">
          <div className="bg-gradient-to-r from-[#1D184C] via-[#2A2364] to-[#1D184C] rounded-2xl p-4 sm:p-5 text-white shadow-lg border border-brand-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs sm:text-sm font-semibold">
              <span className="flex items-center gap-2 bg-brand-gold/20 text-brand-gold px-3.5 py-1.5 rounded-full border border-brand-gold/30">
                🎁 2.5% Revenue Donated to Charity
              </span>
              <span className="flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3.5 py-1.5 rounded-full border border-emerald-400/30">
                ♿ 100% Free Service for Physically Disabled
              </span>
            </div>

            <a
              href="/about#our-purpose"
              className="text-xs text-brand-gold hover:underline font-bold whitespace-nowrap"
            >
              Learn More About Our Values &rarr;
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

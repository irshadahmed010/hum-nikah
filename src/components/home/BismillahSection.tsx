"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

export function BismillahSection() {
  return (
    <section className="relative py-10 sm:py-14 bg-gradient-to-b from-brand-cream via-white to-brand-cream border-b border-brand-border/40 overflow-hidden">
      {/* Background Decorative Ambient Radial Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[320px] sm:w-[540px] lg:w-[700px] h-32 sm:h-44 bg-brand-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Decorative Ornament & Small Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-3.5 sm:mb-5"
        >
          <div className="h-[1px] w-10 sm:w-20 bg-gradient-to-r from-transparent via-brand-gold/60 to-brand-gold" />
          <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-emerald text-[11px] sm:text-xs font-bold uppercase tracking-widest shadow-2xs">
            <Sparkles size={13} className="text-brand-gold shrink-0 animate-pulse" />
            <span>Blessed Beginnings</span>
            <Sparkles size={13} className="text-brand-gold shrink-0 animate-pulse" />
          </div>
          <div className="h-[1px] w-10 sm:w-20 bg-gradient-to-l from-transparent via-brand-gold/60 to-brand-gold" />
        </motion.div>

        {/* Bismillah Calligraphy Artwork */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative inline-flex items-center justify-center my-2 sm:my-3.5 w-full"
        >
          <div className="inline-flex max-w-full items-center justify-center px-5 sm:px-12 py-4 sm:py-6 md:py-7 rounded-[10px] bg-white/90 backdrop-blur-sm border border-brand-gold/30 shadow-sm hover:border-brand-gold hover:shadow-md transition-all duration-300">
            <svg
              viewBox="0 0 600 95"
              className="w-full min-w-[260px] max-w-[340px] xs:max-w-[440px] sm:max-w-[580px] md:max-w-[700px] lg:max-w-[800px] h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Bismillahir Rahmanir Raheem"
            >
              <defs>
                <linearGradient id="blessedBismillahGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1D184C" />
                  <stop offset="35%" stopColor="#651514" />
                  <stop offset="70%" stopColor="#C58D5F" />
                  <stop offset="100%" stopColor="#8F6B38" />
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="56%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-bold select-none"
                fill="url(#blessedBismillahGradient)"
                style={{
                  fontSize: "66px",
                  fontFamily: "var(--font-amiri), 'Amiri', 'Traditional Arabic', 'Scheherazade New', serif",
                  direction: "rtl",
                  letterSpacing: "0.5px",
                }}
              >
                بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </text>
            </svg>
          </div>
        </motion.div>

        {/* Translation & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-3.5 sm:mt-4 space-y-1.5"
        >
          <p className="text-[13px] sm:text-[15px] md:text-[17px] font-playfair italic text-brand-charcoal font-bold max-w-xl mx-auto leading-relaxed">
            &ldquo;In the name of Allah, the Most Gracious, the Most Merciful&rdquo;
          </p>
          
          <div className="flex items-center justify-center gap-2 pt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60" />
            <p className="text-[11px] sm:text-xs md:text-[13px] text-brand-secondary font-medium tracking-wide">
              Every sacred union begins with His divine grace and guidance
            </p>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60" />
          </div>
        </motion.div>

        {/* Subtle Bottom Ornamental Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-2 mt-5 sm:mt-6"
        >
          <div className="h-[1px] w-12 sm:w-28 bg-gradient-to-r from-transparent to-brand-border" />
          <div className="rotate-45 w-2 h-2 rounded-[1px] bg-brand-gold/60" />
          <div className="h-[1px] w-12 sm:w-28 bg-gradient-to-l from-transparent to-brand-border" />
        </motion.div>

      </div>
    </section>
  );
}

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
          className="relative inline-block my-1.5 sm:my-2.5 w-full"
        >
          {/* Bismillah in real Arabic calligraphy text (HTML, not SVG, so glyphs/diacritics shape correctly on every device) */}
          <div className="py-4 sm:py-6 px-4 sm:px-8 rounded-3xl bg-white/80 backdrop-blur-xs border border-brand-gold/25 shadow-sm hover:shadow-md transition-shadow max-w-2xl mx-auto">
            <p
              dir="rtl"
              lang="ar"
              aria-label="Bismillahir Rahmanir Raheem"
              className="font-amiri font-bold leading-[1.9] sm:leading-[1.7] bg-gradient-to-br from-[#1D184C] via-[#651514] to-[#8F6B38] bg-clip-text text-transparent text-[34px] sm:text-[46px] md:text-[56px] lg:text-[64px] tracking-normal"
            >
              بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </p>
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

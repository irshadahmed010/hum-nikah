"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { OFFICE_LOCATIONS } from "@/data/locationsData";
import Link from "next/link";

export function LocationsSection() {
  return (
    <section id="locations" className="scroll-mt-24 py-12 sm:py-14 bg-white relative overflow-hidden border-t border-brand-border/40">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand-gold/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1D184C]/10 border border-[#1D184C]/20 text-[#1D184C] text-xs font-bold uppercase tracking-widest shadow-xs">
            <Building2 size={16} className="text-brand-gold" />
            <span>MULTIPLE LOCATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-brand-charcoal leading-tight">
            Our Regional Locations <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D184C] via-[#651514] to-brand-gold">
              Across Multiple States
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-normal sm:font-light max-w-2xl mx-auto leading-relaxed">
            Our relationship managers and regional representatives are available across multiple states to assist families with personal care, privacy, and matchmaking.
          </p>
        </ScrollReveal>

        {/* Locations Grid */}
        <ScrollReveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {OFFICE_LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="bg-brand-cream/40 rounded-3xl p-6 border border-brand-border/80 hover:border-brand-gold/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full relative"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-playfair font-bold text-[#1D184C] group-hover:text-brand-gold transition-colors">
                    {loc.state}
                  </h3>
                  {loc.isHeadquarters && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-gold/20 text-[#1D184C] font-bold uppercase tracking-wider border border-brand-gold/40">
                      HQ
                    </span>
                  )}
                </div>

                {/* Address */}
                <div className="space-y-3 text-xs text-slate-700 font-medium">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={16} className="text-brand-gold shrink-0 mt-0.5" />
                    <span className="leading-relaxed text-slate-600 font-normal">{loc.address}</span>
                  </div>

                  {loc.phone && (
                    <div className="pt-2 pb-1 border-y border-brand-border/40 flex flex-col gap-2 text-xs">
                      <a
                        href={`tel:${loc.phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-2 text-slate-800 font-semibold hover:text-brand-gold hover:underline transition-colors"
                      >
                        <Phone size={14} className="text-brand-gold shrink-0" />
                        <span>{loc.phone}</span>
                      </a>
                      {loc.phone2 && (
                        <a
                          href={`tel:${loc.phone2.replace(/\s/g, "")}`}
                          className="inline-flex items-center gap-2 text-slate-800 font-semibold hover:text-brand-gold hover:underline transition-colors"
                        >
                          <Phone size={14} className="text-brand-gold shrink-0" />
                          <span>{loc.phone2}</span>
                        </a>
                      )}
                    </div>
                  )}

                  {loc.email && (
                    <div className="flex items-center gap-2.5">
                      <Mail size={15} className="text-brand-gold shrink-0" />
                      <a
                        href={`mailto:${loc.email}`}
                        className="text-slate-600 font-normal hover:text-brand-gold transition-colors"
                      >
                        {loc.email}
                      </a>
                    </div>
                  )}

                  {loc.timing && (
                    <div className="flex items-center gap-2.5 pt-1">
                      <Clock size={15} className="text-emerald-600 shrink-0" />
                      <span className="text-slate-500 font-normal">{loc.timing}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 mt-6 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <Link
                  href="/submit-biodata"
                  className="text-[#1D184C] font-bold hover:text-brand-gold transition-colors flex items-center gap-1"
                >
                  <span>Submit Biodata</span> &rarr;
                </Link>
              </div>
            </div>
          ))}
        </ScrollReveal>

      </div>
    </section>
  );
}

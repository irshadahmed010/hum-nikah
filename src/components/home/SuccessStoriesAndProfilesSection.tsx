import React from "react";
import { Quote } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// Note: Replace with real, consented stories as available. Until then, show at most
// three, labelled generically (no names), and never add Review/AggregateRating schema.
const testimonials = [
  {
    quote: "HumNikah helped me find a life partner who shares my values and respects my family. Alhamdulillah!",
    label: "HumNikah member, New Delhi",
  },
  {
    quote: "Finding a compatible partner with mutual religious goals was so simple. Highly recommend HumNikah!",
    label: "HumNikah member, Mumbai",
  },
  {
    quote: "Alhamdulillah, we found each other here. The platform respects privacy, values, and security.",
    label: "HumNikah member, Hyderabad",
  },
];

export function SuccessStoriesAndProfilesSection() {
  return (
    <section className="py-12 bg-brand-cream/30 border-t border-[#651514] overflow-hidden">
      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <ScrollReveal variant="fade-up">
          <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest">
            WHAT FAMILIES SAY
          </span>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-brand-charcoal mt-3">
            Happy Hearts, Successful Nikahs
          </h2>
        </ScrollReveal>
      </div>

      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t) => (
          <figure
            key={t.label}
            className="bg-brand-cream/80 border border-brand-border rounded-2xl p-6 relative shadow-xs flex flex-col justify-between"
          >
            <Quote className="text-brand-gold/10 w-8 h-8 absolute top-4 right-4 pointer-events-none" />
            <blockquote className="text-brand-charcoal text-sm italic leading-relaxed font-normal">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 pt-4 border-t border-brand-border/60 text-[11px] text-brand-secondary">
              {t.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { CITY_CONTENT } from "@/data/cityContent";
import { cityAnchor } from "@/data/seo-meta";

export function CityLinksSection() {
  return (
    <section className="py-12 bg-white border-t border-brand-border/40">
      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal">
          Muslim Matrimony Across India
        </h2>
        <p className="mt-3 text-sm text-brand-secondary max-w-xl mx-auto">
          Explore our{" "}
          <Link href="/muslim-matrimony-india" className="text-brand-gold font-semibold hover:underline">
            Muslim matrimony in India
          </Link>{" "}
          guide, or find verified matchmaking for your city.
        </p>
        <p className="mt-4 text-sm text-brand-secondary max-w-xl mx-auto">
          Need a biodata format? Download our{" "}
          <Link href="/blog/muslim-biodata-format-for-marriage" className="text-brand-gold font-semibold hover:underline">
            free Muslim biodata format (Word &amp; PDF)
          </Link>
          . Muslim rishta chahiye? Apna biodata{" "}
          <Link href="/submit-biodata" className="text-brand-gold font-semibold hover:underline">
            free submit karein
          </Link>{" "}
          ya{" "}
          <a
            href="/whatsapp?src=home-hinglish"
            rel="nofollow noopener"
            className="text-brand-gold font-semibold hover:underline"
          >
            WhatsApp par baat karein
          </a>
          .
        </p>
        <ul className="mt-6 flex flex-wrap justify-center gap-3">
          {CITY_CONTENT.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/muslim-matrimony/${c.slug}`}
                className="inline-block px-4 py-2 rounded-full border border-brand-border bg-brand-cream/60 text-sm font-medium text-brand-charcoal hover:border-brand-gold hover:text-brand-gold transition-colors"
              >
                {cityAnchor(c.slug, c.city)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

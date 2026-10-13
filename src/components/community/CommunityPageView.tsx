import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SITE_URL } from "@/lib/site";
import { CITY_CONTENT } from "@/data/cityContent";
import { COMMUNITY_PAGES, type CommunityPage } from "@/data/communities";

export function CommunityPageView({ page }: { page: CommunityPage }) {
  const pageUrl = `${SITE_URL}/muslim-matrimony/${page.slug}`;
  const related = CITY_CONTENT.filter((c) => page.relatedCities.includes(c.slug));
  const otherPages = COMMUNITY_PAGES.filter((p) => p.slug !== page.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Muslim Matrimony in India",
            item: `${SITE_URL}/muslim-matrimony-india`,
          },
          { "@type": "ListItem", position: 3, name: page.navLabel, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-brand-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-[#1D184C] text-white py-12 sm:py-16 border-b border-brand-gold/20">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-slate-300 mb-4 flex-wrap"
          >
            <Link href="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-slate-500" />
            <Link href="/muslim-matrimony-india" className="hover:text-brand-gold transition-colors">
              Muslim Matrimony in India
            </Link>
            <ChevronRight size={12} className="text-slate-500" />
            <span className="text-brand-gold">{page.navLabel}</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-playfair font-bold text-white leading-[1.15] text-[28px] sm:text-4xl lg:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-6 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              {page.intro[0]}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/submit-biodata"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-gold text-brand-charcoal font-bold rounded-xl hover:bg-white transition-colors shadow-lg"
              >
                Submit Your Biodata <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/919019082205?text=Assalamu%20alaikum%2C%20I%20want%20to%20submit%20biodata"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
              >
                WhatsApp a Matchmaker
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white border-b border-brand-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-[15px] sm:text-base text-black leading-relaxed">
          {page.intro.slice(1).map((p) => (
            <p key={p}>{p}</p>
          ))}
          {page.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-2xl font-playfair font-bold text-brand-charcoal mb-3">
                {section.heading}
              </h2>
              {section.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-brand-cream border-b border-brand-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mb-6">
            {page.placesHeading}
          </h2>
          <div className="space-y-6">
            {page.places.map((place) => (
              <div key={place.heading}>
                <h3 className="text-lg font-playfair font-bold text-brand-charcoal mb-2">
                  {place.heading}
                </h3>
                <p className="text-[15px] text-black leading-relaxed">{place.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[15px] text-black">
            {related.length === 1 ? "See also: " : "See also city pages: "}
            {related.map((c, i) => (
              <span key={c.slug}>
                {i > 0 && ", "}
                <Link
                  href={`/muslim-matrimony/${c.slug}`}
                  className="text-brand-gold font-semibold hover:underline"
                >
                  Muslim matrimony in {c.city}
                </Link>
              </span>
            ))}
            {". "}
            <Link
              href="/muslim-matrimony-india"
              className="text-brand-gold font-semibold hover:underline"
            >
              Muslim matrimony in India
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white border-b border-brand-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal text-center mb-8">
            {page.navLabel} Matrimony: FAQs
          </h2>
          <div className="space-y-3">
            {page.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-brand-cream/60 border border-brand-border/60 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-4 sm:p-5 cursor-pointer list-none font-semibold text-brand-charcoal text-[15px]">
                  <span>{faq.q}</span>
                  <span className="text-brand-gold text-lg leading-none shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-4 sm:px-5 pb-5 border-t border-brand-border/40">
                  <p className="mt-3 text-[15px] text-black leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/submit-biodata"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1D184C] text-white font-bold rounded-xl hover:bg-brand-gold hover:text-brand-charcoal transition-colors"
          >
            Submit Biodata <ArrowRight size={16} />
          </Link>
          <p className="mt-8 text-sm text-brand-secondary">
            More communities:{" "}
            {otherPages.map((p, i) => (
              <span key={p.slug}>
                {i > 0 && " · "}
                <Link
                  href={`/muslim-matrimony/${p.slug}`}
                  className="text-brand-gold font-semibold hover:underline"
                >
                  {p.navLabel}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </section>
    </main>
  );
}

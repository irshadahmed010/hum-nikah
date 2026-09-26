import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  Lock,
  Headphones,
  HeartHandshake,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import { SITE_URL, SITE_NAME } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { OFFICE_LOCATIONS } from "@/data/locationsData";
import { CITY_CONTENT, getCityContent } from "@/data/cityContent";

interface PageProps {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return OFFICE_LOCATIONS.map((office) => ({ city: office.city.toLowerCase() }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const content = getCityContent(slug);

  if (!content) {
    return { title: "Muslim Matrimony – City Not Found" };
  }

  return buildMetadata({
    title: `Muslim Matrimony in ${content.city} – Verified Nikah Matches`,
    description: `${content.tagline}. HumNikah offers verified, Shariah-compliant Muslim matchmaking for families in ${content.city}, ${content.state}, with dedicated relationship managers and complete privacy.`,
    path: `/muslim-matrimony/${content.slug}`,
  });
}

const whyChoose = [
  {
    icon: ShieldCheck,
    title: "100% Verified Profiles",
    body: "Every biodata is manually screened using government ID and phone verification, with respectful home visits by our field representatives before activation.",
  },
  {
    icon: Lock,
    title: "Privacy & Modesty First",
    body: "Photos, contact details and documents are never publicly searchable. Your information is shared only with matches you and your family approve.",
  },
  {
    icon: Headphones,
    title: "Dedicated Relationship Managers",
    body: "A senior matchmaker personally shortlists profiles, coordinates introductions, and guides your family through every stage of the search.",
  },
  {
    icon: HeartHandshake,
    title: "Rooted in Shariah",
    body: "We treat Nikah as a sacred covenant, encourage Wali involvement, and keep every introduction respectful and purposeful.",
  },
];

const steps = [
  {
    n: "1",
    title: "Submit Your Biodata",
    body: "Share your details and partner preferences through our secure form. A relationship manager reviews it and reaches out to understand your expectations.",
  },
  {
    n: "2",
    title: "Get Verified",
    body: "We verify identity, education or profession, marital status and residence so every member searches with confidence.",
  },
  {
    n: "3",
    title: "Receive Curated Matches",
    body: "Your matchmaker shares hand-picked, aligned profiles — never an open database — and discusses each one with you and your family.",
  },
  {
    n: "4",
    title: "Connect with Barakah",
    body: "When both sides express interest, we facilitate a respectful introduction between the families, insha'Allah leading to Nikah.",
  },
];

export default async function CityMatrimonyPage({ params }: PageProps) {
  const { city: slug } = await params;
  const content = getCityContent(slug);

  if (!content) {
    notFound();
  }

  const office = OFFICE_LOCATIONS.find(
    (location) => location.city.toLowerCase() === content.slug
  );

  const pageUrl = `${SITE_URL}/muslim-matrimony/${content.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#office-${content.slug}`,
        name: `HumNikah ${content.city}`,
        url: pageUrl,
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
        telephone: office?.phone
          ? `+${office.phone.replace(/[^0-9]/g, "")}`
          : undefined,
        email: office?.email ?? "connect@humnikah.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: office?.address,
          addressLocality: content.city,
          addressRegion: content.state,
          addressCountry: "IN",
        },
        areaServed: { "@type": "City", name: content.city },
      },
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
          {
            "@type": "ListItem",
            position: 3,
            name: `Muslim Matrimony in ${content.city}`,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: content.faqs.map((faq) => ({
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

      {/* Hero */}
      <section className="relative bg-[#1D184C] text-white py-12 sm:py-16 overflow-hidden border-b border-brand-gold/20">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#651514]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-slate-300 mb-4 flex-wrap"
          >
            <Link href="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-slate-500" />
            <Link
              href="/muslim-matrimony-india"
              className="hover:text-brand-gold transition-colors"
            >
              Muslim Matrimony in India
            </Link>
            <ChevronRight size={12} className="text-slate-500" />
            <span className="text-brand-gold">{content.city}</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles size={14} className="animate-pulse text-brand-gold" />
              <span>{content.state}</span>
            </div>

            <h1 className="font-playfair font-bold text-white leading-[1.15]">
              <span className="block text-[28px] sm:text-4xl lg:text-5xl">
                Muslim Matrimony in {content.city}
              </span>
              <span className="block text-[#F3B979] italic text-lg sm:text-2xl lg:text-[26px] mt-3 leading-snug">
                {content.tagline}
              </span>
            </h1>

            <p className="mt-6 text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
              HumNikah helps {content.city} families find verified, Shariah-compliant
              Nikah matches with dedicated relationship managers, walk-in support at
              our head office, and complete privacy.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/submit-biodata"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-gold text-brand-charcoal font-bold rounded-xl hover:bg-white transition-colors shadow-lg"
              >
                Submit Your Biodata
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
              >
                Talk to a Matchmaker
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 sm:py-16 bg-white border-b border-brand-border/50">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mb-5">
              Trusted Muslim Matrimony for {content.city} Families
            </h2>
            <div className="space-y-4 text-[15px] sm:text-base text-black leading-relaxed">
              {content.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-base font-playfair font-bold text-brand-charcoal mb-3">
                Communities we serve in {content.city}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {content.communities.map((community) => (
                  <li
                    key={community}
                    className="flex items-start gap-2.5 bg-brand-cream/60 border border-brand-border/60 rounded-xl px-4 py-2.5"
                  >
                    <CheckCircle2 size={16} className="text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-black">{community}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 space-y-4 text-[15px] text-black leading-relaxed">
              <p>{content.areasServed}</p>
              <p>{content.localNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-12 sm:py-16 bg-brand-cream border-b border-brand-border/50">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
              The HumNikah Difference
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-brand-charcoal mt-2">
              Why {content.city} Families Choose HumNikah
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {whyChoose.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-brand-border/80 shadow-sm hover:shadow-md hover:border-brand-gold/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-light-cream text-brand-emerald flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-playfair font-bold text-brand-charcoal mb-2">
                  {title}
                </h3>
                <p className="text-sm text-black leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 sm:py-16 bg-white border-b border-brand-border/50">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
              Simple &amp; Guided
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-brand-charcoal mt-2">
              How Muslim Matchmaking Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {steps.map((step) => (
              <div
                key={step.n}
                className="bg-brand-cream/60 rounded-2xl p-6 border border-brand-border/60"
              >
                <div className="w-10 h-10 rounded-full bg-brand-emerald text-white font-bold flex items-center justify-center mb-4">
                  {step.n}
                </div>
                <h3 className="text-base font-playfair font-bold text-brand-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-black leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office + map */}
      <section className="py-12 sm:py-16 bg-brand-cream border-b border-brand-border/50">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border/80 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-playfair font-bold text-brand-charcoal mb-4">
                HumNikah {content.city} Office
              </h2>
              <ul className="space-y-3.5 text-sm text-black">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                  <span>{office?.address ?? `${content.city}, ${content.state}`}</span>
                </li>
                {office?.phone && (
                  <li className="flex items-center gap-3">
                    <Phone size={18} className="text-brand-gold shrink-0" />
                    <a
                      href={`tel:${office.phone.replace(/\s/g, "")}`}
                      className="hover:text-brand-gold transition-colors"
                    >
                      {office.phone}
                    </a>
                  </li>
                )}
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-brand-gold shrink-0" />
                  <a
                    href={`mailto:${office?.email ?? "connect@humnikah.com"}`}
                    className="hover:text-brand-gold transition-colors"
                  >
                    {office?.email ?? "connect@humnikah.com"}
                  </a>
                </li>
                {office?.timing && (
                  <li className="flex items-center gap-3">
                    <Clock size={18} className="text-brand-gold shrink-0" />
                    <span>{office.timing}</span>
                  </li>
                )}
              </ul>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  content.mapQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-emerald hover:text-brand-gold transition-colors"
              >
                View on Google Maps <ArrowRight size={15} />
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden border border-brand-border/80 shadow-sm h-[300px] lg:h-auto bg-brand-beige">
              <iframe
                title={`HumNikah ${content.city} office location`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  content.mapQuery
                )}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-white border-b border-brand-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
              Good to Know
            </span>
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal mt-2">
              Muslim Matrimony in {content.city} — FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {content.faqs.map((faq) => (
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
                <div className="px-4 sm:px-5 pb-5 pt-0 border-t border-brand-border/40">
                  <p className="mt-3 text-[15px] text-black leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>

          <p className="mt-6 text-sm text-brand-secondary text-center">
            More questions?{" "}
            <Link href="/faq" className="text-brand-gold font-semibold hover:underline">
              Read our full FAQ
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="text-brand-gold font-semibold hover:underline">
              contact our team
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-brand-cream">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1D184C] to-[#651514] text-white rounded-2xl p-6 sm:p-10 shadow-md border border-brand-gold/30 text-center max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-playfair font-bold mb-2">
              Begin Your Nikah Journey in {content.city}
            </h2>
            <p className="text-slate-200 text-sm font-light leading-relaxed mb-6">
              Submit your biodata for free and a senior matchmaker will reach out to
              understand what you and your family are looking for.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/submit-biodata"
                className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-charcoal font-bold rounded-lg px-6 py-3 hover:bg-white transition-colors"
              >
                Submit Biodata <ArrowRight size={16} />
              </Link>
              <Link
                href="/muslim-matrimony-india"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold rounded-lg px-6 py-3 hover:bg-white/20 transition-colors"
              >
                Muslim Matrimony in India
              </Link>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-brand-secondary">
            {SITE_NAME} serves Muslim families across India.{" "}
            {CITY_CONTENT.filter((city) => city.slug !== content.slug)
              .slice(0, 3)
              .map((city) => (
                <span key={city.slug}>
                  <Link
                    href={`/muslim-matrimony/${city.slug}`}
                    className="text-brand-gold font-semibold hover:underline"
                  >
                    Muslim Matrimony in {city.city}
                  </Link>{" "}
                </span>
              ))}
          </p>
        </div>
      </section>
    </main>
  );
}

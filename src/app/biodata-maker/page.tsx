import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Download,
  HelpCircle,
  ArrowRight,
  BookOpen,
  ChevronRight,
  Printer,
  Copy,
} from "lucide-react";

import { SITE_URL } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { BiodataMakerClient } from "@/components/biodata-maker/BiodataMakerClient";

const TITLE = "Free Muslim Marriage Biodata Maker Online | HumNikah";
const DESCRIPTION =
  "Create a free Muslim marriage biodata online in minutes. Beautiful Islamic templates for boy and girl. Download PDF or Word, copy for WhatsApp. 100% free.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  absoluteTitle: TITLE,
  description: DESCRIPTION,
  path: "/biodata-maker",
});

const HOW_TO_STEPS = [
  {
    name: "Select Boy or Girl Format",
    text: "Choose whether you are creating a biodata for a Muslim groom (boy) or bride (girl). The bride's layout automatically incorporates the Wali (guardian) information according to Islamic principles.",
  },
  {
    name: "Enter Personal & Deen Details",
    text: "Fill in age, height, education, profession, and religious practices (such as 5 daily prayers, Sunnah lifestyle, or Hijab). Keep it honest and concise.",
  },
  {
    name: "Add Family Background & Partner Preferences",
    text: "Add parent details, siblings, hometown, and realistic partner expectations regarding values, education, and location.",
  },
  {
    name: "Review Live Preview in Your Preferred Theme",
    text: "Choose between Royal Emerald, Classic Ivory Parchment, or Modern Minimal. Check all details for accuracy and privacy.",
  },
  {
    name: "Print to PDF or Copy for WhatsApp",
    text: "Download a print-ready PDF, save as an image, or copy formatted WhatsApp text with bold headers and bullet points with one click.",
  },
];

const FAQS = [
  {
    q: "Is this Muslim marriage biodata maker really free?",
    a: "Yes. HumNikah's Muslim marriage biodata maker is 100% free with no sign-up, no hidden fees, and no watermark. Submitting your biodata to HumNikah for matchmaking is also completely free.",
  },
  {
    q: "What is the difference between a Muslim boy and girl marriage biodata?",
    a: "A Muslim girl's biodata respectfully includes her Wali's (father or legal guardian) name, relationship, and contact details, so that proposals can be addressed through family channels. A boy's biodata highlights his career, ability to provide, and family background.",
  },
  {
    q: "Can I download my biodata as a PDF?",
    a: "Yes. Simply click the 'Print / Download PDF' button. You can save it directly as a crisp, high-resolution PDF file on your computer or mobile device.",
  },
  {
    q: "What sensitive information should I leave out of my marriage biodata?",
    a: "Never include your Aadhaar number, PAN, passport number, full street house number, or personal bank details. Share sensitive details only after families meet in person and establish mutual trust.",
  },
  {
    q: "Can I copy the biodata to share on WhatsApp?",
    a: "Yes. Click 'Copy for WhatsApp' to copy a cleanly formatted message with bold titles, bullets, and an Arabic Bismillah header ready to paste into any chat.",
  },
];

export default function BiodataMakerPage() {
  const pageUrl = `${SITE_URL}/biodata-maker`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${pageUrl}#webapp`,
        name: "Free Muslim Marriage Biodata Maker",
        url: pageUrl,
        applicationCategory: "LifestyleApplication",
        operatingSystem: "All",
        browserRequirements: "Requires JavaScript",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
        description:
          "Free online tool to create and download beautiful Islamic marriage biodata for Muslim boys and girls. Instant PDF print and WhatsApp format.",
      },
      {
        "@type": "HowTo",
        "@id": `${pageUrl}#howto`,
        name: "How to Make a Muslim Biodata for Marriage",
        description:
          "Step-by-step guide to generating a professional, Shariah-compliant Muslim marriage biodata for boy or girl.",
        step: HOW_TO_STEPS.map((step, idx) => ({
          "@type": "HowToStep",
          position: idx + 1,
          name: step.name,
          text: step.text,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          {
            "@type": "ListItem",
            position: 3,
            name: "Muslim Biodata Format",
            item: `${SITE_URL}/blog/muslim-biodata-format-for-marriage`,
          },
          { "@type": "ListItem", position: 4, name: "Biodata Maker", item: pageUrl },
        ],
      },
    ],
  };

  return (
    <div className="bg-brand-cream/30 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-brand-deep-green to-[#132219] text-white pt-12 pb-16 sm:pb-20 border-b border-brand-gold/30">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-xs text-gray-300">
              <li>
                <Link href="/" className="hover:text-brand-gold transition-colors">
                  Home
                </Link>
              </li>
              <li><ChevronRight size={12} /></li>
              <li>
                <Link href="/blog/muslim-biodata-format-for-marriage" className="hover:text-brand-gold transition-colors">
                  Biodata Format
                </Link>
              </li>
              <li><ChevronRight size={12} /></li>
              <li className="text-brand-gold font-medium" aria-current="page">
                Biodata Maker
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-bold mb-4 uppercase tracking-wider">
              <Sparkles size={14} /> Free Islamic Matrimonial Generator
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair tracking-tight text-white mb-4 leading-tight">
              Free Muslim Marriage Biodata Maker
            </h1>
            <p className="text-base sm:text-lg text-gray-200 font-light leading-relaxed">
              Create a dignified, elegant Muslim marriage biodata for boy or girl in minutes.
              Designed with Bismillah calligraphy, Deen &amp; education sections, Wali details, and instant PDF download.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tool Main Container */}
      <main className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16">
        <BiodataMakerClient />
      </main>

      {/* SEO Content & Guide Section */}
      <section className="py-16 bg-white border-t border-brand-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 5-Step Guide */}
          <div className="mb-14">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block mb-1">
              Step-by-Step Instructions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-brand-deep-green mb-6">
              How to Make a Biodata for Muslim Marriage in 5 Steps
            </h2>
            <div className="space-y-4">
              {HOW_TO_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-brand-cream/40 border border-brand-border/60"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-emerald text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-brand-deep-green mb-1">
                      {step.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-charcoal/85 leading-relaxed font-light">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Islamic Sections Overview */}
          <div className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-brand-deep-green mb-4">
              What Makes an Islamic Marriage Biodata Different?
            </h2>
            <p className="text-sm text-brand-charcoal/85 leading-relaxed mb-6 font-light">
              Unlike a corporate resume or conventional biodata, a Muslim marriage biodata emphasizes <strong>character, Deen, and family reputation</strong>. In Islam, marriage (Nikah) is a blessed covenant between two families. An authentic Islamic biodata reflects modesty, honesty, and transparency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-brand-border/60 bg-brand-cream/30">
                <h4 className="font-bold text-sm text-brand-deep-green mb-1 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-gold" /> Religious Practice (Deen)
                </h4>
                <p className="text-xs text-brand-charcoal/80 leading-relaxed font-light">
                  Mentioning 5 daily prayers (Salah), fasting, Quran recitation, and modesty (Hijab or beard) helps ensure spiritual compatibility from day one.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-brand-border/60 bg-brand-cream/30">
                <h4 className="font-bold text-sm text-brand-deep-green mb-1 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-gold" /> Wali (Guardian) Involvement
                </h4>
                <p className="text-xs text-brand-charcoal/80 leading-relaxed font-light">
                  For sisters, mentioning the Wali (father or guardian) ensures proper Islamic etiquette, shielding the bride and fostering honorable communication.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-brand-border/60 bg-brand-cream/30">
                <h4 className="font-bold text-sm text-brand-deep-green mb-1 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-gold" /> Halal Livelihood
                </h4>
                <p className="text-xs text-brand-charcoal/80 leading-relaxed font-light">
                  Transparency regarding education, honest profession, and lawful (Halal) income builds trust without excessive materialism.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-brand-border/60 bg-brand-cream/30">
                <h4 className="font-bold text-sm text-brand-deep-green mb-1 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-gold" /> Privacy &amp; Dignity
                </h4>
                <p className="text-xs text-brand-charcoal/80 leading-relaxed font-light">
                  Do not disclose full street addresses or government ID numbers. Photos remain optional and can be shared privately upon family mutual consent.
                </p>
              </div>
            </div>
          </div>

          {/* Download Word & PDF links */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-cream via-brand-beige/50 to-brand-cream border border-brand-gold/40 mb-14">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold font-playfair text-lg text-brand-deep-green mb-1">
                  Prefer Editing in Microsoft Word or Adobe PDF?
                </h3>
                <p className="text-xs text-brand-charcoal/80 font-light">
                  Download our free offline template files for boy and girl in .docx and .pdf formats.
                </p>
              </div>
              <Link
                href="/blog/muslim-biodata-format-for-marriage#download-the-free-templates-word-and-pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-deep-green hover:bg-brand-emerald text-white text-xs font-bold transition-all shrink-0 shadow-sm"
              >
                <Download size={14} /> Download Word &amp; PDF Templates
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-12">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block mb-1">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-brand-deep-green mb-6">
              Muslim Marriage Biodata Maker: FAQs
            </h2>
            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="p-4 sm:p-5 rounded-xl bg-brand-cream/40 border border-brand-border/60">
                  <h3 className="text-sm sm:text-base font-bold text-brand-deep-green mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-charcoal/85 leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* HumNikah Matchmaking CTA */}
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-brand-deep-green to-brand-navy text-white border border-brand-gold/40 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold font-playfair text-brand-gold mb-2">
              Ready to Share Your Biodata With Genuine Muslim Families?
            </h2>
            <p className="text-xs sm:text-sm text-gray-200 max-w-xl mx-auto mb-6 font-light leading-relaxed">
              Submitting your biodata to HumNikah is free. Every profile is manually screened and identity documents are checked. Introductions are made through families with the Wali involved.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/submit-biodata"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-gold hover:bg-[#d69f3d] text-brand-deep-green font-bold text-xs sm:text-sm transition-all shadow-md"
              >
                Submit Biodata (Free)
              </Link>
              <a
                href="/whatsapp?src=biodata-maker-cta"
                rel="nofollow noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm transition-all shadow-sm"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

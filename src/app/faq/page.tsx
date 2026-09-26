import React from "react";
import type { Metadata } from "next";
import { FaqPageClient } from "./FaqPageClient";
import { buildMetadata } from "@/lib/seo";
import { FAQ_SCHEMA } from "@/data/faqData";

export const metadata: Metadata = buildMetadata({
  title: "Muslim Matrimony FAQs",
  description:
    "Answers to common questions about HumNikah's Islamic matchmaking service — membership, matches, privacy, verification, family involvement, and payments.",
  path: "/faq",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_SCHEMA.map((entry) => ({
    "@type": "Question",
    name: entry.q,
    acceptedAnswer: { "@type": "Answer", text: entry.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqPageClient />
    </>
  );
}

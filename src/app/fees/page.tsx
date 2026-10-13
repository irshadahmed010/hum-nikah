import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Heart, ShieldCheck, Wallet } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Fees & Payment Structure",
  description:
    "HumNikah's fee model explained: half in advance on registration, half after your Nikah is fixed. No hidden fees. Free for physically disabled members.",
  path: "/fees",
});

const steps = [
  {
    icon: Wallet,
    title: "Half in advance",
    body: "Paid on registration. It covers the start of personalised matchmaking, your matchmaker's time and profile verification, which begin immediately.",
  },
  {
    icon: Heart,
    title: "Half after marriage",
    body: "Paid only once your Nikah is successfully fixed. The amount is agreed with your family in advance, so there are no surprises.",
  },
  {
    icon: ShieldCheck,
    title: "No hidden charges",
    body: "No recurring monthly fees and no percentage-based broker commission. Speak to your relationship manager if your family needs a custom arrangement.",
  },
];

export default function FeesPage() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <section className="bg-[#1D184C] text-white py-12 sm:py-16 border-b border-brand-gold/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-playfair font-bold text-3xl sm:text-5xl leading-tight">
            Fees &amp; Payment Structure
          </h1>
          <p className="mt-5 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            A fair, success-aligned model. You pay half to begin, and half only
            after your Nikah is fixed.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white border-b border-brand-border/50">
        <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal text-center mb-10">
            How the payment works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-brand-cream/60 rounded-2xl p-6 border border-brand-border/60"
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

      <section className="py-12 sm:py-16 bg-brand-cream border-b border-brand-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6 text-[15px] text-black leading-relaxed">
          <h2 className="text-2xl font-playfair font-bold text-brand-charcoal">
            Free for physically disabled members
          </h2>
          <p>
            Physical disability should never be a barrier to finding a righteous
            life partner. HumNikah provides matchmaking with zero registration or
            match fees for physically disabled and differently abled members.
          </p>

          <h2 className="text-2xl font-playfair font-bold text-brand-charcoal pt-4">
            Payment methods
          </h2>
          <p>
            We accept UPI, bank transfers, and major credit and debit cards. For
            office visits, a cheque can also be accepted.
          </p>

          <h2 className="text-2xl font-playfair font-bold text-brand-charcoal pt-4">
            Refunds
          </h2>
          <p>
            The advance covers matchmaking, background checks and verification
            that begin as soon as you enrol. Full details are in our{" "}
            <Link href="/terms" className="text-brand-gold font-semibold hover:underline">
              Terms &amp; Conditions
            </Link>
            .
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <Link
              href="/submit-biodata"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1D184C] text-white font-semibold rounded-xl hover:bg-brand-gold hover:text-brand-charcoal transition-colors"
            >
              Submit Biodata <ArrowRight size={16} />
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center px-6 py-3 border border-brand-border bg-white font-semibold rounded-xl hover:border-brand-gold transition-colors"
            >
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { ThankYouTracker } from "./ThankYouTracker";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-[60vh] bg-brand-cream flex items-center py-16">
      <ThankYouTracker />
      <div className="max-w-xl mx-auto px-4 text-center">
        <CheckCircle2 size={48} className="mx-auto text-brand-gold mb-4" />
        <h1 className="text-3xl font-playfair font-bold text-brand-charcoal mb-3">
          Biodata Submitted. JazakAllah Khair
        </h1>
        <p className="text-brand-secondary leading-relaxed mb-6">
          Our team will review your biodata carefully and connect with you on
          WhatsApp. Here is what happens next:
        </p>
        <ol className="text-left text-sm text-black space-y-2 mb-8 list-decimal pl-6">
          <li>A relationship manager reviews your biodata.</li>
          <li>We contact you on WhatsApp or phone to understand your expectations.</li>
          <li>We verify your profile and begin sharing curated proposals.</li>
        </ol>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-[#1D184C] text-white font-semibold hover:bg-brand-gold hover:text-brand-charcoal transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </main>
  );
}

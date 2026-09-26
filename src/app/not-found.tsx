import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Home, FileText, BookOpen, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/submit-biodata", label: "Submit Biodata", icon: FileText },
  { href: "/blog", label: "Read the Blog", icon: BookOpen },
  { href: "/contact", label: "Contact Us", icon: Phone },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-cream flex items-center justify-center px-4 py-20">
      <div className="max-w-lg w-full text-center bg-white rounded-3xl border border-brand-border/80 shadow-sm p-8 sm:p-12">
        <p className="text-6xl font-playfair font-bold text-brand-gold">404</p>
        <h1 className="mt-4 text-2xl sm:text-3xl font-playfair font-bold text-brand-charcoal">
          This Page Could Not Be Found
        </h1>
        <p className="mt-3 text-sm text-brand-secondary leading-relaxed">
          The page you are looking for may have moved or no longer exists. Let us
          help you find your way back to your Nikah journey.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-emerald text-white font-semibold text-sm hover:bg-brand-emerald-hover transition-colors"
            >
              <Icon size={16} className="text-brand-gold" />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

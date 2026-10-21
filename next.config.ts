import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  async redirects() {
    return [
      // 1. Domain canonicalization: redirect .in domain to .com
      {
        source: "/:path*",
        has: [{ type: "host", value: "^(www\\.)?humnikah\\.in$" }],
        destination: "https://www.humnikah.com/:path*",
        permanent: true,
      },
      // 2. Domain canonicalization: redirect non-www apex (humnikah.com) to www (www.humnikah.com)
      // Consolidates divided impressions and links in Google Search Console
      {
        source: "/:path*",
        has: [{ type: "host", value: "^humnikah\\.com$" }],
        destination: "https://www.humnikah.com/:path*",
        permanent: true,
      },
      // 3. Legacy .html URLs indexed by Google -> clean URL redirects
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/fees.html",
        destination: "/fees",
        permanent: true,
      },
      {
        source: "/faq.html",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/gallery.html",
        destination: "/gallery",
        permanent: true,
      },
      {
        source: "/privacy.html",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/terms.html",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/submit-biodata.html",
        destination: "/submit-biodata",
        permanent: true,
      },
      {
        source: "/muslim-matrimony-india.html",
        destination: "/muslim-matrimony-india",
        permanent: true,
      },
      // 4. Retired legacy blogs indexed in Google -> 301 redirect to relevant active guides
      // Prevents 404 drops in Google Search Console and preserves link equity
      {
        source: "/blog/mahr-in-islam-meaning-significance-modern-practices",
        destination: "/blog/muslim-marriage-bureau-fees-bangalore",
        permanent: true,
      },
      {
        source: "/blog/understanding-sunnah-of-nikah-spiritual-practical-foundations",
        destination: "/muslim-matrimony-india",
        permanent: true,
      },
      {
        source: "/blog/choosing-the-right-life-partner-islamic-guidelines",
        destination: "/blog/how-to-find-a-muslim-bride-or-groom-in-bangalore",
        permanent: true,
      },
      {
        source: "/blog/role-of-wali-and-family-involvement-in-blessed-nikah",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/blog/pre-nikah-checklist-essential-conversations-for-muslim-couples",
        destination: "/blog/questions-to-ask-before-a-muslim-marriage",
        permanent: true,
      },
      {
        source: "/blog/building-harmony-after-nikah-rights-kindness-ethics",
        destination: "/blog/first-rishta-meeting-checklist-for-families",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
  },
};

export default nextConfig;

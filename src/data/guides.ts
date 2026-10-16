/**
 * Curated blog guides linked from the city pages and the India page.
 * Labels live here (not in the database) so city pages stay static and need no
 * blog query; the slug is the contract with the `blogs` table.
 */
export type GuideLink = { slug: string; label: string };

const VERIFY: GuideLink = {
  slug: "how-to-verify-a-muslim-rishta",
  label: "How to Verify a Muslim Rishta Safely",
};

const BIODATA: GuideLink = {
  slug: "muslim-biodata-format-for-marriage",
  label: "Muslim Biodata Format for Marriage (Free Template)",
};

export const CITY_GUIDES: Record<string, GuideLink[]> = {
  bengaluru: [
    { slug: "muslim-marriage-bureau-bangalore-guide", label: "Choosing the Best Muslim Marriage Bureau in Bangalore" },
    { slug: "muslim-marriage-bureau-fees-bangalore", label: "Muslim Marriage Bureau Fees in Bangalore: What to Expect" },
    { slug: "how-to-find-a-muslim-bride-or-groom-in-bangalore", label: "How to Find a Muslim Bride or Groom in Bangalore" },
    { slug: "muslim-matrimony-for-it-professionals-bangalore", label: "Muslim Matrimony for IT Professionals in Bangalore" },
    { slug: "first-rishta-meeting-checklist-for-families", label: "First Rishta Meeting: A Simple Checklist for Families" },
    { slug: "questions-to-ask-before-a-muslim-marriage", label: "Questions to Ask Before a Muslim Marriage: Family Checklist" },
    VERIFY,
    BIODATA,
  ],
  hyderabad: [
    { slug: "muslim-marriage-bureau-hyderabad-guide", label: "Muslim Marriage Bureau in Hyderabad: Rishta Guide" },
    VERIFY,
  ],
  mumbai: [
    { slug: "konkani-muslim-matrimony-mumbai-guide", label: "Konkani Muslim Matrimony in Mumbai" },
    VERIFY,
  ],
  chennai: [VERIFY],
  kochi: [VERIFY],
  vijayawada: [VERIFY],
};

/** Guides listed on the India page and in the footer. */
export const ALL_GUIDES: GuideLink[] = [
  CITY_GUIDES.bengaluru[0],
  CITY_GUIDES.hyderabad[0],
  CITY_GUIDES.mumbai[0],
  VERIFY,
  BIODATA,
];

export function getGuidesForCity(citySlug: string): GuideLink[] {
  return CITY_GUIDES[citySlug] ?? [];
}

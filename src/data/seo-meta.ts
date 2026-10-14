/**
 * Per-city SEO copy. Titles must stay <= 60 chars and descriptions <= 155;
 * buildMetadata() throws at build time if they do not.
 * One primary keyword per page (see the keyword map in the SEO spec).
 */
export interface CityMeta {
  /** Primary keyword this page owns. */
  primaryKeyword: string;
  title: string;
  description: string;
  h1: string;
  /** H2 for the intro section (carries a keyword variant). */
  introHeading: string;
  /** Two sentences shown under the H1; must contain the primary keyword. */
  heroIntro: string;
  /** Overrides "How Muslim Matchmaking Works in {City}". */
  howItWorksHeading?: string;
  /** Overrides "Muslim Matrimony in {City} — FAQs". */
  faqHeading?: string;
}

/** Anchor text for links to a city page. Bangalore is searched as "Bangalore". */
export function cityAnchor(
  slug: string,
  city: string,
  variant?: "bureau" | "matrimony"
): string {
  if (slug === "bengaluru") {
    return variant === "matrimony"
      ? "Muslim matrimony in Bangalore"
      : "Muslim marriage bureau in Bangalore";
  }
  return `Muslim matrimony in ${city}`;
}

export const CITY_META: Record<string, CityMeta> = {
  bengaluru: {
    primaryKeyword: "muslim marriage bureau in Bangalore",
    title: "Muslim Marriage Bureau in Bangalore | HumNikah",
    description:
      "Muslim marriage bureau in Bangalore (Cox Town). Manual profile screening, Wali involved, private. Submit your biodata or chat on WhatsApp.",
    h1: "Muslim Marriage Bureau in Bangalore",
    introHeading: "Muslim Matrimony and Matchmaking in Bangalore (Bengaluru)",
    heroIntro:
      "Our office is in Cox Town, Bengaluru, and families are welcome by appointment. Every introduction involves the Wali where the bride's family wishes.",
    howItWorksHeading: "How Our Muslim Marriage Bureau in Bangalore Works",
    faqHeading: "Muslim Marriage Bureau in Bangalore — FAQs",
  },
  chennai: {
    primaryKeyword: "Tamil Muslim matrimony Chennai",
    title: "Muslim Marriage Bureau in Chennai | HumNikah",
    description:
      "Muslim matrimony in Chennai for Labbai, Rowther, Marakkayar and Tamil Muslim families. Screened profiles, Wali involved. Submit biodata free.",
    h1: "Tamil Muslim Matrimony in Chennai",
    introHeading: "Muslim Marriage Bureau Services for Chennai Families",
    heroIntro:
      "HumNikah offers Tamil Muslim matrimony in Chennai for Labbai, Rowther, Marakkayar and other Tamil Muslim families. Every biodata is manually screened, and introductions are arranged between families with the Wali involved.",
    howItWorksHeading: "How Our Muslim Marriage Bureau in Chennai Works",
  },
  hyderabad: {
    primaryKeyword: "Muslim matrimony Hyderabad",
    title: "Muslim Matrimony in Hyderabad | Deccani Rishta | HumNikah",
    description:
      "Hyderabadi Muslim rishta and matrimony for Deccani and Urdu-speaking families. Verified profiles, Wali involved. Submit biodata free.",
    h1: "Muslim Matrimony in Hyderabad",
    introHeading: "Hyderabadi Muslim Rishta and Marriage Bureau Support",
    heroIntro:
      "HumNikah provides Muslim matrimony in Hyderabad for Deccani and Urdu-speaking families who prefer a known matchmaker over an open website. Profiles are verified before they are shared, and the Wali is kept informed at every step.",
  },
  kochi: {
    primaryKeyword: "Mappila Muslim matrimony Kochi",
    title: "Mappila Muslim Matrimony in Kochi & Kerala | HumNikah",
    description:
      "Mappila Muslim matrimony in Kochi, Malappuram, Kozhikode, Kannur and Thrissur. Verified profiles, Wali involved. Submit biodata free.",
    h1: "Mappila Muslim Matrimony in Kochi & Kerala",
    introHeading: "Muslim Matrimony in Kerala for Mappila and Malayali Families",
    heroIntro:
      "HumNikah offers Mappila Muslim matrimony in Kochi and across Kerala, with privacy first and a verified process. Photos and contact details are shared only with matches you and your family approve.",
  },
  mumbai: {
    primaryKeyword: "Muslim matrimony Mumbai",
    title: "Muslim Matrimony in Mumbai & Maharashtra | HumNikah",
    description:
      "Konkani, Memon and Urdu-speaking Muslim matrimony in Mumbai, Pune, Malegaon and Bhiwandi. Verified profiles, Wali involved. Submit biodata free.",
    h1: "Muslim Matrimony in Mumbai & Maharashtra",
    introHeading: "Konkani, Memon and Urdu-Speaking Muslim Matchmaking",
    heroIntro:
      "HumNikah offers Muslim matrimony in Mumbai and across Maharashtra, with a relationship manager who does the shortlisting for you. Introductions stay discreet, and the Wali is involved throughout.",
  },
  vijayawada: {
    primaryKeyword: "Muslim matrimony Vijayawada",
    title: "Muslim Matrimony in Vijayawada & Andhra Pradesh | HumNikah",
    description:
      "Muslim matrimony in Vijayawada, Visakhapatnam, Guntur, Kurnool, Nellore and Kadapa. Verified profiles, Wali involved. Submit biodata free.",
    h1: "Muslim Matrimony in Vijayawada & Andhra Pradesh",
    introHeading: "Muslim Matchmaking for Andhra Pradesh Families",
    heroIntro:
      "HumNikah offers Muslim matrimony in Vijayawada and across Andhra Pradesh, working in Telugu and Urdu. Families receive a short, curated list of verified profiles instead of an open database.",
  },
};

import { BLOG_POSTS } from "./blogsData";

/** Blog guides shown as "Related guides" on city pages. */
export const CITY_GUIDE_SLUGS: Record<string, string[]> = {
  bengaluru: ["muslim-marriage-bureau-bangalore-guide", "how-to-verify-a-muslim-rishta"],
  hyderabad: ["muslim-marriage-bureau-hyderabad-guide", "how-to-verify-a-muslim-rishta"],
  mumbai: ["konkani-muslim-matrimony-mumbai-guide", "how-to-verify-a-muslim-rishta"],
  chennai: ["how-to-verify-a-muslim-rishta"],
  kochi: ["how-to-verify-a-muslim-rishta"],
  vijayawada: ["how-to-verify-a-muslim-rishta"],
};

/** Guides listed on the India page and in the footer. */
export const ALL_GUIDE_SLUGS = [
  "muslim-marriage-bureau-bangalore-guide",
  "muslim-marriage-bureau-hyderabad-guide",
  "konkani-muslim-matrimony-mumbai-guide",
  "how-to-verify-a-muslim-rishta",
  "muslim-biodata-format-for-marriage",
];

export function getGuidesForCity(citySlug: string) {
  return (CITY_GUIDE_SLUGS[citySlug] ?? [])
    .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
}

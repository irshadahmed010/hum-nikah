import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getBlogIndex } from "@/lib/blogs";
import { COMMUNITY_PAGES } from "@/data/communities";
import { OFFICE_LOCATIONS } from "@/data/locationsData";

// Regenerate at most once an hour so newly published blog posts appear.
export const revalidate = 3600;

type StaticRoute = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const STATIC_ROUTES: StaticRoute[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/muslim-matrimony-india", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/submit-biodata", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/fees", priority: 0.5, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
];


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const cityEntries: MetadataRoute.Sitemap = OFFICE_LOCATIONS.map((office) => ({
    url: `${SITE_URL}/muslim-matrimony/${office.city.toLowerCase()}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogEntries: MetadataRoute.Sitemap = (await getBlogIndex()).map(
    ({ slug, lastModified }) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    }),
  );

  const communityEntries: MetadataRoute.Sitemap = COMMUNITY_PAGES.map((page) => ({
    url: `${SITE_URL}/muslim-matrimony/${page.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...cityEntries, ...communityEntries, ...blogEntries];
}

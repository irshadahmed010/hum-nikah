import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { BLOG_POSTS } from "@/data/blogsData";
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
  { path: "/gallery", priority: 0.6, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/faq", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
];

async function getBlogEntries(): Promise<
  { slug: string; lastModified?: Date }[]
> {
  // Prefer live posts from Supabase; fall back to the bundled static posts
  // (and never let a missing DB / env break sitemap generation).
  try {
    if (
      !process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.SUPABASE_SERVICE_ROLE_KEY
    ) {
      throw new Error("supabase env not configured");
    }
    const { supabase } = await import("@/lib/supabase");
    const { data, error } = await supabase
      .from("blogs")
      .select("slug, created_at, updated_at")
      .order("created_at", { ascending: false });

    if (error || !data || data.length === 0) {
      throw error ?? new Error("no blog rows");
    }

    return data
      .filter((row: { slug?: string | null }) => Boolean(row.slug))
      .map((row: { slug: string; created_at?: string; updated_at?: string }) => {
        const stamp = row.updated_at || row.created_at;
        return {
          slug: row.slug,
          lastModified: stamp ? new Date(stamp) : undefined,
        };
      });
  } catch {
    // Static posts: omit lastModified rather than stamping every build with now().
    return BLOG_POSTS.map((post) => ({ slug: post.slug }));
  }
}

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

  const blogEntries: MetadataRoute.Sitemap = (await getBlogEntries()).map(
    ({ slug, lastModified }) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    }),
  );

  return [...staticEntries, ...cityEntries, ...blogEntries];
}

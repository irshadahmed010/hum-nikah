import { cache } from "react";
import { supabase } from "./supabase";
import { BLOG_POSTS } from "@/data/blogsData";

/**
 * Single source of truth for blog content: the Supabase `blogs` table with
 * fallback to static bundled posts in src/data/blogsData.ts.
 */

export type BlogAuthor = { name?: string; role?: string; avatar?: string };

export type BlogRecord = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  publishedAt: string;
  readTime: string;
  author: BlogAuthor | null;
  image: string;
  featured?: boolean | null;
  tags?: string[] | null;
  created_at?: string | null;
  updated_at?: string | null;
  // Optional SEO columns; absent on posts written in the dashboard.
  seoTitle?: string | null;
  seoDescription?: string | null;
  imageAlt?: string | null;
  primaryKeyword?: string | null;
  faqs?: { q: string; a: string }[] | null;
};

const SELECT = "*";

/** All published posts, newest first. Merges Supabase blogs with static bundled posts so all SEO articles are live. */
export const getBlogs = cache(async (): Promise<BlogRecord[]> => {
  let dbBlogs: BlogRecord[] = [];
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select(SELECT)
      .order("created_at", { ascending: false });

    if (!error && data && data.length > 0) {
      dbBlogs = data as BlogRecord[];
    } else if (error) {
      console.warn("getBlogs DB query returned error, using bundled posts:", error.message);
    }
  } catch (err) {
    console.warn("getBlogs failed, using bundled posts:", err);
  }

  // Combine: DB versions take precedence for posts edited via admin dashboard.
  // Any static bundled posts that are not yet in the DB are appended so newly added SEO guides are never lost.
  const dbSlugs = new Set(dbBlogs.map((b) => b.slug));
  const missingBundled = (BLOG_POSTS as unknown as BlogRecord[]).filter(
    (p) => !dbSlugs.has(p.slug)
  );

  return [...dbBlogs, ...missingBundled];
});

export const getBlogBySlug = cache(async (slug: string): Promise<BlogRecord | null> => {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select(SELECT)
      .eq("slug", slug)
      .maybeSingle();

    if (!error && data) {
      return data as BlogRecord;
    }
  } catch (err) {
    console.warn(`getBlogBySlug(${slug}) DB query failed:`, err);
  }
  const fallback = BLOG_POSTS.find((p) => p.slug === slug);
  return (fallback as unknown as BlogRecord) ?? null;
});

/** Up to `limit` other posts, for the "Related articles" block. */
export const getRelatedBlogs = cache(
  async (slug: string, limit = 3): Promise<BlogRecord[]> => {
    const all = await getBlogs();
    return all.filter((p) => p.slug !== slug).slice(0, limit);
  },
);

/** Slugs + timestamps for the sitemap and generateStaticParams. */
export const getBlogIndex = cache(
  async (): Promise<{ slug: string; lastModified?: Date }[]> => {
    const slugsMap = new Map<string, Date | undefined>();

    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("slug, created_at, updated_at")
        .order("created_at", { ascending: false });

      if (!error && data && data.length > 0) {
        for (const row of data) {
          if (row.slug) {
            const stamp = row.updated_at || row.created_at;
            const date = stamp ? new Date(stamp) : undefined;
            slugsMap.set(
              row.slug,
              date && !Number.isNaN(date.getTime()) ? date : undefined
            );
          }
        }
      }
    } catch (err) {
      console.warn("getBlogIndex DB query failed:", err);
    }

    // Merge static bundled posts so all 12 articles are always present in sitemap.xml
    for (const post of BLOG_POSTS) {
      if (!slugsMap.has(post.slug)) {
        slugsMap.set(post.slug, new Date("2026-10-16"));
      }
    }

    return Array.from(slugsMap.entries()).map(([slug, lastModified]) => ({
      slug,
      lastModified,
    }));
  },
);

/** Specific posts by slug, in the order requested (for curated guide lists). */
export async function getBlogsBySlugs(slugs: string[]): Promise<BlogRecord[]> {
  if (slugs.length === 0) return [];
  const all = await getBlogs();
  return slugs
    .map((slug) => all.find((p) => p.slug === slug))
    .filter((p): p is BlogRecord => Boolean(p));
}

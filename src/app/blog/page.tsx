import { supabase } from "@/lib/supabase";
import BlogClient from "./BlogClient";
import { BLOG_POSTS } from "@/data/blogsData";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 3600;

export const metadata: Metadata = buildMetadata({
  title: "Islamic Marriage & Nikah Guidance Blog",
  description:
    "Practical guidance on Nikah, Islamic marriage, biodata, family meetings and finding the right rishta, from the HumNikah matchmaking team.",
  path: "/blog",
});

export default async function BlogPage() {
  const { data: blogs, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching blogs:", error);
  }

  // Fallback to static data if table doesn't exist or is empty
  const displayBlogs = blogs && blogs.length > 0 ? blogs : BLOG_POSTS;

  return <BlogClient blogs={displayBlogs} />;
}

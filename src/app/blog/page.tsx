import { supabase } from "@/lib/supabase";
import BlogClient from "./BlogClient";
import { mergeWithBundledPosts } from "@/data/blogsData";
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

  // Database posts plus any bundled posts not yet in the database
  const displayBlogs = mergeWithBundledPosts(blogs);

  return <BlogClient blogs={displayBlogs} />;
}

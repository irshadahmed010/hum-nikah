import BlogClient from "./BlogClient";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getBlogs } from "@/lib/blogs";

// Direct database writes (seeding scripts) are picked up within this window;
// admin create/edit/delete call revalidatePath and appear immediately.
export const revalidate = 300;

export const metadata: Metadata = buildMetadata({
  title: "Islamic Marriage & Nikah Guidance Blog",
  description:
    "Practical guidance on Nikah, Islamic marriage, biodata, family meetings and finding the right rishta, from the HumNikah matchmaking team.",
  path: "/blog",
});

export default async function BlogPage() {
  const blogs = await getBlogs();
  return <BlogClient blogs={blogs} />;
}

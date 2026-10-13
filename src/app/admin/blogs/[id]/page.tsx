import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import EditBlogForm from "./EditBlogForm";


export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const { data: blog, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error("Failed to load blog for editing:", error.message);
  }

  if (!blog) {
    notFound();
  }

  return <EditBlogForm blog={blog} />;
}

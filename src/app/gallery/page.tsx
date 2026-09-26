import { supabase } from "@/lib/supabase";
import GalleryClient from "./GalleryClient";
import { GALLERY_ITEMS } from "@/data/galleryData";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 3600;

export const metadata: Metadata = buildMetadata({
  title: "Nikah Moments & Success Stories Gallery",
  description:
    "Moments from Nikah ceremonies, family meetings and HumNikah events celebrating couples who found their match through our matchmaking service.",
  path: "/gallery",
});

export default async function GalleryPage() {
  const { data: gallery, error } = await supabase
    .from("gallery")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching gallery:", error);
  }

  const items = gallery && gallery.length > 0 ? gallery : GALLERY_ITEMS;

  return <GalleryClient initialItems={items} />;
}

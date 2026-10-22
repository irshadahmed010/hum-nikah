import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import AboutClient from "./AboutClient";

export const metadata: Metadata = buildMetadata({
  title: "About HumNikah: Verified Muslim Marriage Bureau",
  description:
    "Discover HumNikah: personal Muslim matchmaking with manual ID verification, Wali involvement and complete privacy. Free biodata submission across India.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutClient />;
}

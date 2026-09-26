import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import AboutClient from "./AboutClient";

export const metadata: Metadata = buildMetadata({
  title: "About Us – Trusted Muslim Marriage Bureau",
  description:
    "Meet the team behind HumNikah, a Muslim marriage bureau with walk-in offices across India helping families find halal, verified Nikah matches.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutClient />;
}

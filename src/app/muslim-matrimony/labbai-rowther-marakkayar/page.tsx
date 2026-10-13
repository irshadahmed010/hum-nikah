import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getCommunityPage } from "@/data/communities";
import { CommunityPageView } from "@/components/community/CommunityPageView";

const page = getCommunityPage("labbai-rowther-marakkayar")!;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  absoluteTitle: page.title,
  description: page.description,
  path: "/muslim-matrimony/labbai-rowther-marakkayar",
});

export default function Page() {
  return <CommunityPageView page={page} />;
}

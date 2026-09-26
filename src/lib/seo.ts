import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./site";

type SeoInput = {
  /** Page title without the brand suffix — the root template adds " | HumNikah". */
  title: string;
  /** Description, 140–160 characters. */
  description: string;
  /** Route path starting with "/". Used for the canonical and Open Graph URL. */
  path: string;
  /** Share image, absolute or root-relative. Falls back to the generated OG image. */
  image?: string;
  /** Exact title to use verbatim (skips the brand template). */
  absoluteTitle?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

/**
 * Builds page metadata so canonical, Open Graph and Twitter tags cannot drift
 * apart. `openGraph.url`/`canonical` are emitted relative to `metadataBase`.
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  absoluteTitle,
  type = "website",
  publishedTime,
  modifiedTime,
}: SeoInput): Metadata {
  const canonical = path === "/" ? "/" : path;
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const ogTitle = absoluteTitle ?? `${title} | ${SITE_NAME}`;
  // Default to the generated brand share image so every page has og:image.
  // (A child `openGraph` object overrides the file-based opengraph-image.)
  const shareImage = image ?? "/opengraph-image";

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical },
    openGraph: {
      type,
      title: ogTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      images: [{ url: shareImage }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [shareImage],
    },
  };
}

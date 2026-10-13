"use client";

import { useEffect } from "react";
import { captureAttribution, trackEvent } from "@/lib/analytics";

/** Captures UTM attribution and fires whatsapp_click / tel_click on link clicks. */
export function AnalyticsEvents() {
  useEffect(() => {
    captureAttribution();

    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]");
      const href = link?.getAttribute("href") ?? "";
      if (href.startsWith("/downloads/")) {
        const name = href.split("/").pop() ?? "";
        trackEvent("biodata_download", {
          gender: name.includes("-boy.") ? "boy" : "girl",
          format: name.split(".").pop(),
          page_path: window.location.pathname,
        });
      } else if (href.startsWith("tel:")) {
        trackEvent("tel_click", { link_url: href, page_path: window.location.pathname });
      } else if (
        href.includes("wa.me/") ||
        href.includes("api.whatsapp.com") ||
        href.startsWith("/whatsapp")
      ) {
        const src = new URL(href, window.location.origin).searchParams.get("src") ?? undefined;
        trackEvent("whatsapp_click", { link_url: href, src, page_path: window.location.pathname });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

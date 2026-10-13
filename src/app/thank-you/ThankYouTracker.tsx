"use client";

import { useEffect } from "react";
import { getAttribution, trackEvent } from "@/lib/analytics";

export function ThankYouTracker() {
  useEffect(() => {
    const { utm_source, utm_medium, utm_campaign } = getAttribution();
    trackEvent("form_submit", { form: "biodata", utm_source, utm_medium, utm_campaign });
  }, []);
  return null;
}

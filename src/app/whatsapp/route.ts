import { NextRequest, NextResponse } from "next/server";

// Personal WhatsApp chat with the HumNikah team (no open group).
const NUMBER = "919019082205";

const MESSAGES: Record<string, string> = {
  default: "Assalamu alaikum, I would like to talk about a rishta.",
  "blog-bangalore":
    "Assalamu alaikum, I read your Bangalore Muslim marriage bureau guide and would like to talk about a rishta.",
  "blog-hyderabad":
    "Assalamu alaikum, I read your Hyderabad Muslim marriage bureau guide and would like to talk about a rishta.",
  "blog-konkani":
    "Assalamu alaikum, I read your Konkani Muslim matrimony guide and would like to talk about a rishta.",
  "blog-verify":
    "Assalamu alaikum, I read your guide on verifying a Muslim rishta and have a question.",
  "blog-biodata":
    "Assalamu alaikum, I read your biodata guide and would like to submit a biodata.",
  "india-hinglish": "Assalamu alaikum, mujhe rishta ke liye baat karni hai.",
  "home-hinglish": "Assalamu alaikum, mujhe rishta ke liye baat karni hai.",
  contact: "Assalamu alaikum, I would like to talk about a rishta.",
};

export function GET(req: NextRequest) {
  const raw = req.nextUrl.searchParams.get("src") ?? "site";
  const src = raw.replace(/[^a-z0-9_-]/gi, "").slice(0, 40) || "site";
  // blog-bangalore-cta -> blog-bangalore
  const base = src.split("-").slice(0, 2).join("-");
  const text = `${MESSAGES[base] ?? MESSAGES.default} [${src}]`;
  const res = NextResponse.redirect(
    `https://wa.me/${NUMBER}?text=${encodeURIComponent(text)}`,
    302,
  );
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  res.headers.set("Cache-Control", "no-store");
  return res;
}

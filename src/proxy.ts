import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

// ponytail: dev fallback only — set AUTH_SECRET in production (see Phase 5 notes).
const JWT_SECRET = process.env.AUTH_SECRET || "humnikah_secure_jwt_secret_2026_key_32_bytes";
const key = new TextEncoder().encode(JWT_SECRET);

export async function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const hostname = host.split(":")[0].toLowerCase();
  const path = request.nextUrl.pathname;

  // 1. Domain canonicalization: redirect apex `humnikah.com` and `.in` domains to `www.humnikah.com`
  // Consolidates split PageRank and impressions in Google Search Console
  const isApex = hostname === "humnikah.com";
  const isInDomain = hostname === "humnikah.in" || hostname === "www.humnikah.in";

  if (isApex || isInDomain) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = "www.humnikah.com";
    url.port = "";
    return NextResponse.redirect(url, { status: 301 });
  }

  // 2. Protect all /admin routes
  if (path.startsWith("/admin")) {
    const isLoginPage = path === "/admin/login";
    const sessionCookie = request.cookies.get("admin_session")?.value;

    let isAuthenticated = false;

    if (sessionCookie) {
      try {
        await jwtVerify(sessionCookie, key, {
          algorithms: ["HS256"],
        });
        isAuthenticated = true;
      } catch {
        isAuthenticated = false;
      }
    }

    // Unauthenticated user trying to access protected admin page -> redirect to login
    if (!isAuthenticated && !isLoginPage) {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }

    // Authenticated user trying to access login page -> redirect to admin dashboard
    if (isAuthenticated && isLoginPage) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Run on all routes except Next.js internals, static assets, and images
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

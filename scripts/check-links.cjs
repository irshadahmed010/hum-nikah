// Scans every built page for internal links that point nowhere.
// Run after `npm run build`:   npm run check:links
//
// Checks <a href="/..."> targets against the built pages, files in /public, and
// a short list of known dynamic routes. Anchors (#...) and query strings are
// ignored, and external links are not followed.
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const APP = path.join(ROOT, ".next", "server", "app");
const PUBLIC = path.join(ROOT, "public");

// Routes that exist at runtime but are not prerendered HTML.
const DYNAMIC = new Set(["/whatsapp", "/robots.txt", "/sitemap.xml", "/opengraph-image", "/twitter-image"]);

function walk(dir, ext, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, ext, out);
    else if (entry.name.endsWith(ext)) out.push(full);
  }
  return out;
}

if (!fs.existsSync(APP)) {
  console.error("No build output found. Run `npm run build` first.");
  process.exit(1);
}

const toRoute = (f) => {
  const r = path.relative(APP, f).replace(/\\/g, "/").replace(/\.html$/, "");
  return r === "index" ? "/" : "/" + r;
};

const pages = walk(APP, ".html").filter((f) => !/^\/(admin|api|_not-found|_global-error)/.test(toRoute(f)));
const routes = new Set(pages.map(toRoute));

const publicFiles = new Set(
  fs.existsSync(PUBLIC) ? walk(PUBLIC, "").map((f) => "/" + path.relative(PUBLIC, f).replace(/\\/g, "/")) : [],
);

const broken = new Map(); // target -> Set(source pages)
let checked = 0;

for (const file of pages) {
  const html = fs.readFileSync(file, "utf8");
  const main = (html.match(/<main[\s\S]*?<\/main>/) || [html])[0];
  const nav = html; // header and footer links count too
  void main;
  for (const m of nav.matchAll(/<a\s[^>]*?href="(\/[^"]*)"/g)) {
    let href = m[1].split("#")[0].split("?")[0];
    if (href.length > 1) href = href.replace(/\/$/, "");
    if (!href) continue;
    checked++;
    if (routes.has(href) || DYNAMIC.has(href) || publicFiles.has(href)) continue;
    if (!broken.has(href)) broken.set(href, new Set());
    broken.get(href).add(toRoute(file));
  }
}

console.log(`pages scanned: ${pages.length}   internal links checked: ${checked}`);

if (broken.size) {
  console.error(`\nBroken internal links (${broken.size}):`);
  for (const [href, from] of broken) {
    console.error(`  ${href}\n      linked from: ${[...from].slice(0, 4).join(", ")}${from.size > 4 ? ", ..." : ""}`);
  }
  process.exit(1);
}

console.log("OK: no broken internal links.");

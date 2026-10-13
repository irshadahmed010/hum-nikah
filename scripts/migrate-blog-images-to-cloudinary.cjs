// Moves any blog hero image that is still hotlinked from a third party
// (e.g. images.unsplash.com) into this project's Cloudinary account, then
// rewrites the row's `image` column to the Cloudinary URL.
//
// Hotlinked images were flagged in the SEO audit: they are outside our control
// and cannot be optimised or guaranteed to stay available.
//
// Usage: node scripts/migrate-blog-images-to-cloudinary.cjs [--dry-run]
const fs = require("fs");
const path = require("path");
const { v2: cloudinary } = require("cloudinary");
const { Client } = require("pg");

const root = path.join(__dirname, "..");
for (const line of fs.readFileSync(path.join(root, ".env"), "utf8").split(/\r?\n/)) {
  const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const dryRun = process.argv.includes("--dry-run");

(async () => {
  const db = new Client({ connectionString: process.env.DATABASE_URL });
  await db.connect();
  try {
    const { rows } = await db.query(
      "select slug, image from public.blogs where image not like 'https://res.cloudinary.com/%' order by created_at desc",
    );

    if (rows.length === 0) {
      console.log("Nothing to migrate: every blog image is already on Cloudinary.");
      return;
    }

    for (const row of rows) {
      console.log(`\n${row.slug}\n  from: ${row.image}`);
      if (dryRun) continue;

      // Cloudinary fetches the remote file server-side.
      const res = await cloudinary.uploader.upload(row.image, {
        folder: "humnikah/blog",
        public_id: row.slug,
        overwrite: true,
        resource_type: "image",
      });

      await db.query("update public.blogs set image = $1, updated_at = now() where slug = $2", [
        res.secure_url,
        row.slug,
      ]);
      console.log(`  to:   ${res.secure_url} (${res.width}x${res.height})`);
    }

    const { rows: left } = await db.query(
      "select count(*)::int as n from public.blogs where image not like 'https://res.cloudinary.com/%'",
    );
    console.log(`\nRemaining non-Cloudinary images: ${left[0].n}`);
  } finally {
    await db.end();
  }
})().catch((e) => {
  console.error("Migration failed:", e.message || e);
  process.exit(1);
});

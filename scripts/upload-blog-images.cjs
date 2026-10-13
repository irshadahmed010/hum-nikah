// Uploads blog hero images to Cloudinary and records their URLs.
// Usage: node scripts/upload-blog-images.cjs "<file>=<slug>" ...
const fs = require("fs");
const path = require("path");
const { v2: cloudinary } = require("cloudinary");

for (const line of fs.readFileSync(path.join(__dirname, "..", ".env"), "utf8").split(/\r?\n/)) {
  const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
}
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const outFile = path.join(__dirname, "..", "content", "blog", "cloudinary-images.json");
const map = fs.existsSync(outFile) ? JSON.parse(fs.readFileSync(outFile, "utf8")) : {};

(async () => {
  for (const arg of process.argv.slice(2)) {
    const [file, slug] = arg.split("=");
    const res = await cloudinary.uploader.upload(file, {
      folder: "humnikah/blog",
      public_id: slug,
      overwrite: true,
      resource_type: "image",
    });
    map[slug] = res.secure_url;
    console.log(slug, "->", res.secure_url, `${res.width}x${res.height}`);
  }
  fs.writeFileSync(outFile, JSON.stringify(map, null, 2));
})().catch((e) => {
  console.error("Upload failed:", e.message || e);
  process.exit(1);
});

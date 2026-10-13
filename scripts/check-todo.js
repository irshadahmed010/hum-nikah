// Fails the build if placeholder text is left in source content.
const fs = require("fs");
const path = require("path");

const ROOTS = ["src"];
const PATTERN = /TODO\(owner\)/;
const hits = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(tsx?|jsx?|json|md)$/.test(entry.name)) {
      fs.readFileSync(full, "utf8")
        .split("\n")
        .forEach((line, i) => {
          if (PATTERN.test(line)) hits.push(`${full}:${i + 1}`);
        });
    }
  }
}

ROOTS.forEach((r) => fs.existsSync(r) && walk(r));

if (hits.length) {
  console.error("Placeholder text found:\n" + hits.join("\n"));
  process.exit(1);
}

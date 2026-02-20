const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.resolve(__dirname, "..");
const buildDir = path.join(rootDir, "build");

if (!fs.existsSync(buildDir)) {
  throw new Error("Build folder not found. Run `npm run build` first.");
}

const generatedRootEntries = [
  "index.html",
  "asset-manifest.json",
  "manifest.json",
  "robots.txt",
  "favicon.ico",
  "logo192.png",
  "logo512.png",
  "static",
  ".nojekyll",
];

for (const entry of generatedRootEntries) {
  fs.rmSync(path.join(rootDir, entry), { recursive: true, force: true });
}

for (const entry of fs.readdirSync(buildDir)) {
  fs.cpSync(path.join(buildDir, entry), path.join(rootDir, entry), {
    recursive: true,
  });
}

fs.writeFileSync(path.join(rootDir, ".nojekyll"), "");

console.log("Synced build artifacts to repository root for GitHub Pages.");

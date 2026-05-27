const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const buildDir = path.join(projectRoot, "build");
const publishEntries = [
  "asset-manifest.json",
  "index.html",
  "manifest.json",
  "robots.txt",
  "static",
];

function assertBuildExists() {
  if (!fs.existsSync(buildDir)) {
    throw new Error("Build directory does not exist. Run the build step first.");
  }
}

function removePublishTargets() {
  for (const entry of publishEntries) {
    fs.rmSync(path.join(projectRoot, entry), { recursive: true, force: true });
  }
}

function copyPublishTargets() {
  for (const entry of publishEntries) {
    const sourcePath = path.join(buildDir, entry);
    const targetPath = path.join(projectRoot, entry);

    if (!fs.existsSync(sourcePath)) {
      continue;
    }

    fs.cpSync(sourcePath, targetPath, { recursive: true });
  }
}

function createPagesSupportFiles() {
  const indexPath = path.join(projectRoot, "index.html");
  const notFoundPath = path.join(projectRoot, "404.html");
  const noJekyllPath = path.join(projectRoot, ".nojekyll");
  const indexHtml = fs.readFileSync(indexPath, "utf8");

  fs.writeFileSync(notFoundPath, indexHtml);
  fs.writeFileSync(noJekyllPath, "");
}

function verifyPublishedFiles() {
  const indexPath = path.join(projectRoot, "index.html");
  const assetManifestPath = path.join(projectRoot, "asset-manifest.json");

  if (!fs.existsSync(indexPath)) {
    throw new Error("Published index.html was not created.");
  }

  if (!fs.existsSync(assetManifestPath)) {
    throw new Error("Published asset-manifest.json was not created.");
  }

  const indexHtml = fs.readFileSync(indexPath, "utf8");
  const assetManifest = JSON.parse(fs.readFileSync(assetManifestPath, "utf8"));
  const mainJsPath = assetManifest.files?.["main.js"];
  const mainCssPath = assetManifest.files?.["main.css"];

  if (!mainJsPath || !indexHtml.includes(mainJsPath)) {
    throw new Error("Published index.html does not reference the latest main.js file.");
  }

  if (mainCssPath && !indexHtml.includes(mainCssPath)) {
    throw new Error("Published index.html does not reference the latest main.css file.");
  }

  const mainJsFile = path.join(projectRoot, mainJsPath.replace(/^\//, ""));

  if (!fs.existsSync(mainJsFile)) {
    throw new Error("Published main.js file does not exist in the project root.");
  }
}

function main() {
  assertBuildExists();
  removePublishTargets();
  copyPublishTargets();
  createPagesSupportFiles();
  verifyPublishedFiles();

  console.log("GitHub Pages publish files were updated successfully.");
}

main();

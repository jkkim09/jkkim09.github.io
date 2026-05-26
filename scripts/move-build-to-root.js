const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const buildDir = path.join(projectRoot, "build");

if (!fs.existsSync(buildDir)) {
  throw new Error("Build directory does not exist. Run the build step first.");
}

for (const entry of fs.readdirSync(buildDir)) {
  const sourcePath = path.join(buildDir, entry);
  const targetPath = path.join(projectRoot, entry);

  fs.rmSync(targetPath, { recursive: true, force: true });
  fs.renameSync(sourcePath, targetPath);
}

fs.rmSync(buildDir, { recursive: true, force: true });

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

interface ManifestEntry {
  file: string;
  css?: string[];
  isEntry?: boolean;
}

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const buildDir = path.join(projectRoot, 'build');
const entries = [
  'asset-manifest.json',
  'index.html',
  'manifest.json',
  'robots.txt',
  'favicon.svg',
  'static',
];
const indexPath = path.join(buildDir, 'index.html');
const manifestPath = path.join(buildDir, '.vite', 'manifest.json');

if (!fs.existsSync(indexPath) || !fs.existsSync(manifestPath)) {
  throw new Error(
    'A complete Vite build is required. Run npm run build first.',
  );
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8')) as Record<
  string,
  ManifestEntry
>;
const mainEntry = Object.values(manifest).find((entry) => entry.isEntry);
const indexHtml = fs.readFileSync(indexPath, 'utf8');
if (!mainEntry || !indexHtml.includes(`/${mainEntry.file}`)) {
  throw new Error(
    'The generated HTML does not reference the Vite entry point.',
  );
}

// Validate the complete build before replacing the existing Pages files.
for (const entry of Object.values(manifest)) {
  for (const file of [entry.file, ...(entry.css ?? [])]) {
    if (!fs.existsSync(path.join(buildDir, file)))
      throw new Error(`Missing build asset: ${file}`);
  }
}
for (const entry of entries.filter(
  (entry) => entry !== 'asset-manifest.json',
)) {
  if (!fs.existsSync(path.join(buildDir, entry)))
    throw new Error(`Missing build output: ${entry}`);
}

const files: Record<string, string> = { 'main.js': `/${mainEntry.file}` };
if (mainEntry.css?.[0]) files['main.css'] = `/${mainEntry.css[0]}`;
for (const entry of Object.values(manifest))
  files[entry.file] = `/${entry.file}`;
fs.writeFileSync(
  path.join(buildDir, 'asset-manifest.json'),
  JSON.stringify({ files }, null, 2) + '\n',
);

for (const entry of entries) {
  const target = path.join(projectRoot, entry);
  fs.rmSync(target, { recursive: true, force: true });
  fs.cpSync(path.join(buildDir, entry), target, { recursive: true });
}
fs.writeFileSync(path.join(projectRoot, '404.html'), indexHtml);
fs.writeFileSync(path.join(projectRoot, '.nojekyll'), '');
console.log('GitHub Pages files updated from the verified Vite build.');

const fs = require('fs');
const path = require('path');

const rootDir = "f:\\Service center websites\\chennaiservicecenter.com";

function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of list) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getAllHtmlFiles(rootDir);

const measurementIds = {};
let missingGtag = [];
let multipleGtag = [];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const matches = [...content.matchAll(/googletagmanager\.com\/gtag\/js\?id=([A-Z0-9-]+)/gi)];
  if (matches.length === 0) {
    missingGtag.push(path.relative(rootDir, file));
  } else if (matches.length > 1) {
    multipleGtag.push({ file: path.relative(rootDir, file), matches: matches.map(m => m[1]) });
  } else {
    const id = matches[0][1];
    measurementIds[id] = (measurementIds[id] || 0) + 1;
  }
});

console.log("=== MEASUREMENT IDS FOUND ===");
for (const [id, count] of Object.entries(measurementIds)) {
  console.log(`  ${id}: ${count} files`);
}

console.log(`\nFiles missing gtag.js: ${missingGtag.length}`);
if (missingGtag.length > 0) {
  console.log("Missing:", missingGtag.slice(0, 10));
}

console.log(`\nFiles with multiple gtag.js: ${multipleGtag.length}`);
if (multipleGtag.length > 0) {
  console.log("Multiple:", multipleGtag.slice(0, 10));
}

// Also check gtag('config') patterns
const configIds = {};
htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const matches = [...content.matchAll(/gtag\(\s*['"]config['"]\s*,\s*['"]([^'"]+)['"]/gi)];
  matches.forEach(m => {
    configIds[m[1]] = (configIds[m[1]] || 0) + 1;
  });
});

console.log("\n=== GTAG CONFIG IDS FOUND ===");
for (const [id, count] of Object.entries(configIds)) {
  console.log(`  ${id}: ${count} occurrences`);
}

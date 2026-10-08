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

const htmlFiles = getAllHtmlFiles(rootDir).map(f => {
  const rel = path.relative(rootDir, f).replace(/\\/g, '/');
  return rel === 'index.html' ? 'https://chennaiservicecenter.com/' : `https://chennaiservicecenter.com/${rel}`;
});

console.log(`Total live pages to be in sitemap: ${htmlFiles.length}`);

// Parse sitemap.xml
const sitemapXml = fs.readFileSync(path.join(rootDir, 'sitemap.xml'), 'utf8');
const xmlLocs = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/gi)].map(m => m[1]);
console.log(`URLs currently in sitemap.xml: ${xmlLocs.length}`);

const liveSet = new Set(htmlFiles);
const xmlSet = new Set(xmlLocs);

const missingInXml = htmlFiles.filter(u => !xmlSet.has(u));
const extraInXml = xmlLocs.filter(u => !liveSet.has(u));

console.log(`\nMissing in sitemap.xml: ${missingInXml.length}`);
if (missingInXml.length > 0) {
  console.log("Sample missing:", missingInXml.slice(0, 10));
}

console.log(`\nExtra / non-existent in sitemap.xml: ${extraInXml.length}`);
if (extraInXml.length > 0) {
  console.log("Sample extra:", extraInXml.slice(0, 10));
}

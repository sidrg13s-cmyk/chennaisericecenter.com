const fs = require('fs');
const path = require('path');

const rootDir = "f:\\Service center websites\\chennaiservicecenter.com";

function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of list) {
    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === 'scripts') continue;
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
const sitemapXml = fs.readFileSync(path.join(rootDir, 'sitemap.xml'), 'utf8');

const xmlLocs = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/gi)].map(m => m[1]);

console.log(`Total live HTML files: ${htmlFiles.length}`);
console.log(`Total URLs in sitemap.xml: ${xmlLocs.length}`);

// Check uniqueness
const uniqueLocs = new Set(xmlLocs);
console.log(`Unique URLs in sitemap.xml: ${uniqueLocs.size}`);

// Check if any non-chennaiservicecenter.com or dev URLs exist
const nonProd = xmlLocs.filter(u => !u.startsWith('https://chennaiservicecenter.com/'));
console.log(`Non-production URLs: ${nonProd.length}`);

// Check if every URL corresponds to a real file
let missingFiles = 0;
xmlLocs.forEach(url => {
  let rel = url.replace('https://chennaiservicecenter.com/', '');
  if (!rel) rel = 'index.html';
  const filePath = path.join(rootDir, rel);
  if (!fs.existsSync(filePath)) {
    console.log("Missing on disk:", url, filePath);
    missingFiles++;
  }
});

console.log(`URLs missing on disk: ${missingFiles}`);

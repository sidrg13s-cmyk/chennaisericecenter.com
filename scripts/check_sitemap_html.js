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

const allRelFiles = getAllHtmlFiles(rootDir).map(f => path.relative(rootDir, f).replace(/\\/g, '/'));

const sitemapHtml = fs.readFileSync(path.join(rootDir, 'sitemap.html'), 'utf8');
// match href="..." in sitemap.html
const hrefMatches = [...sitemapHtml.matchAll(/href=["']([^"']+\.html|index\.html|https:\/\/chennaiservicecenter\.com[^"']*)["']/gi)].map(m => m[1]);

console.log(`Live files: ${allRelFiles.length}`);

// Check which live files are linked in sitemap.html
let linkedCount = 0;
let missingInHtml = [];

allRelFiles.forEach(rel => {
  // Can be linked as relative `category/file.html` or `file.html` or full URL
  const base = path.basename(rel);
  if (sitemapHtml.includes(rel) || sitemapHtml.includes(base)) {
    linkedCount++;
  } else {
    missingInHtml.push(rel);
  }
});

console.log(`Live files linked in sitemap.html: ${linkedCount} / ${allRelFiles.length}`);
if (missingInHtml.length > 0) {
  console.log(`Missing in sitemap.html (${missingInHtml.length}):`);
  console.log(missingInHtml);
}

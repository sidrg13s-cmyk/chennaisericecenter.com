const fs = require('fs');
const path = require('path');

const sitemapXmlPath = "f:\\Service center websites\\chennaiservicecenter.com\\sitemap.xml";
let content = fs.readFileSync(sitemapXmlPath, 'utf8');

const updated = content.replace(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g, '<lastmod>2026-10-08</lastmod>');
fs.writeFileSync(sitemapXmlPath, updated, 'utf8');

console.log("Updated lastmod in sitemap.xml to 2026-10-08");

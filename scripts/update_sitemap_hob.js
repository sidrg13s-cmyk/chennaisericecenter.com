const fs = require('fs');
const path = require('path');
const { BRANDS } = require('./hob_brand_data');

const sitemapHtmlPath = path.resolve(__dirname, '../sitemap.html');
let sitemapHtml = fs.readFileSync(sitemapHtmlPath, 'utf8');

const brandLinks = BRANDS.map(b => `          <li><a href="hob/${b.slug}-hob-repair-service-chennai.html" style="color: var(--primary); text-decoration: none; display: inline-block; padding: 4px 0;">📄 ${b.brandName} Hob Repair Chennai</a></li>`).join('\n');

const targetStr = `        <h2 style="font-size: 1.35rem; color: var(--secondary); margin-bottom: 14px; border-bottom: 2px solid var(--primary-light); padding-bottom: 8px;">
          Hob Repair (1 Page)
        </h2>
        <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 10px; list-style: none; padding-left: 0; font-size: 0.9rem;">
          <li><a href="hob/hob-repair-service-chennai.html" style="color: var(--primary); text-decoration: none; display: inline-block; padding: 4px 0;">📄 Hob Repair Service Chennai</a></li>
        </ul>`;

const replacementStr = `        <h2 style="font-size: 1.35rem; color: var(--secondary); margin-bottom: 14px; border-bottom: 2px solid var(--primary-light); padding-bottom: 8px;">
          Hob Repair (33 Pages)
        </h2>
        <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 10px; list-style: none; padding-left: 0; font-size: 0.9rem;">
          <li><a href="hob/hob-repair-service-chennai.html" style="color: var(--primary); text-decoration: none; display: inline-block; padding: 4px 0; font-weight: 700;">📄 Hob Repair Service Chennai (Master)</a></li>
${brandLinks}
        </ul>`;

if (sitemapHtml.includes(targetStr)) {
  sitemapHtml = sitemapHtml.replace(targetStr, replacementStr);
  fs.writeFileSync(sitemapHtmlPath, sitemapHtml, 'utf8');
  console.log('✓ sitemap.html updated successfully with all 32 hob brand links!');
} else {
  console.error('Target string not found in sitemap.html');
}

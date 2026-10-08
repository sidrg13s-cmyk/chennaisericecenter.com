/**
 * update_sitemap_gas_stove.js
 * Updates sitemap.html and sitemap.xml with all 31 Gas Stove brand pages.
 */

const fs = require('fs');
const path = require('path');
const { ALL_GAS_STOVE_BRANDS } = require('./gas_stove_brand_data');

const rootDir = path.resolve(__dirname, '..');

// 1. Update sitemap.html
const sitemapHtmlPath = path.join(rootDir, 'sitemap.html');
if (fs.existsSync(sitemapHtmlPath)) {
  let html = fs.readFileSync(sitemapHtmlPath, 'utf8');

  const stoveLinks = [
    `          <li><a href="gas-stove/gas-stove-repair-service-chennai.html" style="color: var(--primary); text-decoration: none; display: inline-block; padding: 4px 0; font-weight: 700;">📄 Gas Stove Repair Service Chennai (Master)</a></li>`,
    ...ALL_GAS_STOVE_BRANDS.map(b => `          <li><a href="gas-stove/${b.slug}-gas-stove-repair-service-chennai.html" style="color: var(--primary); text-decoration: none; display: inline-block; padding: 4px 0;">📄 ${b.brandName} Gas Stove Repair Chennai</a></li>`)
  ].join('\n');

  const newStoveSection = `      <div class="sitemap-category-box" style="background: #ffffff; padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--surface-border); margin-bottom: 24px;">
        <h2 style="font-size: 1.35rem; color: var(--secondary); margin-bottom: 14px; border-bottom: 2px solid var(--primary-light); padding-bottom: 8px;">
          Gas Stove Repair (${ALL_GAS_STOVE_BRANDS.length + 1} Pages)
        </h2>
        <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 10px; list-style: none; padding-left: 0; font-size: 0.9rem;">
${stoveLinks}
        </ul>
      </div>`;

  // Replace existing Gas Stove section in sitemap.html
  const regex = /<div class="sitemap-category-box"[^>]*>[\s\S]*?<h2[^>]*>[\s\S]*?Gas Stove Repair[\s\S]*?<\/div>/i;
  if (regex.test(html)) {
    html = html.replace(regex, newStoveSection);
    fs.writeFileSync(sitemapHtmlPath, html, 'utf8');
    console.log('✓ Updated sitemap.html with all 31 Gas Stove brands + Master');
  } else {
    console.log('Could not find existing Gas Stove category block in sitemap.html');
  }
}

// 2. Update sitemap.xml
const sitemapXmlPath = path.join(rootDir, 'sitemap.xml');
if (fs.existsSync(sitemapXmlPath)) {
  let xml = fs.readFileSync(sitemapXmlPath, 'utf8');

  const masterUrl = 'https://chennaiservicecenter.com/gas-stove/gas-stove-repair-service-chennai.html';
  if (!xml.includes(masterUrl)) {
    const masterEntry = `  <url>
    <loc>${masterUrl}</loc>
    <lastmod>2026-10-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n`;
    xml = xml.replace('</urlset>', `${masterEntry}</urlset>`);
  }

  // Add all 31 brand URLs if not present
  let addedCount = 0;
  ALL_GAS_STOVE_BRANDS.forEach(b => {
    const brandUrl = `https://chennaiservicecenter.com/gas-stove/${b.slug}-gas-stove-repair-service-chennai.html`;
    if (!xml.includes(brandUrl)) {
      const entry = `  <url>
    <loc>${brandUrl}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
      xml = xml.replace('</urlset>', `${entry}</urlset>`);
      addedCount++;
    }
  });

  fs.writeFileSync(sitemapXmlPath, xml, 'utf8');
  console.log(`✓ Updated sitemap.xml with ${addedCount} new Gas Stove brand URLs`);
}

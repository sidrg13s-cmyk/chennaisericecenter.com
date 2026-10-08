/**
 * verify_gas_stove_brands.js
 * Comprehensive automated verification script for Gas Stove brand pages.
 */

const fs = require('fs');
const path = require('path');
const { ALL_GAS_STOVE_BRANDS } = require('./gas_stove_brand_data');

const rootDir = path.resolve(__dirname, '..');
const gasStoveDir = path.join(rootDir, 'gas-stove');

const AI_BUZZWORDS = [
  'seamless', 'comprehensive', 'cutting-edge', 'state-of-the-art',
  'bespoke', 'robust', 'streamlined', 'holistic', 'unparalleled',
  'meticulously', 'leveraging', 'facilitate', 'optimized solutions',
  'precision-engineered', 'proficient'
];

function verify() {
  console.log('=== Verifying Gas Stove Brand Pages ===\n');

  let errors = [];
  const titles = new Set();
  const metaDescs = new Set();
  const canonicals = new Set();
  const h1s = new Set();

  // Check master file
  const masterPath = path.join(gasStoveDir, 'gas-stove-repair-service-chennai.html');
  if (!fs.existsSync(masterPath)) {
    errors.push('Master file missing: gas-stove-repair-service-chennai.html');
  } else {
    console.log('✓ Master gas-stove-repair-service-chennai.html exists');
  }

  ALL_GAS_STOVE_BRANDS.forEach((brand, idx) => {
    const fileName = `${brand.slug}-gas-stove-repair-service-chennai.html`;
    const filePath = path.join(gasStoveDir, fileName);

    if (!fs.existsSync(filePath)) {
      errors.push(`Missing file: ${fileName}`);
      return;
    }

    const html = fs.readFileSync(filePath, 'utf8');

    // Check title
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : '';
    if (!title) {
      errors.push(`${fileName}: Missing <title>`);
    } else if (titles.has(title)) {
      errors.push(`${fileName}: Duplicate title "${title}"`);
    }
    titles.add(title);

    // Check meta description
    const metaMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
    const meta = metaMatch ? metaMatch[1].trim() : '';
    if (!meta) {
      errors.push(`${fileName}: Missing meta description`);
    } else if (metaDescs.has(meta)) {
      errors.push(`${fileName}: Duplicate meta description`);
    }
    metaDescs.add(meta);

    // Check canonical
    const canMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
    const can = canMatch ? canMatch[1].trim() : '';
    const expectedCan = `https://chennaiservicecenter.com/gas-stove/${brand.slug}-gas-stove-repair-service-chennai.html`;
    if (can !== expectedCan) {
      errors.push(`${fileName}: Canonical mismatch (expected ${expectedCan}, got ${can})`);
    }
    canonicals.add(can);

    // Check H1
    const h1Match = html.match(/<h1>([^<]+)<\/h1>/i);
    const h1 = h1Match ? h1Match[1].trim() : '';
    if (!h1) {
      errors.push(`${fileName}: Missing <h1>`);
    }
    h1s.add(h1);

    // Check Search Intent label
    if (/Search\s*Intent\s*:/i.test(html)) {
      errors.push(`${fileName}: Found forbidden "Search Intent:" label`);
    }

    // Check Salem references
    if (/salem/i.test(html)) {
      errors.push(`${fileName}: Found Salem reference`);
    }

    // Check AI buzzwords
    AI_BUZZWORDS.forEach(word => {
      const reg = new RegExp(`\\b${word}\\b`, 'gi');
      if (reg.test(html)) {
        errors.push(`${fileName}: Found AI buzzword "${word}"`);
      }
    });

    // Check FAQ count
    const faqCount = (html.match(/❓/g) || []).length;
    if (faqCount < 10) {
      errors.push(`${fileName}: Only ${faqCount} FAQs (minimum 10 required)`);
    }

    // Check Experiences count
    const expCount = (html.match(/Verified Case #/g) || []).length;
    if (expCount < 1 || expCount > 10) {
      errors.push(`${fileName}: Experiences count is ${expCount} (expected 1 to 10)`);
    }

    // Check Call & WhatsApp links
    if (!html.includes('href="tel:8882055269"')) {
      errors.push(`${fileName}: Missing tel:8882055269 link`);
    }
    if (!html.includes('https://wa.me/918882055269')) {
      errors.push(`${fileName}: Missing WhatsApp link`);
    }

    // Check Schema
    if (!html.includes('"@type": "Service"')) {
      errors.push(`${fileName}: Missing Service Schema`);
    }
  });

  console.log(`\nResults: Checked ${ALL_GAS_STOVE_BRANDS.length} Gas Stove brand pages.`);
  console.log(`- Unique Titles: ${titles.size}`);
  console.log(`- Unique Meta Descriptions: ${metaDescs.size}`);
  console.log(`- Unique Canonicals: ${canonicals.size}`);
  console.log(`- Unique H1s: ${h1s.size}`);

  if (errors.length > 0) {
    console.error(`\n❌ Found ${errors.length} errors:`);
    errors.forEach(e => console.error(`  - ${e}`));
    process.exit(1);
  } else {
    console.log('\n✅ ALL 31 GAS STOVE BRAND PAGES PASSED 100% AUDIT!');
  }
}

verify();

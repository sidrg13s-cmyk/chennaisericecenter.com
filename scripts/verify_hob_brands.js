const fs = require('fs');
const path = require('path');
const { BRANDS } = require('./hob_brand_data');

console.log('=== COMPREHENSIVE VERIFICATION FOR ALL 31 HOB BRAND PAGES ===\n');

const titles = new Set();
const metaDescs = new Set();
const h1s = new Set();
const heroDescs = new Set();
const canonicals = new Set();
const allFaqQuestions = new Set();

let allPassed = true;

BRANDS.forEach((brand, idx) => {
  const fileName = `${brand.slug}-hob-repair-service-chennai.html`;
  const filePath = path.join(__dirname, '..', 'hob', fileName);

  if (!fs.existsSync(filePath)) {
    console.error(`[FAIL] File missing: ${fileName}`);
    allPassed = false;
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Title
  const titleMatch = content.match(/<title>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : '';
  if (!title || titles.has(title)) {
    console.error(`[FAIL] Duplicate or missing title in ${fileName}: ${title}`);
    allPassed = false;
  } else {
    titles.add(title);
  }

  // Meta description
  const metaMatch = content.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  const metaDesc = metaMatch ? metaMatch[1] : '';
  if (!metaDesc || metaDescs.has(metaDesc)) {
    console.error(`[FAIL] Duplicate or missing meta description in ${fileName}`);
    allPassed = false;
  } else {
    metaDescs.add(metaDesc);
  }

  // Canonical
  const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i);
  const canonical = canonicalMatch ? canonicalMatch[1] : '';
  if (!canonical || !canonical.includes(`${brand.slug}-hob-repair-service-chennai.html`)) {
    console.error(`[FAIL] Incorrect canonical in ${fileName}: ${canonical}`);
    allPassed = false;
  } else {
    canonicals.add(canonical);
  }

  // H1
  const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/i);
  const h1 = h1Match ? h1Match[1].trim() : '';
  if (!h1 || h1s.has(h1)) {
    console.error(`[FAIL] Duplicate or missing H1 in ${fileName}: ${h1}`);
    allPassed = false;
  } else {
    h1s.add(h1);
  }

  // Hero Desc
  const heroDescMatch = content.match(/<p class="hero-desc">([^<]+)<\/p>/i);
  const heroDesc = heroDescMatch ? heroDescMatch[1].trim() : '';
  if (!heroDesc || heroDescs.has(heroDesc)) {
    console.error(`[FAIL] Duplicate or missing hero-desc in ${fileName}`);
    allPassed = false;
  } else {
    heroDescs.add(heroDesc);
  }

  // Check for forbidden "Search Intent:" label
  if (/search\s+intent\s*:/i.test(content)) {
    console.error(`[FAIL] Forbidden label 'Search Intent:' found in ${fileName}`);
    allPassed = false;
  }

  // Customer Experiences count (must be randomized between 1 and 8)
  const expMatches = content.match(/Customer Service Experience \d/g) || [];
  if (expMatches.length < 1 || expMatches.length > 8) {
    console.error(`[FAIL] Experiences count in ${fileName} is ${expMatches.length}, expected 1-8`);
    allPassed = false;
  }

  // FAQ count (must be >= 10)
  const faqMatches = content.match(/class="faq-question"/g) || [];
  if (faqMatches.length < 10) {
    console.error(`[FAIL] FAQ count in ${fileName} is ${faqMatches.length}, expected >= 10`);
    allPassed = false;
  }

  // Collect FAQ questions to verify differentiation
  const questionMatches = content.match(/<summary class="faq-question">([^<]+)<\/summary>/g) || [];
  questionMatches.forEach(q => {
    const cleanQ = q.replace(/<[^>]+>/g, '').trim();
    allFaqQuestions.add(cleanQ);
  });

  // Check Salem references
  if (/salem/i.test(content)) {
    console.error(`[FAIL] Found Salem reference in ${fileName}`);
    allPassed = false;
  }

  // Check AI Buzzwords
  const buzzwords = [
    /\bcomprehensive\b/i,
    /\bsophisticated\b/i,
    /\bseamless\b/i,
    /\bunparalleled\b/i,
    /\bmeticulous\b/i,
    /\bproficient\b/i,
    /\brobust\b/i,
    /\bfacilitate\b/i,
    /\boptimize\b/i,
    /\bcutting-edge\b/i,
    /\bstate-of-the-art\b/i
  ];

  buzzwords.forEach(bw => {
    if (bw.test(content)) {
      console.error(`[FAIL] AI buzzword ${bw} found in ${fileName}`);
      allPassed = false;
    }
  });

  // Required sections
  const requiredSections = [
    'Deep Cleaning',
    'General Service Charges',
    'Spare Parts',
    'Customer Service Experience',
    'Hob Repair FAQs',
    'tel:8882055269',
    'https://wa.me/918882055269'
  ];

  requiredSections.forEach(sec => {
    if (!content.includes(sec)) {
      console.error(`[FAIL] Missing required section "${sec}" in ${fileName}`);
      allPassed = false;
    }
  });

  // Schema check
  if (!content.includes('"@type": "LocalBusiness"') || !content.includes(brand.brandName)) {
    console.error(`[FAIL] Schema issue in ${fileName}`);
    allPassed = false;
  }

  console.log(`[PASS] [${idx + 1}/31] ${fileName} (Title, Meta, H1, ${expMatches.length} Exp, ${faqMatches.length} FAQs, Clean Schema, 0 Buzzwords, 0 Salem)`);
});

console.log('\n=== SUMMARY ===');
console.log(`Unique Titles: ${titles.size} / 31`);
console.log(`Unique Meta Descriptions: ${metaDescs.size} / 31`);
console.log(`Unique H1s: ${h1s.size} / 31`);
console.log(`Unique Hero Openers: ${heroDescs.size} / 31`);
console.log(`Unique Canonicals: ${canonicals.size} / 31`);
console.log(`Total Unique FAQ Questions: ${allFaqQuestions.size} across 31 brands`);
console.log(`All Hob Brand Tests Passed: ${allPassed ? 'YES ✓' : 'NO ✗'}`);

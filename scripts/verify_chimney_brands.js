const fs = require('fs');
const path = require('path');

const brands = [
  'faber', 'elica', 'kutchina', 'glen', 'kaff',
  'hindware', 'crompton', 'livpure', 'whirlpool', 'havells',
  'v-guard', 'prestige', 'sunflame', 'kenstar', 'sujata',
  'bosch', 'ifb', 'inalsa', 'butterfly', 'blowhot'
];

console.log('=== VERIFYING ALL 20 CHIMNEY BRAND PAGES ===\n');

const titles = new Set();
const metaDescs = new Set();
const h1s = new Set();
const openingSentences = new Set();
const canonicals = new Set();

let allPassed = true;

brands.forEach((brand, idx) => {
  const fileName = `${brand}-chimney-repair-service-chennai.html`;
  const filePath = path.join(__dirname, '..', 'kitchen-chimney', fileName);

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
  if (!canonical || !canonical.includes(`${brand}-chimney-repair-service-chennai.html`)) {
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
  if (!heroDesc || openingSentences.has(heroDesc)) {
    console.error(`[FAIL] Duplicate or missing hero-desc in ${fileName}`);
    allPassed = false;
  } else {
    openingSentences.add(heroDesc);
  }

  // Customer Experiences count (expect exactly 6)
  const expMatches = content.match(/Customer Service Experience \d/g) || [];
  if (expMatches.length !== 6) {
    console.error(`[FAIL] Experiences count in ${fileName} is ${expMatches.length}, expected 6`);
    allPassed = false;
  }

  // FAQ count (expect >= 10)
  const faqMatches = content.match(/class="faq-question"/g) || [];
  if (faqMatches.length < 10) {
    console.error(`[FAIL] FAQ count in ${fileName} is ${faqMatches.length}, expected >= 10`);
    allPassed = false;
  }

  // Required sections
  const requiredSections = [
    'Deep Cleaning',
    'General Service Charges',
    'Spare Parts',
    'Customer Service Experience',
    'Chimney Repair FAQs',
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
  if (!content.includes('"@type": "LocalBusiness"') || !content.includes(brand)) {
    console.error(`[FAIL] Schema issue in ${fileName}`);
    allPassed = false;
  }

  console.log(`[PASS] ${fileName} (Title, Meta, H1, Canonical, 6 Exp, ${faqMatches.length} FAQs, Clean Schema)`);
});

console.log('\n=== SUMMARY ===');
console.log(`Unique Titles: ${titles.size} / 20`);
console.log(`Unique Meta Descriptions: ${metaDescs.size} / 20`);
console.log(`Unique H1s: ${h1s.size} / 20`);
console.log(`Unique Hero Openers: ${openingSentences.size} / 20`);
console.log(`Unique Canonicals: ${canonicals.size} / 20`);
console.log(`All Tests Passed: ${allPassed ? 'YES ✓' : 'NO ✗'}`);


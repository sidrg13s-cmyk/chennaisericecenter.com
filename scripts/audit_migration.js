/**
 * audit_migration.js
 * Performs rigorous verification on the complete Chennai project.
 */

const fs = require('fs');
const path = require('path');

const DIRS = ['ac', 'fridge', 'washing-machine', 'tv', 'microwave', 'kitchen-chimney', 'gas-stove', 'hob', 'servicecenter'];

function runAudit() {
  console.log('=== Running Comprehensive Post-Migration Audit ===\n');

  let salemMatches = [];
  let totalHtmlFiles = 0;
  let experienceCounts = {
    ac: [],
    fridge: [],
    'washing-machine': [],
    tv: [],
    microwave: [],
    'kitchen-chimney': [],
    'gas-stove': [],
    hob: [],
    servicecenter: []
  };
  let faqCounts = [];
  let brokenLinks = [];
  let filesChecked = [];

  // Check all HTML files
  const allHtmlPaths = [];
  DIRS.forEach(dir => {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
    files.forEach(f => {
      allHtmlPaths.push(path.join(dir, f));
    });
  });
  allHtmlPaths.push('index.html');
  allHtmlPaths.push('sitemap.html');

  totalHtmlFiles = allHtmlPaths.length;

  allHtmlPaths.forEach(filePath => {
    filesChecked.push(filePath);
    const content = fs.readFileSync(filePath, 'utf8');

    // 1. Check for Salem
    const matches = content.match(/salem/gi);
    if (matches) {
      salemMatches.push({ file: filePath, count: matches.length });
    }

    // 2. Check Experience counts
    const expMatches = content.match(/class=["']experience-card["']/gi) || [];
    const dir = filePath.split(path.sep)[0];
    if (experienceCounts[dir]) {
      experienceCounts[dir].push({ file: filePath, count: expMatches.length });
    }

    // 3. Check FAQ count
    const faqMatches = content.match(/class=["']faq-item["']/gi) || [];
    faqCounts.push({ file: filePath, count: faqMatches.length });

    // 4. Check Internal Links
    const linkRegex = /href=["']([^"'#:]+\.html)["']/gi;
    let match;
    const fileDir = path.dirname(filePath);
    while ((match = linkRegex.exec(content)) !== null) {
      const targetRel = match[1];
      const targetAbs = path.resolve(fileDir, targetRel);
      if (!fs.existsSync(targetAbs)) {
        brokenLinks.push({ from: filePath, to: targetRel });
      }
    }
  });

  // Check XML / text files for Salem
  const extraFiles = ['sitemap.xml', 'sitemap.redirect.xml', 'robots.txt', 'README.md'];
  extraFiles.forEach(f => {
    if (fs.existsSync(f)) {
      const c = fs.readFileSync(f, 'utf8');
      const m = c.match(/salem/gi);
      if (m) {
        salemMatches.push({ file: f, count: m.length });
      }
    }
  });

  console.log(`1. Total HTML Files Checked: ${totalHtmlFiles}`);
  console.log(`2. Total Remaining Salem Occurrences: ${salemMatches.reduce((acc, x) => acc + x.count, 0)}`);
  if (salemMatches.length > 0) {
    console.log('Files with Salem matches:');
    salemMatches.forEach(m => console.log(`   - ${m.file}: ${m.count} matches`));
  } else {
    console.log('   ✓ ZERO unwanted Salem references in the entire project!');
  }

  console.log(`\n3. Broken Internal Links: ${brokenLinks.length}`);
  if (brokenLinks.length > 0) {
    console.log('Sample broken links:', brokenLinks.slice(0, 10));
  } else {
    console.log('   ✓ ZERO broken internal links!');
  }

  console.log('\n4. Experience Counts Audit:');
  ['ac', 'fridge', 'washing-machine', 'tv', 'microwave', 'kitchen-chimney', 'gas-stove', 'hob'].forEach(cat => {
    const counts = experienceCounts[cat].map(x => x.count);
    const min = Math.min(...counts);
    const max = Math.max(...counts);
    console.log(`   - ${cat.toUpperCase()}: ${counts.length} files, count per file: min=${min}, max=${max}`);
  });

  const faqMin = Math.min(...faqCounts.map(x => x.count));
  const faqMax = Math.max(...faqCounts.map(x => x.count));
  console.log(`\n5. FAQ Counts Audit across all pages: min=${faqMin}, max=${faqMax}`);

  // Check AI buzzwords
  const AI_WORDS = ['seamless', 'comprehensive', 'cutting-edge', 'state-of-the-art', 'bespoke', 'robust', 'streamlined', 'holistic', 'unparalleled', 'meticulously', 'leveraging', 'facilitate', 'optimized solutions', 'precision-engineered'];
  let aiWordMatches = 0;
  allHtmlPaths.forEach(fp => {
    const c = fs.readFileSync(fp, 'utf8');
    AI_WORDS.forEach(w => {
      const reg = new RegExp(`\\b${w}\\b`, 'gi');
      const m = c.match(reg);
      if (m) aiWordMatches += m.length;
    });
  });
  console.log(`\n6. AI Buzzwords Remaining: ${aiWordMatches}`);
  console.log('=== Audit Complete ===');
}

runAudit();

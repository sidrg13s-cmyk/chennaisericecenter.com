const fs = require('fs');
const path = require('path');

const srcDirServiceCenter = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update\\service centers\\samsng";
const srcDirWashingMachine = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update\\Washing machine\\pages";
const cscBaseDir = "f:\\Service center websites\\chennaiservicecenter.com";
const homecareBaseDir = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update";

function walkHtml(dir, callback) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === 'scripts') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkHtml(fullPath, callback);
    } else if (entry.isFile() && entry.name.endsWith('.html') && !entry.name.endsWith('.bak')) {
      callback(fullPath);
    }
  }
}

console.log("=================================================");
console.log("FINAL COMPREHENSIVE DIRECTION & INTEGRITY AUDIT");
console.log("=================================================\n");

let auditPassed = true;

// CHECK 1: Wrong direction check (24x7homecare -> chennaiservicecenter)
let wrongLinks = [];
walkHtml(homecareBaseDir, (file) => {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('chennaiservicecenter.com')) {
    wrongLinks.push(file);
  }
});

console.log("CHECK 1: Reverse Previous Wrong Direction");
console.log(`Links from 24x7homecare.com -> chennaiservicecenter.com: ${wrongLinks.length}`);
if (wrongLinks.length === 0) {
  console.log("-> [PASS] Wrong direction completely removed!\n");
} else {
  console.error("-> [FAIL] Found lingering wrong-direction links:\n", wrongLinks);
  auditPassed = false;
}

// CHECK 2: Correct direction backlinks scan on chennaiservicecenter.com
let cscLinks = [];
walkHtml(cscBaseDir, (file) => {
  const content = fs.readFileSync(file, 'utf8');
  const matches = [...content.matchAll(/<a\s+[^>]*href=["'](https?:\/\/(?:www\.)?24x7homecare\.com[^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)];
  if (matches.length > 0) {
    cscLinks.push({
      file: file,
      relFile: path.relative(cscBaseDir, file),
      matches: matches
    });
  }
});

console.log("CHECK 2: Total Backlink Count on chennaiservicecenter.com");
console.log(`Total HTML files with links to 24x7homecare.com: ${cscLinks.length}`);
if (cscLinks.length === 10) {
  console.log("-> [PASS] Exactly 10 contextual backlink files!\n");
} else {
  console.error(`-> [FAIL] Expected exactly 10 backlink files, found ${cscLinks.length}`);
  auditPassed = false;
}

// CHECK 3: Detailed link-by-link inspection
console.log("CHECK 3: Link Specifications & Target Verification");
const anchorsSeen = new Set();
let scCount = 0;
let wmCount = 0;

cscLinks.forEach((item, index) => {
  const m = item.matches[0];
  const targetUrl = m[1];
  const anchor = m[2].trim();
  const rawTag = m[0];
  
  const isSC = item.relFile.startsWith('servicecenter');
  const isWM = item.relFile.startsWith('washing-machine');
  if (isSC) scCount++;
  if (isWM) wmCount++;
  
  // Check disk target
  let diskTarget = "";
  if (isSC) {
    const filename = path.basename(targetUrl);
    diskTarget = path.join(srcDirServiceCenter, filename);
  } else if (isWM) {
    const filename = path.basename(targetUrl);
    diskTarget = path.join(srcDirWashingMachine, filename);
  }
  const targetExists = fs.existsSync(diskTarget);
  
  const noNofollow = !rawTag.toLowerCase().includes('nofollow');
  const noSponsored = !rawTag.toLowerCase().includes('sponsored');
  const noUgc = !rawTag.toLowerCase().includes('ugc');
  const noTargetBlank = !rawTag.toLowerCase().includes('target=');
  const isUniqueAnchor = !anchorsSeen.has(anchor);
  anchorsSeen.add(anchor);
  
  const passed = targetExists && noNofollow && noSponsored && noUgc && noTargetBlank && isUniqueAnchor;
  if (!passed) auditPassed = false;
  
  console.log(`${index + 1}.`);
  console.log(`Source Page:   https://chennaiservicecenter.com/${item.relFile.replace(/\\/g, '/')}`);
  console.log(`Target Page:   ${targetUrl}`);
  console.log(`Anchor Text:   "${anchor}"`);
  console.log(`Target Exists: ${targetExists ? "YES (Verified on disk)" : "NO"}`);
  console.log(`Link Type:     Followed, Same-Tab (${noNofollow && noTargetBlank ? "CLEAN" : "FLAGGED"})`);
  console.log(`Unique Anchor: ${isUniqueAnchor ? "YES" : "NO (Duplicate)"}`);
  console.log(`Status:        ${passed ? "OK (PASS)" : "FAIL"}\n`);
});

console.log("CHECK 4: Category Distribution");
console.log(`Service Centre links: ${scCount} (Expected: 5)`);
console.log(`Washing Machine links: ${wmCount} (Expected: 5)`);
if (scCount === 5 && wmCount === 5) {
  console.log("-> [PASS] Perfect 5 + 5 category balance!\n");
} else {
  console.error("-> [FAIL] Category count mismatch!");
  auditPassed = false;
}

console.log("=================================================");
console.log(`FINAL AUDIT RESULT: ${auditPassed ? "ALL 10 BACKLINKS PERFECTLY VERIFIED" : "AUDIT FAILED"}`);
console.log("=================================================");

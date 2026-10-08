const fs = require('fs');
const path = require('path');

const srcDirServiceCenter = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update\\service centers\\samsng";
const srcDirWashingMachine = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update\\Washing machine\\pages";

const scFiles = [
  "ifb-service-centre-in-chennai.html",
  "samsung-service-centre-in-chennai.html",
  "whirlpool-service-centre-in-chennai.html",
  "panasonic-service-centre-in-chennai.html",
  "bosch-service-centre-in-chennai.html"
];

const wmFiles = [
  "ifb-washing-machine-service-centre-in-chennai.html",
  "samsung-washing-machine-service-centre-in-chennai.html",
  "whirlpool-washing-machine-service-centre-in-chennai.html",
  "panasonic-washing-machine-service-centre-in-chennai.html",
  "bosch-washing-machine-service-centre-in-chennai.html"
];

console.log("=== SERVICE CENTER CANDIDATE SECTIONS ===");
scFiles.forEach(file => {
  const p = path.join(srcDirServiceCenter, file);
  const content = fs.readFileSync(p, 'utf8');
  console.log(`\n--- ${file} ---`);
  // Look for first <div class="first"><p>...</p></div>
  const matchFirst = content.match(/<div class="first">\s*<p>([\s\S]*?)<\/p>\s*<\/div>/i);
  if (matchFirst) {
    const clean = matchFirst[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log("[Intro div.first]:", clean.substring(0, 300) + "...\n(Total length: " + clean.length + ")");
  } else {
    console.log("[Intro div.first]: NOT FOUND");
  }
});

console.log("\n=== WASHING MACHINE CANDIDATE SECTIONS ===");
wmFiles.forEach(file => {
  const p = path.join(srcDirWashingMachine, file);
  const content = fs.readFileSync(p, 'utf8');
  console.log(`\n--- ${file} ---`);
  const matchFirst = content.match(/<div class="first">\s*<p>([\s\S]*?)<\/p>\s*<\/div>/i);
  if (matchFirst) {
    const clean = matchFirst[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log("[Intro div.first]:", clean.substring(0, 300) + "...\n(Total length: " + clean.length + ")");
  } else {
    // Find first paragraph in main content
    const pMatch = content.match(/<p>([\s\S]*?)<\/p>/i);
    if (pMatch) {
      const clean = pMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      console.log("[First <p>]:", clean.substring(0, 300) + "...");
    }
  }
});

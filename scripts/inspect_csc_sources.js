const fs = require('fs');
const path = require('path');

const targetBaseDir = "f:\\Service center websites\\chennaiservicecenter.com";

const scSources = [
  "servicecenter/ifb-service-center-chennai.html",
  "servicecenter/samsung-service-center-chennai.html",
  "servicecenter/whirlpool-service-center-chennai.html",
  "servicecenter/panasonic-service-center-chennai.html",
  "servicecenter/bosch-service-center-chennai.html"
];

const wmSources = [
  "washing-machine/ifb-washing-machine-repair-service-chennai.html",
  "washing-machine/samsung-washing-machine-repair-service-chennai.html",
  "washing-machine/whirlpool-washing-machine-repair-service-chennai.html",
  "washing-machine/panasonic-washing-machine-repair-service-chennai.html",
  "washing-machine/bosch-washing-machine-repair-service-chennai.html"
];

console.log("=== INSPECTING SC SOURCES ON CHENNAI WEBSITE ===");
scSources.forEach(rel => {
  const p = path.join(targetBaseDir, rel);
  const content = fs.readFileSync(p, 'utf8');
  // Look for section with id="washing-machine" or hero-desc or official support
  const matchHeroDesc = content.match(/<p class="hero-desc">([\s\S]*?)<\/p>/i);
  console.log(`\n--- ${rel} ---`);
  if (matchHeroDesc) {
    console.log("Hero Desc:", matchHeroDesc[1].replace(/\s+/g, ' ').substring(0, 200) + "...");
  }
  // Also check Official Support section
  const matchOfficial = content.match(/<h3[^>]*>Official (.*?) Support Information<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/i);
  if (matchOfficial) {
    console.log("Official Section snippet:", matchOfficial[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').substring(0, 150) + "...");
  }
});

console.log("\n=== INSPECTING WM SOURCES ON CHENNAI WEBSITE ===");
wmSources.forEach(rel => {
  const p = path.join(targetBaseDir, rel);
  const content = fs.readFileSync(p, 'utf8');
  const matchHeroDesc = content.match(/<p class="hero-desc">([\s\S]*?)<\/p>/i);
  console.log(`\n--- ${rel} ---`);
  if (matchHeroDesc) {
    console.log("Hero Desc:", matchHeroDesc[1].replace(/\s+/g, ' ').substring(0, 200) + "...");
  }
  // Look for first content-box
  const matchBox = content.match(/<div class="content-box"[^>]*>[\s\S]*?<p>([\s\S]*?)<\/p>/i);
  if (matchBox) {
    console.log("First content box p:", matchBox[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').substring(0, 150) + "...");
  }
});

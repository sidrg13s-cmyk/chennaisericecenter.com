const fs = require('fs');
const path = require('path');

const targetBaseDir = "f:\\Service center websites\\chennaiservicecenter.com";

const files = [
  "servicecenter\\bosch-service-center-chennai.html",
  "servicecenter\\daikin-service-center-chennai.html",
  "servicecenter\\godrej-service-center-chennai.html",
  "servicecenter\\haier-service-center-chennai.html",
  "servicecenter\\ifb-service-center-chennai.html",
  "servicecenter\\panasonic-service-center-chennai.html",
  "servicecenter\\samsung-service-center-chennai.html",
  "servicecenter\\whirlpool-service-center-chennai.html"
];

files.forEach(f => {
  const content = fs.readFileSync(path.join(targetBaseDir, f), 'utf8');
  const matches = [...content.matchAll(/<a\s+[^>]*href=["']([^"']*24x7homecare[^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)];
  console.log(`\n=== ${f} ===`);
  matches.forEach((m, i) => {
    console.log(`[${i+1}] Href: ${m[1]}`);
    console.log(`    Anchor: ${m[2].trim()}`);
    // find surrounding 100 chars
    const idx = content.indexOf(m[0]);
    console.log(`    Context: ${content.substring(Math.max(0, idx - 100), Math.min(content.length, idx + m[0].length + 100)).replace(/\s+/g, ' ')}`);
  });
});

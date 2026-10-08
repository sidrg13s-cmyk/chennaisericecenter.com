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
  const match = content.match(/<div style="margin-top: 35px; background: #ffffff; border: 1px solid var\(--surface-border\);[\s\S]*?<\/div>\s*<\/div>/i);
  if (match) {
    console.log(`\n=== ${f} === FOUND BOX:`);
    console.log(match[0]);
  } else {
    console.log(`\n=== ${f} === BOX NOT FOUND`);
  }
});

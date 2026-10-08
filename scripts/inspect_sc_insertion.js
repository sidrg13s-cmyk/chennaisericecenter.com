const fs = require('fs');
const path = require('path');

const srcDirServiceCenter = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update\\service centers\\samsng";

const files = [
  "ifb-service-centre-in-chennai.html",
  "samsung-service-centre-in-chennai.html",
  "whirlpool-service-centre-in-chennai.html",
  "panasonic-service-centre-in-chennai.html",
  "bosch-service-centre-in-chennai.html"
];

for (const file of files) {
  const filePath = path.join(srcDirServiceCenter, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Look for end of intro div or end of first paragraph
  const match = content.match(/<div class="first">\s*<p>([\s\S]*?)<\/p>\s*<\/div>/i);
  if (match) {
    const pText = match[1];
    // Find last 150 characters of this paragraph
    const lastSnippet = pText.slice(-200);
    console.log(`\n=== ${file} ===`);
    console.log("End of first paragraph snippet:");
    console.log(lastSnippet.replace(/\s+/g, ' '));
  } else {
    console.log(`\n=== ${file} === FIRST DIV NOT FOUND`);
  }
}

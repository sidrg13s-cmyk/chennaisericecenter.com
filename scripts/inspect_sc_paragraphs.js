const fs = require('fs');
const path = require('path');

const srcDirServiceCenter = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update\\service centers\\samsng";
const srcDirWashingMachine = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update\\Washing machine\\pages";

function inspectFile(filePath, label) {
  console.log(`\n=================== ${label}: ${path.basename(filePath)} ===================`);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Look for paragraphs or content sections
  // Let's find matches of <p>...</p> or <div>...</div> in the main body
  const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  let matches = [];
  let m;
  while ((m = pRegex.exec(content)) !== null) {
    const text = m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (text.length > 50 && !text.includes('Copyright') && !text.includes('Privacy Policy')) {
      matches.push({ full: m[0], text: text });
    }
  }
  
  console.log(`Found ${matches.length} paragraphs. First 4 paragraphs:`);
  matches.slice(0, 4).forEach((p, idx) => {
    console.log(`\n[Para ${idx + 1}] (${p.text.length} chars):`);
    console.log(p.text.substring(0, 200) + (p.text.length > 200 ? "..." : ""));
  });
}

inspectFile(path.join(srcDirServiceCenter, "ifb-service-centre-in-chennai.html"), "SERVICE CENTER 1");
inspectFile(path.join(srcDirServiceCenter, "samsung-service-centre-in-chennai.html"), "SERVICE CENTER 2");
inspectFile(path.join(srcDirServiceCenter, "whirlpool-service-centre-in-chennai.html"), "SERVICE CENTER 3");
inspectFile(path.join(srcDirServiceCenter, "panasonic-service-centre-in-chennai.html"), "SERVICE CENTER 4");
inspectFile(path.join(srcDirServiceCenter, "bosch-service-centre-in-chennai.html"), "SERVICE CENTER 5");

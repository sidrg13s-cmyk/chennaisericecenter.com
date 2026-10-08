const fs = require('fs');
const path = require('path');

const rootDir = "f:\\Service center websites\\chennaiservicecenter.com";

function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of list) {
    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === 'scripts') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getAllHtmlFiles(rootDir);

let totalFiles = htmlFiles.length;
let filesWithCorrectGA4 = 0;
let filesWithDuplicateGAtags = 0;
let filesWithOldGAIds = 0;
let filesMissingGAtag = 0;

const oldIds = ["G-RDGHSJCD75"];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Check script tag occurrences
  const scriptMatches = [...content.matchAll(/googletagmanager\.com\/gtag\/js/gi)];
  // Check config occurrences
  const configMatches = [...content.matchAll(/gtag\(\s*['"]config['"]/gi)];
  // Check new ID
  const newIdMatches = [...content.matchAll(/G-ENWYEQEXHB/gi)];
  
  // Check old IDs
  let hasOld = false;
  oldIds.forEach(id => {
    if (content.includes(id)) hasOld = true;
  });
  if (hasOld) filesWithOldGAIds++;
  
  // Check if missing
  if (scriptMatches.length === 0 || configMatches.length === 0 || newIdMatches.length === 0) {
    filesMissingGAtag++;
  }
  
  // Check if duplicate
  if (scriptMatches.length > 1 || configMatches.length > 1) {
    filesWithDuplicateGAtags++;
  }
  
  // Correct
  if (scriptMatches.length === 1 && configMatches.length === 1 && newIdMatches.length === 2 && !hasOld) {
    filesWithCorrectGA4++;
  }
});

console.log("=================================================");
console.log("FINAL GOOGLE ANALYTICS 4 GLOBAL AUDIT REPORT");
console.log("=================================================");
console.log(`Total HTML files:                   ${totalFiles}`);
console.log(`Files containing correct GA4 tag:   ${filesWithCorrectGA4}`);
console.log(`Files with duplicate GA tags:       ${filesWithDuplicateGAtags}`);
console.log(`Files with old GA IDs:              ${filesWithOldGAIds}`);
console.log(`Files missing GA tag:               ${filesMissingGAtag}`);
console.log("-------------------------------------------------");
console.log(`OLD GA TAGS = ${filesWithOldGAIds}`);
console.log(`DUPLICATE GA TAGS = ${filesWithDuplicateGAtags}`);
console.log(`MISSING GA TAGS = ${filesMissingGAtag}`);
console.log("=================================================");
console.log(filesWithCorrectGA4 === totalFiles && filesWithOldGAIds === 0 && filesWithDuplicateGAtags === 0 && filesMissingGAtag === 0 ? "STATUS: PASSED 100% PERFECT" : "STATUS: FAILED");

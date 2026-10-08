const fs = require('fs');
const path = require('path');

const rootDir = "f:\\Service center websites\\chennaiservicecenter.com";

const newTagCode = `  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-ENWYEQEXHB"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-ENWYEQEXHB');
  </script>`;

function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of list) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
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
console.log(`Starting GA4 update across ${htmlFiles.length} HTML files...`);

const tagRegex = /<!-- Google tag \(gtag\.js\) -->[\s\S]*?<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-[^"]+"><\/script>[\s\S]*?<script>[\s\S]*?gtag\('config',\s*'G-[^']+'\);\s*<\/script>/i;

let updatedCount = 0;
let alreadyCorrect = 0;
let failed = [];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  if (content.includes('G-ENWYEQEXHB') && !content.includes('G-RDGHSJCD75')) {
    alreadyCorrect++;
    return;
  }
  
  if (tagRegex.test(content)) {
    const updated = content.replace(tagRegex, newTagCode);
    fs.writeFileSync(file, updated, 'utf8');
    updatedCount++;
  } else {
    failed.push(path.relative(rootDir, file));
  }
});

console.log(`\nGA4 Update Summary:`);
console.log(`  Total files:     ${htmlFiles.length}`);
console.log(`  Updated:         ${updatedCount}`);
console.log(`  Already correct: ${alreadyCorrect}`);
console.log(`  Failed:          ${failed.length}`);

if (failed.length > 0) {
  console.log("Failed files:", failed);
}

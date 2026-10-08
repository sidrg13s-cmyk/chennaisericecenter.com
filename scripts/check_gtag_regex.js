const fs = require('fs');
const path = require('path');

const rootDir = "f:\\Service center websites\\chennaiservicecenter.com";

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

// Check if any file has variations in the gtag block
const tagRegex = /(<!-- Google tag \(gtag\.js\) -->[\s\S]*?<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-[^"]+"><\/script>[\s\S]*?<script>[\s\S]*?gtag\('config',\s*'G-[^']+'\);\s*<\/script>)/i;

let matchCount = 0;
let noMatch = [];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  if (tagRegex.test(content)) {
    matchCount++;
  } else {
    noMatch.push(path.relative(rootDir, file));
  }
});

console.log(`Matched tag block regex: ${matchCount} / ${htmlFiles.length}`);
if (noMatch.length > 0) {
  console.log("Files that didn't match regex:", noMatch);
}

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
console.log(`Total HTML files found: ${htmlFiles.length}`);

// Group by folder
const folders = {};
htmlFiles.forEach(f => {
  const rel = path.relative(rootDir, f);
  const folder = path.dirname(rel);
  folders[folder] = (folders[folder] || 0) + 1;
});

console.log("\nHTML files by folder:");
for (const [folder, count] of Object.entries(folders)) {
  console.log(`  ${folder || '[root]'}: ${count}`);
}

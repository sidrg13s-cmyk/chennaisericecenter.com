const fs = require('fs');
const path = require('path');

const baseDir = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update";

function walkDir(dir, callback) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, callback);
    } else if (entry.isFile() && entry.name.endsWith('.html') && !entry.name.endsWith('.bak')) {
      callback(fullPath);
    }
  }
}

let foundLinks = [];
walkDir(baseDir, (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('chennaiservicecenter.com')) {
    foundLinks.push(filePath);
  }
});

console.log("Total HTML files with links to chennaiservicecenter.com in 24x7homecare Chennai folder:");
console.log(foundLinks.length);
foundLinks.forEach((f, i) => console.log(`${i + 1}. ${path.basename(f)}`));

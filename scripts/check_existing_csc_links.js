const fs = require('fs');
const path = require('path');

const targetBaseDir = "f:\\Service center websites\\chennaiservicecenter.com";

function walkDir(dir, callback) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === 'scripts') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, callback);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      callback(fullPath);
    }
  }
}

let existingLinks = [];
walkDir(targetBaseDir, (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('24x7homecare.com')) {
    existingLinks.push(filePath);
  }
});

console.log("Existing files on chennaiservicecenter.com linking to 24x7homecare.com:");
console.log(existingLinks.length);
existingLinks.forEach(f => console.log(path.relative(targetBaseDir, f)));

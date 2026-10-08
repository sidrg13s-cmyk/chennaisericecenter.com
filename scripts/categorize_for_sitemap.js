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

const categories = {
  "core": { title: "Main Website Pages", files: [] },
  "ac": { title: "Air Conditioner (AC) Repair", files: [] },
  "fridge": { title: "Refrigerator (Fridge) Repair", files: [] },
  "washing-machine": { title: "Washing Machine Repair", files: [] },
  "tv": { title: "Television (TV) Repair", files: [] },
  "microwave": { title: "Microwave Oven Repair", files: [] },
  "kitchen-chimney": { title: "Kitchen Chimney Repair", files: [] },
  "gas-stove": { title: "Gas Stove Repair", files: [] },
  "hob": { title: "Kitchen Hob Repair", files: [] },
  "servicecenter": { title: "Multi-Brand Service Centers in Chennai", files: [] }
};

htmlFiles.forEach(file => {
  const rel = path.relative(rootDir, file).replace(/\\/g, '/');
  const dir = path.dirname(rel);
  
  const content = fs.readFileSync(file, 'utf8');
  const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
  let pageTitle = titleMatch ? titleMatch[1].split('|')[0].trim() : path.basename(file, '.html');
  
  if (dir === '.') {
    categories["core"].files.push({ rel, pageTitle, file });
  } else if (categories[dir]) {
    categories[dir].files.push({ rel, pageTitle, file });
  } else {
    console.log("Unknown dir:", dir, rel);
  }
});

for (const [key, cat] of Object.entries(categories)) {
  console.log(`${cat.title}: ${cat.files.length} pages`);
}

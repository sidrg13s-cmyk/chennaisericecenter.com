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

const categories = [
  {
    key: "core",
    title: "Main Website Pages",
    master: "index.html",
    files: []
  },
  {
    key: "ac",
    title: "Air Conditioner (AC) Repair",
    master: "ac/ac-repair-service-chennai.html",
    files: []
  },
  {
    key: "fridge",
    title: "Refrigerator (Fridge) Repair",
    master: "fridge/fridge-repair-service-chennai.html",
    files: []
  },
  {
    key: "washing-machine",
    title: "Washing Machine Repair",
    master: "washing-machine/washing-machine-repair-service-chennai.html",
    files: []
  },
  {
    key: "kitchen-chimney",
    title: "Kitchen Chimney Repair",
    master: "kitchen-chimney/kitchen-chimney-repair-service-chennai.html",
    files: []
  },
  {
    key: "hob",
    title: "Kitchen Hob Repair",
    master: "hob/hob-repair-service-chennai.html",
    files: []
  },
  {
    key: "gas-stove",
    title: "Gas Stove Repair",
    master: "gas-stove/gas-stove-repair-service-chennai.html",
    files: []
  },
  {
    key: "microwave",
    title: "Microwave Oven Repair",
    master: "microwave/microwave-repair-service-chennai.html",
    files: []
  },
  {
    key: "tv",
    title: "Television (TV) Repair",
    master: "tv/tv-repair-service-chennai.html",
    files: []
  },
  {
    key: "servicecenter",
    title: "Multi-Brand Service Centers",
    master: "servicecenter/service-center-chennai.html",
    files: []
  }
];

const catMap = {};
categories.forEach(c => { catMap[c.key] = c; });

htmlFiles.forEach(file => {
  const rel = path.relative(rootDir, file).replace(/\\/g, '/');
  const dir = path.dirname(rel);
  
  const content = fs.readFileSync(file, 'utf8');
  const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
  let cleanTitle = "";
  if (titleMatch) {
    cleanTitle = titleMatch[1].split('|')[0].trim();
  } else {
    cleanTitle = path.basename(file, '.html');
  }
  
  const item = { rel, title: cleanTitle };
  if (dir === '.') {
    catMap["core"].files.push(item);
  } else if (catMap[dir]) {
    catMap[dir].files.push(item);
  }
});

// Sort each category: master first, then alphabetical
categories.forEach(cat => {
  cat.files.sort((a, b) => {
    if (a.rel === cat.master) return -1;
    if (b.rel === cat.master) return 1;
    return a.title.localeCompare(b.title);
  });
});

let categoriesHtml = "";
categories.forEach(cat => {
  categoriesHtml += `      <div class="sitemap-category-box" style="background: #ffffff; padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--surface-border); margin-bottom: 24px;">\n`;
  categoriesHtml += `        <h2 style="font-size: 1.35rem; color: var(--secondary); margin-bottom: 14px; border-bottom: 2px solid var(--primary-light); padding-bottom: 8px;">\n`;
  categoriesHtml += `          ${cat.title} (${cat.files.length} Pages)\n`;
  categoriesHtml += `        </h2>\n`;
  categoriesHtml += `        <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 10px; list-style: none; padding-left: 0; font-size: 0.9rem;">\n`;
  
  cat.files.forEach(f => {
    const isMaster = f.rel === cat.master || f.rel === 'index.html';
    const boldStyle = isMaster ? ' font-weight: 700;' : '';
    const masterSuffix = isMaster && f.rel !== 'sitemap.html' ? ' (Master)' : '';
    categoriesHtml += `          <li><a href="${f.rel}" style="color: var(--primary); text-decoration: none; display: inline-block; padding: 4px 0;${boldStyle}">📄 ${f.title}${masterSuffix}</a></li>\n`;
  });
  
  categoriesHtml += `        </ul>\n`;
  categoriesHtml += `      </div>\n`;
});

// Read existing sitemap.html
const sitemapHtmlPath = path.join(rootDir, 'sitemap.html');
const currentContent = fs.readFileSync(sitemapHtmlPath, 'utf8');

// Replace everything between <!-- Sitemap Categories Section --> <div class="container"> and </div> </section>
const startMarker = '<!-- Sitemap Categories Section -->\n  <section class="section" style="padding-top: 35px;">\n    <div class="container">';
const endMarker = '    </div>\n  </section>\n\n        <!-- FAQ Section -->';

if (!currentContent.includes(startMarker)) {
  console.error("Start marker not found in sitemap.html!");
  process.exit(1);
}

const startIndex = currentContent.indexOf(startMarker) + startMarker.length;
const endIndex = currentContent.indexOf(endMarker);

if (endIndex === -1) {
  console.error("End marker not found in sitemap.html!");
  process.exit(1);
}

const newSitemapContent = currentContent.substring(0, startIndex) + "\n\n" + categoriesHtml + "    " + currentContent.substring(endIndex);

fs.writeFileSync(sitemapHtmlPath, newSitemapContent, 'utf8');
console.log(`Successfully updated sitemap.html with all ${categories.reduce((a, b) => a + b.files.length, 0)} pages across 10 categories!`);

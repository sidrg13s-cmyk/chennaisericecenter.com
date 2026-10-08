const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const oldDir = path.join(rootDir, 'gas-top');
const newDir = path.join(rootDir, 'gas-stove');

if (!fs.existsSync(newDir)) {
  fs.mkdirSync(newDir, { recursive: true });
}

// 1. Migrate master file
const oldMasterPath = path.join(oldDir, 'gas-top-repair-service-chennai.html');
const newMasterPath = path.join(newDir, 'gas-stove-repair-service-chennai.html');

if (fs.existsSync(oldMasterPath)) {
  let content = fs.readFileSync(oldMasterPath, 'utf8');

  // Replace URLs and titles
  content = content.replace(/https:\/\/chennaiservicecenter\.com\/gas-top\/gas-top-repair-service-chennai\.html/g, 'https://chennaiservicecenter.com/gas-stove/gas-stove-repair-service-chennai.html');
  content = content.replace(/\/gas-top\/gas-top-repair-service-chennai\.html/g, '/gas-stove/gas-stove-repair-service-chennai.html');
  content = content.replace(/\.\.\/gas-top\/gas-top-repair-service-chennai\.html/g, '../gas-stove/gas-stove-repair-service-chennai.html');
  content = content.replace(/gas-top\/gas-top-repair-service-chennai\.html/g, 'gas-stove/gas-stove-repair-service-chennai.html');
  content = content.replace(/Gas Top Repair Service in Chennai/g, 'Gas Stove Repair Service in Chennai');
  content = content.replace(/Gas Top Repair Service/g, 'Gas Stove Repair Service');
  content = content.replace(/Gas Top Repair/g, 'Gas Stove Repair');
  content = content.replace(/gas top repair/gi, 'gas stove repair');
  content = content.replace(/gas top & gas stove/gi, 'gas stove');
  content = content.replace(/gas top or gas stove/gi, 'gas stove');
  content = content.replace(/gas top/gi, 'gas stove');
  content = content.replace(/Gas Top/g, 'Gas Stove');

  // Fix active nav link if needed
  content = content.replace(/class="nav-link active">Gas Stove<\/a>/g, 'class="nav-link active">Gas Stove</a>');
  content = content.replace(/class="nav-link">Gas Stove<\/a>/g, 'class="nav-link active">Gas Stove</a>');
  // Make sure other nav links are not active
  content = content.replace(/class="nav-link active">Home<\/a>/g, 'class="nav-link">Home</a>');

  fs.writeFileSync(newMasterPath, content, 'utf8');
  console.log('Created gas-stove master file:', newMasterPath);
}

// 2. Update all HTML files in project
function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'gas-top') {
        results = results.concat(getAllHtmlFiles(fullPath));
      }
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const allHtmlFiles = getAllHtmlFiles(rootDir);
console.log(`Updating ${allHtmlFiles.length} HTML files...`);

allHtmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Nav link updates
  // For subfolder files: href="../gas-top/gas-top-repair-service-chennai.html"
  content = content.replace(/href="\.\.\/gas-top\/gas-top-repair-service-chennai\.html"( class="nav-link[^"]*")?>Gas Top<\/a>/g, 'href="../gas-stove/gas-stove-repair-service-chennai.html"$1>Gas Stove</a>');
  content = content.replace(/href="\.\.\/gas-top\/gas-top-repair-service-chennai\.html"/g, 'href="../gas-stove/gas-stove-repair-service-chennai.html"');

  // For root files: href="gas-top/gas-top-repair-service-chennai.html"
  content = content.replace(/href="gas-top\/gas-top-repair-service-chennai\.html"( class="nav-link[^"]*")?>Gas Top<\/a>/g, 'href="gas-stove/gas-stove-repair-service-chennai.html"$1>Gas Stove</a>');
  content = content.replace(/href="gas-top\/gas-top-repair-service-chennai\.html"/g, 'href="gas-stove/gas-stove-repair-service-chennai.html"');

  // Footer link updates
  content = content.replace(/Gas Top Repair<\/a>/g, 'Gas Stove Repair</a>');

  // Canonical / absolute URLs if any
  content = content.replace(/https:\/\/chennaiservicecenter\.com\/gas-top\/gas-top-repair-service-chennai\.html/g, 'https://chennaiservicecenter.com/gas-stove/gas-stove-repair-service-chennai.html');

  // Index specific card texts
  if (filePath.endsWith('index.html')) {
    content = content.replace(/Gas Top Repair Service in Chennai/g, 'Gas Stove Repair Service in Chennai');
    content = content.replace(/View Gas Top Repair Page &rarr;/g, 'View Gas Stove Repair Page &rarr;');
  }

  // Sitemap specific texts
  if (filePath.endsWith('sitemap.html')) {
    content = content.replace(/Gas Top Repair \(\d+ Page[s]?\)/g, 'Gas Stove Repair (32 Pages)');
    content = content.replace(/Gas Top Repair Service Chennai/g, 'Gas Stove Repair Service Chennai');
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

// 3. Update sitemap.xml
const sitemapXmlPath = path.join(rootDir, 'sitemap.xml');
if (fs.existsSync(sitemapXmlPath)) {
  let xml = fs.readFileSync(sitemapXmlPath, 'utf8');
  xml = xml.replace(/https:\/\/chennaiservicecenter\.com\/gas-top\/gas-top-repair-service-chennai\.html/g, 'https://chennaiservicecenter.com/gas-stove/gas-stove-repair-service-chennai.html');
  fs.writeFileSync(sitemapXmlPath, xml, 'utf8');
  console.log('Updated sitemap.xml');
}

// 4. Clean up old gas-top folder
if (fs.existsSync(oldMasterPath)) {
  fs.unlinkSync(oldMasterPath);
}
if (fs.existsSync(oldDir)) {
  try {
    fs.rmdirSync(oldDir);
    console.log('Removed old gas-top directory.');
  } catch (e) {
    console.log('Could not remove old directory (might not be empty):', e.message);
  }
}

console.log('Gas Top to Gas Stove migration complete!');

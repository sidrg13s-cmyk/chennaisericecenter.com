const fs = require('fs');
const path = require('path');

const srcDirServiceCenter = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update\\service centers\\samsng";
const srcDirWashingMachine = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update\\Washing machine\\pages";

function printFullIntro(filePath, label) {
  const content = fs.readFileSync(filePath, 'utf8');
  console.log(`\n=================== ${label}: ${path.basename(filePath)} ===================`);
  const matchFirst = content.match(/<div class="first">\s*<p>([\s\S]*?)<\/p>\s*<\/div>/i);
  if (matchFirst) {
    console.log(matchFirst[1]);
  } else {
    console.log("NOT FOUND");
  }
}

const scFiles = [
  "ifb-service-centre-in-chennai.html",
  "samsung-service-centre-in-chennai.html",
  "whirlpool-service-centre-in-chennai.html",
  "panasonic-service-centre-in-chennai.html",
  "bosch-service-centre-in-chennai.html"
];

const wmFiles = [
  "ifb-washing-machine-service-centre-in-chennai.html",
  "samsung-washing-machine-service-centre-in-chennai.html",
  "whirlpool-washing-machine-service-centre-in-chennai.html",
  "panasonic-washing-machine-service-centre-in-chennai.html",
  "bosch-washing-machine-service-centre-in-chennai.html"
];

scFiles.forEach(f => printFullIntro(path.join(srcDirServiceCenter, f), "SC"));
wmFiles.forEach(f => printFullIntro(path.join(srcDirWashingMachine, f), "WM"));

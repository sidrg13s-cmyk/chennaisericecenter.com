const fs = require('fs');
const path = require('path');

const srcDirServiceCenter = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update\\service centers\\samsng";
const srcDirWashingMachine = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update\\Washing machine\\pages";

const allFiles = [
  ...[
    "ifb-service-centre-in-chennai.html",
    "samsung-service-centre-in-chennai.html",
    "whirlpool-service-centre-in-chennai.html",
    "panasonic-service-centre-in-chennai.html",
    "bosch-service-centre-in-chennai.html"
  ].map(f => path.join(srcDirServiceCenter, f)),
  ...[
    "ifb-washing-machine-service-centre-in-chennai.html",
    "samsung-washing-machine-service-centre-in-chennai.html",
    "whirlpool-washing-machine-service-centre-in-chennai.html",
    "panasonic-washing-machine-service-centre-in-chennai.html",
    "bosch-washing-machine-service-centre-in-chennai.html"
  ].map(f => path.join(srcDirWashingMachine, f))
];

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const hasLink = content.includes('chennaiservicecenter.com');
  console.log(path.basename(file), hasLink ? "ALREADY HAS LINK" : "CLEAN");
}

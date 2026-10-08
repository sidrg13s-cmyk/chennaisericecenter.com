const fs = require('fs');
const path = require('path');

const targetBaseDir = "f:\\Service center websites\\chennaiservicecenter.com";

const wmSources = [
  "washing-machine/ifb-washing-machine-repair-service-chennai.html",
  "washing-machine/samsung-washing-machine-repair-service-chennai.html",
  "washing-machine/whirlpool-washing-machine-repair-service-chennai.html",
  "washing-machine/panasonic-washing-machine-repair-service-chennai.html",
  "washing-machine/bosch-washing-machine-repair-service-chennai.html"
];

for (const rel of wmSources) {
  const content = fs.readFileSync(path.join(targetBaseDir, rel), 'utf8');
  // Check common problems paragraph:
  const matchProb = content.match(/If your machine is showing unusual symptoms or stopping during the wash cycle, early inspection helps prevent motor burnout or electrical board damage\./i);
  console.log(rel, matchProb ? "MATCHED PROB PARAGRAPH" : "NOT MATCHED");
}

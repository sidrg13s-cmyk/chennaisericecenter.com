const fs = require('fs');
const path = require('path');

const targetBaseDir = "f:\\Service center websites\\chennaiservicecenter.com";

const targetFiles = [
  "servicecenter/ifb-service-center-chennai.html",
  "servicecenter/samsung-service-center-chennai.html",
  "servicecenter/whirlpool-service-center-chennai.html",
  "servicecenter/panasonic-service-center-chennai.html",
  "servicecenter/bosch-service-center-chennai.html",
  "servicecenter/service-center-chennai.html",
  "washing-machine/ifb-washing-machine-repair-service-chennai.html",
  "washing-machine/samsung-washing-machine-repair-service-chennai.html",
  "washing-machine/whirlpool-washing-machine-repair-service-chennai.html",
  "washing-machine/panasonic-washing-machine-repair-service-chennai.html",
  "washing-machine/bosch-washing-machine-repair-service-chennai.html",
  "washing-machine/washing-machine-repair-service-chennai.html"
];

console.log("Checking target files on chennaiservicecenter.com:");
for (const rel of targetFiles) {
  const p = path.join(targetBaseDir, rel);
  console.log(rel, fs.existsSync(p) ? "EXISTS" : "MISSING");
}

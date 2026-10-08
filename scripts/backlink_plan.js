const fs = require('fs');
const path = require('path');

const srcDirServiceCenter = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update\\service centers\\samsng";
const srcDirWashingMachine = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update\\Washing machine\\pages";
const targetBaseDir = "f:\\Service center websites\\chennaiservicecenter.com";

console.log("Checking candidate files...");

const scCandidates = [
  "ifb-service-centre-in-chennai.html",
  "samsung-service-centre-in-chennai.html",
  "whirlpool-service-centre-in-chennai.html",
  "panasonic-service-centre-in-chennai.html",
  "bosch-service-centre-in-chennai.html"
];

const wmCandidates = [
  "ifb-washing-machine-service-centre-in-chennai.html",
  "samsung-washing-machine-service-centre-in-chennai.html",
  "whirlpool-washing-machine-service-centre-in-chennai.html",
  "panasonic-washing-machine-service-centre-in-chennai.html",
  "bosch-washing-machine-service-centre-in-chennai.html"
];

console.log("\n--- Service Center Source Files Exist Check ---");
for (const file of scCandidates) {
  const p = path.join(srcDirServiceCenter, file);
  console.log(file, fs.existsSync(p) ? "EXISTS (" + fs.statSync(p).size + " bytes)" : "MISSING");
}

console.log("\n--- Washing Machine Source Files Exist Check ---");
for (const file of wmCandidates) {
  const p = path.join(srcDirWashingMachine, file);
  console.log(file, fs.existsSync(p) ? "EXISTS (" + fs.statSync(p).size + " bytes)" : "MISSING");
}

const fs = require('fs');
const path = require('path');

const srcDirServiceCenter = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update\\service centers\\samsng";
const srcDirWashingMachine = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update\\Washing machine\\pages";

const targets = [
  { url: "https://www.24x7homecare.com/services/ifb-service-centre-in-chennai.html", disk: path.join(srcDirServiceCenter, "ifb-service-centre-in-chennai.html") },
  { url: "https://www.24x7homecare.com/services/samsung-service-centre-in-chennai.html", disk: path.join(srcDirServiceCenter, "samsung-service-centre-in-chennai.html") },
  { url: "https://www.24x7homecare.com/services/whirlpool-service-centre-in-chennai.html", disk: path.join(srcDirServiceCenter, "whirlpool-service-centre-in-chennai.html") },
  { url: "https://www.24x7homecare.com/services/panasonic-service-centre-in-chennai.html", disk: path.join(srcDirServiceCenter, "panasonic-service-centre-in-chennai.html") },
  { url: "https://www.24x7homecare.com/services/bosch-service-centre-in-chennai.html", disk: path.join(srcDirServiceCenter, "bosch-service-centre-in-chennai.html") },
  { url: "https://www.24x7homecare.com/services/ifb-washing-machine-service-centre-in-chennai.html", disk: path.join(srcDirWashingMachine, "ifb-washing-machine-service-centre-in-chennai.html") },
  { url: "https://www.24x7homecare.com/services/samsung-washing-machine-service-centre-in-chennai.html", disk: path.join(srcDirWashingMachine, "samsung-washing-machine-service-centre-in-chennai.html") },
  { url: "https://www.24x7homecare.com/services/whirlpool-washing-machine-service-centre-in-chennai.html", disk: path.join(srcDirWashingMachine, "whirlpool-washing-machine-service-centre-in-chennai.html") },
  { url: "https://www.24x7homecare.com/services/panasonic-washing-machine-service-centre-in-chennai.html", disk: path.join(srcDirWashingMachine, "panasonic-washing-machine-service-centre-in-chennai.html") },
  { url: "https://www.24x7homecare.com/services/bosch-washing-machine-service-centre-in-chennai.html", disk: path.join(srcDirWashingMachine, "bosch-washing-machine-service-centre-in-chennai.html") }
];

let allExist = true;
targets.forEach((t, i) => {
  const exists = fs.existsSync(t.disk);
  if (!exists) allExist = false;
  console.log(`[${i+1}] ${path.basename(t.disk)} -> ${exists ? "EXISTS" : "MISSING"}`);
});

console.log("\nALL TARGETS EXIST:", allExist);

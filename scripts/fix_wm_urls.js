const fs = require('fs');
const path = require('path');

const targetBaseDir = "f:\\Service center websites\\chennaiservicecenter.com";

// Fix Bosch WM
const boschFile = path.join(targetBaseDir, "washing-machine/bosch-washing-machine-repair-service-chennai.html");
let boschContent = fs.readFileSync(boschFile, 'utf8');
boschContent = boschContent.replace(
  'https://www.24x7homecare.com/services/bosch-washing-machine-repair-service-chennai.html',
  'https://www.24x7homecare.com/services/bosch-washing-machine-service-centre-in-chennai.html'
);
fs.writeFileSync(boschFile, boschContent, 'utf8');
console.log("Fixed Bosch WM target URL");

// Fix Panasonic WM
const panasonicFile = path.join(targetBaseDir, "washing-machine/panasonic-washing-machine-repair-service-chennai.html");
let panasonicContent = fs.readFileSync(panasonicFile, 'utf8');
panasonicContent = panasonicContent.replace(
  'https://www.24x7homecare.com/services/panasonic-washing-machine-repair-service-chennai.html',
  'https://www.24x7homecare.com/services/panasonic-washing-machine-service-centre-in-chennai.html'
);
fs.writeFileSync(panasonicFile, panasonicContent, 'utf8');
console.log("Fixed Panasonic WM target URL");

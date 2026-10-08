const fs = require('fs');
const path = require('path');

const srcDirServiceCenter = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update\\service centers\\samsng";
const srcDirWashingMachine = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update\\Washing machine\\pages";

const scFile = path.join(srcDirServiceCenter, "ifb-service-centre-in-chennai.html");
const scHtml = fs.readFileSync(scFile, 'utf8');

// Let's find `<div id="content"` or `<div class="content"` or `<h2>` headings
const h2Matches = [...scHtml.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)];
console.log("H2s in ifb-service-centre-in-chennai.html:");
h2Matches.slice(0, 10).forEach(m => console.log(m[1].replace(/<[^>]+>/g, '').trim()));

const wmFile = path.join(srcDirWashingMachine, "ifb-washing-machine-service-centre-in-chennai.html");
const wmHtml = fs.readFileSync(wmFile, 'utf8');
const wmH2Matches = [...wmHtml.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)];
console.log("\nH2s in ifb-washing-machine-service-centre-in-chennai.html:");
wmH2Matches.slice(0, 10).forEach(m => console.log(m[1].replace(/<[^>]+>/g, '').trim()));

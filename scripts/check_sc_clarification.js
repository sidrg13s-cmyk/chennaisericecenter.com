const fs = require('fs');
const path = require('path');

const targetBaseDir = "f:\\Service center websites\\chennaiservicecenter.com";

const scSources = [
  "servicecenter/ifb-service-center-chennai.html",
  "servicecenter/samsung-service-center-chennai.html",
  "servicecenter/whirlpool-service-center-chennai.html",
  "servicecenter/panasonic-service-center-chennai.html",
  "servicecenter/bosch-service-center-chennai.html"
];

for (const rel of scSources) {
  const content = fs.readFileSync(path.join(targetBaseDir, rel), 'utf8');
  const match = content.match(/<strong>Important Clarification:<\/strong> chennaiservicecenter\.com is an independent multi-brand home appliance service provider in Chennai, Tamil Nadu\. We provide third-party out-of-warranty doorstep repair service\. We are not directly authorized or officially affiliated with the ([^<]+) manufacturer unless explicitly stated\./i);
  console.log(rel, match ? "FOUND: " + match[1] : "NOT FOUND");
}

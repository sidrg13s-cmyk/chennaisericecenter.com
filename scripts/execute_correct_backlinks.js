const fs = require('fs');
const path = require('path');

const targetBaseDir = "f:\\Service center websites\\chennaiservicecenter.com";

// 1. Files with old boxes to remove
const oldBoxFiles = [
  "servicecenter/bosch-service-center-chennai.html",
  "servicecenter/daikin-service-center-chennai.html",
  "servicecenter/godrej-service-center-chennai.html",
  "servicecenter/haier-service-center-chennai.html",
  "servicecenter/ifb-service-center-chennai.html",
  "servicecenter/panasonic-service-center-chennai.html",
  "servicecenter/samsung-service-center-chennai.html",
  "servicecenter/whirlpool-service-center-chennai.html"
];

console.log("=== REMOVING OLD CALLOUT BOXES ===");
const boxRegex = /\s*<!-- Contextual Service Resource -->\s*<div style="margin-top: 35px; background: #ffffff; border: 1px solid var\(--surface-border\); border-left: 4px solid var\(--primary\); border-radius: var\(--radius-sm\); padding: 20px 24px;">[\s\S]*?<\/div>/i;

oldBoxFiles.forEach(file => {
  const filePath = path.join(targetBaseDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (boxRegex.test(content)) {
    content = content.replace(boxRegex, '');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Removed old box from: ${file}`);
  } else {
    console.log(`Box not matched in: ${file}`);
  }
});

// 2. Now insert the 5 clean, natural contextual backlinks in Service Centre pages
const scInserts = [
  {
    file: "servicecenter/ifb-service-center-chennai.html",
    search: "We are not directly authorized or officially affiliated with the IFB manufacturer unless explicitly stated.",
    replace: "We are not directly authorized or officially affiliated with the IFB manufacturer unless explicitly stated. If you are also checking service options for IFB appliances, you can see the <a href=\"https://www.24x7homecare.com/services/ifb-service-centre-in-chennai.html\">IFB service centre in Chennai</a> for local repair support."
  },
  {
    file: "servicecenter/samsung-service-center-chennai.html",
    search: "We are not directly authorized or officially affiliated with the Samsung manufacturer unless explicitly stated.",
    replace: "We are not directly authorized or officially affiliated with the Samsung manufacturer unless explicitly stated. Customers looking for additional Samsung home assistance can also refer to our trusted <a href=\"https://www.24x7homecare.com/services/samsung-service-centre-in-chennai.html\">Chennai appliance service</a> partner for doorstep technician visits."
  },
  {
    file: "servicecenter/whirlpool-service-center-chennai.html",
    search: "We are not directly authorized or officially affiliated with the Whirlpool manufacturer unless explicitly stated.",
    replace: "We are not directly authorized or officially affiliated with the Whirlpool manufacturer unless explicitly stated. If you want to compare nearby Whirlpool service options, you can also check this <a href=\"https://www.24x7homecare.com/services/whirlpool-service-centre-in-chennai.html\">local appliance service</a> page for Chennai residents."
  },
  {
    file: "servicecenter/panasonic-service-center-chennai.html",
    search: "We are not directly authorized or officially affiliated with the Panasonic manufacturer unless explicitly stated.",
    replace: "We are not directly authorized or officially affiliated with the Panasonic manufacturer unless explicitly stated. For further Panasonic service coverage across Chennai localities, you can also view our partner <a href=\"https://www.24x7homecare.com/services/panasonic-service-centre-in-chennai.html\">home appliance repair service</a> information."
  },
  {
    file: "servicecenter/bosch-service-center-chennai.html",
    search: "We are not directly authorized or officially affiliated with the Bosch manufacturer unless explicitly stated.",
    replace: "We are not directly authorized or officially affiliated with the Bosch manufacturer unless explicitly stated. If you are looking for other verified Bosch repair resources in Chennai, our associated <a href=\"https://www.24x7homecare.com/services/bosch-service-centre-in-chennai.html\">appliance service centre</a> page provides more details."
  }
];

console.log("\n=== INSERTING 5 SERVICE CENTRE CONTEXTUAL BACKLINKS ===");
scInserts.forEach((item, idx) => {
  const filePath = path.join(targetBaseDir, item.file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes(item.search)) {
    console.error(`ERROR: Search string not found in ${item.file}`);
    return;
  }
  content = content.replace(item.search, item.replace);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`[${idx + 1}/5] Inserted into: ${item.file}`);
});

// 3. Now insert the 5 clean, natural contextual backlinks in Washing Machine pages
const wmInserts = [
  {
    file: "washing-machine/ifb-washing-machine-repair-service-chennai.html",
    search: "If your machine is showing unusual symptoms or stopping during the wash cycle, early inspection helps prevent motor burnout or electrical board damage.",
    replace: "If your machine is showing unusual symptoms or stopping during the wash cycle, early inspection helps prevent motor burnout or electrical board damage. For more brand troubleshooting in your area, you can also visit our partner <a href=\"https://www.24x7homecare.com/services/ifb-washing-machine-service-centre-in-chennai.html\">IFB washing machine service</a> page."
  },
  {
    file: "washing-machine/samsung-washing-machine-repair-service-chennai.html",
    search: "If your machine is showing unusual symptoms or stopping during the wash cycle, early inspection helps prevent motor burnout or electrical board damage.",
    replace: "If your machine is showing unusual symptoms or stopping during the wash cycle, early inspection helps prevent motor burnout or electrical board damage. Chennai customers can also find helpful maintenance details through our partner <a href=\"https://www.24x7homecare.com/services/samsung-washing-machine-service-centre-in-chennai.html\">washing machine service in Chennai</a>."
  },
  {
    file: "washing-machine/whirlpool-washing-machine-repair-service-chennai.html",
    search: "If your machine is showing unusual symptoms or stopping during the wash cycle, early inspection helps prevent motor burnout or electrical board damage.",
    replace: "If your machine is showing unusual symptoms or stopping during the wash cycle, early inspection helps prevent motor burnout or electrical board damage. You can also check our related <a href=\"https://www.24x7homecare.com/services/whirlpool-washing-machine-service-centre-in-chennai.html\">Chennai washing machine service</a> guide for Whirlpool repair support."
  },
  {
    file: "washing-machine/panasonic-washing-machine-repair-service-chennai.html",
    search: "If your machine is showing unusual symptoms or stopping during the wash cycle, early inspection helps prevent motor burnout or electrical board damage.",
    replace: "If your machine is showing unusual symptoms or stopping during the wash cycle, early inspection helps prevent motor burnout or electrical board damage. For extra local assistance with Panasonic models, our <a href=\"https://www.24x7homecare.com/services/panasonic-washing-machine-repair-service-chennai.html\">washing machine repair support</a> page is available."
  },
  {
    file: "washing-machine/bosch-washing-machine-repair-service-chennai.html",
    search: "If your machine is showing unusual symptoms or stopping during the wash cycle, early inspection helps prevent motor burnout or electrical board damage.",
    replace: "If your machine is showing unusual symptoms or stopping during the wash cycle, early inspection helps prevent motor burnout or electrical board damage. If you need alternative local booking for Bosch washers, our <a href=\"https://www.24x7homecare.com/services/bosch-washing-machine-repair-service-chennai.html\">Chennai appliance repair</a> guide offers doorstep help."
  }
];

console.log("\n=== INSERTING 5 WASHING MACHINE CONTEXTUAL BACKLINKS ===");
wmInserts.forEach((item, idx) => {
  const filePath = path.join(targetBaseDir, item.file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes(item.search)) {
    console.error(`ERROR: Search string not found in ${item.file}`);
    return;
  }
  content = content.replace(item.search, item.replace);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`[${idx + 1}/5] Inserted into: ${item.file}`);
});

console.log("\nAll operations completed!");

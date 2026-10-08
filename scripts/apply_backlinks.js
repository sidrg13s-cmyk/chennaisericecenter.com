const fs = require('fs');
const path = require('path');

const srcDirServiceCenter = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update\\service centers\\samsng";
const srcDirWashingMachine = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update\\Washing machine\\pages";
const targetBaseDir = "f:\\Service center websites\\chennaiservicecenter.com";

const allChanges = [
  // 5 Service Centre pages
  {
    type: "Service Centre",
    file: "ifb-service-centre-in-chennai.html",
    dir: srcDirServiceCenter,
    targetRel: "servicecenter/ifb-service-center-chennai.html",
    targetUrl: "https://chennaiservicecenter.com/servicecenter/ifb-service-center-chennai.html",
    anchor: "Chennai appliance service centre",
    search: "appliances we Only use genuine parts for long running for\n                                                        appliances.\n                                                </p>",
    replace: "appliances we Only use genuine parts for long running for\n                                                        appliances. For nearby doorstep assistance in your area, our partner <a href=\"https://chennaiservicecenter.com/servicecenter/ifb-service-center-chennai.html\">Chennai appliance service centre</a> is also available for quick inspections.\n                                                </p>"
  },
  {
    type: "Service Centre",
    file: "samsung-service-centre-in-chennai.html",
    dir: srcDirServiceCenter,
    targetRel: "servicecenter/samsung-service-center-chennai.html",
    targetUrl: "https://chennaiservicecenter.com/servicecenter/samsung-service-center-chennai.html",
    anchor: "appliance repair service in Chennai",
    search: "appliances we Only use genuine parts for long running for\n                                                        appliances.\n                                                </p>",
    replace: "appliances we Only use genuine parts for long running for\n                                                        appliances. If you need immediate doorstep support for Samsung refrigerators or washing machines, our local <a href=\"https://chennaiservicecenter.com/servicecenter/samsung-service-center-chennai.html\">appliance repair service in Chennai</a> can also inspect and fix issues quickly.\n                                                </p>"
  },
  {
    type: "Service Centre",
    file: "whirlpool-service-centre-in-chennai.html",
    dir: srcDirServiceCenter,
    targetRel: "servicecenter/whirlpool-service-center-chennai.html",
    targetUrl: "https://chennaiservicecenter.com/servicecenter/whirlpool-service-center-chennai.html",
    anchor: "local appliance service in Chennai",
    search: "appliances we Only use genuine parts for long running for\n                                                        appliances.\n                                                </p>",
    replace: "appliances we Only use genuine parts for long running for\n                                                        appliances. For additional Whirlpool support and prompt repair across city locations, you can also reach out through our <a href=\"https://chennaiservicecenter.com/servicecenter/whirlpool-service-center-chennai.html\">local appliance service in Chennai</a>.\n                                                </p>"
  },
  {
    type: "Service Centre",
    file: "panasonic-service-centre-in-chennai.html",
    dir: srcDirServiceCenter,
    targetRel: "servicecenter/panasonic-service-center-chennai.html",
    targetUrl: "https://chennaiservicecenter.com/servicecenter/panasonic-service-center-chennai.html",
    anchor: "Chennai home appliance service",
    search: "appliances we Only use genuine parts for long running for\n                                                        appliances.\n                                                </p>",
    replace: "appliances we Only use genuine parts for long running for\n                                                        appliances. Customers needing quick inspection for Panasonic home products can also visit our <a href=\"https://chennaiservicecenter.com/servicecenter/panasonic-service-center-chennai.html\">Chennai home appliance service</a> team for local doorstep repair.\n                                                </p>"
  },
  {
    type: "Service Centre",
    file: "bosch-service-centre-in-chennai.html",
    dir: srcDirServiceCenter,
    targetRel: "servicecenter/bosch-service-center-chennai.html",
    targetUrl: "https://chennaiservicecenter.com/servicecenter/bosch-service-center-chennai.html",
    anchor: "Chennai service centre",
    search: "appliances we Only use genuine parts for long running for\n                                                        appliances.\n                                                </p>",
    replace: "appliances we Only use genuine parts for long running for\n                                                        appliances. For certified Bosch appliance repair and multi-area support, our specialized <a href=\"https://chennaiservicecenter.com/servicecenter/bosch-service-center-chennai.html\">Chennai service centre</a> provides trusted technician assistance.\n                                                </p>"
  },

  // 5 Washing Machine pages
  {
    type: "Washing Machine",
    file: "ifb-washing-machine-service-centre-in-chennai.html",
    dir: srcDirWashingMachine,
    targetRel: "washing-machine/ifb-washing-machine-repair-service-chennai.html",
    targetUrl: "https://chennaiservicecenter.com/washing-machine/ifb-washing-machine-repair-service-chennai.html",
    anchor: "IFB washing machine repair in Chennai",
    search: "<p>If you are facing any problem with your IFB washing machine in Chennai, you can contact us for inspection, diagnosis, repair and model-compatible parts replacement.</p>",
    replace: "<p>If you are facing any problem with your IFB washing machine in Chennai, you can contact us for inspection, diagnosis, repair and model-compatible parts replacement. For quick local booking, you can also check our dedicated <a href=\"https://chennaiservicecenter.com/washing-machine/ifb-washing-machine-repair-service-chennai.html\">IFB washing machine repair in Chennai</a> to schedule a technician.</p>"
  },
  {
    type: "Washing Machine",
    file: "samsung-washing-machine-service-centre-in-chennai.html",
    dir: srcDirWashingMachine,
    targetRel: "washing-machine/samsung-washing-machine-repair-service-chennai.html",
    targetUrl: "https://chennaiservicecenter.com/washing-machine/samsung-washing-machine-repair-service-chennai.html",
    anchor: "washing machine service in Chennai",
    search: "<p>If you are facing any problem with your Samsung washing machine in Chennai, you can contact us for inspection, diagnosis, repair and model-compatible parts replacement.</p>",
    replace: "<p>If you are facing any problem with your Samsung washing machine in Chennai, you can contact us for inspection, diagnosis, repair and model-compatible parts replacement. You can also view our <a href=\"https://chennaiservicecenter.com/washing-machine/samsung-washing-machine-repair-service-chennai.html\">washing machine service in Chennai</a> for Samsung EcoBubble and top load repairs.</p>"
  },
  {
    type: "Washing Machine",
    file: "whirlpool-washing-machine-service-centre-in-chennai.html",
    dir: srcDirWashingMachine,
    targetRel: "washing-machine/whirlpool-washing-machine-repair-service-chennai.html",
    targetUrl: "https://chennaiservicecenter.com/washing-machine/whirlpool-washing-machine-repair-service-chennai.html",
    anchor: "Chennai washing machine repair",
    search: "<p>If you are facing any problem with your Whirlpool washing machine in Chennai, you can contact us for inspection, diagnosis, repair and model-compatible parts replacement.</p>",
    replace: "<p>If you are facing any problem with your Whirlpool washing machine in Chennai, you can contact us for inspection, diagnosis, repair and model-compatible parts replacement. For reliable doorstep solutions, our <a href=\"https://chennaiservicecenter.com/washing-machine/whirlpool-washing-machine-repair-service-chennai.html\">Chennai washing machine repair</a> support is always ready to help.</p>"
  },
  {
    type: "Washing Machine",
    file: "panasonic-washing-machine-service-centre-in-chennai.html",
    dir: srcDirWashingMachine,
    targetRel: "washing-machine/panasonic-washing-machine-repair-service-chennai.html",
    targetUrl: "https://chennaiservicecenter.com/washing-machine/panasonic-washing-machine-repair-service-chennai.html",
    anchor: "washing machine technician in Chennai",
    search: "<p>If you are facing any problem with your Panasonic washing machine in Chennai, you can contact us for inspection, diagnosis, repair and model-compatible parts replacement.</p>",
    replace: "<p>If you are facing any problem with your Panasonic washing machine in Chennai, you can contact us for inspection, diagnosis, repair and model-compatible parts replacement. For urgent error code diagnosis, booking a skilled <a href=\"https://chennaiservicecenter.com/washing-machine/panasonic-washing-machine-repair-service-chennai.html\">washing machine technician in Chennai</a> helps restore your appliance quickly.</p>"
  },
  {
    type: "Washing Machine",
    file: "bosch-washing-machine-service-centre-in-chennai.html",
    dir: srcDirWashingMachine,
    targetRel: "washing-machine/bosch-washing-machine-repair-service-chennai.html",
    targetUrl: "https://chennaiservicecenter.com/washing-machine/bosch-washing-machine-repair-service-chennai.html",
    anchor: "Chennai appliance repair",
    search: "<p>If you are facing any problem with your Bosch washing machine in Chennai, you can contact us for inspection, diagnosis, repair and model-compatible parts replacement.</p>",
    replace: "<p>If you are facing any problem with your Bosch washing machine in Chennai, you can contact us for inspection, diagnosis, repair and model-compatible parts replacement. Customers seeking fast local service can also check our <a href=\"https://chennaiservicecenter.com/washing-machine/bosch-washing-machine-repair-service-chennai.html\">Chennai appliance repair</a> portal for expert Bosch maintenance.</p>"
  }
];

console.log("=== APPLYING HIGH-QUALITY CONTEXTUAL BACKLINKS ===");

allChanges.forEach((item, idx) => {
  const filePath = path.join(item.dir, item.file);
  const targetOnDisk = path.join(targetBaseDir, item.targetRel);
  
  if (!fs.existsSync(filePath)) {
    console.error(`ERROR: Source file ${item.file} does not exist!`);
    return;
  }
  if (!fs.existsSync(targetOnDisk)) {
    console.error(`ERROR: Target file ${item.targetRel} does not exist on disk!`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes(item.search)) {
    console.error(`ERROR: Search pattern not found in ${item.file}`);
    return;
  }
  
  // Backup file
  const backupPath = filePath + ".bak";
  if (!fs.existsSync(backupPath)) {
    fs.writeFileSync(backupPath, content, 'utf8');
  }
  
  // Replace exactly once
  const updatedContent = content.replace(item.search, item.replace);
  fs.writeFileSync(filePath, updatedContent, 'utf8');
  
  console.log(`[${idx + 1}/10] [${item.type}] Updated: ${item.file}`);
  console.log(`   -> Target: ${item.targetUrl}`);
  console.log(`   -> Anchor: "${item.anchor}"`);
});

console.log("\nAll 10 backlinks applied successfully!");

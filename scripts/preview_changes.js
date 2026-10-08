const fs = require('fs');
const path = require('path');

const srcDirServiceCenter = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update\\service centers\\samsng";
const srcDirWashingMachine = "F:\\24x7homecare\\Tamil Nadu\\Chennai\\chennai after update\\Washing machine\\pages";

const scChanges = [
  {
    file: "ifb-service-centre-in-chennai.html",
    brand: "ifb",
    search: "appliances we Only use genuine parts for long running for\n                                                        appliances.\n                                                </p>",
    replace: "appliances we Only use genuine parts for long running for\n                                                        appliances. For nearby doorstep assistance in your area, our partner <a href=\"https://chennaiservicecenter.com/servicecenter/ifb-service-center-chennai.html\">Chennai appliance service centre</a> is also available for quick inspections.\n                                                </p>"
  },
  {
    file: "samsung-service-centre-in-chennai.html",
    brand: "samsung",
    search: "appliances we Only use genuine parts for long running for\n                                                        appliances.\n                                                </p>",
    replace: "appliances we Only use genuine parts for long running for\n                                                        appliances. If you need immediate doorstep support for Samsung refrigerators or washing machines, our local <a href=\"https://chennaiservicecenter.com/servicecenter/samsung-service-center-chennai.html\">appliance repair service in Chennai</a> can also inspect and fix issues quickly.\n                                                </p>"
  },
  {
    file: "whirlpool-service-centre-in-chennai.html",
    brand: "whirlpool",
    search: "appliances we Only use genuine parts for long running for\n                                                        appliances.\n                                                </p>",
    replace: "appliances we Only use genuine parts for long running for\n                                                        appliances. For additional Whirlpool support and prompt repair across city locations, you can also reach out through our <a href=\"https://chennaiservicecenter.com/servicecenter/whirlpool-service-center-chennai.html\">local appliance service in Chennai</a>.\n                                                </p>"
  },
  {
    file: "panasonic-service-centre-in-chennai.html",
    brand: "panasonic",
    search: "appliances we Only use genuine parts for long running for\n                                                        appliances.\n                                                </p>",
    replace: "appliances we Only use genuine parts for long running for\n                                                        appliances. Customers needing quick inspection for Panasonic home products can also visit our <a href=\"https://chennaiservicecenter.com/servicecenter/panasonic-service-center-chennai.html\">Chennai home appliance service</a> team for local doorstep repair.\n                                                </p>"
  },
  {
    file: "bosch-service-centre-in-chennai.html",
    brand: "bosch",
    search: "appliances we Only use genuine parts for long running for\n                                                        appliances.\n                                                </p>",
    replace: "appliances we Only use genuine parts for long running for\n                                                        appliances. For certified Bosch appliance repair and multi-area support, our specialized <a href=\"https://chennaiservicecenter.com/servicecenter/bosch-service-center-chennai.html\">Chennai service centre</a> provides trusted technician assistance.\n                                                </p>"
  }
];

console.log("=== CHECKING SC TARGET STRINGS ===");
for (const item of scChanges) {
  const filePath = path.join(srcDirServiceCenter, item.file);
  const content = fs.readFileSync(filePath, 'utf8');
  const count = content.split(item.search).length - 1;
  console.log(item.file, "Found matches:", count);
}

const wmChanges = [
  {
    file: "ifb-washing-machine-service-centre-in-chennai.html",
    brand: "IFB",
    search: "<p>If you are facing any problem with your IFB washing machine in Chennai, you can contact us for inspection, diagnosis, repair and model-compatible parts replacement.</p>",
    replace: "<p>If you are facing any problem with your IFB washing machine in Chennai, you can contact us for inspection, diagnosis, repair and model-compatible parts replacement. For quick local booking, you can also check our dedicated <a href=\"https://chennaiservicecenter.com/washing-machine/ifb-washing-machine-repair-service-chennai.html\">IFB washing machine repair in Chennai</a> to schedule a technician.</p>"
  },
  {
    file: "samsung-washing-machine-service-centre-in-chennai.html",
    brand: "Samsung",
    search: "<p>If you are facing any problem with your Samsung washing machine in Chennai, you can contact us for inspection, diagnosis, repair and model-compatible parts replacement.</p>",
    replace: "<p>If you are facing any problem with your Samsung washing machine in Chennai, you can contact us for inspection, diagnosis, repair and model-compatible parts replacement. You can also view our <a href=\"https://chennaiservicecenter.com/washing-machine/samsung-washing-machine-repair-service-chennai.html\">washing machine service in Chennai</a> for Samsung EcoBubble and top load repairs.</p>"
  },
  {
    file: "whirlpool-washing-machine-service-centre-in-chennai.html",
    brand: "Whirlpool",
    search: "<p>If you are facing any problem with your Whirlpool washing machine in Chennai, you can contact us for inspection, diagnosis, repair and model-compatible parts replacement.</p>",
    replace: "<p>If you are facing any problem with your Whirlpool washing machine in Chennai, you can contact us for inspection, diagnosis, repair and model-compatible parts replacement. For reliable doorstep solutions, our <a href=\"https://chennaiservicecenter.com/washing-machine/whirlpool-washing-machine-repair-service-chennai.html\">Chennai washing machine repair</a> support is always ready to help.</p>"
  },
  {
    file: "panasonic-washing-machine-service-centre-in-chennai.html",
    brand: "Panasonic",
    search: "<p>If you are facing any problem with your Panasonic washing machine in Chennai, you can contact us for inspection, diagnosis, repair and model-compatible parts replacement.</p>",
    replace: "<p>If you are facing any problem with your Panasonic washing machine in Chennai, you can contact us for inspection, diagnosis, repair and model-compatible parts replacement. For urgent error code diagnosis, booking a skilled <a href=\"https://chennaiservicecenter.com/washing-machine/panasonic-washing-machine-repair-service-chennai.html\">washing machine technician in Chennai</a> helps restore your appliance quickly.</p>"
  },
  {
    file: "bosch-washing-machine-service-centre-in-chennai.html",
    brand: "Bosch",
    search: "<p>If you are facing any problem with your Bosch washing machine in Chennai, you can contact us for inspection, diagnosis, repair and model-compatible parts replacement.</p>",
    replace: "<p>If you are facing any problem with your Bosch washing machine in Chennai, you can contact us for inspection, diagnosis, repair and model-compatible parts replacement. Customers seeking fast local service can also check our <a href=\"https://chennaiservicecenter.com/washing-machine/bosch-washing-machine-repair-service-chennai.html\">Chennai appliance repair</a> portal for expert Bosch maintenance.</p>"
  }
];

console.log("\n=== CHECKING WM TARGET STRINGS ===");
for (const item of wmChanges) {
  const filePath = path.join(srcDirWashingMachine, item.file);
  const content = fs.readFileSync(filePath, 'utf8');
  const count = content.split(item.search).length - 1;
  console.log(item.file, "Found matches:", count);
}

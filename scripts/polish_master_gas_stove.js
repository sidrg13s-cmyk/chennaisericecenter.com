const fs = require('fs');
const path = require('path');

const masterPath = path.resolve(__dirname, '../gas-stove/gas-stove-repair-service-chennai.html');
if (fs.existsSync(masterPath)) {
  let content = fs.readFileSync(masterPath, 'utf8');

  // 1. Remove fake customer names
  content = content.replace(/<span class="exp-user">K\. Swaminathan<\/span>/g, '<span class="exp-user">Customer Service Case 1</span>');
  content = content.replace(/<span class="exp-user">V\. Ananthan<\/span>/g, '<span class="exp-user">Customer Service Case 2</span>');
  content = content.replace(/<span class="exp-user">S\. Jayashree<\/span>/g, '<span class="exp-user">Customer Service Case 3</span>');

  // 2. Fix capitalization in localities
  content = content.replace(/📍 gas stove Service in/g, '📍 Gas Stove Service in');
  content = content.replace(/📍 gas stove Burner Repair in/g, '📍 Gas Stove Burner Repair in');
  content = content.replace(/📍 gas stove Doorstep Repair in/g, '📍 Gas Stove Doorstep Repair in');
  content = content.replace(/📍 gas stove Gas Stove Service in/g, '📍 Gas Stove Service in');
  content = content.replace(/📍 gas stove Technician in/g, '📍 Gas Stove Technician in');
  content = content.replace(/📍 gas stove Ignition Service in/g, '📍 Gas Stove Ignition Service in');
  content = content.replace(/📍 gas stove Inspection in/g, '📍 Gas Stove Inspection in');
  content = content.replace(/Doorstep gas stove/g, 'Doorstep Gas Stove');
  content = content.replace(/doorstep gas stove across/g, 'doorstep gas stove service across');

  // 3. Add Master FAQ Section before the Brand Directory or Localities section if not already present
  if (!content.includes('Gas Stove Repair FAQs in Chennai</h2>')) {
    const masterFaqHtml = `  <!-- Master FAQ Section (10 Detailed Answers) -->
  <section class="section" id="faq" style="padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">Common Questions</span>
        <h2 class="section-title">Gas Stove Repair FAQs in Chennai</h2>
        <p class="section-subtitle">Helpful answers about gas stove troubleshooting, inspection charges, spare parts, and doorstep repair across Chennai.</p>
      </div>

      <div class="faq-list" style="max-width: 860px; margin: 0 auto; display: flex; flex-direction: column; gap: 14px;">
        <details class="faq-item card" style="padding: 18px 22px;">
          <summary class="faq-question" style="font-weight: 700; color: var(--secondary); cursor: pointer; font-size: 1.05rem;">
            Why is my gas stove flame burning yellow and staining cookware with soot?
          </summary>
          <div class="faq-answer" style="padding-top: 12px; font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">
            A yellow or orange flame indicates incomplete gas combustion caused by blocked burner ports or grease buildup inside the venturi mixing tube. When the air-fuel ratio is disturbed, unburned carbon deposits form on your cooking pots. Our technician dismantles the burner assembly, cleans the mixing chamber, and adjusts the air shutter to restore a clean, high-efficiency blue flame.
          </div>
        </details>

        <details class="faq-item card" style="padding: 18px 22px;">
          <summary class="faq-question" style="font-weight: 700; color: var(--secondary); cursor: pointer; font-size: 1.05rem;">
            Can a tight or jammed gas stove knob be repaired without buying a new stove?
          </summary>
          <div class="faq-answer" style="padding-top: 12px; font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">
            Yes. Over months of cooking, heat and spilled oil enter the brass rotary gas cock valve, drying out the lubricant and causing the spindle to bind. Our technician opens the valve assembly, cleans out hardened residue, and applies specialized heat-resistant valve grease so the knob rotates smoothly again.
          </div>
        </details>

        <details class="faq-item card" style="padding: 18px 22px;">
          <summary class="faq-question" style="font-weight: 700; color: var(--secondary); cursor: pointer; font-size: 1.05rem;">
            What is the inspection charge for gas stove repair in Chennai?
          </summary>
          <div class="faq-answer" style="padding-top: 12px; font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">
            Our standard doorstep inspection charge is ₹199 across Chennai. The technician examines the stove, tests for gas leaks, and provides a clear repair estimate. If you approve the repair, the inspection fee is adjusted against the final service charge.
          </div>
        </details>

        <details class="faq-item card" style="padding: 18px 22px;">
          <summary class="faq-question" style="font-weight: 700; color: var(--secondary); cursor: pointer; font-size: 1.05rem;">
            Why does my auto-ignition gas stove fail to light with the push button?
          </summary>
          <div class="faq-answer" style="padding-top: 12px; font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">
            Auto-ignition failures typically occur due to grease coating the ceramic spark electrode, a cracked ceramic insulator, or a worn-out piezo hammer mechanism. Our technician checks the electrical path, realigns the spark gap to 3.5mm from the burner ring, or replaces defective ceramic pins on-site.
          </div>
        </details>

        <details class="faq-item card" style="padding: 18px 22px;">
          <summary class="faq-question" style="font-weight: 700; color: var(--secondary); cursor: pointer; font-size: 1.05rem;">
            What should I do immediately if I smell gas around my gas stove?
          </summary>
          <div class="faq-answer" style="padding-top: 12px; font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">
            Turn off the cylinder regulator switch or piped gas isolation valve immediately. Open all kitchen windows and doors for ventilation. Do not turn electrical light switches on or off, and do not light matchsticks. Contact our emergency repair service at 8882055269 for an immediate safety leak test.
          </div>
        </details>

        <details class="faq-item card" style="padding: 18px 22px;">
          <summary class="faq-question" style="font-weight: 700; color: var(--secondary); cursor: pointer; font-size: 1.05rem;">
            Can an LPG cylinder stove be converted to piped natural gas (PNG)?
          </summary>
          <div class="faq-answer" style="padding-top: 12px; font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">
            Yes. Piped natural gas operates at a lower delivery pressure than LPG cylinders, requiring larger injector jet diameters. Our technicians replace the brass nozzles with PNG-rated jets and calibrate the air entrainment vents for clean, safe combustion.
          </div>
        </details>

        <details class="faq-item card" style="padding: 18px 22px;">
          <summary class="faq-question" style="font-weight: 700; color: var(--secondary); cursor: pointer; font-size: 1.05rem;">
            Why does the gas stove flame make a loud popping noise when turned off?
          </summary>
          <div class="faq-answer" style="padding-top: 12px; font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">
            A popping noise upon turning off is known as a flashback pop. It happens when the air-gas ratio is overly lean or when the burner cap is not seated flush on the burner cup. Cleaning the venturi tube and properly aligning the burner cap eliminates this issue.
          </div>
        </details>

        <details class="faq-item card" style="padding: 18px 22px;">
          <summary class="faq-question" style="font-weight: 700; color: var(--secondary); cursor: pointer; font-size: 1.05rem;">
            Do you service both glass top and stainless steel gas stoves?
          </summary>
          <div class="faq-answer" style="padding-top: 12px; font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">
            Yes, we service 2-burner, 3-burner, 4-burner, and multi-burner stoves across all formats including toughened glass tops, stainless steel bodies, manual ignition, and battery/piezo auto-ignition systems.
          </div>
        </details>

        <details class="faq-item card" style="padding: 18px 22px;">
          <summary class="faq-question" style="font-weight: 700; color: var(--secondary); cursor: pointer; font-size: 1.05rem;">
            How quickly can a technician visit my home in Chennai for gas stove service?
          </summary>
          <div class="faq-answer" style="padding-top: 12px; font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">
            We offer same-day doorstep visits across Chennai within 60 to 90 minutes of booking in areas like Anna Nagar, T Nagar, Velachery, Adyar, Porur, Ambattur, Tambaram, and OMR.
          </div>
        </details>

        <details class="faq-item card" style="padding: 18px 22px;">
          <summary class="faq-question" style="font-weight: 700; color: var(--secondary); cursor: pointer; font-size: 1.05rem;">
            What warranty is offered on replaced gas stove spare parts?
          </summary>
          <div class="faq-answer" style="padding-top: 12px; font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">
            We provide a 90-day replacement warranty on functional spare parts like brass burners, gas cock valves, ceramic spark pins, and swivel inlet joints installed by our technicians.
          </div>
        </details>
      </div>
    </div>
  </section>`;

    content = content.replace('<section class="section" id="experiences"', `${masterFaqHtml}\n\n  <section class="section" id="experiences"`);
  }

  fs.writeFileSync(masterPath, content, 'utf8');
  console.log('✓ Master gas stove page polished: removed fake names, fixed casing, added 10 FAQs.');
}

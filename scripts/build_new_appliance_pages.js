/**
 * build_new_appliance_pages.js
 * Generates the complete, production-ready HTML files for:
 * 1. kitchen-chimney/kitchen-chimney-repair-service-chennai.html
 * 2. gas-top/gas-top-repair-service-chennai.html
 * 3. hob/hob-repair-service-chennai.html
 */

const fs = require('fs');
const path = require('path');
const {
  generateHeader,
  generateFooter,
  generateLocalitiesSection,
  generateLocalBusinessSchema
} = require('./create_new_appliances');

// ============================================================================
// 1. KITCHEN CHIMNEY PAGE
// ============================================================================
function buildKitchenChimneyPage() {
  const pageUrl = 'https://chennaiservicecenter.com/kitchen-chimney/kitchen-chimney-repair-service-chennai.html';
  const serviceName = 'Kitchen Chimney Repair Service in Chennai';

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-RDGHSJCD75"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-RDGHSJCD75');
  </script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kitchen Chimney Repair Service in Chennai | Call 8882055269</title>
  <meta name="description" content="Doorstep kitchen chimney repair & cleaning in Chennai. Expert repair for chimney motor, suction issues, touch panel, oil leakage and auto-clean faults across Chennai.">
  <link rel="canonical" href="${pageUrl}">
  <meta property="og:title" content="Kitchen Chimney Repair Service in Chennai | Doorstep Chimney Care">
  <meta property="og:description" content="Looking for kitchen chimney repair near me in Chennai? Fast doorstep repair for wall mounted, island, auto-clean, and curved glass chimneys. Call 8882055269.">
  <meta property="og:url" content="${pageUrl}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="en_IN">
  <link rel="icon" href="../favicon.ico" sizes="any">
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">
  <link rel="icon" type="image/png" href="../favicon.png">
  <link rel="apple-touch-icon" href="../apple-touch-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">
${generateLocalBusinessSchema(pageUrl, serviceName)}
</head>
<body>

${generateHeader('chimney')}

  <!-- Breadcrumbs -->
  <nav class="breadcrumb-section" aria-label="Breadcrumb">
    <div class="container">
      <ul class="breadcrumb-list">
        <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Kitchen Chimney Repair in Chennai</li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <span class="hero-pill">Looking for kitchen chimney repair near me in Chennai? Doorstep suction & motor service</span>
      <h1>Kitchen Chimney Repair Service in Chennai</h1>
      <p class="hero-desc">Cooking in Chennai homes involves rich spices, hot oil tadka, and deep frying that generate dense smoke and sticky grease. When your kitchen chimney suction turns weak, the motor hums loudly without pulling air, oil starts dripping down onto kitchen tiles, or the touch controls stop responding, our local Chennai chimney technicians visit your home promptly. We service wall mounted, curved glass, island, and auto-clean chimneys across all Chennai neighborhoods.</p>

      <div style="background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(8px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 8px; padding: 14px 18px; margin: 20px 0 25px; max-width: 820px; font-size: 0.95rem; line-height: 1.6; color: #f1f5f9;">
        💡 <strong>Local Chennai Service Note:</strong> Chimney suction romba kammiya irukka? Oil and smoke proper-ah pull aagala, motor sound jasthi-ah irukka? Our local Chennai technicians visit your doorstep quickly to check filters, motor capacitor, and duct airflow with clear pricing.
      </div>

      <div class="hero-actions">
        <a href="tel:8882055269" class="btn btn-accent btn-lg">Call 8882055269</a>
        <a href="#pricing" class="btn btn-outline-white btn-lg">View Price Guide</a>
      </div>

      <div class="hero-highlights">
        <div class="highlight-item">
          <span class="highlight-icon">⏱️</span>
          <span>Same-Day Home Visit</span>
        </div>
        <div class="highlight-item">
          <span class="highlight-icon">👨‍🔧</span>
          <span>Experienced Chimney Technicians</span>
        </div>
        <div class="highlight-item">
          <span class="highlight-icon">⚙️</span>
          <span>Quality Compatible Spares</span>
        </div>
        <div class="highlight-item">
          <span class="highlight-icon">💵</span>
          <span>Quote Before Work</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Tanglish Callout Box -->
  <section class="section" style="padding: 24px 0 0;">
    <div class="container">
      <div class="tanglish-box tanglish-box-blue">
        <strong>Chennai Kitchen Chimney Troubleshooting:</strong> Heavy oil grease clogging your chimney mesh or blower wheel? Whether you have Faber, Hindware, Glen, Elica, Sunflame, Kaff, or Prestige, our technicians carry specialized degreasers, motor capacitors, and switch panels right to your doorstep across Chennai.
      </div>
    </div>
  </section>

  <!-- Common Problems Handled -->
  <section class="section" style="padding: 40px 0 20px;">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag badge-tag-blue">Diagnostics &amp; Repair</span>
        <h2 class="section-title">Common Kitchen Chimney Issues We Fix in Chennai</h2>
        <p class="section-subtitle">From motor failures to duct blockages, our technicians diagnose the root cause at your home.</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
        <div class="card" style="padding: 22px;">
          <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 10px;">🌪️ Weak Suction / Smoke Spreading</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">When smoke lingers inside the kitchen instead of venting out, the cause is usually heavy grease clogging baffle filters, an oil-choked blower impeller, or a stuck backdraft damper flap in the external duct pipe.</p>
        </div>

        <div class="card" style="padding: 22px;">
          <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 10px;">🔊 Loud Motor Noise or Vibration</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">Rattling, grinding, or loud humming sounds typically indicate worn motor sleeve bearings, an unbalanced blower fan wheel weighed down by grease clumps, or loose mounting brackets on the kitchen wall.</p>
        </div>

        <div class="card" style="padding: 22px;">
          <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 10px;">⚡ Touch Panel &amp; Push Button Failure</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">Touch controls failing to recognize finger taps or buttons getting physically stuck occur when grease vapors seep behind the front panel PCB. We clean contact strips, repair sensor tracks, or replace the switch board.</p>
        </div>

        <div class="card" style="padding: 22px;">
          <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 10px;">🔥 Auto-Clean Heater Malfunction</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">If the auto-clean cycle runs but oil does not drain into the collection cup, the thermal heating coil may be burnt or the PCB timer relay could be faulty. We test coil continuity and replace the heating element.</p>
        </div>

        <div class="card" style="padding: 22px;">
          <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 10px;">💧 Oil Dripping Down Walls &amp; Counter</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">Grease leaking from the chimney base onto the stove means the internal oil collection tray is overflowing, the baffle angle is misaligned, or the motor housing requires complete dismantling and deep degreasing.</p>
        </div>

        <div class="card" style="padding: 22px;">
          <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 10px;">💡 Chimney Won't Power On / Dead Unit</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">If lights and motor show no sign of life, we inspect the input glass fuse, power PCB transformer, wiring harness, and motor run capacitor to restore full functionality without unnecessary delays.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Chimney Types Section (7 Types) -->
  <section class="section" style="background: var(--bg-alt); padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">All Chimney Models Handled</span>
        <h2 class="section-title">Kitchen Chimney Types We Service in Chennai</h2>
        <p class="section-subtitle">Specific repair expertise tailored to each chimney design and suction mechanism.</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 22px;">
        <!-- Type 1 -->
        <div class="card" style="padding: 24px; background: #ffffff;">
          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 10px;">Wall Mounted Chimney Repair</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Looking for wall mounted chimney repair near me in Chennai?</p>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Mounted directly against the kitchen wall above the hob, these units face duct vibrations and clogged cassette or baffle filters. Technicians inspect wall brackets, duct alignment, and motor speed controls.</p>
          <div style="font-size: 0.875rem; color: var(--text-muted);">
            <div><strong>Common Spares:</strong> Baffle filters, duct clamp, motor capacitor</div>
            <div style="color: var(--primary); font-weight: 700; margin-top: 6px;">Indicative Cost: ₹450 – ₹1,650</div>
          </div>
        </div>

        <!-- Type 2 -->
        <div class="card" style="padding: 24px; background: #ffffff;">
          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 10px;">Straight Line Chimney Repair</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Searching for straight line chimney service in Chennai?</p>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Compact units designed for smaller Chennai apartments that fit neatly underneath overhead cabinets. Frequently face mechanical push-button jamming and carbon filter exhaustion.</p>
          <div style="font-size: 0.875rem; color: var(--text-muted);">
            <div><strong>Common Spares:</strong> Push switch cluster, carbon filter pads, LED lamp</div>
            <div style="color: var(--primary); font-weight: 700; margin-top: 6px;">Indicative Cost: ₹380 – ₹1,200</div>
          </div>
        </div>

        <!-- Type 3 -->
        <div class="card" style="padding: 24px; background: #ffffff;">
          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 10px;">Curved Glass Chimney Repair</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Need curved glass chimney technician near me in Chennai?</p>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Popular in modern Chennai kitchens, combining toughened curved glass with high-suction motors. Technicians handle glass alignment, touch sensor calibration, and blower balancing.</p>
          <div style="font-size: 0.875rem; color: var(--text-muted);">
            <div><strong>Common Spares:</strong> Touch panel display, blower impeller, copper motor</div>
            <div style="color: var(--primary); font-weight: 700; margin-top: 6px;">Indicative Cost: ₹550 – ₹2,400</div>
          </div>
        </div>

        <!-- Type 4 -->
        <div class="card" style="padding: 24px; background: #ffffff;">
          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 10px;">Inclined Chimney Repair</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Looking for inclined chimney repair in Chennai?</p>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Angular, vertical-suction chimneys with motorized or manual glass hoods. Common faults include hydraulic lift arm failure, gesture control sensor unresponsiveness, and PCB communication errors.</p>
          <div style="font-size: 0.875rem; color: var(--text-muted);">
            <div><strong>Common Spares:</strong> Motion sensor module, hydraulic strut, main PCB</div>
            <div style="color: var(--primary); font-weight: 700; margin-top: 6px;">Indicative Cost: ₹750 – ₹2,800</div>
          </div>
        </div>

        <!-- Type 5 -->
        <div class="card" style="padding: 24px; background: #ffffff;">
          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 10px;">Island Chimney Repair</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Need island kitchen chimney technician in Chennai?</p>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Suspended from the ceiling over central cooking counters in open-plan homes in OMR, Adyar, and Anna Nagar. Technicians inspect ceiling anchors, extended duct runs, and dual-side controls.</p>
          <div style="font-size: 0.875rem; color: var(--text-muted);">
            <div><strong>Common Spares:</strong> Extended ducting, heavy-duty blower, suspension cables</div>
            <div style="color: var(--primary); font-weight: 700; margin-top: 6px;">Indicative Cost: ₹850 – ₹3,200</div>
          </div>
        </div>

        <!-- Type 6 -->
        <div class="card" style="padding: 24px; background: #ffffff;">
          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 10px;">Auto-Clean Kitchen Chimney Repair</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Searching for auto clean chimney repair near me in Chennai?</p>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Uses a thermal heating coil to melt grease into an oil collector tray. If the auto-clean cycle fails to heat or the oil tray remains dry, technicians check heating elements, thermal fuses, and control relays.</p>
          <div style="font-size: 0.875rem; color: var(--text-muted);">
            <div><strong>Common Spares:</strong> Heating element coil, oil collector cup, relay PCB</div>
            <div style="color: var(--primary); font-weight: 700; margin-top: 6px;">Indicative Cost: ₹650 – ₹1,950</div>
          </div>
        </div>

        <!-- Type 7 -->
        <div class="card" style="padding: 24px; background: #ffffff;">
          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 10px;">Filterless Chimney Repair</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Filterless kitchen chimney not working in Chennai?</p>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Filterless models direct smoke straight onto high-speed fan blades. Without regular internal cleaning, grease buildup creates rotor imbalance and burnt motor windings. Technicians clean motor chambers on-site.</p>
          <div style="font-size: 0.875rem; color: var(--text-muted);">
            <div><strong>Common Spares:</strong> Sealed blower motor, rotor impeller, touch motherboard</div>
            <div style="color: var(--primary); font-weight: 700; margin-top: 6px;">Indicative Cost: ₹550 – ₹2,500</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Parts & Indicative Pricing Section -->
  <section class="section" id="pricing" style="padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 30px;">
        <span class="badge-tag badge-tag-blue">Upfront &amp; Transparent</span>
        <h2 class="section-title">Kitchen Chimney Parts &amp; Indicative Pricing in Chennai</h2>
        <p class="section-subtitle">Approximate charges for common replacement parts and repair work. Final estimate confirmed after physical on-site inspection.</p>
      </div>

      <div class="table-responsive" style="max-width: 860px; margin: 0 auto;">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 60%;">Component / Repair Work</th>
              <th style="width: 40%;">Indicative Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Chimney Inspection &amp; Diagnosis Visit</strong></td>
              <td class="price-highlight">₹199 – ₹299</td>
            </tr>
            <tr>
              <td><strong>Motor Run Capacitor Replacement</strong></td>
              <td class="price-highlight">₹350 – ₹650</td>
            </tr>
            <tr>
              <td><strong>Baffle / Cassette Filter Jet Degreasing Service</strong></td>
              <td class="price-highlight">₹450 – ₹850</td>
            </tr>
            <tr>
              <td><strong>Push Button Switch Assembly Replacement</strong></td>
              <td class="price-highlight">₹450 – ₹850</td>
            </tr>
            <tr>
              <td><strong>Flexible Aluminum Exhaust Duct &amp; Clamps</strong></td>
              <td class="price-highlight">₹550 – ₹950</td>
            </tr>
            <tr>
              <td><strong>LED Spot Lamps &amp; Driver Module</strong></td>
              <td class="price-highlight">₹350 – ₹650</td>
            </tr>
            <tr>
              <td><strong>Blower Impeller Fan Wheel Replacement</strong></td>
              <td class="price-highlight">₹650 – ₹1,200</td>
            </tr>
            <tr>
              <td><strong>Auto-Clean Heating Element Coil</strong></td>
              <td class="price-highlight">₹850 – ₹1,650</td>
            </tr>
            <tr>
              <td><strong>Touch Sensor Panel / Display Board</strong></td>
              <td class="price-highlight">₹950 – ₹1,850</td>
            </tr>
            <tr>
              <td><strong>Main Power PCB Motherboard Repair / Replacement</strong></td>
              <td class="price-highlight">₹1,200 – ₹2,400</td>
            </tr>
            <tr>
              <td><strong>Chimney Copper Blower Motor Replacement</strong></td>
              <td class="price-highlight">₹1,850 – ₹3,600</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="text-align: center; font-size: 0.85rem; color: var(--text-muted); margin-top: 14px;">
        * Prices shown are indicative and vary based on brand, chimney size (60cm vs 90cm), model complexity, and parts required. Visiting charge is adjusted against service if work is approved.
      </p>
    </div>
  </section>

  <!-- Customer Service Experiences (5 Unique Real Experiences) -->
  <section class="section" id="experiences" style="background: var(--bg-alt); padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">Real Customer Cases</span>
        <h2 class="section-title">Recent Doorstep Chimney Repairs Across Chennai</h2>
        <p class="section-subtitle">Real examples of issues diagnosed, parts replaced, and results delivered at our customers' homes.</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">
        <!-- Experience 1 -->
        <div class="experience-card">
          <div class="exp-header">
            <div>
              <span class="exp-user">S. Karthikeyan</span>
              <span class="exp-loc">Anna Nagar, Chennai</span>
            </div>
            <span class="badge-tag badge-tag-green">Wall Mounted Chimney</span>
          </div>
          <div class="exp-body">
            <p><strong>Customer Complaint:</strong> "Chimney suction romba kammiya irukku and motor sound jasthi. Heavy frying pannum pothu kitchen full-ah smoke nilluthu."</p>
            <p><strong>Technician Inspection:</strong> Technician tested air velocity at the intake, inspected the dual baffle filters, and checked motor capacitor microfarad rating.</p>
            <p><strong>Fault Found:</strong> Both stainless steel baffle filters were heavily coated in solidified cooking oil, and the 4uF motor run capacitor had dropped to 1.8uF, causing motor RPM to drop by half.</p>
            <p><strong>Work Done:</strong> Jet-degreased both baffle filters with food-grade alkaline wash and replaced the weak capacitor with a genuine heavy-duty 4uF component.</p>
            <div class="exp-footer">
              <span>Approx. Cost: ₹680</span>
              <span style="color: #166534; font-weight: 700;">Result: Strong airflow restored</span>
            </div>
          </div>
        </div>

        <!-- Experience 2 -->
        <div class="experience-card">
          <div class="exp-header">
            <div>
              <span class="exp-user">Meenakshi Sundaram</span>
              <span class="exp-loc">Velachery, Chennai</span>
            </div>
            <span class="badge-tag badge-tag-green">Auto-Clean Curved Glass</span>
          </div>
          <div class="exp-body">
            <p><strong>Customer Complaint:</strong> "Auto-clean button press pannalum oil collector tray-la oil drop aagala, heating run aagala. Tray eppovume dry-ah irukku."</p>
            <p><strong>Technician Inspection:</strong> Technician opened the front canopy and tested electrical continuity across the thermal heater strip wrapped around the motor housing.</p>
            <p><strong>Fault Found:</strong> An open circuit in the thermal safety fuse due to an earlier voltage surge, preventing power from reaching the heater element.</p>
            <p><strong>Work Done:</strong> Replaced the blown thermal protector fuse and rewired the heater harness with heat-resistant ceramic sleeves.</p>
            <div class="exp-footer">
              <span>Approx. Cost: ₹850</span>
              <span style="color: #166534; font-weight: 700;">Result: Auto-clean cycle melting oil perfectly</span>
            </div>
          </div>
        </div>

        <!-- Experience 3 -->
        <div class="experience-card">
          <div class="exp-header">
            <div>
              <span class="exp-user">R. Balaji</span>
              <span class="exp-loc">Adyar, Chennai</span>
            </div>
            <span class="badge-tag badge-tag-green">Straight Line Chimney</span>
          </div>
          <div class="exp-body">
            <p><strong>Customer Complaint:</strong> "Chimney switch on pannave mudiyala, speed control buttons press pannalum motor respond panla. 2nd speed button stuck-ah irukku."</p>
            <p><strong>Technician Inspection:</strong> Checked input line voltage at the terminal block and disassembled the 5-key mechanical push switch assembly.</p>
            <p><strong>Fault Found:</strong> Kitchen grease vapors had seeped past the front fascia, gumming up the internal springs and corroding copper contact pins on speed 2.</p>
            <p><strong>Work Done:</strong> Removed the damaged mechanical switch board and installed a brand-compatible enclosed 3-speed push switch unit.</p>
            <div class="exp-footer">
              <span>Approx. Cost: ₹750</span>
              <span style="color: #166534; font-weight: 700;">Result: All 3 speeds functioning smoothly</span>
            </div>
          </div>
        </div>

        <!-- Experience 4 -->
        <div class="experience-card">
          <div class="exp-header">
            <div>
              <span class="exp-user">P. Vasanth</span>
              <span class="exp-loc">Porur, Chennai</span>
            </div>
            <span class="badge-tag badge-tag-green">Filterless Inclined Chimney</span>
          </div>
          <div class="exp-body">
            <p><strong>Customer Complaint:</strong> "Smoke kitchen kulla spread aaguthu, chimney on pannalum exhaust veliya pogala. Air thirumba kulla blow aagura maari irukku."</p>
            <p><strong>Technician Inspection:</strong> Checked blower wheel rotation and climbed to inspect the 6-inch aluminum exhaust duct pipe leading to the balcony.</p>
            <p><strong>Fault Found:</strong> Exterior PVC backdraft shutter was jammed shut by hardened cooking grease, trapping exhaust inside the duct.</p>
            <p><strong>Work Done:</strong> Cleaned the exterior shutter flap, removed a slight bend in the aluminum pipe, and secured the duct with heavy-duty metal hose clamps.</p>
            <div class="exp-footer">
              <span>Approx. Cost: ₹550</span>
              <span style="color: #166534; font-weight: 700;">Result: Clean outward exhaust venting</span>
            </div>
          </div>
        </div>

        <!-- Experience 5 -->
        <div class="experience-card">
          <div class="exp-header">
            <div>
              <span class="exp-user">Deepa Krishnan</span>
              <span class="exp-loc">OMR Thoraipakkam, Chennai</span>
            </div>
            <span class="badge-tag badge-tag-green">Island Chimney</span>
          </div>
          <div class="exp-body">
            <p><strong>Customer Complaint:</strong> "Touch panel display flickering, chimney turns on automatically without touching and makes continuous beeping sound."</p>
            <p><strong>Technician Inspection:</strong> Dismantled the front tempered glass fascia and tested the capacitance sensor ribbon connector under magnifying lens.</p>
            <p><strong>Fault Found:</strong> High humidity and grease moisture had settled on the touch sensor ribbon connector, causing phantom touch triggers across the digital board.</p>
            <p><strong>Work Done:</strong> Chemically cleaned the ribbon connector with isopropyl contact cleaner, dried the board, and sealed the edges with moisture-resistant insulation tape.</p>
            <div class="exp-footer">
              <span>Approx. Cost: ₹950</span>
              <span style="color: #166534; font-weight: 700;">Result: Touch controls responsive and stable</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

${generateLocalitiesSection('Kitchen Chimney', 101, [
  'Repair in',
  'Service in',
  'Cleaning in',
  'Doorstep Service in',
  'Repair Service in',
  'Technician in',
  'Motor Repair in',
  'Inspection in'
])}

  <!-- FAQ Section -->
  <section class="section" id="faq" style="padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">Helpful Answers</span>
        <h2 class="section-title">Kitchen Chimney Repair FAQs for Chennai Residents</h2>
        <p class="section-subtitle">Common questions about chimney visiting charges, motor costs, and doorstep service.</p>
      </div>

      <div class="faq-list" style="max-width: 860px; margin: 0 auto;">
        <details class="faq-item">
          <summary class="faq-question">What is the inspection / visiting charge for chimney repair in Chennai?</summary>
          <div class="faq-content">
            Our doorstep inspection charge is ₹199 to ₹299 across Chennai. The technician visits your home, inspects the motor, blower, filters, touch panel, and duct pipe, and provides an upfront quote. If you choose to go ahead with the recommended repair, this visiting fee is adjusted into the final invoice.
          </div>
        </details>

        <details class="faq-item">
          <summary class="faq-question">How much does a kitchen chimney motor replacement cost in Chennai?</summary>
          <div class="faq-content">
            A chimney motor replacement generally ranges between ₹1,850 and ₹3,600 depending on the motor wattage, whether it is an open-coil or sealed copper winding motor, and the chimney brand (such as Faber, Elica, Hindware, Glen, or Kaff). We test if the motor can be revived with a simple capacitor or bearing replacement first to save costs.
          </div>
        </details>

        <details class="faq-item">
          <summary class="faq-question">Why is my kitchen chimney suction so weak even on maximum speed?</summary>
          <div class="faq-content">
            Weak suction is almost always caused by one of three issues: baffle filters heavily blocked with grease, a weakened motor run capacitor causing the motor to spin at reduced RPM, or an exhaust duct blockage (such as a crushed flexible pipe or jammed backdraft damper). Our technician checks each point on-site.
          </div>
        </details>

        <details class="faq-item">
          <summary class="faq-question">Can auto-clean chimney heating issues be fixed at home in Chennai?</summary>
          <div class="faq-content">
            Yes, auto-clean repairs are carried out directly at your doorstep. The technician checks the heating element resistance, the thermal cut-off fuse, and the PCB relay switch to identify why oil is not melting into the collector tray and replaces the faulty part on-site.
          </div>
        </details>

        <details class="faq-item">
          <summary class="faq-question">Do you service touch panels and motion gesture controls on chimneys?</summary>
          <div class="faq-content">
            Yes, we service digital touch panels, gesture control sensors, and mechanical push buttons. In many cases, non-responsive touch is caused by moisture and grease build-up on the ribbon cable, which can be cleaned and resealed without replacing the expensive glass panel.
          </div>
        </details>

        <details class="faq-item">
          <summary class="faq-question">Is deep cleaning included during a chimney repair visit?</summary>
          <div class="faq-content">
            Routine repair visits focus on diagnosing and fixing electrical or mechanical failures (motor, capacitor, switches, wiring). If your chimney also requires complete internal degreasing of the blower wheel, housing, and filters, we offer deep jet cleaning service at an attractive combined rate.
          </div>
        </details>
      </div>
    </div>
  </section>

${generateFooter()}

</body>
</html>`;

  fs.writeFileSync('kitchen-chimney/kitchen-chimney-repair-service-chennai.html', html, 'utf8');
  console.log('✓ Created kitchen-chimney/kitchen-chimney-repair-service-chennai.html');
}

// ============================================================================
// 2. GAS TOP PAGE
// ============================================================================
function buildGasTopPage() {
  const pageUrl = 'https://chennaiservicecenter.com/gas-top/gas-top-repair-service-chennai.html';
  const serviceName = 'Gas Top Repair Service in Chennai';

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-RDGHSJCD75"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-RDGHSJCD75');
  </script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gas Top Repair Service in Chennai | Call 8882055269</title>
  <meta name="description" content="Doorstep gas top & gas stove repair service in Chennai. Fast fixing for burner clogs, weak yellow flame, stiff knobs, and auto-ignition faults across Chennai.">
  <link rel="canonical" href="${pageUrl}">
  <meta property="og:title" content="Gas Top Repair Service in Chennai | Doorstep Gas Stove Service">
  <meta property="og:description" content="Looking for gas top repair near me in Chennai? Quick doorstep service for 2, 3, and 4 burner glass & stainless steel gas stoves. Call 8882055269.">
  <meta property="og:url" content="${pageUrl}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="en_IN">
  <link rel="icon" href="../favicon.ico" sizes="any">
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">
  <link rel="icon" type="image/png" href="../favicon.png">
  <link rel="apple-touch-icon" href="../apple-touch-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">
${generateLocalBusinessSchema(pageUrl, serviceName)}
</head>
<body>

${generateHeader('gas-top')}

  <!-- Breadcrumbs -->
  <nav class="breadcrumb-section" aria-label="Breadcrumb">
    <div class="container">
      <ul class="breadcrumb-list">
        <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Gas Top Repair in Chennai</li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <span class="hero-pill">Looking for gas top repair near me in Chennai? Doorstep burner & ignition service</span>
      <h1>Gas Top Repair Service in Chennai</h1>
      <p class="hero-desc">Chennai households count on their gas top and gas stoves every single morning. When a burner refuses to light, flame burns dull yellow instead of sharp blue, knobs turn stiff or jammed, or auto-spark clicks without catching flame, a cooking stoppage causes immediate distress. Our local Chennai gas stove technicians visit your doorstep quickly with brass burners, jet nozzles, and igniter parts across all Chennai localities.</p>

      <!-- Crucial Safety Advisory Alert Box -->
      <div style="background: rgba(220, 38, 38, 0.2); border: 1.5px solid #ef4444; border-radius: 8px; padding: 14px 18px; margin: 18px 0 20px; max-width: 820px; font-size: 0.95rem; line-height: 1.6; color: #fee2e2;">
        ⚠️ <strong>Important Gas Leak Safety Advice:</strong> If you ever smell LPG gas in your home or suspect a leakage, <strong>immediately turn off the cylinder regulator switch</strong> and open all windows for cross-ventilation. <strong>Do NOT turn on/off any electrical switches, exhaust fans, or light matches.</strong> Evacuate the kitchen and immediately contact a qualified technician or your LPG distributor emergency helpline. Never attempt DIY fixes on pressurized gas pipes.
      </div>

      <div style="background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(8px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 8px; padding: 14px 18px; margin: 0 0 25px; max-width: 820px; font-size: 0.95rem; line-height: 1.6; color: #f1f5f9;">
        💡 <strong>Local Chennai Service Note:</strong> Gas top burner proper-ah light aagala? Flame correct-ah varalaya, knob romba tight-ah irukka? Call 8882055269 for quick doorstep gas top inspection across Chennai with upfront prices.
      </div>

      <div class="hero-actions">
        <a href="tel:8882055269" class="btn btn-accent btn-lg">Call 8882055269</a>
        <a href="#pricing" class="btn btn-outline-white btn-lg">View Price Guide</a>
      </div>

      <div class="hero-highlights">
        <div class="highlight-item">
          <span class="highlight-icon">⏱️</span>
          <span>Fast Doorstep Visit</span>
        </div>
        <div class="highlight-item">
          <span class="highlight-icon">👨‍🔧</span>
          <span>Experienced Gas Technicians</span>
        </div>
        <div class="highlight-item">
          <span class="highlight-icon">⚙️</span>
          <span>Quality Brass Spares</span>
        </div>
        <div class="highlight-item">
          <span class="highlight-icon">💵</span>
          <span>Honest Upfront Pricing</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Tanglish Callout Box -->
  <section class="section" style="padding: 24px 0 0;">
    <div class="container">
      <div class="tanglish-box tanglish-box-blue">
        <strong>Chennai Gas Top Doorstep Service:</strong> Facing low flame or yellow soot under your cooking vessels? We service all popular brands including Prestige, Butterfly, Pigeon, Glen, Sunflame, Preethi, Vidiem, and Faber directly at your home across Chennai.
      </div>
    </div>
  </section>

  <!-- Common Problems Handled -->
  <section class="section" style="padding: 40px 0 20px;">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag badge-tag-blue">Diagnostics &amp; Repair</span>
        <h2 class="section-title">Common Gas Top Problems We Fix in Chennai</h2>
        <p class="section-subtitle">We solve burner, valve, and ignition faults safely and promptly at your residence.</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
        <div class="card" style="padding: 22px;">
          <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 10px;">🔥 Burner Not Lighting / No Flame</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">Spilled milk, tea, or sambar frequently seeps into the brass burner holes or clogs the miniature gas injector nozzle beneath the burner base. We clear carbon blockages and restore gas flow.</p>
        </div>

        <div class="card" style="padding: 22px;">
          <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 10px;">🟡 Low or Uneven Yellow Flame</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">A yellow lazy flame leaves black soot on vessels and wastes fuel. It indicates an incorrect air-to-gas ratio in the mixing tube or partial nozzle clogging. Technicians clean venturi passages and calibrate air rings.</p>
        </div>

        <div class="card" style="padding: 22px;">
          <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 10px;">🔘 Stiff, Jammed or Loose Knobs</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">Knobs that become impossible to turn or spin freely without controlling flame have seized brass valve spindles or cracked internal knob stems. We dismantle, lubricate with high-heat silicone grease, or fit new knobs.</p>
        </div>

        <div class="card" style="padding: 22px;">
          <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 10px;">⚡ Auto-Ignition Spark Failure</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">In battery-operated or piezoelectric ignition gas tops, the ceramic spark pin can crack, misalign, or suffer from rusted earthing contact. We re-gap spark electrodes or replace faulty piezoelectric pulsers.</p>
        </div>

        <div class="card" style="padding: 22px;">
          <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 10px;">💨 Hissing Sound or Odor Diagnosis</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">Technicians use specialized bubble leak detectors on rubber hose joints, internal brass manifold tubes, and gas cock valves to identify loose clamp connections and ensure complete safety.</p>
        </div>

        <div class="card" style="padding: 22px;">
          <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 10px;">🛡️ Glass Top Care &amp; Pan Support Wobble</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">Unstable vessels tipping over due to warped pan supports or loose spill tray screws can pose kitchen hazards. We replace heavy-duty cast iron or enameled trivets and rubber mounting pads.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Gas Top Types (6 Types) -->
  <section class="section" style="background: var(--bg-alt); padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">All Stove Configurations</span>
        <h2 class="section-title">Gas Top Types We Service Across Chennai</h2>
        <p class="section-subtitle">Doorstep repair available for all burner layouts and construction materials.</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 22px;">
        <!-- Type 1 -->
        <div class="card" style="padding: 24px; background: #ffffff;">
          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 10px;">2 Burner Gas Top Repair</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Need 2 burner gas stove repair near me in Chennai?</p>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Standard small-family setup. Frequent issues include low flame on the small burner, stiff left knob, and choked brass jet nozzles from everyday milk boils.</p>
          <div style="font-size: 0.875rem; color: var(--text-muted);">
            <div><strong>Common Spares:</strong> Brass burner, injector jet, rotary knob</div>
            <div style="color: var(--primary); font-weight: 700; margin-top: 6px;">Indicative Cost: ₹250 – ₹650</div>
          </div>
        </div>

        <!-- Type 2 -->
        <div class="card" style="padding: 24px; background: #ffffff;">
          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 10px;">3 Burner Gas Top Repair</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Looking for 3 burner gas stove service in Chennai?</p>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">The most popular configuration in Chennai homes with small, medium, and jumbo burners. Technicians resolve unequal flame distribution and center burner ignition faults.</p>
          <div style="font-size: 0.875rem; color: var(--text-muted);">
            <div><strong>Common Spares:</strong> Jumbo brass burner, venturi mixing tube, gas valve</div>
            <div style="color: var(--primary); font-weight: 700; margin-top: 6px;">Indicative Cost: ₹320 – ₹850</div>
          </div>
        </div>

        <!-- Type 3 -->
        <div class="card" style="padding: 24px; background: #ffffff;">
          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 10px;">4 Burner Gas Top Repair</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Searching for 4 burner gas stove technician near me in Chennai?</p>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Large cooking surfaces with multi-valve manifolds. Technicians diagnose pressure drop when multiple burners are lit simultaneously and clean individual gas cocks.</p>
          <div style="font-size: 0.875rem; color: var(--text-muted);">
            <div><strong>Common Spares:</strong> Multiple brass burners, gas manifold tubes, pan supports</div>
            <div style="color: var(--primary); font-weight: 700; margin-top: 6px;">Indicative Cost: ₹380 – ₹1,100</div>
          </div>
        </div>

        <!-- Type 4 -->
        <div class="card" style="padding: 24px; background: #ffffff;">
          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 10px;">Glass Top Gas Stove Repair</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Glass top gas stove repair service in Chennai?</p>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Features toughened glass tops that require gentle dismantling. Technicians check spill seals to prevent gravy from seeping below the glass into the internal brass valves.</p>
          <div style="font-size: 0.875rem; color: var(--text-muted);">
            <div><strong>Common Spares:</strong> Silicone spill seals, heat shields, spill trays</div>
            <div style="color: var(--primary); font-weight: 700; margin-top: 6px;">Indicative Cost: ₹350 – ₹950</div>
          </div>
        </div>

        <!-- Type 5 -->
        <div class="card" style="padding: 24px; background: #ffffff;">
          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 10px;">Stainless Steel Gas Stove Repair</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Stainless steel gas stove service near me in Chennai?</p>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Durable and sturdy everyday models. Technicians remove stubborn rust around burner bases, adjust venturi mixing tubes, and lubricate internal brass valves.</p>
          <div style="font-size: 0.875rem; color: var(--text-muted);">
            <div><strong>Common Spares:</strong> Brass mixing tube, burner holders, knob set</div>
            <div style="color: var(--primary); font-weight: 700; margin-top: 6px;">Indicative Cost: ₹250 – ₹700</div>
          </div>
        </div>

        <!-- Type 6 -->
        <div class="card" style="padding: 24px; background: #ffffff;">
          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 10px;">Built-in Gas Top / Countertop Unit</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Countertop built-in gas stove repair in Chennai?</p>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Flush-fit gas top models installed into kitchen slabs. Technicians inspect under-counter gas pipe connections, auto-spark wiring, and front rotary gas valves on-site.</p>
          <div style="font-size: 0.875rem; color: var(--text-muted);">
            <div><strong>Common Spares:</strong> Spark igniter, high-pressure gas hose, brass valve</div>
            <div style="color: var(--primary); font-weight: 700; margin-top: 6px;">Indicative Cost: ₹450 – ₹1,250</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Parts & Indicative Pricing Section -->
  <section class="section" id="pricing" style="padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 30px;">
        <span class="badge-tag badge-tag-blue">Upfront &amp; Transparent</span>
        <h2 class="section-title">Gas Top Parts &amp; Indicative Pricing in Chennai</h2>
        <p class="section-subtitle">Clear cost estimates for common gas stove spares and repair works. Accurate estimate given after physical diagnosis.</p>
      </div>

      <div class="table-responsive" style="max-width: 860px; margin: 0 auto;">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 60%;">Component / Service Work</th>
              <th style="width: 40%;">Indicative Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Doorstep Gas Top Inspection &amp; Diagnosis Visit</strong></td>
              <td class="price-highlight">₹149 – ₹249</td>
            </tr>
            <tr>
              <td><strong>Burner Port Cleaning &amp; Air-Gas Venturi Adjustment</strong></td>
              <td class="price-highlight">₹199 – ₹399</td>
            </tr>
            <tr>
              <td><strong>Heat-Resistant Control Knob Replacement (Per Piece)</strong></td>
              <td class="price-highlight">₹120 – ₹250</td>
            </tr>
            <tr>
              <td><strong>Gas Injector Jet / Brass Nozzle Replacement</strong></td>
              <td class="price-highlight">₹150 – ₹350</td>
            </tr>
            <tr>
              <td><strong>Silicone Spill Gasket &amp; Seal Ring Set</strong></td>
              <td class="price-highlight">₹150 – ₹300</td>
            </tr>
            <tr>
              <td><strong>Piezoelectric Auto-Igniter Unit</strong></td>
              <td class="price-highlight">₹250 – ₹550</td>
            </tr>
            <tr>
              <td><strong>Heavy-Duty Pan Support / Trivet</strong></td>
              <td class="price-highlight">₹250 – ₹550</td>
            </tr>
            <tr>
              <td><strong>Mixing Tube / Venturi Base Assembly</strong></td>
              <td class="price-highlight">₹280 – ₹520</td>
            </tr>
            <tr>
              <td><strong>Precision Brass Rotary Gas Control Valve</strong></td>
              <td class="price-highlight">₹350 – ₹650</td>
            </tr>
            <tr>
              <td><strong>Heavy Solid Brass Burner (Small / Medium / Jumbo)</strong></td>
              <td class="price-highlight">₹350 – ₹750</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="text-align: center; font-size: 0.85rem; color: var(--text-muted); margin-top: 14px;">
        * Indicative prices only. Actual costs depend on stove brand, burner size, and replacement parts required. Inspection charge is waived if repair work is carried out.
      </p>
    </div>
  </section>

  <!-- Customer Service Experiences (3 Unique Real Experiences) -->
  <section class="section" id="experiences" style="background: var(--bg-alt); padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">Customer Case Studies</span>
        <h2 class="section-title">Doorstep Gas Top Repairs in Chennai</h2>
        <p class="section-subtitle">Real examples of common gas stove faults diagnosed and repaired at our customers' premises.</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">
        <!-- Experience 1 -->
        <div class="experience-card">
          <div class="exp-header">
            <div>
              <span class="exp-user">K. Swaminathan</span>
              <span class="exp-loc">Mylapore, Chennai</span>
            </div>
            <span class="badge-tag badge-tag-green">3 Burner Glass Top Stove</span>
          </div>
          <div class="exp-body">
            <p><strong>Customer Complaint:</strong> "Periya burner flame romba weak-ah irukku, utensils bottom black-ah marudhu, yellow flame varuthu. Coffee poda kooda time aagudhu."</p>
            <p><strong>Technician Inspection:</strong> Checked gas regulator delivery pressure, dismantled the large brass burner, and checked the venturi mixing chamber.</p>
            <p><strong>Fault Found:</strong> Boiled milk spills had dried inside the miniature gas injector jet, partially obstructing the gas orifice and disturbing the air-fuel mixture.</p>
            <p><strong>Work Done:</strong> Ultrasonic cleared the brass burner ports, decarbonized the venturi tube, and fitted a new precision calibrated brass jet nozzle.</p>
            <div class="exp-footer">
              <span>Approx. Cost: ₹420</span>
              <span style="color: #166534; font-weight: 700;">Result: Crisp high-power blue flame</span>
            </div>
          </div>
        </div>

        <!-- Experience 2 -->
        <div class="experience-card">
          <div class="exp-header">
            <div>
              <span class="exp-user">V. Ananthan</span>
              <span class="exp-loc">Ambattur, Chennai</span>
            </div>
            <span class="badge-tag badge-tag-green">4 Burner Steel Stove</span>
          </div>
          <div class="exp-body">
            <p><strong>Customer Complaint:</strong> "Center knob romba tight aagiduchu, turn panna mudiyala. Force panni thirupunadhula knob plastic stem crack aachu."</p>
            <p><strong>Technician Inspection:</strong> Removed top fascia screws and checked the internal brass rotary gas cock valve.</p>
            <p><strong>Fault Found:</strong> Dried oil and seasoning grease had entered the brass spindle over months, causing the metal cock to bind inside the body.</p>
            <p><strong>Work Done:</strong> Carefully dismantled the valve spindle, cleaned off solidified residue, lubricated with high-temperature gas grease, and fitted an OEM heat-resistant knob.</p>
            <div class="exp-footer">
              <span>Approx. Cost: ₹380</span>
              <span style="color: #166534; font-weight: 700;">Result: Smooth, effortless knob rotation</span>
            </div>
          </div>
        </div>

        <!-- Experience 3 -->
        <div class="experience-card">
          <div class="exp-header">
            <div>
              <span class="exp-user">S. Jayashree</span>
              <span class="exp-loc">Medavakkam, Chennai</span>
            </div>
            <span class="badge-tag badge-tag-green">2 Burner Auto-Ignition Top</span>
          </div>
          <div class="exp-body">
            <p><strong>Customer Complaint:</strong> "Auto-ignition button click aagudhu but spark burner mela vizhala, matchbox pottu thaan light panna vendiyatha irukku."</p>
            <p><strong>Technician Inspection:</strong> Tested the piezoelectric spark generator output and checked the ceramic spark electrode position.</p>
            <p><strong>Fault Found:</strong> Ceramic spark pin had cracked near the mounting bracket, causing the electrical spark to jump harmlessly to the bottom frame instead of the burner gas ring.</p>
            <p><strong>Work Done:</strong> Replaced the cracked spark electrode with a heat-insulated ceramic pin and adjusted spark gap to 3.5mm from the gas port.</p>
            <div class="exp-footer">
              <span>Approx. Cost: ₹490</span>
              <span style="color: #166534; font-weight: 700;">Result: Instant ignition on first push</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

${generateLocalitiesSection('Gas Top', 202, [
  'Repair in',
  'Service in',
  'Burner Repair in',
  'Doorstep Repair in',
  'Gas Stove Service in',
  'Technician in',
  'Ignition Service in',
  'Inspection in'
])}

  <!-- FAQ Section -->
  <section class="section" id="faq" style="padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">Common Questions</span>
        <h2 class="section-title">Gas Top Repair FAQs for Chennai Customers</h2>
        <p class="section-subtitle">Clear information on service charges, ignition repairs, and gas safety guidelines.</p>
      </div>

      <div class="faq-list" style="max-width: 860px; margin: 0 auto;">
        <details class="faq-item">
          <summary class="faq-question">What is the visiting charge for gas top repair in Chennai?</summary>
          <div class="faq-content">
            Our doorstep visiting and inspection charge is ₹149 to ₹249 depending on locality. Our technician visits your kitchen, inspects the burners, knobs, gas valves, and ignition unit, and gives you a clear quote before starting any work. If you approve the repair, the visiting fee is included in the service cost.
          </div>
        </details>

        <details class="faq-item">
          <summary class="faq-question">How much does gas top ignition repair usually cost?</summary>
          <div class="faq-content">
            Piezoelectric or battery-operated auto-ignition repair usually costs between ₹250 and ₹550. If only the ceramic spark pin needs realignment or cleaning, the cost is minimal; if the internal spark unit or wiring harness needs replacement, the technician provides a clear spare-part quote.
          </div>
        </details>

        <details class="faq-item">
          <summary class="faq-question">Why is one of my gas stove burners giving a weak yellow flame?</summary>
          <div class="faq-content">
            A weak yellow flame typically happens when boiled liquids (milk, dal, tea) clog the miniature brass nozzle beneath the burner, reducing gas flow and disrupting the air-to-gas ratio. Our technician cleans the burner ports, clears the venturi tube, and replaces the nozzle jet if corroded.
          </div>
        </details>

        <details class="faq-item">
          <summary class="faq-question">Can you replace a faulty, stiff, or leaking gas valve at home?</summary>
          <div class="faq-content">
            Yes, our technicians carry genuine-grade replacement brass rotary valves and high-temperature gas grease. Stiff valves can often be dismantled, cleaned, and lubricated on-site, while damaged or leaking valves are replaced immediately for complete kitchen safety.
          </div>
        </details>

        <details class="faq-item">
          <summary class="faq-question">How should I care for a toughened glass top gas stove to prevent damage?</summary>
          <div class="faq-content">
            Never pour cold water onto the glass when it is hot from cooking, avoid using oversized tandoor or bati cookers that radiate intense heat downward onto the glass, and keep the spill tray seals intact so liquid does not drip onto internal brass parts.
          </div>
        </details>

        <details class="faq-item">
          <summary class="faq-question">What should I do immediately if I suspect a gas leak in my kitchen?</summary>
          <div class="faq-content">
            Immediately shut off the regulator on top of your LPG cylinder. Open all kitchen windows and doors to allow fresh air in. Do NOT touch any electric switches (neither ON nor OFF), do not turn on exhaust fans, and do not light matches. Call our helpline or your LPG distributor emergency service immediately. Never attempt DIY repair on gas leaks.
          </div>
        </details>
      </div>
    </div>
  </section>

${generateFooter()}

</body>
</html>`;

  fs.writeFileSync('gas-top/gas-top-repair-service-chennai.html', html, 'utf8');
  console.log('✓ Created gas-top/gas-top-repair-service-chennai.html');
}

// ============================================================================
// 3. HOB PAGE
// ============================================================================
function buildHobPage() {
  const pageUrl = 'https://chennaiservicecenter.com/hob/hob-repair-service-chennai.html';
  const serviceName = 'Hob Repair Service in Chennai';

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-RDGHSJCD75"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-RDGHSJCD75');
  </script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hob Repair Service in Chennai | Call 8882055269</title>
  <meta name="description" content="Expert kitchen hob repair in Chennai. Doorstep repair for built-in gas hobs, continuous auto-ignition clicking, low flame, spark plugs, Sabaf burners & rotary valves.">
  <link rel="canonical" href="${pageUrl}">
  <meta property="og:title" content="Hob Repair Service in Chennai | Kitchen Hob & Built-in Gas Hob Care">
  <meta property="og:description" content="Looking for built-in hob repair near me in Chennai? Fast doorstep service for glass hobs, Italian Sabaf burners, auto ignition failure, and gas valves across Chennai.">
  <meta property="og:url" content="${pageUrl}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="en_IN">
  <link rel="icon" href="../favicon.ico" sizes="any">
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">
  <link rel="icon" type="image/png" href="../favicon.png">
  <link rel="apple-touch-icon" href="../apple-touch-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">
${generateLocalBusinessSchema(pageUrl, serviceName)}
</head>
<body>

${generateHeader('hob')}

  <!-- Breadcrumbs -->
  <nav class="breadcrumb-section" aria-label="Breadcrumb">
    <div class="container">
      <ul class="breadcrumb-list">
        <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Hob Repair Service in Chennai</li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <span class="hero-pill">Looking for built-in hob repair near me in Chennai? Doorstep auto-ignition & burner service</span>
      <h1>Hob Repair Service in Chennai</h1>
      <p class="hero-desc">Modern modular kitchens in Chennai apartments feature built-in glass and stainless steel hobs fitted directly into granite or quartz countertops. However, daily gravies, boiled milk overflows, and electrical pulses can cause continuous spark clicking, stiff rotary valves, or failure of flame failure safety devices (FFD). When your kitchen hob burner won't ignite, trips out as soon as you release the knob, or gives uneven flame, our Chennai hob repair specialists provide careful doorstep diagnosis directly at your home.</p>

      <div style="background: rgba(220, 38, 38, 0.2); border: 1.5px solid #ef4444; border-radius: 8px; padding: 14px 18px; margin: 18px 0 20px; max-width: 820px; font-size: 0.95rem; line-height: 1.6; color: #fee2e2;">
        ⚠️ <strong>Built-in Hob Safety Note:</strong> Always turn off the gas cylinder regulator switch or piped gas isolation valve before inspecting gas appliances. If you detect any odor of gas, ventilate your kitchen immediately, do not switch electrical buttons, and call for professional inspection.
      </div>

      <div style="background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(8px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 8px; padding: 14px 18px; margin: 0 0 25px; max-width: 820px; font-size: 0.95rem; line-height: 1.6; color: #f1f5f9;">
        💡 <strong>Local Chennai Service Note:</strong> Built-in hob ignition work aagala? Burner flame weak-ah irukka, continuous clicking sound varutha? Our local Chennai technicians visit your doorstep to inspect pulse boxes, microswitches, and Sabaf brass burners with upfront pricing.
      </div>

      <div class="hero-actions">
        <a href="tel:8882055269" class="btn btn-accent btn-lg">Call 8882055269</a>
        <a href="#pricing" class="btn btn-outline-white btn-lg">View Price Guide</a>
      </div>

      <div class="hero-highlights">
        <div class="highlight-item">
          <span class="highlight-icon">⏱️</span>
          <span>Same-Day Home Visit</span>
        </div>
        <div class="highlight-item">
          <span class="highlight-icon">👨‍🔧</span>
          <span>Built-in Hob Specialists</span>
        </div>
        <div class="highlight-item">
          <span class="highlight-icon">⚙️</span>
          <span>Genuine Sabaf &amp; OEM Spares</span>
        </div>
        <div class="highlight-item">
          <span class="highlight-icon">💵</span>
          <span>Transparent Quote Before Fix</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Tanglish Callout Box -->
  <section class="section" style="padding: 24px 0 0;">
    <div class="container">
      <div class="tanglish-box tanglish-box-blue">
        <strong>Chennai Kitchen Hob Doorstep Care:</strong> We service all major built-in hob brands including Bosch, Faber, Elica, Siemens, Glen, Hafele, Kaff, Hindware, and Prestige without requiring you to unmount or remove your kitchen countertop slab.
      </div>
    </div>
  </section>

  <!-- Common Problems Handled -->
  <section class="section" style="padding: 40px 0 20px;">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag badge-tag-blue">Diagnostics &amp; Repair</span>
        <h2 class="section-title">Common Built-in Hob Faults We Fix in Chennai</h2>
        <p class="section-subtitle">Precision repairs for electronic ignition, rotary valves, and safety thermocouples.</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
        <div class="card" style="padding: 22px;">
          <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 10px;">⚡ Continuous Auto-Ignition Spark Clicking</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">When the spark generator keeps clicking endlessly even after releasing the knob, liquid from boiled curries has seeped beneath the knob bezel, creating an electrical short in the microswitch harness.</p>
        </div>

        <div class="card" style="padding: 22px;">
          <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 10px;">🔥 Flame Goes Out When Knob is Released</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">Built-in hobs with Flame Failure Devices (FFD) shut off gas if the thermocouple does not heat up within seconds. Carbon buildup, loose wiring, or a failing magnetic valve causes premature shut-off.</p>
        </div>

        <div class="card" style="padding: 22px;">
          <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 10px;">🔴 Burner Not Igniting / No Spark</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">If pushing the knob produces no spark at all, the multi-outlet pulse generator box may have failed, the battery compartment may have corroded contacts, or the AC power cord under the counter has tripped.</p>
        </div>

        <div class="card" style="padding: 22px;">
          <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 10px;">🟡 Yellow Lazy Flame &amp; Uneven Burner Ring</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">Italian Sabaf brass burners have precision slots that must remain clear. Carbon deposits or water residue in the burner ring slots warp flame geometry, leading to sooty yellow burning.</p>
        </div>

        <div class="card" style="padding: 22px;">
          <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 10px;">🔒 Locked or Extremely Stiff Knobs</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">High countertop temperatures dry out valve lubricants over time, causing rotary gas valves to bind tightly. We dismantle the valve assembly on-site, degrease, and re-apply thermal silicone gas grease.</p>
        </div>

        <div class="card" style="padding: 22px;">
          <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 10px;">🍳 Cast Iron Pan Support Rocking</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">Wobbly cookware on high-end glass hobs risks shattering the tempered glass plate. We replace worn rubber cushion feet and align heavy cast iron pan trivets for rock-solid stability.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Hob Types (6 Types) -->
  <section class="section" style="background: var(--bg-alt); padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">All Hob Designs</span>
        <h2 class="section-title">Kitchen Hob Types We Service Across Chennai</h2>
        <p class="section-subtitle">Doorstep repair expertise across built-in configurations and ignition systems.</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 22px;">
        <!-- Type 1 -->
        <div class="card" style="padding: 24px; background: #ffffff;">
          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 10px;">Built-in Gas Hob Repair</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Looking for built-in gas hob repair in Chennai?</p>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Sealed flush into countertop cutouts with under-counter wiring. Technicians access internal gas manifolds and pulse generators from the top without dismantling modular cabinetry.</p>
          <div style="font-size: 0.875rem; color: var(--text-muted);">
            <div><strong>Common Spares:</strong> Pulse generator, spark plug, brass valve</div>
            <div style="color: var(--primary); font-weight: 700; margin-top: 6px;">Indicative Cost: ₹550 – ₹1,850</div>
          </div>
        </div>

        <!-- Type 2 -->
        <div class="card" style="padding: 24px; background: #ffffff;">
          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 10px;">2 Burner Hob Repair</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Need 2 burner hob service near me in Chennai?</p>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Compact domino hobs ideal for studio apartments and auxiliary kitchenettes. Common issues include weak flame on the front burner and seized push-to-turn knobs.</p>
          <div style="font-size: 0.875rem; color: var(--text-muted);">
            <div><strong>Common Spares:</strong> Microswitch harness, small burner cap, nozzle jet</div>
            <div style="color: var(--primary); font-weight: 700; margin-top: 6px;">Indicative Cost: ₹350 – ₹950</div>
          </div>
        </div>

        <!-- Type 3 -->
        <div class="card" style="padding: 24px; background: #ffffff;">
          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 10px;">3 Burner Hob Repair</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Searching for 3 burner kitchen hob technician in Chennai?</p>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Triangular or straight layout hob widely used in Chennai homes. Technicians solve unequal flame height and repair center triple-ring wok burners.</p>
          <div style="font-size: 0.875rem; color: var(--text-muted);">
            <div><strong>Common Spares:</strong> Triple-ring Sabaf brass burner, thermocouple, knob</div>
            <div style="color: var(--primary); font-weight: 700; margin-top: 6px;">Indicative Cost: ₹450 – ₹1,350</div>
          </div>
        </div>

        <!-- Type 4 -->
        <div class="card" style="padding: 24px; background: #ffffff;">
          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 10px;">4 Burner Hob Repair</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Looking for 4 burner built-in hob repair in Chennai?</p>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Spacious luxury cooking tops with 4 independent spark lines. Technicians replace 4-way pulse generators, adjust flame failure sensors, and lubricate multi-valve cocks.</p>
          <div style="font-size: 0.875rem; color: var(--text-muted);">
            <div><strong>Common Spares:</strong> 4-point pulse box, microswitch harness, manifold valve</div>
            <div style="color: var(--primary); font-weight: 700; margin-top: 6px;">Indicative Cost: ₹550 – ₹1,950</div>
          </div>
        </div>

        <!-- Type 5 -->
        <div class="card" style="padding: 24px; background: #ffffff;">
          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 10px;">Toughened Glass Hob Repair</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Glass hob repair and service near me in Chennai?</p>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Premium black or bevelled glass surfaces. Technicians inspect rubber perimeter gaskets that stop liquids from reaching electronic boards beneath the glass surface.</p>
          <div style="font-size: 0.875rem; color: var(--text-muted);">
            <div><strong>Common Spares:</strong> Spill rubber ring, cast iron trivet, flame spreader</div>
            <div style="color: var(--primary); font-weight: 700; margin-top: 6px;">Indicative Cost: ₹420 – ₹1,200</div>
          </div>
        </div>

        <!-- Type 6 -->
        <div class="card" style="padding: 24px; background: #ffffff;">
          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 10px;">Auto Ignition Gas Hob Repair</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Hob auto ignition not working in Chennai?</p>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">Operates either on 230V AC plug or integrated 1.5V D-cell battery. Technicians diagnose power supply transformers, battery corrosion, and spark electrode alignment.</p>
          <div style="font-size: 0.875rem; color: var(--text-muted);">
            <div><strong>Common Spares:</strong> Pulse unit, ceramic spark electrode, battery housing</div>
            <div style="color: var(--primary); font-weight: 700; margin-top: 6px;">Indicative Cost: ₹450 – ₹1,450</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Parts & Indicative Pricing Section -->
  <section class="section" id="pricing" style="padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 30px;">
        <span class="badge-tag badge-tag-blue">Upfront &amp; Transparent</span>
        <h2 class="section-title">Hob Parts &amp; Indicative Pricing in Chennai</h2>
        <p class="section-subtitle">Approximate charges for common hob components and service works. Final estimate confirmed after physical on-site inspection.</p>
      </div>

      <div class="table-responsive" style="max-width: 860px; margin: 0 auto;">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 60%;">Component / Service Work</th>
              <th style="width: 40%;">Indicative Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Doorstep Hob Inspection &amp; Diagnosis Visit</strong></td>
              <td class="price-highlight">₹249 – ₹349</td>
            </tr>
            <tr>
              <td><strong>Metallic Heavy-Duty Hob Control Knob</strong></td>
              <td class="price-highlight">₹220 – ₹450</td>
            </tr>
            <tr>
              <td><strong>Ceramic Spark Electrode &amp; Ignition Cable</strong></td>
              <td class="price-highlight">₹280 – ₹550</td>
            </tr>
            <tr>
              <td><strong>Multi-Point Microswitch Wiring Harness</strong></td>
              <td class="price-highlight">₹450 – ₹850</td>
            </tr>
            <tr>
              <td><strong>Cast Iron Heavy Pan Trivet / Support</strong></td>
              <td class="price-highlight">₹480 – ₹950</td>
            </tr>
            <tr>
              <td><strong>Flame Failure Device (FFD) Thermocouple Sensor</strong></td>
              <td class="price-highlight">₹550 – ₹1,100</td>
            </tr>
            <tr>
              <td><strong>Precision Brass Rotary Valve Servicing / Replacement</strong></td>
              <td class="price-highlight">₹550 – ₹950</td>
            </tr>
            <tr>
              <td><strong>Multi-Outlet Electronic Pulse Ignition Generator (AC/DC)</strong></td>
              <td class="price-highlight">₹750 – ₹1,600</td>
            </tr>
            <tr>
              <td><strong>Italian Sabaf / Cast Brass Burner Base &amp; Ring</strong></td>
              <td class="price-highlight">₹650 – ₹1,450</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="text-align: center; font-size: 0.85rem; color: var(--text-muted); margin-top: 14px;">
        * Indicative prices only. Actual costs depend on hob brand, model complexity, and parts required. Visiting charge is adjusted into the final bill if repair work is completed.
      </p>
    </div>
  </section>

  <!-- Customer Service Experiences (4 Unique Real Experiences) -->
  <section class="section" id="experiences" style="background: var(--bg-alt); padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">Real Customer Cases</span>
        <h2 class="section-title">Doorstep Built-in Hob Repairs in Chennai</h2>
        <p class="section-subtitle">Real examples of common hob malfunctions diagnosed and repaired at our customers' residences.</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">
        <!-- Experience 1 -->
        <div class="experience-card">
          <div class="exp-header">
            <div>
              <span class="exp-user">A. Sridhar</span>
              <span class="exp-loc">OMR Sholinganallur, Chennai</span>
            </div>
            <span class="badge-tag badge-tag-green">3 Burner Glass Hob</span>
          </div>
          <div class="exp-body">
            <p><strong>Customer Complaint:</strong> "Hob ignition work aagala, continuous-ah click-click nu sound varuthu but flame patala. Power switch off pannave vendiyatha irukku."</p>
            <p><strong>Technician Inspection:</strong> Lifted the burner covers and checked the microswitch harness seated under the knobs above the glass surface.</p>
            <p><strong>Fault Found:</strong> Boiled sambar liquid had seeped down the knob bezel, creating an electrical continuity path that permanently triggered the pulse box.</p>
            <p><strong>Work Done:</strong> Cleaned and dehydrated the microswitches, replaced one oxidized switch, and fitted waterproof silicone o-ring seals beneath each knob bezel.</p>
            <div class="exp-footer">
              <span>Approx. Cost: ₹780</span>
              <span style="color: #166534; font-weight: 700;">Result: Pulse clicks only when knob is pushed</span>
            </div>
          </div>
        </div>

        <!-- Experience 2 -->
        <div class="experience-card">
          <div class="exp-header">
            <div>
              <span class="exp-user">N. Padmavathi</span>
              <span class="exp-loc">Anna Nagar West, Chennai</span>
            </div>
            <span class="badge-tag badge-tag-green">4 Burner Italian Sabaf Hob</span>
          </div>
          <div class="exp-body">
            <p><strong>Customer Complaint:</strong> "Knob press panni release pannona burner flame odane off aagudhu, hold panni vachukitta mattum eriyudhu. Kai valikidhu."</p>
            <p><strong>Technician Inspection:</strong> Tested the Flame Failure Device (FFD) thermocouple and electromagnetic safety valve behind the gas manifold.</p>
            <p><strong>Fault Found:</strong> Hardened carbon soot coated the thermocouple sensor pin, preventing it from generating the necessary millivolt signal to hold the safety valve open.</p>
            <p><strong>Work Done:</strong> Carefully cleaned the thermocouple probe tip, re-adjusted its flame contact angle, and verified electromagnetic valve holding tension.</p>
            <div class="exp-footer">
              <span>Approx. Cost: ₹620</span>
              <span style="color: #166534; font-weight: 700;">Result: Flame stays lit immediately on release</span>
            </div>
          </div>
        </div>

        <!-- Experience 3 -->
        <div class="experience-card">
          <div class="exp-header">
            <div>
              <span class="exp-user">G. Ramanathan</span>
              <span class="exp-loc">T. Nagar, Chennai</span>
            </div>
            <span class="badge-tag badge-tag-green">2 Burner Built-in Hob</span>
          </div>
          <div class="exp-body">
            <p><strong>Customer Complaint:</strong> "Small burner flame romba weak-ah irukku, gas flow uneven-ah eriyudhu, half circle mattum thaan flame varuthu."</p>
            <p><strong>Technician Inspection:</strong> Dismantled the small Sabaf burner cap, crown, and injector jet nozzle using precision socket tools.</p>
            <p><strong>Fault Found:</strong> Dried oil residue and carbon dust had blocked microscopic flame port slots around half of the brass crown periphery.</p>
            <p><strong>Work Done:</strong> Decarbonized burner crown slots using ultrasonic solvent bath, cleaned nozzle orifice, and re-leveled the burner cap.</p>
            <div class="exp-footer">
              <span>Approx. Cost: ₹450</span>
              <span style="color: #166534; font-weight: 700;">Result: Uniform 360-degree blue flame ring</span>
            </div>
          </div>
        </div>

        <!-- Experience 4 -->
        <div class="experience-card">
          <div class="exp-header">
            <div>
              <span class="exp-user">K. Jayanthi</span>
              <span class="exp-loc">Besant Nagar, Chennai</span>
            </div>
            <span class="badge-tag badge-tag-green">5 Burner Luxury Hob</span>
          </div>
          <div class="exp-body">
            <p><strong>Customer Complaint:</strong> "Two knobs locked completely, rotation-e panna mudiyala. Wok burner knob jammed solid."</p>
            <p><strong>Technician Inspection:</strong> Opened the top glass plate and tested rotation torque on the rotary brass cock valve spindles.</p>
            <p><strong>Fault Found:</strong> Thermal drying of factory grease over 4 years of heavy cooking had seized the internal valve conical cores.</p>
            <p><strong>Work Done:</strong> Disassembled valve assemblies on-site, cleaned spindle shafts with contact solvent, applied high-temperature silicone gas grease, and reassembled with new spring clips.</p>
            <div class="exp-footer">
              <span>Approx. Cost: ₹850</span>
              <span style="color: #166534; font-weight: 700;">Result: Silky smooth knob rotation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

${generateLocalitiesSection('Hob', 303, [
  'Repair in',
  'Service in',
  'Ignition Repair in',
  'Doorstep Service in',
  'Built-in Hob Service in',
  'Technician in',
  'Burner Repair in',
  'Inspection in'
])}

  <!-- FAQ Section -->
  <section class="section" id="faq" style="padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">Helpful Answers</span>
        <h2 class="section-title">Built-in Hob Repair FAQs for Chennai Residents</h2>
        <p class="section-subtitle">Common questions about hob ignition problems, visiting charges, and countertop care.</p>
      </div>

      <div class="faq-list" style="max-width: 860px; margin: 0 auto;">
        <details class="faq-item">
          <summary class="faq-question">What is the inspection charge for built-in hob repair in Chennai?</summary>
          <div class="faq-content">
            Our doorstep inspection charge for built-in hobs is ₹249 to ₹349. Because built-in hobs involve delicate electronic pulse ignition systems, flame failure safety sensors, and under-counter gas connections, our technician performs a thorough diagnosis before quoting. The inspection fee is adjusted against the bill if you proceed with repair.
          </div>
        </details>

        <details class="faq-item">
          <summary class="faq-question">How much does a hob pulse ignition generator replacement cost?</summary>
          <div class="faq-content">
            A multi-outlet electronic pulse ignition generator replacement generally ranges between ₹750 and ₹1,600 depending on the number of burner outlets (2, 3, 4, or 5 burners) and whether it operates on AC mains or a battery module. Technicians check whether individual spark electrodes or microswitches can be cleaned first.
          </div>
        </details>

        <details class="faq-item">
          <summary class="faq-question">Why does my hob flame turn off the moment I let go of the knob?</summary>
          <div class="faq-content">
            This issue occurs on hobs equipped with a Flame Failure Device (FFD). The thermocouple must heat up to produce a small electrical current that keeps the internal gas valve open. If the thermocouple tip has carbon soot, is misaligned, or has failed, the safety valve automatically snaps shut. Our technician cleans or replaces the thermocouple on-site.
          </div>
        </details>

        <details class="faq-item">
          <summary class="faq-question">Can you repair my built-in hob without removing the kitchen countertop?</summary>
          <div class="faq-content">
            Yes! In almost all cases, our technicians repair built-in hobs directly from the top by carefully removing burner rings and lifting the glass plate, or accessing the underside through the cabinet below. We do not damage or remove your granite, quartz, or wooden countertop slab.
          </div>
        </details>

        <details class="faq-item">
          <summary class="faq-question">Do you supply replacement knobs and rotary gas valves for imported hobs?</summary>
          <div class="faq-content">
            Yes, we stock brand-compatible heat-resistant metallic and bakelite knobs, microswitch harnesses, and precision brass rotary valves suitable for Bosch, Faber, Elica, Siemens, Hafele, Glen, and Kaff hobs.
          </div>
        </details>

        <details class="faq-item">
          <summary class="faq-question">How long does a doorstep hob repair service take?</summary>
          <div class="faq-content">
            Most common hob repairs—such as pulse box replacement, continuous clicking fixes, burner cleaning, and valve lubrication—are completed within 45 to 75 minutes directly at your home.
          </div>
        </details>
      </div>
    </div>
  </section>

${generateFooter()}

</body>
</html>`;

  fs.writeFileSync('hob/hob-repair-service-chennai.html', html, 'utf8');
  console.log('✓ Created hob/hob-repair-service-chennai.html');
}

// Run the builders
buildKitchenChimneyPage();
buildGasTopPage();
buildHobPage();

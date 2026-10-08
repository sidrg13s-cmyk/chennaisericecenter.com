/**
 * hero_and_types_generator.js
 * Generates brand-specific hero starting sections and appliance type sections with Chennai search intent.
 */

function generateHeroSection(category, brandName, pageSlug) {
  const brand = (brandName && brandName !== 'Multi-Brand') ? brandName : 'Home Appliance';
  const isMulti = brandName === 'Multi-Brand' || !brandName;

  let pill = '';
  let h1 = '';
  let heroDesc = '';
  let note = '';

  if (category === 'ac') {
    pill = isMulti
      ? 'Searching for AC repair near me in Chennai? Doorstep AC service across all localities'
      : `Looking for ${brand} AC repair near me in Chennai? Doorstep ${brand} AC service & gas charging`;
    h1 = isMulti
      ? 'Air Conditioner Repair Service in Chennai'
      : `${brand} AC Repair Service in Chennai`;
    heroDesc = isMulti
      ? `Searching for reliable air conditioner repair near me in Chennai? Chennai's hot tropical climate and coastal humidity place heavy demands on cooling systems. When your AC blows warm air, drips water indoors, makes rattling sounds, or displays an error code, our local Chennai technicians visit your home promptly. We provide honest inspection, chemical jet foam washing, capacitor replacement, PCB fixes, and refrigerant recharging across all Chennai neighborhoods.`
      : `Looking for expert ${brand} air conditioner service near me in Chennai? ${brand} cooling systems are built for tough tropical conditions, but Chennai's humid coastal air can corrode outdoor fins or wear down fan capacitors over extended summer use. If your ${brand} AC stops cooling, leaks water, or shows an error code, our local Chennai technicians deliver fast doorstep diagnosis, genuine compatible spares, and upfront pricing across Chennai and Chennai District.`;
    note = `💡 <strong>Local Chennai Service Note:</strong> Chennai-la AC cooling kammiya irukka? Is your cooling unit blowing warm air, leaking water, or tripping the MCB? Our local Chennai technicians provide same-day doorstep inspection and transparent quotes across town.`;
  } else if (category === 'fridge') {
    pill = isMulti
      ? 'Looking for refrigerator repair near me in Chennai? Doorstep fridge checkup & genuine spares'
      : `Searching for ${brand} refrigerator repair near me in Chennai? Fast doorstep fridge diagnosis`;
    h1 = isMulti
      ? 'Refrigerator Repair Service in Chennai'
      : `${brand} Refrigerator Repair Service in Chennai`;
    heroDesc = isMulti
      ? `Searching for prompt refrigerator repair near me in Chennai? A sudden fridge breakdown risks food spoilage within hours in Chennai's humid heat. Whether your refrigerator is not cooling, the freezer is over-frosting, or the compressor keeps clicking without starting, our local technicians provide dependable doorstep inspection, gas charging, starter relay replacement, and thermostat repair across all Chennai localities.`
      : `Need dependable ${brand} refrigerator repair near you in Chennai? Whether you have a single door direct cool, frost-free double door, or high-end inverter ${brand} model, our certified local technicians inspect compressor circuits, clean choked defrost drains, and replace worn sensors directly at your home. We use genuine compatible parts with upfront pricing across Chennai and Chennai District.`;
    note = `💡 <strong>Local Chennai Service Note:</strong> Fridge cool aagala? Compressor clicking and cutting out? Our local Chennai refrigerator technicians provide fast doorstep inspection and upfront pricing across town.`;
  } else if (category === 'washing-machine') {
    pill = isMulti
      ? 'Searching for washing machine repair near me in Chennai? Quick doorstep technician checkup'
      : `Looking for ${brand} washing machine repair in Chennai? Same-day doorstep washer inspection`;
    h1 = isMulti
      ? 'Washing Machine Repair Service in Chennai'
      : `${brand} Washing Machine Repair Service in Chennai`;
    heroDesc = isMulti
      ? `Looking for washing machine repair near me in Chennai? In Chennai households, hard borewell water scaling, heavy laundry loads, and voltage variations frequently cause drain pump clogs, noisy bearings, and drum spin errors. Our experienced local technicians provide doorstep inspection for top load, front load, and semi-automatic washers, fixing drainage failures, vibration, and PCB faults with genuine compatible spare parts across Chennai.`
      : `Searching for ${brand} washing machine service near me in Chennai? ${brand} washing machines deliver excellent wash care, but hard water in Chennai suburbs like Velachery or Porur can block inlet valves, while high-speed spin bearings can wear out over time. If your ${brand} washer won't spin, leaks water, or displays an error code, our Chennai technicians offer quick home checkups and transparent pricing.`;
    note = `💡 <strong>Local Chennai Service Note:</strong> Machine water drain aagala? Heavy vibration and spin sound? Our local Chennai washing machine specialists visit your doorstep quickly to check and fix the issue.`;
  } else if (category === 'tv') {
    pill = isMulti
      ? 'Searching for TV repair near me in Chennai? LED, Smart TV & 4K display service at home'
      : `Looking for ${brand} TV repair service in Chennai? Doorstep LED & Smart TV display repair`;
    h1 = isMulti
      ? 'Television Repair Service in Chennai'
      : `${brand} TV Repair Service in Chennai`;
    heroDesc = isMulti
      ? `Searching for LED or Smart TV repair near me in Chennai? When your television has sound but no picture, flickers continuously, or refuses to turn on after a power fluctuation, carrying a fragile screen to an electronics market is risky. Our technicians provide convenient doorstep TV diagnostics across Chennai, specializing in backlight strip replacement, power supply SMPS repair, and motherboard servicing with clear pricing.`
      : `Need expert ${brand} television repair near you in Chennai? ${brand} LED and Smart TVs deliver crisp visuals and vibrant sound, but backlight LED failure, bootloop freezing, or power board damage can interrupt your family's entertainment. Our Chennai technicians conduct careful on-site inspection, test panel voltages, and replace burnt components with quality spares across all Chennai neighborhoods.`;
    note = `💡 <strong>Local Chennai Service Note:</strong> TV display problem irukka? Sound varuthu but screen black-ah irukka? Our local Chennai technicians inspect LED backlights and power boards directly at your doorstep.`;
  } else if (category === 'microwave') {
    pill = isMulti
      ? 'Looking for microwave oven repair near me in Chennai? Doorstep checkup for solo, grill & convection'
      : `Searching for ${brand} microwave repair near me in Chennai? Safe doorstep microwave service`;
    h1 = isMulti
      ? 'Microwave Oven Repair Service in Chennai'
      : `${brand} Microwave Oven Repair Service in Chennai`;
    heroDesc = isMulti
      ? `Searching for microwave oven repair near me in Chennai? Whether your microwave is not heating food, sparking inside the cavity, or has non-responsive touch buttons, our local Chennai technicians visit your home with proper diagnostic tools. We repair magnetron tubes, high-voltage diodes, capacitors, and touch keypads safely, providing upfront pricing across all Chennai areas.`
      : `Looking for reliable ${brand} microwave oven service in Chennai? ${brand} microwaves are essential for quick cooking and reheating in modern Chennai kitchens. If your unit runs without heating, makes popping noises, or trips the circuit breaker, our technicians test high-voltage components on-site and replace burnt mica sheets or magnetrons with genuine spares across Chennai.`;
    note = `💡 <strong>Local Chennai Service Note:</strong> Microwave heat aagala? Inside cavity-la sparks and burning smell? Our certified Chennai microwave technicians visit your doorstep to diagnose and fix the fault safely.`;
  } else {
    // service center
    pill = isMulti
      ? 'Multi-brand home appliance customer support and repair coordination in Chennai'
      : `${brand} Customer Support & Doorstep Appliance Repair Service in Chennai`;
    h1 = isMulti
      ? 'Service Center in Chennai'
      : `${brand} Service Center in Chennai`;
    heroDesc = isMulti
      ? `Your dependable destination for multi-brand home appliance support and doorstep repair coordination across Chennai. If your washing machine, air conditioner, refrigerator, TV, or microwave requires inspection, our local technicians provide fast doorstep visits, honest diagnosis, and genuine compatible spare parts throughout Chennai and Chennai District.`
      : `Searching for ${brand} service center near me in Chennai? If your ${brand} refrigerator is not cooling, your ${brand} washing machine shows drain errors, your ${brand} AC has cooling drops, or your ${brand} TV or microwave needs repair, our local technicians provide thorough checking at your home and genuine part replacements across Chennai and Chennai District.`;
    note = `💡 <strong>Local Chennai Service Note:</strong> Need quick doorstep repair for your ${brand} appliance in Chennai? Call 8882055269 for same-day technician scheduling and upfront pricing across town.`;
  }

  return `  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <span class="hero-pill">${pill}</span>
      <h1>${h1}</h1>
      <p class="hero-desc">${heroDesc}</p>

      <div style="background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(8px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 8px; padding: 14px 18px; margin: 20px 0 25px; max-width: 820px; font-size: 0.95rem; line-height: 1.6; color: #f1f5f9;">
        ${note}
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
          <span>Local Chennai technicians</span>
        </div>
        <div class="highlight-item">
          <span class="highlight-icon">⚙️</span>
          <span>Brand Compatible Spares</span>
        </div>
        <div class="highlight-item">
          <span class="highlight-icon">💵</span>
          <span>Clear Price Before Work</span>
        </div>
      </div>
    </div>
  </section>`;
}

function generateTypeSections(category, brandName, pageSlug) {
  const brand = (brandName && brandName !== 'Multi-Brand') ? brandName : 'Home';
  const isMulti = brandName === 'Multi-Brand' || !brandName;

  if (category === 'ac') {
    const b = isMulti ? 'Air Conditioner' : `${brand} AC`;
    return `  <!-- AC Types Serviced Section -->
  <section class="section" style="background-color: var(--bg-alt);">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">${b} Types Serviced across Chennai</h2>
        <p style="color: var(--text-muted); font-size: 1rem;">Each cooling system demands distinct testing routines, refrigerant pressures, and electrical safeguards.</p>
      </div>

      <!-- Type: Inverter Split AC -->
      <div class="content-box" style="margin-bottom: 28px;">
        <h2>${brand} Inverter Split AC Repair Service in Chennai</h2>
        <p style="font-size: 1.05rem; color: var(--secondary); font-weight: 500; margin-bottom: 10px;">Searching for ${brand} inverter split AC repair near me in Chennai? Inverter models offer high efficiency but require expert care.</p>
        <p style="color: var(--text-muted); line-height: 1.7; margin-bottom: 18px;">Inverter air conditioners use variable-speed compressors and delicate electronic drive boards. In Chennai's coastal environment, airborne salt can corrode outdoor inverter PCBs or cause communication errors between indoor and outdoor modules. Our Chennai technicians test IPM modules, check thermistors, and refill R32/R410A gas accurately.</p>
        <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin-top: 15px;">
          <div class="card" style="padding: 18px; border-left: 4px solid var(--accent);">
            <h3 style="font-size: 1rem; color: var(--primary); margin-bottom: 10px;">Common Issues Handled:</h3>
            <ul style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; padding-left: 18px;">
              <li>Communication error code blinking on display</li>
              <li>Compressor starting and cutting out after 5 minutes</li>
              <li>Outdoor condenser fan not spinning properly</li>
              <li>Gradual drop in cooling during afternoon heat</li>
            </ul>
          </div>
          <div class="card" style="padding: 18px; border-left: 4px solid var(--secondary);">
            <h3 style="font-size: 1rem; color: var(--primary); margin-bottom: 10px;">Key Parts Checked &amp; Serviced:</h3>
            <ul style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; padding-left: 18px;">
              <li>Outdoor Inverter PCB & Driver Board</li>
              <li>Room & Cooling Coil Thermistors</li>
              <li>DC Outdoor Fan Motor</li>
              <li>Brass Flare Nuts & Copper Joints</li>
            </ul>
          </div>
          <div class="card" style="padding: 18px; border-left: 4px solid var(--accent, #ea580c);">
            <h3 style="font-size: 1rem; color: var(--primary); margin-bottom: 10px;">Parts &amp; Approximate Price:</h3>
            <ul style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; padding-left: 18px;">
              <li>Compressor Run Capacitor: ₹450 – ₹950</li>
              <li>Temperature Sensor Thermistor: ₹450 – ₹850</li>
              <li>Indoor Blower / Fan Motor: ₹1,200 – ₹2,400</li>
              <li>Refrigerant Gas Leak &amp; Refill: ₹1,600 – ₹2,800</li>
              <li>Inverter PCB Board Repair: ₹1,500 – ₹3,200</li>
            </ul>
            <p style="font-size: 0.8rem; color: #64748b; margin-top: 6px;"><em>*Indicative prices in Chennai</em></p>
          </div>
        </div>
      </div>

      <!-- Type: Fixed Speed Split AC -->
      <div class="content-box" style="margin-bottom: 28px;">
        <h2>${brand} Fixed Speed Split AC Repair Service in Chennai</h2>
        <p style="font-size: 1.05rem; color: var(--secondary); font-weight: 500; margin-bottom: 10px;">Looking for ${brand} non-inverter split AC service near you in Chennai? Standard fixed-speed models are sturdy and reliable.</p>
        <p style="color: var(--text-muted); line-height: 1.7; margin-bottom: 18px;">Built with heavy-duty rotary compressors and copper condensers, standard split units handle long cooling cycles in Chennai. The most frequent issues are weak dual run capacitors, fan motor bearing seizure, or clogged filters. Our technicians carry heavy-duty capacitors and fan motors for immediate on-site replacement.</p>
        <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin-top: 15px;">
          <div class="card" style="padding: 18px; border-left: 4px solid var(--accent);">
            <h3 style="font-size: 1rem; color: var(--primary); margin-bottom: 10px;">Common Issues Handled:</h3>
            <ul style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; padding-left: 18px;">
              <li>Indoor fan running but outdoor compressor silent</li>
              <li>Outdoor unit tripping the home MCB breaker</li>
              <li>Ice formation on indoor evaporator cooling fins</li>
              <li>Warm airflow during peak Chennai summer heat</li>
            </ul>
          </div>
          <div class="card" style="padding: 18px; border-left: 4px solid var(--secondary);">
            <h3 style="font-size: 1rem; color: var(--primary); margin-bottom: 10px;">Key Parts Checked &amp; Serviced:</h3>
            <ul style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; padding-left: 18px;">
              <li>Heavy-Duty Run Capacitor (35–50uF)</li>
              <li>Power Contactor & Relay</li>
              <li>Cross-Flow Blower Wheel</li>
              <li>Rotary Compressor Overload Protector</li>
            </ul>
          </div>
          <div class="card" style="padding: 18px; border-left: 4px solid var(--accent, #ea580c);">
            <h3 style="font-size: 1rem; color: var(--primary); margin-bottom: 10px;">Parts &amp; Approximate Price:</h3>
            <ul style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; padding-left: 18px;">
              <li>Compressor Run Capacitor: ₹450 – ₹950</li>
              <li>Temperature Sensor Thermistor: ₹450 – ₹850</li>
              <li>Indoor Blower / Fan Motor: ₹1,200 – ₹2,400</li>
              <li>Refrigerant Gas Leak &amp; Refill: ₹1,600 – ₹2,800</li>
              <li>Inverter PCB Board Repair: ₹1,500 – ₹3,200</li>
            </ul>
            <p style="font-size: 0.8rem; color: #64748b; margin-top: 6px;"><em>*Indicative prices in Chennai</em></p>
          </div>
        </div>
      </div>

      <!-- Type: Window AC -->
      <div class="content-box" style="margin-bottom: 28px;">
        <h2>${brand} Window AC Repair Service in Chennai</h2>
        <p style="font-size: 1.05rem; color: var(--secondary); font-weight: 500; margin-bottom: 10px;">Searching for ${brand} window AC repair in Chennai? Compact window units provide solid cooling for bedrooms and offices.</p>
        <p style="color: var(--text-muted); line-height: 1.7; margin-bottom: 18px;">Window air conditioners house all cooling parts in a single chassis. With continuous use, dirt clogs the bottom drain ports, causing condensate water to spill inside. Chennai's coastal air can also pit condenser U-bends. Our technicians slide out the chassis, chemical wash the coils, and fix fan motor vibrations on-site.</p>
        <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin-top: 15px;">
          <div class="card" style="padding: 18px; border-left: 4px solid var(--accent);">
            <h3 style="font-size: 1rem; color: var(--primary); margin-bottom: 10px;">Common Issues Handled:</h3>
            <ul style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; padding-left: 18px;">
              <li>Water spilling into the bedroom from base pan</li>
              <li>Loud chassis rattling and metal vibration noise</li>
              <li>Thermostat knob failing to regulate temperature</li>
              <li>Condenser fan blade rubbing against outer shroud</li>
            </ul>
          </div>
          <div class="card" style="padding: 18px; border-left: 4px solid var(--secondary);">
            <h3 style="font-size: 1rem; color: var(--primary); margin-bottom: 10px;">Key Parts Checked &amp; Serviced:</h3>
            <ul style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; padding-left: 18px;">
              <li>Dual-Shaft Fan Motor</li>
              <li>Dual Motor Run Capacitor</li>
              <li>Rotary Thermostat Switch</li>
              <li>Base Pan Drain Rubber Port</li>
            </ul>
          </div>
          <div class="card" style="padding: 18px; border-left: 4px solid var(--accent, #ea580c);">
            <h3 style="font-size: 1rem; color: var(--primary); margin-bottom: 10px;">Parts &amp; Approximate Price:</h3>
            <ul style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; padding-left: 18px;">
              <li>Compressor Run Capacitor: ₹450 – ₹950</li>
              <li>Temperature Sensor Thermistor: ₹450 – ₹850</li>
              <li>Indoor Blower / Fan Motor: ₹1,200 – ₹2,400</li>
              <li>Refrigerant Gas Leak &amp; Refill: ₹1,600 – ₹2,800</li>
              <li>Inverter PCB Board Repair: ₹1,500 – ₹3,200</li>
            </ul>
            <p style="font-size: 0.8rem; color: #64748b; margin-top: 6px;"><em>*Indicative prices in Chennai</em></p>
          </div>
        </div>
      </div>
    </div>
  </section>`;
  } else if (category === 'washing-machine') {
    const b = isMulti ? 'Washing Machine' : `${brand} Washing Machine`;
    return `  <!-- Washing Machine Types Serviced Section -->
  <section class="section" style="background-color: var(--bg-alt);">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">${b} Category Service Details</h2>
        <p class="section-subtitle">Detailed service information for different washing machine configurations across Chennai.</p>
      </div>

      <div class="content-box" style="margin-bottom: 24px;">
        <h3>${brand} Front Load Washing Machine Repair in Chennai</h3>
        <p><strong>Searching for ${brand} front load washing machine repair near me in Chennai?</strong></p>
        <p>${brand} front load washers deliver gentle fabric care and high spin extraction. In Chennai homes, common complaints include the door lock remaining jammed after a cycle, water not draining out completely, loud bearing rumbles during high-speed spin, or water dripping from the door rubber bellow. Our Chennai technicians inspect bi-metal door interlocks, clean coin filters, test drain pump motors, and service inverter circuits on-site.</p>
        <div style="background: var(--bg-alt, #f8fafc); border-left: 4px solid var(--primary, #0284c7); padding: 14px 18px; margin-top: 14px; border-radius: 6px;">
          <h4 style="margin: 0 0 8px 0; font-size: 0.95rem; color: var(--primary, #0284c7);">Parts &amp; Approximate Price</h4>
          <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; line-height: 1.6; color: var(--text, #334155);">
            <li>Door lock interlock switch: ₹750 – ₹1,550</li>
            <li>Drain pump motor assembly: ₹950 – ₹1,850</li>
            <li>Double solenoid water inlet valve: ₹750 – ₹1,450</li>
            <li>Door boot gasket (rubber bellow): ₹1,100 – ₹2,200</li>
            <li>Inverter motor drive / PCB repair: ₹1,500 – ₹3,200</li>
          </ul>
          <p style="margin: 8px 0 0 0; font-size: 0.8rem; color: #64748b;"><em>*Indicative prices in Chennai. Actual cost confirmed after on-site fault inspection.</em></p>
        </div>
      </div>

      <div class="content-box" style="margin-bottom: 24px;">
        <h3>${brand} Top Load Washing Machine Repair in Chennai</h3>
        <p><strong>Looking for ${brand} top load washing machine repair near me in Chennai?</strong></p>
        <p>${brand} top load fully automatic washers are popular for quick everyday laundry. Frequent issues in Chennai include slow water filling due to borewell mineral scale blocking inlet valve mesh, center pulsator plates slipping under heavy laundry loads, tubs knocking violently against the body during spin, or continuous water drainage. Our technician inspects inlet solenoids, checks pressure sensor tubes, and installs balanced suspension damper rods on-site.</p>
        <div style="background: var(--bg-alt, #f8fafc); border-left: 4px solid var(--accent, #ea580c); padding: 14px 18px; margin-top: 14px; border-radius: 6px;">
          <h4 style="margin: 0 0 8px 0; font-size: 0.95rem; color: var(--accent, #ea580c);">Parts &amp; Approximate Price</h4>
          <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; line-height: 1.6; color: var(--text, #334155);">
            <li>Water inlet solenoid valve: ₹700 – ₹1,350</li>
            <li>Center pulsator agitator plate: ₹750 – ₹1,600</li>
            <li>Suspension damper rod set (4 pcs): ₹900 – ₹1,850</li>
            <li>Water level pressure sensor switch: ₹650 – ₹1,250</li>
            <li>Drain motor / valve assembly: ₹800 – ₹1,650</li>
          </ul>
          <p style="margin: 8px 0 0 0; font-size: 0.8rem; color: #64748b;"><em>*Indicative prices in Chennai. Actual cost confirmed after on-site fault inspection.</em></p>
        </div>
      </div>

      <div class="content-box" style="margin-bottom: 24px;">
        <h3>${brand} Semi Automatic Washing Machine Repair in Chennai</h3>
        <p><strong>Need ${brand} semi automatic washing machine repair in Chennai?</strong></p>
        <p>${brand} twin-tub semi automatic washing machines offer rugged performance. Common faults in Chennai include the spin tub refusing to pick up speed with wet clothes, mechanical wash timer knobs slipping without reversing agitation, water leaking continuously from the drain pipe, or the spin motor humming without turning. Our technician tests dual run capacitors, adjusts mechanical brake wires, and installs genuine wash timers directly at your home.</p>
        <div style="background: var(--bg-alt, #f8fafc); border-left: 4px solid var(--secondary, #0d9488); padding: 14px 18px; margin-top: 14px; border-radius: 6px;">
          <h4 style="margin: 0 0 8px 0; font-size: 0.95rem; color: var(--secondary, #0d9488);">Parts &amp; Approximate Price</h4>
          <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; line-height: 1.6; color: var(--text, #334155);">
            <li>Dual motor run capacitor (10+5 uF): ₹500 – ₹1,050</li>
            <li>Mechanical wash / spin timer switch: ₹600 – ₹1,250</li>
            <li>Drain valve rubber bellow &amp; spring: ₹450 – ₹850</li>
            <li>V-belt drive replacement: ₹350 – ₹700</li>
            <li>Spin safety lid switch &amp; brake wire: ₹450 – ₹900</li>
          </ul>
          <p style="margin: 8px 0 0 0; font-size: 0.8rem; color: #64748b;"><em>*Indicative prices in Chennai. Actual cost confirmed after on-site fault inspection.</em></p>
        </div>
      </div>
    </div>
  </section>`;
  } else if (category === 'fridge') {
    const b = isMulti ? 'Refrigerator' : `${brand} Refrigerator`;
    return `  <!-- Refrigerator Types Serviced Section -->
  <section class="section" style="background-color: var(--bg-alt);">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">${b} Types We Repair in Chennai</h2>
        <p class="section-subtitle">Doorstep diagnosis and repair for all refrigerator formats across Chennai.</p>
      </div>

      <div class="content-box" style="margin-bottom: 24px;">
        <h3>${brand} Single Door Direct Cool Refrigerator Repair in Chennai</h3>
        <p><strong>Searching for ${brand} single door fridge repair near me in Chennai?</strong></p>
        <p>Single door refrigerators rely on natural convection cooling and manual defrosting. In Chennai, the most common single door complaints are starter relay failure causing clicking sounds, thick ice forming excessively around the chiller compartment, or the thermostat knob failing to cut off the compressor. Our Chennai technician tests starter relays, overload protectors, and installs replacement thermostats on-site.</p>
        <div style="background: var(--bg-alt, #f8fafc); border-left: 4px solid var(--primary, #0284c7); padding: 14px 18px; margin-top: 14px; border-radius: 6px;">
          <h4 style="margin: 0 0 8px 0; font-size: 0.95rem; color: var(--primary, #0284c7);">Parts &amp; Approximate Price</h4>
          <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; line-height: 1.6; color: var(--text, #334155);">
            <li>PTC Starter Relay & Overload Protector: ₹450 – ₹950</li>
            <li>Mechanical Thermostat Temperature Switch: ₹650 – ₹1,250</li>
            <li>Magnetic Door Gasket Seal: ₹650 – ₹1,350</li>
            <li>Refrigerant Leak Repair & Gas Recharge: ₹1,400 – ₹2,500</li>
          </ul>
          <p style="margin: 8px 0 0 0; font-size: 0.8rem; color: #64748b;"><em>*Indicative prices in Chennai.</em></p>
        </div>
      </div>

      <div class="content-box" style="margin-bottom: 24px;">
        <h3>${brand} Double Door Frost Free Refrigerator Repair in Chennai</h3>
        <p><strong>Looking for ${brand} double door fridge repair near me in Chennai?</strong></p>
        <p>Double door frost-free refrigerators use forced air circulation and automatic defrost cycles. In Chennai's climate, a failed defrost timer, bi-metal thermostat, or defrost heater causes thick ice accumulation on the evaporator coil, blocking air ducts and leaving the lower section warm. Our technician checks the defrost circuit, replaces faulty sensors, and tests air damper flaps on-site.</p>
        <div style="background: var(--bg-alt, #f8fafc); border-left: 4px solid var(--accent, #ea580c); padding: 14px 18px; margin-top: 14px; border-radius: 6px;">
          <h4 style="margin: 0 0 8px 0; font-size: 0.95rem; color: var(--accent, #ea580c);">Parts &amp; Approximate Price</h4>
          <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; line-height: 1.6; color: var(--text, #334155);">
            <li>Defrost Bi-Metal Sensor & Fuse: ₹650 – ₹1,250</li>
            <li>Defrost Heating Element: ₹850 – ₹1,650</li>
            <li>Evaporator Circulation DC Fan Motor: ₹950 – ₹1,850</li>
            <li>Defrost Mechanical Timer / Sensor: ₹750 – ₹1,450</li>
          </ul>
          <p style="margin: 8px 0 0 0; font-size: 0.8rem; color: #64748b;"><em>*Indicative prices in Chennai.</em></p>
        </div>
      </div>

      <div class="content-box" style="margin-bottom: 24px;">
        <h3>${brand} Inverter & Side-by-Side Refrigerator Repair in Chennai</h3>
        <p><strong>Need ${brand} inverter or multi-door refrigerator repair in Chennai?</strong></p>
        <p>Inverter and side-by-side refrigerators utilize digital BLDC compressors, electronic control boards, and multiple thermistors for multi-zone cooling. When voltage fluctuations damage the inverter driver PCB, cooling stops completely or error codes flash on the display panel. Our technicians diagnose driver boards, test DC fan motors, and repair electronics at your doorstep.</p>
        <div style="background: var(--bg-alt, #f8fafc); border-left: 4px solid var(--secondary, #0d9488); padding: 14px 18px; margin-top: 14px; border-radius: 6px;">
          <h4 style="margin: 0 0 8px 0; font-size: 0.95rem; color: var(--secondary, #0d9488);">Parts &amp; Approximate Price</h4>
          <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; line-height: 1.6; color: var(--text, #334155);">
            <li>Inverter Driver PCB Board Repair: ₹1,500 – ₹3,200</li>
            <li>Electronic Temperature Thermistor Probe: ₹550 – ₹1,100</li>
            <li>Condenser DC Cooling Fan Motor: ₹1,100 – ₹2,200</li>
            <li>Complete System Gas Charging (R600a): ₹1,600 – ₹2,900</li>
          </ul>
          <p style="margin: 8px 0 0 0; font-size: 0.8rem; color: #64748b;"><em>*Indicative prices in Chennai.</em></p>
        </div>
      </div>
    </div>
  </section>`;
  } else if (category === 'tv') {
    const b = isMulti ? 'Television' : `${brand} TV`;
    return `  <!-- TV Types Serviced Section -->
  <section class="section" style="background-color: var(--bg-alt);">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">${b} Types We Repair in Chennai</h2>
        <p class="section-subtitle">Doorstep LED, Smart TV, and 4K display repairs across Chennai.</p>
      </div>

      <div class="content-box" style="margin-bottom: 24px;">
        <h3>${brand} LED & Smart Android TV Repair in Chennai</h3>
        <p><strong>Searching for ${brand} LED or Smart TV repair near me in Chennai?</strong></p>
        <p>Modern Smart and Android TVs feature integrated system-on-chip mainboards and series-wired backlight LED strips. In Chennai homes, power surges and heat often cause backlight strip failure—resulting in sound playing normally while the screen stays black. Our Chennai technician tests driver voltages, replaces burnt LED strips with aluminum heat-sink strips, and services power boards on-site.</p>
        <div style="background: var(--bg-alt, #f8fafc); border-left: 4px solid var(--primary, #0284c7); padding: 14px 18px; margin-top: 14px; border-radius: 6px;">
          <h4 style="margin: 0 0 8px 0; font-size: 0.95rem; color: var(--primary, #0284c7);">Parts &amp; Approximate Price</h4>
          <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; line-height: 1.6; color: var(--text, #334155);">
            <li>Backlight LED Strip Array Replacement: ₹1,400 – ₹3,200</li>
            <li>Power Supply Board (SMPS) Repair: ₹1,200 – ₹2,400</li>
            <li>T-Con Board / Flex Cable Servicing: ₹1,100 – ₹2,200</li>
            <li>Smart TV Motherboard Repair / Reprogramming: ₹1,500 – ₹3,400</li>
          </ul>
          <p style="margin: 8px 0 0 0; font-size: 0.8rem; color: #64748b;"><em>*Indicative prices in Chennai.</em></p>
        </div>
      </div>

      <div class="content-box" style="margin-bottom: 24px;">
        <h3>${brand} 4K UHD & OLED TV Repair in Chennai</h3>
        <p><strong>Looking for ${brand} 4K UHD or OLED TV repair in Chennai?</strong></p>
        <p>High-end 4K and OLED screens feature multi-zone backlighting, high-speed LVDS timing controllers, and complex power distribution rails. Common faults include bootloop restarting, vertical screen line artifacts, or HDMI input detection failure. Our Chennai technicians handle delicate panel disassembly and component-level board diagnostics at your residence.</p>
        <div style="background: var(--bg-alt, #f8fafc); border-left: 4px solid var(--accent, #ea580c); padding: 14px 18px; margin-top: 14px; border-radius: 6px;">
          <h4 style="margin: 0 0 8px 0; font-size: 0.95rem; color: var(--accent, #ea580c);">Parts &amp; Approximate Price</h4>
          <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; line-height: 1.6; color: var(--text, #334155);">
            <li>4K UHD Backlight Array Kit: ₹1,800 – ₹3,800</li>
            <li>Timing Controller (T-Con) Unit: ₹1,400 – ₹2,800</li>
            <li>Main Processor Board Repair: ₹1,800 – ₹3,900</li>
            <li>Internal Stereo Speaker Set: ₹750 – ₹1,500</li>
          </ul>
          <p style="margin: 8px 0 0 0; font-size: 0.8rem; color: #64748b;"><em>*Indicative prices in Chennai.</em></p>
        </div>
      </div>
    </div>
  </section>`;
  } else if (category === 'microwave') {
    const b = isMulti ? 'Microwave Oven' : `${brand} Microwave`;
    return `  <!-- Microwave Types Serviced Section -->
  <section class="section" style="background-color: var(--bg-alt);">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Types of ${b}s We Repair in Chennai</h2>
        <p class="section-subtitle">Doorstep inspection for solo, grill, and convection microwaves across Chennai.</p>
      </div>

      <div class="content-box" style="margin-bottom: 24px;">
        <h3>${brand} Convection Microwave Oven Repair in Chennai</h3>
        <p><strong>Searching for ${brand} convection microwave repair near me in Chennai?</strong></p>
        <p>Convection microwaves combine microwave heating with bake and grill heating elements and circulation fans. Frequent faults in Chennai homes include heating failure due to weak magnetron filaments, sparking inside the cavity from food oil splatters on the mica sheet, or cooling fan motor failure. Our Chennai technician tests high-voltage circuits, cleans carbon deposits, and installs replacement parts safely on-site.</p>
        <div style="background: var(--bg-alt, #f8fafc); border-left: 4px solid var(--primary, #0284c7); padding: 14px 18px; margin-top: 14px; border-radius: 6px;">
          <h4 style="margin: 0 0 8px 0; font-size: 0.95rem; color: var(--primary, #0284c7);">Parts &amp; Approximate Price</h4>
          <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; line-height: 1.6; color: var(--text, #334155);">
            <li>Magnetron Tube Assembly: ₹1,300 – ₹2,600</li>
            <li>High-Voltage Diode / Capacitor: ₹450 – ₹950</li>
            <li>Mica Waveguide Cover Sheet: ₹350 – ₹650</li>
            <li>Convection Heating Element / Fan: ₹850 – ₹1,650</li>
          </ul>
          <p style="margin: 8px 0 0 0; font-size: 0.8rem; color: #64748b;"><em>*Indicative prices in Chennai.</em></p>
        </div>
      </div>

      <div class="content-box" style="margin-bottom: 24px;">
        <h3>${brand} Solo & Grill Microwave Oven Repair in Chennai</h3>
        <p><strong>Looking for ${brand} solo or grill microwave repair in Chennai?</strong></p>
        <p>Solo and grill microwaves are popular for reheating, defrosting, and grilling. Common complaints include the turntable glass plate not rotating, touch membrane keypads failing to respond to touch, or the machine tripping the house MCB when the door is opened. Our technicians replace turntable synchronous motors, install new door microswitches, and service touch panels directly at your home.</p>
        <div style="background: var(--bg-alt, #f8fafc); border-left: 4px solid var(--secondary, #0d9488); padding: 14px 18px; margin-top: 14px; border-radius: 6px;">
          <h4 style="margin: 0 0 8px 0; font-size: 0.95rem; color: var(--secondary, #0d9488);">Parts &amp; Approximate Price</h4>
          <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; line-height: 1.6; color: var(--text, #334155);">
            <li>Turntable Synchronous Motor: ₹450 – ₹850</li>
            <li>Door Safety Microswitch Set: ₹450 – ₹950</li>
            <li>Touch Membrane Keypad: ₹750 – ₹1,550</li>
            <li>Main Control Transformer / Fuse: ₹550 – ₹1,150</li>
          </ul>
          <p style="margin: 8px 0 0 0; font-size: 0.8rem; color: #64748b;"><em>*Indicative prices in Chennai.</em></p>
        </div>
      </div>
    </div>
  </section>`;
  }
  return '';
}

module.exports = {
  generateHeroSection,
  generateTypeSections
};

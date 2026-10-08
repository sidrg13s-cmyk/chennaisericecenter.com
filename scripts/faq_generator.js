/**
 * faq_generator.js
 * Generates unique, brand-customized FAQs for Chennai pages.
 */

const {
  NORTH_CHENNAI,
  SOUTH_CHENNAI,
  EAST_CHENNAI,
  WEST_CHENNAI
} = require('./chennai_data');

function seededRandom(seed) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return function() {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

// 12 diverse AC FAQs
function getACFaqPool(brand) {
  const b = (brand && brand !== 'Multi-Brand') ? brand : 'air conditioner';
  return [
    {
      q: `Why is my ${b} AC blowing warm room air without chilling in Chennai?`,
      a: `AC cooling kammiya irukka? In Chennai's humid weather, cooling drops usually occur when the outdoor condenser fins get clogged with dust, or when refrigerant gas leaks from a flared copper pipe joint. Our Chennai technician inspects suction pressure, fixes any flare leaks, and restores optimal cooling.`
    },
    {
      q: `How much does a ${b} AC capacitor or outdoor fan motor replacement cost in Chennai?`,
      a: `Indicative costs in Chennai: a heavy-duty compressor run capacitor replacement typically ranges between ₹450 and ₹950, while an outdoor condenser fan motor replacement is approximately ₹1,300 to ₹2,400 including doorstep installation.`
    },
    {
      q: `Why is water leaking continuously from my ${b} indoor AC unit?`,
      a: `Water dripping inside the bedroom usually happens when the indoor condensate drain channel or flexible discharge hose gets blocked with algae and fine dirt. Our technician clears the drain pipe with a pressurized flush and verifies proper unit tilt.`
    },
    {
      q: `Can ${b} inverter AC outdoor PCB boards be repaired at home in Chennai?`,
      a: `Yes, our technicians carry diagnostic multimeters and component testing tools. Minor PCB issues like blown varistors, IPM thermal paste dry-out, or sensor faults are addressed directly on-site across Chennai localities.`
    },
    {
      q: `How does Chennai's coastal air affect ${b} copper condenser coils?`,
      a: `Chennai's sea breeze carries salt moisture that can corrode unprotected copper U-bends and aluminum fins, leading to pinhole gas leaks. We apply anti-corrosive protective coating and recommend annual jet wash servicing.`
    },
    {
      q: `Do you provide high-pressure jet pump foam cleaning for ${b} ACs in Chennai?`,
      a: `Yes, we provide complete indoor and outdoor jet foam service. Technicians use waterproof servicing jackets to wash the evaporator coil, blower wheel, and outdoor unit without creating any mess in your room.`
    },
    {
      q: `How quickly can a technician visit my home in Chennai for ${b} AC checking?`,
      a: `We typically arrange doorstep technician visits within 2 to 4 hours across Chennai areas like Anna Nagar, Velachery, Adyar, Porur, and Mylapore. You can call 8882055269 to book an inspection slot.`
    },
    {
      q: `What is the visiting inspection fee for ${b} AC service in Chennai?`,
      a: `Our doorstep inspection charge is ₹199 to ₹299. If you approve the repair estimate, the inspection charge is adjusted against the final service bill.`
    },
    {
      q: `Why is my ${b} AC showing an error code on the digital display?`,
      a: `Error codes (such as E1, E6, or F3) signal specific component faults like open thermistors, outdoor communication failure, or fan motor feedback errors. Our technician decodes the error and tests the exact circuit.`
    },
    {
      q: `Are ${b} window AC repairs also handled at home across Chennai?`,
      a: `Yes, our technicians service both split and window air conditioners. We slide out the chassis, clean the base drain pan, check the dual-shaft motor, and test cooling efficiency on-site.`
    }
  ];
}

// 12 diverse Fridge FAQs
function getFridgeFaqPool(brand) {
  const b = (brand && brand !== 'Multi-Brand') ? brand : 'refrigerator';
  return [
    {
      q: `Why is my ${b} freezer making ice but the bottom food section is warm in Chennai?`,
      a: `Fridge cool aagala? In frost-free refrigerators, this classic symptom indicates that the defrost timer, bi-metal thermostat, or defrost heater has failed, blocking cold airflow to the lower compartment. Our Chennai technician inspects and replaces the faulty defrost part on-site.`
    },
    {
      q: `How much does a starter relay or thermostat replacement cost for a ${b} fridge in Chennai?`,
      a: `Indicative pricing in Chennai: a PTC starter relay and overload protector costs roughly ₹450 to ₹950, while a mechanical thermostat replacement ranges from ₹650 to ₹1,250 depending on the model.`
    },
    {
      q: `Why does my ${b} refrigerator make a clicking sound every few minutes?`,
      a: `A repeating click sound indicates that the compressor is trying to start but the PTC relay has failed or line voltage is fluctuating. The overload protector cuts off power to save the compressor. Replacing the relay fixes this immediately.`
    },
    {
      q: `Can gas recharging for a ${b} refrigerator be done at home in Chennai?`,
      a: `Yes, our technician brings a portable vacuum pump, brazing torch, and refrigerant canister. We locate the leak point, braze it, replace the filter drier, pull a deep vacuum, and recharge refrigerant directly at your doorstep.`
    },
    {
      q: `Why is water pooling under the vegetable tray inside my ${b} fridge?`,
      a: `This happens when the internal defrost drain tube gets choked with food debris or ice. Meltwater overflows into the lower crisping compartment instead of running to the rear evaporation pan. We clear the drain line cleanly.`
    },
    {
      q: `How do power cuts and voltage fluctuations in Chennai impact ${b} inverter fridges?`,
      a: `Sudden voltage spikes can damage the inverter inverter board's switch-mode power supply. Our technicians test voltage regulation and install high-durability replacement driver boards.`
    },
    {
      q: `Which Chennai localities do your refrigerator technicians cover?`,
      a: `We provide doorstep refrigerator service throughout North, South, East, and West Chennai—including T. Nagar, Velachery, Ambattur, Porur, Perambur, Guindy, and Sholinganallur.`
    },
    {
      q: `What is the warranty on replacement parts for ${b} refrigerators?`,
      a: `All functional replacement spare parts—such as relays, fan motors, sensors, and thermostats—come with a 90-day service warranty for complete peace of mind.`
    },
    {
      q: `Why is the rubber door gasket on my ${b} fridge loose and sweating?`,
      a: `When the magnetic door seal wears out or becomes stiff from Chennai's humidity, cold air escapes and moisture beads form. Our technician realigns or replaces the magnetic door gasket.`
    },
    {
      q: `Do you service side-by-side and multi-door ${b} refrigerators in Chennai?`,
      a: `Yes, we service single door direct cool, double door frost-free, and high-capacity side-by-side inverter refrigerators across all Chennai neighborhoods.`
    }
  ];
}

// 12 diverse Washing Machine FAQs
function getWMFaqPool(brand) {
  const b = (brand && brand !== 'Multi-Brand') ? brand : 'washing machine';
  return [
    {
      q: `Why is my ${b} washing machine not draining water out in Chennai?`,
      a: `Machine water drain aagala? Drain failure is typically caused by a jammed drain pump impeller, choked safety coin trap, or defective drain motor valve puller. Our Chennai technician clears the debris and tests the drain pump on-site.`
    },
    {
      q: `Why is my ${b} washing machine vibrating violently during the spin cycle?`,
      a: `Violent shaking or thumping usually happens when suspension damper rods lose hydraulic tension or the machine is unlevel on tile floors. We install a balanced set of 4 suspension rods and level the machine.`
    },
    {
      q: `How does borewell water in Chennai areas like Velachery or Porur affect ${b} washers?`,
      a: `Hard water causes calcium scaling inside the inlet solenoid filter and drum heater, reducing water intake flow and triggering inlet error codes (4C, IE, or E1). We clean the inlet mesh and descale the washer.`
    },
    {
      q: `What is the indicative price for ${b} front load door lock or drain pump replacement in Chennai?`,
      a: `A door interlock switch replacement is approximately ₹750 – ₹1,550, while a genuine drain pump replacement ranges between ₹950 and ₹1,850 in Chennai.`
    },
    {
      q: `Why is the door of my ${b} front load washing machine locked and not opening?`,
      a: `Front loaders have a safety thermal bi-metal door interlock. If water remains inside or the switch contacts fuse, the door will not release. Our technician safely unlocks the door without glass damage and fixes the switch.`
    },
    {
      q: `Can ${b} washing machine motor or PCB board repair be done at home?`,
      a: `Yes, common issues like motor capacitor failure, drive belt slippage, and control board relay faults are diagnosed and repaired directly at your doorstep in Chennai.`
    },
    {
      q: `Why is my ${b} top load pulsator spinning freely without rotating clothes?`,
      a: `The center plastic or brass splines of the pulsator plate can wear smooth over years of laundry load. Replacing the pulsator plate with a new locking bolt restores full agitation power.`
    },
    {
      q: `Do you service semi-automatic twin tub ${b} washing machines in Chennai?`,
      a: `Yes, we repair wash timers, spin dryer motors, safety lid brakes, and spin capacitors for all semi-automatic washers across Chennai.`
    },
    {
      q: `How quickly can a technician visit my Chennai home for washing machine repair?`,
      a: `We provide same-day doorstep service, dispatching local technicians within 2 to 4 hours across Anna Nagar, Adyar, Ambattur, Mylapore, and Tambaram.`
    },
    {
      q: `What is the inspection fee for washing machine checking in Chennai?`,
      a: `Visiting inspection is ₹199 to ₹299 across Chennai. This amount is adjusted into the final bill if you proceed with the recommended repair.`
    }
  ];
}

// 10 diverse TV FAQs
function getTVFaqPool(brand) {
  const b = (brand && brand !== 'Multi-Brand') ? brand : 'LED TV';
  return [
    {
      q: `Why does my ${b} TV have sound but the display screen is totally black in Chennai?`,
      a: `TV display problem irukka? When sound works normally but the screen is dark, the backlight LED strips inside the panel have burnt out. Our Chennai technician tests panel backlight rails and replaces the LED strip array with aluminum-backed units.`
    },
    {
      q: `How much does backlight replacement cost for a ${b} 43-inch Smart TV in Chennai?`,
      a: `Backlight LED strip replacement for 32-inch to 43-inch TVs generally ranges between ₹1,400 and ₹3,200 in Chennai, depending on panel specifications and LED array size.`
    },
    {
      q: `Why is my ${b} Smart TV stuck on the logo screen and restarting repeatedly?`,
      a: `A bootloop occurs when smart TV firmware storage (eMMC) gets corrupted due to sudden power cuts. Our technician reflashes the system firmware or services the motherboard.`
    },
    {
      q: `Can TV power supply board (SMPS) damage from lightning be repaired in Chennai?`,
      a: `Yes, power board issues such as blown bridge rectifiers, MOSFETs, and filter capacitors are repaired at component level without requiring an expensive full-board replacement.`
    },
    {
      q: `Do your technicians handle panel line issues and T-Con board repairs in Chennai?`,
      a: `Yes, horizontal or vertical lines caused by loose LVDS flat ribbon cables or timing controller (T-Con) faults are checked on-site across all Chennai localities.`
    },
    {
      q: `Which screen sizes of ${b} televisions do you repair across Chennai?`,
      a: `We service all screen sizes from 24-inch HD up to 65-inch 4K UHD, OLED, and QLED models directly at your home in Chennai.`
    },
    {
      q: `How quickly can a TV technician visit my Chennai residence?`,
      a: `Our television technicians visit within 2 to 4 hours in neighborhoods like Anna Nagar, Velachery, Porur, Adyar, and Kilpauk. Call 8882055269 to book.`
    },
    {
      q: `What is the doorstep inspection charge for ${b} TV repair in Chennai?`,
      a: `The visiting diagnostic fee is ₹199 to ₹299 across Chennai, which is adjusted toward repair costs if work is carried out.`
    }
  ];
}

// 10 diverse Microwave FAQs
function getMicrowaveFaqPool(brand) {
  const b = (brand && brand !== 'Multi-Brand') ? brand : 'microwave oven';
  return [
    {
      q: `Why is my ${b} microwave oven turning on and counting down but food is not heating in Chennai?`,
      a: `Microwave heat aagala? When the oven runs but doesn't heat food, the magnetron tube, high-voltage diode, or capacitor has likely failed. Our Chennai technician tests high-voltage circuits and replaces defective heating components on-site.`
    },
    {
      q: `Why are there sparks and crackling sounds inside my ${b} microwave cavity?`,
      a: `Sparking inside the cooking cavity is almost always caused by a burnt mica waveguide cover sheet that has absorbed food splatter. We clean the chamber, remove carbon burns, and install a new mica card.`
    },
    {
      q: `How much does magnetron or diode replacement cost for a ${b} microwave in Chennai?`,
      a: `Indicative pricing in Chennai: a high-voltage diode replacement is ₹350 to ₹650, while a genuine-grade magnetron replacement ranges between ₹1,300 and ₹2,600.`
    },
    {
      q: `Why are touch buttons on my ${b} microwave oven not responding?`,
      a: `Kitchen moisture and steam can oxidize copper tracks on the touch membrane keypad. Our technician tests flat cable connections and replaces the touch membrane panel.`
    },
    {
      q: `Why does my ${b} microwave trip the house MCB switch when the door is opened or closed?`,
      a: `This happens when door interlock safety microswitches get short-circuited or misaligned. We realign the door latch hooks and replace worn microswitches.`
    },
    {
      q: `Do you service solo, grill, and convection ${b} microwaves in Chennai?`,
      a: `Yes, we repair all types including solo, grill, and convection microwave ovens across Chennai localities like Velachery, Porur, Anna Nagar, and Adyar.`
    },
    {
      q: `What is the visiting charge for microwave repair in Chennai?`,
      a: `Doorstep inspection is ₹199 to ₹299 across Chennai, adjusted into the repair bill upon your approval.`
    },
    {
      q: `Why is the glass turntable tray inside my ${b} microwave not rotating?`,
      a: `A broken synchronous turntable motor or worn drive coupler prevents the plate from turning. Replacing the small drive motor restores smooth rotation.`
    }
  ];
}

// 10 diverse Service Center FAQs
function getServiceCenterFaqPool(brand) {
  const b = (brand && brand !== 'Multi-Brand') ? brand : 'all major brand';
  return [
    {
      q: `What home appliances are supported for ${b} repair in Chennai?`,
      a: `We provide complete doorstep repair for Washing Machines (top load, front load), Air Conditioners (split, inverter, window), Refrigerators (frost-free, direct cool), Televisions (LED, 4K Smart TV), and Microwave Ovens across Chennai.`
    },
    {
      q: `How does your doorstep technician visit and checking process work in Chennai?`,
      a: `When you call 8882055269, our coordinator schedules a local technician to visit your home within 2 to 4 hours. The technician inspects the appliance, explains the fault clearly, and quotes an upfront price before starting work.`
    },
    {
      q: `What are your visiting inspection charges across Chennai?`,
      a: `Our doorstep inspection fee is ₹199 to ₹349 depending on the appliance type. If you approve the repair work, this fee is adjusted against the final service invoice.`
    },
    {
      q: `Are OEM-grade compatible replacement spare parts used for ${b} repairs?`,
      a: `Yes, we source verified OEM-compatible parts—such as run capacitors, fan motors, drain pumps, sensors, backlight arrays, and magnetrons—backed by our 90-day service warranty.`
    },
    {
      q: `Which Chennai localities are covered for doorstep appliance service?`,
      a: `We cover all neighborhoods in North, South, East, and West Chennai—including Anna Nagar, Velachery, Adyar, Porur, Ambattur, Mylapore, T. Nagar, Perambur, Guindy, Sholinganallur, and Tambaram.`
    },
    {
      q: `Are emergency same-day repair visits available in Chennai?`,
      a: `Yes, we prioritize urgent breakdowns such as refrigerators with food spoiling, non-cooling ACs in peak heat, or washing machines leaking water, dispatching technicians promptly.`
    },
    {
      q: `What are your customer support and technician working hours in Chennai?`,
      a: `Our team operates 7 days a week from 6:00 AM to 11:00 PM. You can call or WhatsApp our helpline at 8882055269 anytime.`
    },
    {
      q: `What payment options are accepted after appliance repair?`,
      a: `We accept UPI payments (Google Pay, PhonePe, Paytm), net banking, and cash after the technician completes work and demonstrates proper operation.`
    }
  ];
}

function generateFaqSection(category, brandName, pageSlug) {
  const seed = pageSlug.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) + (brandName ? brandName.length * 23 : 41);
  const rng = seededRandom(seed);

  let pool = [];
  let count = 8;
  if (category === 'ac') {
    pool = getACFaqPool(brandName);
    count = 8;
  } else if (category === 'fridge') {
    pool = getFridgeFaqPool(brandName);
    count = 8;
  } else if (category === 'washing-machine') {
    pool = getWMFaqPool(brandName);
    count = 8;
  } else if (category === 'tv') {
    pool = getTVFaqPool(brandName);
    count = 7;
  } else if (category === 'microwave') {
    pool = getMicrowaveFaqPool(brandName);
    count = 7;
  } else {
    pool = getServiceCenterFaqPool(brandName);
    count = 8;
  }

  // Shuffle and pick
  const poolLen = pool.length;
  const chosen = [];
  for (let i = 0; i < count && i < poolLen; i++) {
    let idx = (Math.floor(rng() * poolLen) + i) % poolLen;
    while (chosen.includes(idx)) {
      idx = (idx + 1) % poolLen;
    }
    chosen.push(idx);
  }

  const itemsHtml = chosen.map(idx => {
    const item = pool[idx];
    return `        <details class="faq-item">
          <summary><span>${item.q}</span></summary>
          <div class="faq-content">
            <p>${item.a}</p>
          </div>
        </details>`;
  }).join('\n');

  const displayBrand = (brandName && brandName !== 'Multi-Brand') ? brandName : 'Home Appliance';

  return `  <!-- FAQ Section -->
  <section class="section section-alt" id="faq">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Frequently Asked Questions About ${displayBrand} Repair in Chennai</h2>
        <p class="section-subtitle">Helpful answers regarding doorstep checking, repairs, spare parts, and visiting charges in Chennai.</p>
      </div>

      <div class="faq-list">
${itemsHtml}
      </div>
    </div>
  </section>`;
}

module.exports = {
  generateFaqSection
};

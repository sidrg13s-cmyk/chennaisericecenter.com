/**
 * experience_generator.js
 * Generates unique, brand-customized customer service experiences for Chennai.
 */

const {
  NORTH_CHENNAI,
  SOUTH_CHENNAI,
  EAST_CHENNAI,
  WEST_CHENNAI
} = require('./chennai_data');

const ALL_LOCALITIES = [
  ...SOUTH_CHENNAI.slice(0, 25),
  ...EAST_CHENNAI.slice(0, 25),
  ...WEST_CHENNAI.slice(0, 25),
  ...NORTH_CHENNAI.slice(0, 25)
];

function seededRandom(seed) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return function() {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function getLocality(rng) {
  const idx = Math.floor(rng() * ALL_LOCALITIES.length);
  return ALL_LOCALITIES[idx];
}

// AC Experiences pool (15 diverse problem archetypes)
const AC_PROBLEMS = [
  {
    type: 'Inverter Split AC (1.5 Ton)',
    complaints: [
      '"AC cooling romba low-ah irukku, compressor switch on aagi 5 mins-la off aagudhu."',
      '"Chennai heat-la AC potalum chillness illa, fan mattum normal-ah oduthu."',
      '"AC running full day but room-la temperature kuraiyala, warm air thaan varuthu."'
    ],
    check: 'Refrigerant suction pressure, outdoor condenser coil airflow, and dual run capacitor.',
    fault: 'Outdoor condenser fins choked with coastal dust and micro-leak near service flare nut. Tightened brass flare joint, performed vacuum hold test, and recharged eco-friendly gas.',
    cost: '₹1,450 – ₹2,600'
  },
  {
    type: '3-Star Copper Condenser Split AC',
    complaints: [
      '"Indoor unit-la irundhu wall mela water drip aaguthu, bedroom floor full-ah wet aachu."',
      '"Water leak aaguthu indoor unit right side-la irundhu, bucket vaikka vendiyatha pochu."',
      '"AC on pannona 20 mins-la indoor unit bottom plate vazhiya drops kottuthu."'
    ],
    check: 'Condensate drain tray, drain pipe slope alignment, and indoor evaporator coil channels.',
    fault: 'Condensate drain hose completely clogged with jelly-like algae and slime. Cleared blockage with high-pressure nitrogen flush, realigned drain slope, and cleaned indoor tray.',
    cost: '₹450 – ₹850'
  },
  {
    type: '5-in-1 Convertible Inverter AC',
    complaints: [
      '"Display-la error code vanthu indoor unit shut down aaiduthu, remote-la on aagala."',
      '"Unit starts for 2 minutes, then blinks timer light and stops cooling completely."',
      '"AC power on aaguthu aana outdoor unit fan start-eh aagala, display error kaattudhu."'
    ],
    check: 'Inverter communication cable, outdoor IPM power module, and thermistor sensor resistance.',
    fault: 'Corroded outdoor PCB communication thermistor caused signal dropout due to coastal humidity. Cleaned motherboard contacts, replaced faulty sensor thermistor, and verified cycle.',
    cost: '₹1,200 – ₹2,800'
  },
  {
    type: 'Heavy-Duty Split AC (2 Ton)',
    complaints: [
      '"AC-la irundhu musty dust smell varuthu, airflow romba weak-ah irukku."',
      '"Blower full speed potalum air throw light-ah thaan varuthu, bad smell-um adikkithu."',
      '"Cooling drop aaiduchu, air vent kitta hand vacha breeze romba slow-ah feel aaguthu."'
    ],
    check: 'Cross-flow blower wheel, evaporator cooling coil fins, and antibacterial mesh filters.',
    fault: 'Heavy dust buildup and fungal layer restricted cross-flow air circulation. Dismantled casing and performed thorough jet pump pressure foam wash on indoor and outdoor units.',
    cost: '₹550 – ₹950'
  },
  {
    type: 'Fixed Speed Split AC (1.5 Ton)',
    complaints: [
      '"Copper pipe mela thick ice form aaguthu, room chill aaga 2 hours edukkuthu."',
      '"Ice frost indoor coil mela theriyudhu, melting water drops satham ketkuthu."',
      '"Cooling speed drop aachu, copper tubing kitta white ice layer kattiyirukku."'
    ],
    check: 'Suction pressure gauge, capillary tube expansion, and indoor blower filter condition.',
    fault: 'Low refrigerant pressure caused freezing along the suction line and cooling coil. Detected pinhole leak at outdoor valve, brazed joint, pulled deep vacuum, and refilled gas.',
    cost: '₹1,500 – ₹2,700'
  },
  {
    type: 'Inverter Split AC (1 Ton)',
    complaints: [
      '"Remote-la switch on panna indoor louver flap move aagala, swing stop aaiduchu."',
      '"Louver flap downwards stuck aachu, auto-swing button work aagala."',
      '"Air direction change panna mudiyala, louver motor clicking sound mattum varuthu."'
    ],
    check: 'Louver swing synchronous stepper motor and flap plastic hinge brackets.',
    fault: 'Stripped gears inside the swing stepper motor caused flap jamming. Replaced the defective swing motor, aligned pivot bracket, and tested oscillating swing action.',
    cost: '₹450 – ₹900'
  },
  {
    type: 'Window AC (1.5 Ton)',
    complaints: [
      '"Outdoor side-la irundhu heavy metal rattling and shaking sound varuthu."',
      '"Window AC run aagum bothu violent vibration sound, glass window atheeruthu."',
      '"Motor rumbling sound athigama irukku, night sleep disturb aaguthu."'
    ],
    check: 'Blower fan blade balance, compressor rubber anti-vibration grommets, and chassis mounts.',
    fault: 'Aged, cracked rubber mounting bushes caused metal chassis resonance. Installed new heavy-duty rubber vibration dampeners and tightened motor mount bolts.',
    cost: '₹600 – ₹1,200'
  },
  {
    type: 'Commercial Cassette / 2 Ton Split AC',
    complaints: [
      '"AC switch on panna 3 mins-la main distribution box MCB trip aagudhu."',
      '"Compressor engage aaga try pannum bothu power cut aagiduthu."',
      '"AC pota odane circuit breaker trips, burning smell light-ah varuthu."'
    ],
    check: 'Compressor terminal wiring harness, start capacitor, and earth leakage continuity.',
    fault: 'Burnt insulation on compressor power terminal lead touching the outer chassis. Replaced heat-damaged terminal connectors, verified winding resistance, and tested on full load.',
    cost: '₹750 – ₹1,400'
  }
];

// Fridge Experiences pool (15 diverse problem archetypes)
const FRIDGE_PROBLEMS = [
  {
    type: 'Double Door Frost Free (260L)',
    complaints: [
      '"Freezer compartment-la ice kattiya irukku, but bottom fridge section chill-eh aagala."',
      '"Top freezer chill-ah irukku, aana vegetables and milk box room temperature-la irukku."',
      '"Bottom compartment cooling stop aaiduchu, freezer mattum freeze aaguthu."'
    ],
    check: 'Defrost timer/sensor, thermal bi-metal fuse, and evaporator fan air duct flap.',
    fault: 'Failed defrost sensor caused thick ice accumulation, choking cold air vents to the lower chamber. Melted frost buildup, tested defrost heater element, and replaced sensor.',
    cost: '₹850 – ₹1,650'
  },
  {
    type: 'Single Door Direct Cool (190L)',
    complaints: [
      '"Compressor click sound panni off aagiduthu, fridge cool aagala."',
      '"Fridge back side click click sound varuthu, compressor start-eh aagala."',
      '"Body heat aagala, motor hum pannitu 10 seconds-la cut-off aaiduthu."'
    ],
    check: 'PTC starter relay, overload protector (OLP), and compressor winding terminals.',
    fault: 'Burnt PTC starter relay disc caused failure to engage start winding. Replaced the starter relay and overload protector with genuine grade unit; compressor engaged smoothly.',
    cost: '₹500 – ₹950'
  },
  {
    type: 'Side-by-Side Inverter Refrigerator (580L)',
    complaints: [
      '"Digital temperature display flashing lines, cooling drop aaiduchu."',
      '"Inverter fridge cooling switch off aachu, error blinking on front panel."',
      '"Food items spoiling quickly, control panel temp setting change panna mudiyala."'
    ],
    check: 'Inverter inverter drive PCB board, DC fan motor, and interior thermistor probes.',
    fault: 'Power surge damaged the inverter driver board low-voltage supply line. Replaced blown surge suppressor and filter capacitors on motherboard; restored precision cooling.',
    cost: '₹1,500 – ₹3,200'
  },
  {
    type: 'Double Door Inverter Fridge (340L)',
    complaints: [
      '"Fridge back side-la irundhu continuous squeaking and rattling noise varuthu."',
      '"Compressor room sound romba loud-ah irukku, night time disturb aaguthu."',
      '"Fan spinning sound loud-ah maariduchu, back grill vibrating."'
    ],
    check: 'Condenser cooling fan motor, fan blades, and compressor mount cushions.',
    fault: 'Worn bearings on the condenser fan motor caused loud squealing under load. Replaced the DC condenser fan motor assembly and tightened compressor mounting cushions.',
    cost: '₹950 – ₹1,850'
  },
  {
    type: 'Triple Door Frost Free (300L)',
    complaints: [
      '"Vegetable tray bottom-la water pool aaguthu, shelves mela water drip aaguthu."',
      '"Fridge kulla water leak aagi floor mela oothuthu, daily clean panna vendiyatha irukku."',
      '"Defrost tray overflow aagi vegetable box kulla water leak aaguthu."'
    ],
    check: 'Internal defrost drain hole, drain funnel, and rear evaporator pan.',
    fault: 'Defrost drain hole blocked by food particles and mold accumulation. Flushed drain pipe with warm pressurized solution, cleaned collector pan, and checked drainage.',
    cost: '₹400 – ₹800'
  },
  {
    type: 'Single Door Direct Cool (215L)',
    complaints: [
      '"Freezer-la ice romba fast-ah build aaguthu, door tight-ah close aagala."',
      '"Door gasket loose-ah irukku, gap vazhiya cold air escape aaguthu."',
      '"Door properly seal aagala, inside walls mela heavy sweat water drops."'
    ],
    check: 'Magnetic door gasket rubber, door hinge alignment, and cabinet seal contact.',
    fault: 'Aged magnetic gasket lost elasticity, letting humid room air enter. Heat-treated and realigned magnetic rubber seal for an airtight seal, eliminating frosting.',
    cost: '₹650 – ₹1,250'
  },
  {
    type: 'French Door Multi-Door Fridge (450L)',
    complaints: [
      '"Compressor run aaguthu but fridge cold plate cool-eh aagala."',
      '"Both freezer and bottom sections lost cooling completely, back coil warm-eh illa."',
      '"Motor running continuously without stopping, cooling zero-va irukku."'
    ],
    check: 'System copper tubes, filter drier, and refrigerant pressure with manifold gauge.',
    fault: 'Pinhole corrosion leak on condenser tubing near drain pan; gas had escaped. Brazed copper pinhole, fitted new filter drier, pulled deep vacuum, and recharged gas.',
    cost: '₹1,600 – ₹2,900'
  },
  {
    type: 'Direct Cool Single Door Refrigerator',
    complaints: [
      '"Ice box-la knife vachi ice eduthom, gas hissing sound vanthu cooling poiduchu."',
      '"Freezer plate puncture aaiduchu, white smoke madhiri gas release aachu."',
      '"Accidental freezer puncture, now motor runs but no chill whatsoever."'
    ],
    check: 'Freezer aluminum plate evaporator surface and compressor oil contamination.',
    fault: 'Evaporator puncture caused instant gas loss. Repaired puncture using aluminum bonding epoxy/brazing, replaced filter drier, flushed lines, vacuumed, and refilled refrigerant.',
    cost: '₹1,400 – ₹2,400'
  }
];

// Washing Machine Experiences pool (15 diverse problem archetypes)
const WM_PROBLEMS = [
  {
    type: 'Fully Automatic Top Load (7.5 Kg)',
    complaints: [
      '"Machine wash mudinjuthu but water drain aagala, OE / 5E error kaattudhu."',
      '"Water drum kulla nikkithu, spin cycle start aagama machine stop aaiduthu."',
      '"Drain pipe-la water varala, cycle end-la clothes soaked in soapy water."'
    ],
    check: 'Drain motor valve puller, drain bellow coin trap, and control board signal.',
    fault: 'Safety coin filter choked with safety pins and coin obstruction, drain valve jammed. Cleared debris from pump chamber, tested drain pull motor, and confirmed smooth drainage.',
    cost: '₹450 – ₹950'
  },
  {
    type: 'Inverter Front Load (8 Kg)',
    complaints: [
      '"Spin cycle-la jet engine madhiri loud roaring and grinding sound varuthu."',
      '"Machine 1200 RPM spin-la heavy noise varuthu, drum aada maatikithu."',
      '"Spin speed-la metallic noise, floor atheeruthu violent vibration."'
    ],
    check: 'Rear spider arm, drum ball bearings, and water seal condition.',
    fault: 'Tub water seal worn out, borewell water rusted the twin tub bearings. Installed new SKF high-speed bearings and oil seal kit; restored whisper-quiet spin rotation.',
    cost: '₹1,800 – ₹3,400'
  },
  {
    type: 'Top Load Fully Automatic (6.5 Kg)',
    complaints: [
      '"Motor sound varuthu but pulsator rotate aagala, clothes move-eh aagala."',
      '"Pulsator plate loose-ah irukku, motor humming sound mattum thaan varuthu."',
      '"Wash cycle on aana pulsator spin aagala, tub light-ah thaan jerk aaguthu."'
    ],
    check: 'Pulsator plate teeth splines, drive belt tension, and gearbox shaft.',
    fault: 'Center splines of pulsator plate completely worn out, spinning freely on shaft. Extracted worn pulsator, cleaned gearbox shaft teeth, and installed new genuine plate.',
    cost: '₹750 – ₹1,550'
  },
  {
    type: 'Front Load Washing Machine (7 Kg)',
    complaints: [
      '"Wash cycle mudinjathum door open aagala, door handle stuck aaiduchu."',
      '"Cycle complete aaiduchu but door lock release aagala, dE error vanthuthu."',
      '"Door lock sensor issue, handle pull panna clothes edukka mudiyala."'
    ],
    check: 'Bi-metal PTC door interlock switch, door latch hook, and PCB lock output.',
    fault: 'Bi-metal heater element inside door lock switch failed in locked position. Safely unlocked door, installed OEM door interlock switch, and tested latch release.',
    cost: '₹750 – ₹1,450'
  },
  {
    type: 'Fully Automatic Top Load (8 Kg)',
    complaints: [
      '"Spin cycle start pannona tub walls mela hit aagi machine dance aaduthu."',
      '"High speed spin-la violent banging sound, machine move aagi travel pannuthu."',
      '"Tub knocking sound athigama irukku, spin start panna machine off aaguthu."'
    ],
    check: 'Suspension damper support rods (all 4 corners) and drum balance ring liquid.',
    fault: 'Two rear suspension dampers lost hydraulic damping tension, causing severe unbalance. Replaced set of 4 matched suspension damper rods and leveled washer base feet.',
    cost: '₹950 – ₹1,850'
  },
  {
    type: 'Front Load Inverter (8.5 Kg)',
    complaints: [
      '"Water tap on-la irukku but machine water fill panna 45 minutes edukkuthu."',
      '"Water trickling very slowly into detergent tray, 4C / IE error varuthu."',
      '"Cycle time romba delay aaguthu water filling problem naala."'
    ],
    check: 'Inlet solenoid valve coils, inlet filter mesh screen, and home water pressure.',
    fault: 'Hard borewell mineral scale completely clogged inlet valve filter mesh. Descaled inlet valve ports and replaced degraded solenoid coil; normal water intake restored.',
    cost: '₹650 – ₹1,350'
  },
  {
    type: 'Semi Automatic Twin Tub (7.5 Kg)',
    complaints: [
      '"Spin tub-la clothes pota rotate aagala, motor hum pannitu stop aaguthu."',
      '"Wash tub work aaguthu, dryer spin tub slow-ah oduthu clothes dry aagala."',
      '"Spin motor humming sound varuthu but spin drum pick up aagala."'
    ],
    check: 'Spin motor run capacitor, safety lid brake cable mechanism, and motor windings.',
    fault: 'Weak dual capacitor and rusted mechanical safety brake holding the spin shaft. Replaced motor run capacitor, lubricated brake linkage assembly, and tested drying spin.',
    cost: '₹550 – ₹1,150'
  },
  {
    type: 'Semi Automatic Washing Machine (8 Kg)',
    complaints: [
      '"Wash timer knob turn panna motor rotate aagala, knob reverse-la odala."',
      '"Wash agitation stop aaiduchu, timer mechanical clicking sound varala."',
      '"Clockwise rotate aaguthu but counter-clockwise direction marala."'
    ],
    check: 'Mechanical wash timer switch contacts, wiring harness, and direction cam.',
    fault: 'Burnt internal copper contact points inside mechanical wash timer switch. Installed genuine 4-wire wash timer switch and tested bi-directional pulsator cycle.',
    cost: '₹600 – ₹1,250'
  },
  {
    type: 'Front Load Washing Machine (6 Kg)',
    complaints: [
      '"Door glass bottom-la irundhu water drip aagi floor-la pool aaguthu."',
      '"Wash cycle run aagum bothu door bellow kitta water leak theriyudhu."',
      '"Rubber gasket torn aachu, front panel vazhiya water spill aaguthu."'
    ],
    check: 'Door boot rubber gasket (bellow), clamp spring ring, and drain lip.',
    fault: 'Sharp coin cut a tear in the lower fold of the rubber door bellow. Fitted new high-grade synthetic rubber door boot gasket and tensioned outer steel retaining clamp.',
    cost: '₹1,200 – ₹2,400'
  }
];

// TV Experiences pool (10 diverse problem archetypes)
const TV_PROBLEMS = [
  {
    type: '43-inch 4K Smart LED TV',
    complaints: [
      '"Sound clear-ah varuthu but screen full-ah pitch black, torch light adicha image theriyudhu."',
      '"Audio kekkuthu remote works, aana display screen dull black-ah irukku."',
      '"TV on panna voice and sound normal, picture mattum screen-la theriyala."'
    ],
    check: 'Backlight LED strip array, LED driver inverter voltage, and power supply unit.',
    fault: 'Several series LEDs burned out on the backlight strips, tripping driver safety shutdown. Replaced complete set of aluminum base LED backlight strips and tuned driver voltage.',
    cost: '₹1,500 – ₹3,200'
  },
  {
    type: '55-inch Ultra HD Smart Google TV',
    complaints: [
      '"TV on pannona brand logo varuthu, then reboot aagite irukku endless loop-la."',
      '"Smart TV restart loop-la stuck aaiduchu, home screen open-eh aagala."',
      '"Power switch pota standby light blink aaguthu display load aagama freeze aachu."'
    ],
    check: 'Main board eMMC flash memory, firmware integrity, and core power rails.',
    fault: 'Corrupted eMMC system storage caused bootloader freeze. Reprogrammed eMMC firmware via dedicated interface; restored smooth smart TV app launcher functioning.',
    cost: '₹1,400 – ₹2,800'
  },
  {
    type: '50-inch 4K LED TV',
    complaints: [
      '"Power button press panna red standby light blink mattum aaguthu, TV on-eh aagala."',
      '"Thunderstorm / power cut apram TV completely dead, no standby indicator."',
      '"TV plug potalum light eriyala, zero power supply to TV screen."'
    ],
    check: 'SMPS power supply board, bridge rectifier, surge varistor, and secondary capacitors.',
    fault: 'Power surge blew input fuse and primary switching MOSFET on the SMPS board. Replaced damaged MOSFET, PWM controller IC, and output filter capacitors; tested 12V/24V rails.',
    cost: '₹1,200 – ₹2,400'
  },
  {
    type: '65-inch OLED / QLED Smart TV',
    complaints: [
      '"Screen center-la colored vertical lines appear aaguthu, right side picture flicker aagudhu."',
      '"Display right half-la rainbow colored lines oduthu, picture jump aaguthu."',
      '"Screen-la thin lines create aachu, text blurry and doubled-ah theriyudhu."'
    ],
    check: 'T-Con timing controller board, LVDS ribbon cable flat flex contacts, and COF tabs.',
    fault: 'Oxidized contacts on LVDS flex ribbon cables and weak voltage on T-Con VGH rail. Cleaned gold finger contacts, replaced T-Con board module, and verified crisp UHD clarity.',
    cost: '₹1,800 – ₹3,800'
  }
];

// Microwave Experiences pool (10 diverse problem archetypes)
const MICROWAVE_PROBLEMS = [
  {
    type: '28L Convection Microwave Oven',
    complaints: [
      '"Microwave on aaguthu, timer countdown oduthu but food bilkul heat-eh aagala."',
      '"Food vessel inside vacha 3 minutes apram-um cold-ah thaan irukku, heat zero."',
      '"Sound normal-ah varuthu but tea/food heat aagala, only fan running."'
    ],
    check: 'Magnetron tube filament resistance, high-voltage diode, and HV capacitor.',
    fault: 'Burned out magnetron cathode emission tube and shorted high-voltage rectifier diode. Installed high-power compatible magnetron and diode; achieved full heating performance.',
    cost: '₹1,300 – ₹2,600'
  },
  {
    type: '20L Solo Microwave Oven',
    complaints: [
      '"Inside cooking cavity-la fire sparks and loud crackling noise varuthu."',
      '"Microwave start panna lightning sparks flash aaguthu, burning plastic smell."',
      '"Right side wall kitta heavy spark sound, cavity paint peel aaiduchu."'
    ],
    check: 'Mica waveguide cover sheet, inner wave guide cavity walls, and stirrer fan.',
    fault: 'Mica waveguide sheet saturated with food oil spatter caught fire and charred. Removed burnt mica card, thoroughly degreased chamber, and installed heat-treated replacement.',
    cost: '₹400 – ₹750'
  },
  {
    type: '25L Grill Microwave Oven',
    complaints: [
      '"Touch membrane keypad-la start / stop buttons press panna respond-eh pannala."',
      '"Time setting numbers press panna beep sound varala, few buttons dead aachu."',
      '"Touch panel not working, express cook button doesn\'t trigger the machine."'
    ],
    check: 'Flat ribbon cable connecting touchpad, membrane switch matrix, and control PCB.',
    fault: 'Corroded silver ink tracks on touch membrane keypad due to kitchen steam moisture. Replaced membrane keypad switch panel and tested all menu and heating preset buttons.',
    cost: '₹750 – ₹1,550'
  },
  {
    type: '30L Convection Rotisserie Microwave',
    complaints: [
      '"Turntable glass plate rotate aagala, food one side mattum heat aaguthu."',
      '"Glass plate stuck aaiduchu, bottom motor rotating sound varala."',
      '"Inside plate turning stop aachu, roller ring wheel loose-ah irukku."'
    ],
    check: 'Synchronous turntable drive motor (21V/220V), plastic coupler, and roller ring.',
    fault: 'Stripped reduction gear teeth inside the bottom synchronous turntable motor. Fitted new high-torque synchronous motor, checked glass tray centering, and verified smooth rotation.',
    cost: '₹450 – ₹850'
  },
  {
    type: '23L Convection Microwave',
    complaints: [
      '"Door open or close pannum bothu main MCB switch trip aagudhu."',
      '"Door latch close panna spark sound vanthu power cut aaiduthu."',
      '"Machine turns on only if door is pressed hard, otherwise trips fuse."'
    ],
    check: 'Primary and secondary door interlock microswitches and latch hook assembly.',
    fault: 'Misaligned plastic door latch lever causing primary microswitch short-circuit. Replaced damaged safety microswitch and realigned door hook latch mechanism.',
    cost: '₹550 – ₹1,050'
  }
];

function generateCustomerExperiences(category, brandName, pageSlug) {
  const seed = pageSlug.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) + (brandName ? brandName.length * 17 : 31);
  const rng = seededRandom(seed);

  let pool = [];
  let count = 0;
  let genericCategoryTag = '';

  if (category === 'ac') {
    pool = AC_PROBLEMS;
    count = 6;
    genericCategoryTag = 'Air Conditioner';
  } else if (category === 'fridge') {
    pool = FRIDGE_PROBLEMS;
    count = 8;
    genericCategoryTag = 'Refrigerator';
  } else if (category === 'washing-machine') {
    pool = WM_PROBLEMS;
    count = 9;
    genericCategoryTag = 'Washing Machine';
  } else if (category === 'tv') {
    pool = TV_PROBLEMS;
    count = 4;
    genericCategoryTag = 'Television';
  } else if (category === 'microwave') {
    pool = MICROWAVE_PROBLEMS;
    count = 5;
    genericCategoryTag = 'Microwave Oven';
  } else {
    // service center or other: combine
    pool = [...AC_PROBLEMS, ...FRIDGE_PROBLEMS, ...WM_PROBLEMS, ...TV_PROBLEMS, ...MICROWAVE_PROBLEMS];
    count = 6;
    genericCategoryTag = 'Home Appliance';
  }

  // Pick unique items from pool
  const chosenIndices = [];
  const poolLen = pool.length;
  for (let i = 0; i < count; i++) {
    let idx = (Math.floor(rng() * poolLen) + i) % poolLen;
    while (chosenIndices.includes(idx)) {
      idx = (idx + 1) % poolLen;
    }
    chosenIndices.push(idx);
  }

  const cards = chosenIndices.map((itemIdx, i) => {
    const item = pool[itemIdx];
    const locality = getLocality(rng);
    const complaintIdx = Math.floor(rng() * item.complaints.length);
    const complaint = item.complaints[complaintIdx];
    const ratingNum = rng() > 0.35 ? '10/10' : (rng() > 0.5 ? '9/10' : '8/10');

    let typeTag = item.type;
    if (brandName && brandName !== 'Multi-Brand') {
      typeTag = `${brandName} ${item.type}`;
    }

    return `        <div class="experience-card">
          <div class="exp-meta">
            <span class="exp-type-tag">${typeTag}</span>
            <span class="exp-rating">⭐ ${ratingNum}</span>
          </div>
          <p style="margin-bottom: 8px;"><strong>Complaint:</strong> ${complaint}</p>
          <p style="font-size: 0.85rem; color: #475569; margin-bottom: 6px; font-style: normal;"><strong>Technician Checked:</strong> ${item.check}</p>
          <p style="font-size: 0.85rem; color: #475569; margin-bottom: 6px; font-style: normal;"><strong>Fault &amp; Fix:</strong> ${item.fault}</p>
          <div style="margin-top: auto; padding-top: 8px; border-top: 1px dashed #e2e8f0; display: flex; justify-content: space-between; align-items: center; font-size: 0.825rem;">
            <span style="color: var(--primary); font-weight: 600;">Approx. Cost: ${item.cost}</span>
            <span style="color: #64748b;">📍 ${locality}</span>
          </div>
        </div>`;
  }).join('\n\n');

  const brandTitle = (brandName && brandName !== 'Multi-Brand') ? brandName : 'Home';
  const subtitleAppliance = (brandName && brandName !== 'Multi-Brand') ? `${brandName} ${genericCategoryTag}` : `${genericCategoryTag}`;

  return `  <!-- Customer Service Experiences Section -->
  <section class="section" id="experiences">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Common Customer Service Experiences</h2>
        <p class="section-subtitle">Real Doorstep Service Examples – typical customer complaints handled by our technicians for ${subtitleAppliance} across Chennai.</p>
      </div>

      <div class="experience-grid">
${cards}
      </div>
    </div>
  </section>`;
}

module.exports = {
  generateCustomerExperiences
};

/**
 * chimney_brands_1_5.js
 * Detailed, brand-specific metadata for Brands 1 to 5:
 * 1. Faber
 * 2. Elica
 * 3. Kutchina
 * 4. Glen
 * 5. Kaff
 */

const BRANDS_1_5 = [
  // 1. Faber
  {
    slug: 'faber',
    brandName: 'Faber',
    title: 'Faber Chimney Repair Service in Chennai | Call 8882055269',
    metaDesc: 'Doorstep Faber kitchen chimney repair and cleaning in Chennai. Fast fix for Faber 3D suction drop, motor noise, gesture touch panel, and auto-clean faults.',
    ogTitle: 'Faber Kitchen Chimney Repair in Chennai | Doorstep Suction & Motor Care',
    ogDesc: 'Looking for Faber chimney technician in Chennai? Quick doorstep repair for Faber curved glass, 3D suction, and auto-clean chimneys. Call 8882055269.',
    h1: 'Faber Chimney Repair Service in Chennai',
    heroPill: 'Doorstep repair for Faber 3D suction, motor & touch panel issues across Chennai',
    heroIntro: 'Faber chimneys are known for strong 3D suction power and Italian motor design, making them popular in modern Chennai modular kitchens. But continuous South Indian cooking with hot oil tadka, mustard splutters, and deep frying leads to heavy grease deposits on Faber blower fans, clogged baffle filters, and touch sensor unresponsiveness. When your Faber chimney makes a humming noise or fails to draw kitchen smoke, our local Chennai chimney technicians visit your home promptly with compatible spares.',
    heroTanglish: 'Faber chimney la suction romba drop aaiducha? Oil smell kitchen kulla spread aagutha, illa gesture control sensor properly detect aagala? Our local Chennai technicians visit your home, check the Faber motor capacitor, touch panel, and duct pipe on-site.',
    commonProblemsIntro: 'Faber chimney owners across Chennai report specific motor vibration, 3D airflow drop, and gesture touch issues due to hot grease vapors.',
    commonProblems: [
      {
        title: '🌪️ Faber 3D Suction Reduction',
        desc: 'Faber three-way suction ports get choked with sticky oil grease after months of fish fry and tempering, choking the air passage and leaving smoke hanging in the kitchen.'
      },
      {
        title: '🔊 Loud Motor Humming & Whining',
        desc: 'Faber heavy-duty suction motor begins whining or vibrating when the fan blower wheel collects thick oil crusts, causing balance loss on the motor shaft.'
      },
      {
        title: '🖐️ Gesture & Touch Sensor Malfunction',
        desc: 'Faber wave-sensor and feather-touch panels fail to register hand motions when kitchen grease film settles over the optical emitter strip behind the front glass.'
      },
      {
        title: '🔥 Heat Auto-Clean Cycle Not Heating',
        desc: 'In Faber auto-clean models, the thermal heating coil may fail to heat up during the 9-minute cycle, leaving the oil collector cup bone dry while grease stays inside.'
      },
      {
        title: '💧 Oil Dripping Over Faber Glass Canopy',
        desc: 'Grease droplets leaking from the lower edge of the Faber tempered glass hood indicate that the inner oil gutter channel is packed with hardened masala grease.'
      },
      {
        title: '⚡ Faber PCB Power Tripping & Dead Unit',
        desc: 'Sudden electrical spikes in Chennai homes can pop the fuse or scorch the capacitor bridge on the Faber main circuit board, causing complete power blackout.'
      }
    ],
    chimneyTypes: [
      {
        name: 'Faber 3D Suction Wall Mounted Chimney',
        intent: 'Looking for Faber 3D wall chimney repair near me in Chennai?',
        desc: 'Features perimeter aspiration with side and bottom vents. Frequent issues include side mesh grease choking and wall vibration due to high motor torque.',
        problems: 'Side vent blockage, motor hum, bracket vibration, suction loss',
        spares: 'Faber compatible baffle mesh, motor capacitor, vibration dampener',
        cost: '₹480 – ₹1,750'
      },
      {
        name: 'Faber Curved Glass Auto-Clean Chimney',
        intent: 'Need Faber curved glass chimney technician in Chennai?',
        desc: 'Combines stylish 60cm/90cm black curved glass with thermal auto-clean. Technicians check the heater coil continuity, oil tray seating, and LED spot lamps.',
        problems: 'Auto-clean element open circuit, cracked oil cup, LED light failure',
        spares: 'Thermal heating coil, oil collector cup, 1.5W LED driver',
        cost: '₹650 – ₹2,100'
      },
      {
        name: 'Faber Filterless Gesture Control Chimney',
        intent: 'Faber filterless chimney gesture touch not working in Chennai?',
        desc: 'Uses a high-speed sealed motor chamber without external filters. Requires specialized on-site motor casing degreasing and infrared sensor recalibration.',
        problems: 'Gesture sensor delay, motor chamber grease load, speed jump',
        spares: 'IR sensor PCB, sealed blower impeller, touch ribbon cable',
        cost: '₹750 – ₹2,400'
      },
      {
        name: 'Faber Island Kitchen Chimney',
        intent: 'Faber island chimney hanging repair in Chennai?',
        desc: 'Suspended from ceiling slabs above central island stoves in luxury Chennai villas and duplexes. Technicians inspect ceiling anchors and extended duct runs.',
        problems: 'Ceiling vibration, duct pipe slack, dual-side switch failure',
        spares: 'Ceiling bracket clamps, high-m3/h blower motor, flexible duct',
        cost: '₹850 – ₹3,200'
      }
    ],
    repairServices: [
      { title: 'Faber Motor Repair & Rewinding', desc: 'Inspection of Faber copper motor coils, shaft bearing oiling, and run capacitor replacement to restore high RPM.' },
      { title: 'Faber Auto-Clean Coil Service', desc: 'Diagnosis of heating element continuity, thermal cut-off relay, and automatic timer circuits.' },
      { title: 'Faber Gesture & Touch Panel Fix', desc: 'Precision cleaning of optical sensor tracks, ribbon cable replacement, and touch display board repairs.' },
      { title: 'Faber Baffle Filter Jet Degreasing', desc: 'Food-safe caustic-free jet cleaning of Faber stainless steel baffle filters and grease channels.' }
    ],
    deepCleaning: {
      title: 'Faber Chimney Deep Degreasing Service in Chennai',
      desc: 'Chennai cooking with mustard oil, gingelly oil, and coconut tadka creates sticky brown resin inside Faber blower wheels that routine wiping cannot touch.',
      points: [
        { title: 'Complete Canopy Dismantling', desc: 'Safe uncoupling of Faber front glass, oil tray, and duct cover to reach hidden motor chambers.' },
        { title: 'Blower Impeller Jet Wash', desc: 'Removal and high-pressure degreasing of the squirrel-cage fan wheel to clear centrifugal oil blocks.' },
        { title: 'Oil Gutter Heat Flushing', desc: 'Clearing hardened grease deposits from the internal drainage trough leading to the collection cup.' },
        { title: 'Airflow Velocity Re-Test', desc: 'Verification of suction velocity using an anemometer before and after service to confirm results.' }
      ],
      price: '₹700 – ₹1,450'
    },
    generalPricing: [
      { service: 'Faber Inspection & Diagnosis Visit', price: '₹199 – ₹299' },
      { service: 'Faber Baffle Filter Jet Deep Cleaning', price: '₹450 – ₹850' },
      { service: 'Faber Motor Capacitor / Bearing Work', price: '₹450 – ₹1,150' },
      { service: 'Faber Auto-Clean Heating Coil Repair', price: '₹850 – ₹1,650' },
      { service: 'Faber Touch / Gesture PCB Repair', price: '₹950 – ₹2,100' },
      { service: 'Faber Copper Motor Replacement', price: '₹1,950 – ₹3,800' }
    ],
    spareParts: [
      { part: 'Faber Motor Run Capacitor (3uF/4uF)', price: '₹350 – ₹600', reason: 'Motor hums or spins at half speed due to weak microfarad rating' },
      { part: 'Faber Heating Coil Strip', price: '₹850 – ₹1,550', reason: 'Auto-clean not melting oil due to open circuit in heating coil' },
      { part: 'Faber Gesture Sensor Module', price: '₹950 – ₹1,850', reason: 'Hand wave detection fails due to vapor corrosion on sensor board' },
      { part: 'Faber Stainless Steel Baffle Filter', price: '₹550 – ₹950', reason: 'Filter latch broken or warped during rough cleaning' },
      { part: 'Faber Oil Collector Cup', price: '₹300 – ₹550', reason: 'Plastic lock teeth snapped or cup cracked from heat' },
      { part: 'Faber Squirrel-Cage Blower Wheel', price: '₹750 – ₹1,350', reason: 'Fan blades cracked or unbalanced by hardened grease deposits' },
      { part: 'Faber Main Power PCB Board', price: '₹1,250 – ₹2,400', reason: 'Power surges burnt transformer or relay on control board' }
    ],
    experiences: [
      {
        tag: 'Faber 3D Wall Chimney',
        area: 'Anna Nagar, Chennai',
        complaint: 'Faber chimney suction romba drop aaiduchu. Fish fry pannum pothu kitchen full-ah smoke ninnu irunthathu.',
        inspection: 'Technician checked suction draw at bottom and side ports, inspected baffle mesh, and checked motor run capacitor.',
        fault: 'Baffle mesh completely blocked with thick oil crust and motor capacitor dropped from 4uF to 1.7uF.',
        workDone: 'Dismantled filters for chemical jet degreasing and replaced the worn capacitor with a heavy-duty 4uF component.',
        cost: '₹750',
        result: 'Faber 3D airflow restored to full power with zero smoke lingering'
      },
      {
        tag: 'Faber Curved Glass Auto-Clean',
        area: 'Velachery, Chennai',
        complaint: 'Auto-clean button press pannalum heating work aagala, oil tray la single drop oil kooda collect aagala.',
        inspection: 'Opened canopy, checked heating strip continuity with multimeter, and inspected PCB heater relay.',
        fault: 'Thermal safety cut-off fuse burnt out due to voltage fluctuations in the building line.',
        workDone: 'Replaced the thermal fuse and recalibrated the auto-clean heating timer circuit on-site.',
        cost: '₹850',
        result: 'Auto-clean heating up smoothly and oil draining into tray within 10 minutes'
      },
      {
        tag: 'Faber Filterless Gesture Chimney',
        area: 'Adyar, Chennai',
        complaint: 'Hand wave gesture control work panla. Chimney automatic-ah speed change aaguthu and beep sound varuthu.',
        inspection: 'Checked the infrared optical sensor window and dismantled the front tempered glass fascia.',
        fault: 'Cooking steam grease moisture had coated the optical transmitter diodes, triggering phantom clicks.',
        workDone: 'Chemically cleaned optical lenses with electronic solvent and insulated the sensor housing against steam.',
        cost: '₹900',
        result: 'Gesture controls switching on, changing speeds, and turning off with light hand wave'
      },
      {
        tag: 'Faber Straight Line Chimney',
        area: 'Mylapore, Chennai',
        complaint: 'Chimney motor switch on pannave mudiyala, speed 1 and 2 buttons press pannalum push switch click aagala.',
        inspection: 'Tested power terminal box and removed the 5-gang mechanical push button bracket.',
        fault: 'Kitchen tadka vapors had hardened inside the switch mechanism, seizing internal tension springs.',
        workDone: 'Installed a new brand-compatible enclosed push button switch block and lubricated contact points.',
        cost: '₹780',
        result: 'All 3 speed push buttons clicking smoothly and motor engaging instantly'
      },
      {
        tag: 'Faber Island Chimney',
        area: 'OMR Sholinganallur, Chennai',
        complaint: 'Island chimney ceiling-la irunthu heavy vibration and rattling sound vanthathu. High speed-la பயமா irukku.',
        inspection: 'Climbed access ladder to inspect ceiling suspension flange, tie rods, and blower wheel balance.',
        fault: 'Ceiling anchor bolts loosened slightly and blower fan wheel had uneven oil clumps causing dynamic wobble.',
        workDone: 'Tightened high-tensile ceiling fasteners, cleaned the blower wheel, and balanced the motor rotor.',
        cost: '₹1,200',
        result: 'Chimney running steady with minimal vibration even at maximum speed 3'
      },
      {
        tag: 'Faber Auto-Clean 90cm',
        area: 'Porur, Chennai',
        complaint: 'Motor-la irunthu burning smell vanthathu, smoke exhaust veliya pogama kitchen kulla blow aaguthu.',
        inspection: 'Checked motor winding temperature, capacitor health, and inspected the 6-inch aluminum exhaust duct.',
        fault: 'Exterior duct flap jammed shut by bird nest and grease, forcing hot air to churn inside the motor chamber.',
        workDone: 'Cleared duct pipe obstruction, fitted bird mesh cowl, and tested motor insulation resistance.',
        cost: '₹650',
        result: 'Smooth outward air exhaust and motor running cool with no smell'
      }
    ],
    faqs: [
      { q: 'What is the visiting charge for Faber chimney inspection in Chennai?', a: 'Our Faber chimney doorstep inspection fee is ₹199 to ₹299 across Chennai. If you proceed with the suggested repair or part replacement, this visiting fee is adjusted into the final invoice.' },
      { q: 'Why is my Faber chimney gesture control not responding to hand waves?', a: 'Faber gesture control relies on optical infrared sensors. Hot oil steam often leaves a micro-layer of grease on the sensor lenses behind the black glass. Our technician cleans the sensors or replaces the sensor ribbon module if corroded.' },
      { q: 'How often should a Faber chimney be deep cleaned in Chennai?', a: 'For regular Chennai home cooking involving sambar tadka, fish frying, and deep frying, we recommend deep degreasing every 5 to 6 months to prevent oil dripping and motor strain.' },
      { q: 'Can Faber chimney auto-clean heating issues be repaired at home?', a: 'Yes. Our technician tests the heating element, thermal cut-off fuse, and PCB relay on-site at your home and replaces the faulty part in a single visit.' },
      { q: 'How much does a Faber chimney motor replacement cost in Chennai?', a: 'A compatible high-torque copper motor for Faber chimneys typically ranges from ₹1,950 to ₹3,800 depending on whether it is an open frame or sealed filterless blower motor.' },
      { q: 'Why is my Faber chimney making a loud humming noise without suction?', a: 'Loud humming usually happens when the motor run capacitor has weakened (below 2uF) or the blower fan wheel is jammed by hardened grease clumps. Replacing the capacitor or cleaning the fan restores suction.' },
      { q: 'Do you carry genuine compatible spare parts for Faber chimneys?', a: 'Yes, our technicians carry tested compatible Faber spare parts including baffle filters, push switches, capacitors, auto-clean coils, and touch display boards.' },
      { q: 'Why is oil dripping from the bottom of my Faber chimney?', a: 'Oil dripping happens when the internal collection channel is clogged or the baffle filter angle is misaligned. A thorough chamber clean and drain flush fixes this problem completely.' },
      { q: 'Can you install or realign the exhaust duct pipe for Faber chimneys?', a: 'Yes, we replace torn flexible aluminum ducts, realign bent duct runs, and fit sturdy external louvers with bird guards across Chennai.' },
      { q: 'How long does a Faber chimney repair visit take?', a: 'Most common repairs like capacitor replacement, push button repair, or auto-clean coil replacement take 45 to 60 minutes at your doorstep.' }
    ]
  },

  // 2. Elica
  {
    slug: 'elica',
    brandName: 'Elica',
    title: 'Elica Chimney Repair Service in Chennai | Call 8882055269',
    metaDesc: 'Doorstep Elica chimney repair and cleaning in Chennai. Expert technicians for Elica Deep Silence EDS, filterless auto-clean, motor hum, and touch panel faults.',
    ogTitle: 'Elica Kitchen Chimney Repair in Chennai | Doorstep Suction & Motor Care',
    ogDesc: 'Need Elica kitchen chimney repair near me in Chennai? Fast doorstep fix for Elica curved glass, EDS silence, and auto-clean models. Call 8882055269.',
    h1: 'Need Help With Your Elica Kitchen Chimney in Chennai?',
    heroPill: 'Reliable doorstep repair for Elica Deep Silence, filterless & auto-clean chimneys in Chennai',
    heroIntro: 'Elica chimneys are celebrated for sleek Italian aesthetics and EDS (Elica Deep Silence) technology that keeps noise levels down in Chennai homes. However, high-temperature frying, dosa oil vapors, and spicy curries challenge even the best suction systems. Over time, grease accumulates in the internal sealed motor housing, touch sensor PCBs glitch from humidity, or the auto-clean heating system stops melting thick oil into the collector. Our Chennai technicians diagnose and repair all Elica chimney issues at your home.',
    heroTanglish: 'Elica chimney sound romba maripoiducha? Deep Silence model aana kooda motor vibration jasthi-ah irukka, touch panel properly respond aagala? Our local Chennai technicians visit your doorstep across all localities with tested Elica compatible spare parts.',
    commonProblemsIntro: 'Elica chimneys in Chennai frequently experience silent motor bearing wear, grease on touch sensors, and auto-clean drainage blocks.',
    commonProblems: [
      {
        title: '🌪️ Elica Suction Power Drop',
        desc: 'Blower fan intake gets choked with sticky oil residues from South Indian seasoning, dropping airflow from 1200 m3/hr to poor venting levels.'
      },
      {
        title: '🔇 EDS Silence Motor Noise & Grinding',
        desc: 'Elica Deep Silence motors develop metallic grinding or rumbling when internal bearings dry out or when grease deposits throw the rotor off balance.'
      },
      {
        title: '📱 Elica Touch Panel Display Dead / Blinking',
        desc: 'Moisture from boiling rasam and hot tadka vapors seeps behind the glass front, causing the digital display to flicker or become completely unresponsive.'
      },
      {
        title: '🔥 Heat Auto-Clean Heater Inactive',
        desc: 'Auto-clean cycle runs its timer but fails to generate heat, leaving the oil collector empty while grease solidifies around the blower casing.'
      },
      {
        title: '💧 Sticky Grease Dripping Down Front Glass',
        desc: 'Internal oil gutter overflows and drips over the curved glass rim when the drainage pitch is blocked by thick black grease crusts.'
      },
      {
        title: '💡 Halogen / LED Spot Lamp Failure',
        desc: 'High ambient heat above gas hobs damages the miniature Elica LED driver circuit, leaving the cooking surface dark.'
      }
    ],
    chimneyTypes: [
      {
        name: 'Elica Deep Silence (EDS) Wall Chimney',
        intent: 'Elica Deep Silence chimney repair near me in Chennai?',
        desc: 'Uses sound-dampening acoustic pads and specialized motor suspension. Technicians inspect acoustic baffles, motor bearings, and anti-vibration mountings.',
        problems: 'Motor bearing squeak, acoustic pad oil saturation, speed regulation fault',
        spares: 'EDS motor bearing, speed resistor module, sound dampener foam',
        cost: '₹550 – ₹1,950'
      },
      {
        name: 'Elica Spotless Curved Glass Chimney',
        intent: 'Elica curved glass chimney service in Chennai?',
        desc: 'Features crystal curved glass with capacitive feather touch. Requires careful glass handling, touch track cleaning, and LED spotlight driver repairs.',
        problems: 'Touch sensor unresponsiveness, LED light blackout, glass rattle',
        spares: 'Touch panel board, 12V LED driver, silicone glass buffers',
        cost: '₹600 – ₹2,200'
      },
      {
        name: 'Elica Filterless Auto-Clean Chimney',
        intent: 'Elica filterless auto clean chimney not working in Chennai?',
        desc: 'Direct airflow system with internal heating strip. Technicians check the heating element resistance, thermal cut-off switch, and oil tray alignment.',
        problems: 'Heater not warming, oil cup loose, motor rotor oil loading',
        spares: 'Thermal heating element, oil collector tray, sealed fan wheel',
        cost: '₹700 – ₹2,350'
      },
      {
        name: 'Elica Ceiling Island Hood',
        intent: 'Elica island chimney technician near me in Chennai?',
        desc: 'Center ceiling mount hood with 360-degree intake. Technicians check ceiling anchor brackets, dual touch controls, and vertical ducting alignment.',
        problems: 'Ceiling bracket play, excessive duct resistance, dual control sync',
        spares: 'Suspension cable clamp, heavy-duty blower, control bus cable',
        cost: '₹900 – ₹3,400'
      }
    ],
    repairServices: [
      { title: 'Elica Motor Bearing & Capacitor Service', desc: 'Precision servicing of Elica silent motors, bearing lubrication, and microfarad capacitor replacement.' },
      { title: 'Elica Thermal Auto-Clean Troubleshooting', desc: 'Checking heater coil resistance, thermostat cut-off points, and oil drain passage clearing.' },
      { title: 'Elica Capacitive Touch Panel Repair', desc: 'Restoring uncooperative touch sensors and fixing digital speed display PCB boards.' },
      { title: 'Elica Blower Wheel Degreasing', desc: 'Dismantling squirrel cage impellers for chemical cleaning to eliminate motor vibration.' }
    ],
    deepCleaning: {
      title: 'Elica Chimney Deep Cleaning & Degreasing in Chennai',
      desc: 'Keep your Elica chimney functioning at peak silence and suction with our intensive on-site chemical degreasing service designed for Chennai home kitchens.',
      points: [
        { title: 'Touch Panel Steam Isolation', desc: 'Careful shielding of sensitive Elica touch and display boards before liquid degreasing begins.' },
        { title: 'Acoustic Liner Inspection', desc: 'Checking that sound dampening layers are free of grease saturation to maintain silent operation.' },
        { title: 'Hot Chemical Blower Rinse', desc: 'Removing the blower fan wheel and soaking it in specialized food-safe degreasers to dissolve burnt oils.' },
        { title: 'Oil Gutter Jet Flush', desc: 'High-pressure flushing of internal channels ensuring melted oil drops cleanly into the collector cup.' }
      ],
      price: '₹750 – ₹1,500'
    },
    generalPricing: [
      { service: 'Elica Inspection & Diagnosis Visit', price: '₹199 – ₹299' },
      { service: 'Elica Complete Deep Degreasing Service', price: '₹750 – ₹1,500' },
      { service: 'Elica Silent Motor Capacitor / Bearing Work', price: '₹500 – ₹1,250' },
      { service: 'Elica Auto-Clean Heating Element Work', price: '₹850 – ₹1,750' },
      { service: 'Elica Touch Panel / Display Board Repair', price: '₹950 – ₹2,200' },
      { service: 'Elica High-Suction Motor Replacement', price: '₹2,100 – ₹3,950' }
    ],
    spareParts: [
      { part: 'Elica Motor Run Capacitor (3.5uF/4uF)', price: '₹380 – ₹650', reason: 'Motor running slow or making groaning noise without suction' },
      { part: 'Elica Heating Coil Element', price: '₹850 – ₹1,650', reason: 'Auto-clean cycle does not produce heat to melt sticky oils' },
      { part: 'Elica Touch Sensor Display PCB', price: '₹1,100 – ₹2,250', reason: 'Capacitive buttons failing due to steam ingress behind glass' },
      { part: 'Elica Stainless Steel Baffle Filter', price: '₹550 – ₹980', reason: 'Lock latch broken or filter deformed from repeated falls' },
      { part: 'Elica Oil Collector Cup', price: '₹320 – ₹580', reason: 'Heat brittle plastic snapped during routine removal' },
      { part: 'Elica Centrifugal Blower Fan', price: '₹800 – ₹1,450', reason: 'Rotor fan blades out of balance due to caked tadka grease' },
      { part: 'Elica LED Spotlight & Driver Unit', price: '₹380 – ₹700', reason: 'Driver popped due to ambient heat above the cooking burner' }
    ],
    experiences: [
      {
        tag: 'Elica Deep Silence Chimney',
        area: 'Besant Nagar, Chennai',
        complaint: 'Elica silent chimney romba silent-ah irunthathu, but ipo high speed-la grinding sound vanthuthu.',
        inspection: 'Removed outer housing to inspect motor bearing tolerance and checked blower squirrel fan for debris.',
        fault: 'Motor sleeve bearing had run dry and accumulated fine grease dust, causing metal-on-metal friction.',
        workDone: 'Cleaned the rotor shaft, replaced bearing bushes with high-temp brass sleeves, and re-lubricated.',
        cost: '₹850',
        result: 'Elica Deep Silence running in near whisper-quiet mode again'
      },
      {
        tag: 'Elica Spotless Curved Glass',
        area: 'Thiruvanmiyur, Chennai',
        complaint: 'Touch panel press pannalum beep varuthu aana motor on aagala. Lights mattum yeriyuthu.',
        inspection: 'Opened glass canopy, tested output signals from touch PCB to main motor relay board.',
        fault: 'Relay switch contact points on the main control board were oxidized by kitchen humidity.',
        workDone: 'Soldered a replacement heavy-duty relay on the motherboard and protected tracks with conformal lacquer.',
        cost: '₹950',
        result: 'Touch controls responding immediately and all motor speeds working'
      },
      {
        tag: 'Elica Filterless Auto-Clean',
        area: 'Alwarpet, Chennai',
        complaint: 'Auto clean run pannum pothu oil tray la oil varala. Motor casing kitta oil drop aagi stove mela vizhuguthu.',
        inspection: 'Tested heating coil temperature with digital infrared thermometer and inspected oil chute.',
        fault: 'Heating strip worked partially but oil drain hole was blocked solid by hardened coconut oil crusts.',
        workDone: 'Chemically flushed the drain chute, realigned the heating collar, and cleared the collection canal.',
        cost: '₹750',
        result: 'Melted oil flowing freely into collector tray during auto-clean'
      },
      {
        tag: 'Elica Wall Mount Baffle',
        area: 'KK Nagar, Chennai',
        complaint: 'Kitchen la smoke veliya pogama kulla spread aaguthu. Frying pannum pothu choking maari irukku.',
        inspection: 'Tested intake velocity with paper test and climbed to check the exterior exhaust duct flap.',
        fault: 'Exterior louvers were stuck shut with sticky grease and dust, choking exhaust air completely.',
        workDone: 'Degreased external louver blades, cleaned the 6-inch duct outlet, and washed baffle filters.',
        cost: '₹600',
        result: 'Strong vacuum draw created, smoke pulled out of kitchen instantly'
      },
      {
        tag: 'Elica Island Hood',
        area: 'Nungambakkam, Chennai',
        complaint: 'Island chimney suspension bracket aadura maari irukku, motor on panna canopy shake aaguthu.',
        inspection: 'Checked ceiling mounting plate, expansion anchor screws, and inner duct clamping.',
        fault: 'Two false ceiling anchor bolts had loosened over time due to motor vibration.',
        workDone: 'Reinforced suspension plate with heavy-duty metal wedge anchors and rebalanced blower fan.',
        cost: '₹1,350',
        result: 'Island canopy rigid and completely stable at all speed levels'
      },
      {
        tag: 'Elica Straight Line 60cm',
        area: 'Kodambakkam, Chennai',
        complaint: 'Push switch on panna motor hum pannuthu aana rotate aagala. Hand-la spin panna mattum slow-ah oduthu.',
        inspection: 'Tested start winding voltage and checked capacitor value using digital multimeter.',
        fault: '3.5uF motor start capacitor had dried up and dropped below 1uF.',
        workDone: 'Replaced with a fresh 3.5uF 450V motor capacitor with flame-retardant casing.',
        cost: '₹480',
        result: 'Motor starting instantly with powerful torque on speed 1, 2, and 3'
      }
    ],
    faqs: [
      { q: 'How much is the visiting fee for Elica chimney repair in Chennai?', a: 'Our doorstep inspection charge for Elica chimney is ₹199 to ₹299 across Chennai. This visiting charge is adjusted in the final repair bill if you approve the service.' },
      { q: 'Why is my Elica chimney making noise despite being a Deep Silence model?', a: 'Deep Silence models stay quiet until grease unbalances the squirrel-cage fan or the motor shaft bearings dry out. Degreasing the fan or replacing worn bearings restores silent performance.' },
      { q: 'Can you fix Elica touch panels that stop responding?', a: 'Yes. Most Elica touch panel issues are caused by moisture or grease seeping behind the glass. We clean sensor traces or repair the control board without needing full canopy replacement.' },
      { q: 'What happens if Elica auto-clean doesn’t drain oil into the cup?', a: 'This happens either because the heating strip has failed or the internal drain channel is plugged with solid grease. We test the heating coil and clear the drain pipe on-site.' },
      { q: 'How much does an Elica chimney deep clean cost in Chennai?', a: 'A complete Elica chimney deep degreasing service ranges from ₹750 to ₹1,500 depending on model size (60cm vs 90cm) and the level of grease buildup.' },
      { q: 'Do you provide compatible spares for Elica curved glass chimneys?', a: 'Yes, our technicians carry tested compatible Elica spares including capacitors, baffle filters, oil trays, LED drivers, and touch PCB boards.' },
      { q: 'Why is my Elica chimney blowing air back into the kitchen?', a: 'Air backdraft indicates a blocked duct pipe, stuck exterior damper flap, or excessive bends in the aluminum duct. Our technician checks the exhaust run and clears it.' },
      { q: 'How long does a replacement Elica motor last?', a: 'A quality compatible copper winding motor typically lasts 5 to 7 years with regular cleaning and proper duct maintenance.' },
      { q: 'Do you repair Elica island chimneys in Chennai apartments?', a: 'Yes, our technicians have ladders and ceiling mounting tools to service Elica island hoods in flats and villas across Chennai.' },
      { q: 'Can I book same-day Elica chimney repair in Chennai?', a: 'Yes, we offer same-day doorstep technician visits across all major Chennai areas including Anna Nagar, OMR, Velachery, and Adyar.' }
    ]
  },

  // 3. Kutchina
  {
    slug: 'kutchina',
    brandName: 'Kutchina',
    title: 'Kutchina Chimney Repair Service in Chennai | Call 8882055269',
    metaDesc: 'Doorstep Kutchina chimney repair & cleaning in Chennai. Pioneer auto-clean specialist servicing Kutchina i-Clean, heating elements, suction drop & motor hum.',
    ogTitle: 'Kutchina Kitchen Chimney Repair in Chennai | Doorstep Auto-Clean Service',
    ogDesc: 'Looking for Kutchina chimney repair near me in Chennai? Fast doorstep fix for Kutchina i-Clean, auto-clean heating, suction and motor faults. Call 8882055269.',
    h1: 'Kutchina Kitchen Chimney Repair & Service in Chennai',
    heroPill: 'Doorstep i-Clean & auto-clean heating repair for Kutchina chimneys across Chennai',
    heroIntro: 'Kutchina was among the first brands in India to introduce auto-clean technology, designed specifically to tackle heavy Indian cooking oil and spices. In Chennai households, Kutchina chimneys endure heavy tempering of mustard, curry leaves, and deep frying. Over time, the internal i-Clean heating elements can weaken, grease can harden in the oil drip canal, or motor capacitors can lose microfarad rating. Our skilled Chennai chimney technicians service Kutchina straight line, curved glass, and filterless hoods with precision.',
    heroTanglish: 'Kutchina chimney la i-Clean auto cleaning properly heat aagalaaya? Oil collector cup eppovume empty-ah irukka, motor sound jasthi aaiducha? Our local Chennai technicians inspect your Kutchina chimney at your doorstep and fix the fault quickly.',
    commonProblemsIntro: 'Kutchina chimneys in Chennai commonly develop heating element continuity breaks, oil collection channel clogs, and push-switch jamming.',
    commonProblems: [
      {
        title: '🔥 Kutchina i-Clean Auto-Clean Heating Failure',
        desc: 'The thermal heating element fails to melt internal grease during the cleaning cycle due to open circuit in the heating wrap or damaged PCB relay.'
      },
      {
        title: '🌪️ Weak Suction on Heavy Cooking',
        desc: 'Centrifugal suction drops significantly when the blower impeller blades get coated in heavy fried oil layers, reducing air intake volume.'
      },
      {
        title: '💧 Oil Leaking from Chimney Base',
        desc: 'Cooking oil overflows from internal collection grooves onto the kitchen gas stove because the oil collection tray chute is choked.'
      },
      {
        title: '🔊 Rattling & Vibration on High Speed',
        desc: 'Kutchina metal blower fan wheel develops rotational imbalance when caked grease sticks unevenly to one side of the fan blades.'
      },
      {
        title: '🔘 Push Button / Touch Key Stuck',
        desc: 'Mechanical push buttons get physically seized or touch sensors fail to trigger speeds due to oil mist penetrating the front switch panel.'
      },
      {
        title: '⚡ Motor Fails to Spin / Humming',
        desc: 'Motor hums but does not start spinning because the run capacitor has failed or motor shaft bearings have seized from oil varnish.'
      }
    ],
    chimneyTypes: [
      {
        name: 'Kutchina i-Clean Auto-Clean Chimney',
        intent: 'Kutchina i-Clean chimney repair near me in Chennai?',
        desc: 'Equipped with intelligent auto-clean timers and thermal wrap heaters. Technicians check the thermal safety fuse, heating coil continuity, and timer PCB.',
        problems: 'Heating coil open circuit, timer PCB reset failure, cracked oil tray',
        spares: 'i-Clean heating strip, timer relay board, oil collector tray',
        cost: '₹600 – ₹1,950'
      },
      {
        name: 'Kutchina Straight Line Chimney',
        intent: 'Kutchina straight line chimney technician in Chennai?',
        desc: 'Compact under-cabinet hood popular in Chennai apartments with compact kitchens. Frequently needs push button cluster replacement and motor cleaning.',
        problems: 'Push switch spring jam, charcoal pad exhaustion, fan vibration',
        spares: 'Push switch cluster, carbon filter pads, motor capacitor',
        cost: '₹400 – ₹1,350'
      },
      {
        name: 'Kutchina Curved Glass Filterless Chimney',
        intent: 'Kutchina curved glass chimney repair in Chennai?',
        desc: 'Combines stylish 60cm/90cm curved glass hood with filterless suction blades. Technicians service touch controllers and deep clean the inner chamber.',
        problems: 'Touch sensor delay, LED lamp failure, blower oil load',
        spares: 'Touch panel board, LED driver module, blower fan',
        cost: '₹650 – ₹2,200'
      },
      {
        name: 'Kutchina Baffle Filter Hood',
        intent: 'Kutchina baffle filter chimney cleaning Chennai?',
        desc: 'Heavy stainless steel baffle filter design built to separate heavy grease from exhaust. Needs professional jet degreasing and motor maintenance.',
        problems: 'Baffle filter grease clog, latch damage, motor hum',
        spares: 'Baffle filter pair, motor capacitor, vibration bushes',
        cost: '₹450 – ₹1,600'
      }
    ],
    repairServices: [
      { title: 'Kutchina i-Clean Heating Element Repair', desc: 'Testing heating wrap continuity, thermal fuse replacement, and auto-clean timer relay fix.' },
      { title: 'Kutchina Motor Capacitor & Bearing Service', desc: 'Replacing weak motor run capacitors and freeing sticky motor shaft bearings.' },
      { title: 'Kutchina Push Switch & Touch Panel Repair', desc: 'Cleaning switch contacts, replacing jammed push clusters, and repairing touch PCBs.' },
      { title: 'Kutchina Duct Alignment & Louver Fix', desc: 'Replacing damaged aluminum ducts and freeing exterior jammed exhaust flaps.' }
    ],
    deepCleaning: {
      title: 'Kutchina Chimney Deep Degreasing Service in Chennai',
      desc: 'Over time, Chennai cooking oil vapors accumulate deep inside the Kutchina motor casing where normal auto-clean heat cannot fully dissolve it.',
      points: [
        { title: 'Motor Chamber Dismantling', desc: 'Complete opening of the Kutchina blower casing to inspect internal oil accumulations.' },
        { title: 'Squirrel-Cage Fan Scrub', desc: 'Thorough chemical immersion and high-pressure jet wash of the fan wheel.' },
        { title: 'i-Clean Canal Flushing', desc: 'Clearing hardened oil residues from the drainage slope that leads to the oil collector cup.' },
        { title: 'Motor Current & Suction Test', desc: 'Measuring motor operating current (amps) and airflow velocity after deep cleaning.' }
      ],
      price: '₹650 – ₹1,350'
    },
    generalPricing: [
      { service: 'Kutchina Inspection & Diagnosis Visit', price: '₹199 – ₹299' },
      { service: 'Kutchina Complete Deep Degreasing', price: '₹650 – ₹1,350' },
      { service: 'Kutchina Motor Capacitor / Bearing Repair', price: '₹400 – ₹1,050' },
      { service: 'Kutchina i-Clean Heating Element Work', price: '₹750 – ₹1,550' },
      { service: 'Kutchina Push Button / Switch Board Repair', price: '₹450 – ₹1,150' },
      { service: 'Kutchina Copper Blower Motor Replacement', price: '₹1,850 – ₹3,400' }
    ],
    spareParts: [
      { part: 'Kutchina Motor Run Capacitor (3uF/4uF)', price: '₹350 – ₹580', reason: 'Motor makes buzzing sound without revolving or turns at low speed' },
      { part: 'Kutchina i-Clean Heating Wrap Element', price: '₹750 – ₹1,450', reason: 'Auto-clean element burnt or broken continuity' },
      { part: 'Kutchina 5-Key Push Button Switch Block', price: '₹450 – ₹850', reason: 'Springs jammed or copper pins oxidized by cooking vapors' },
      { part: 'Kutchina Stainless Steel Baffle Filter', price: '₹500 – ₹850', reason: 'Lock bracket broken or filter warped from hard washing' },
      { part: 'Kutchina Oil Collector Tray', price: '₹280 – ₹500', reason: 'Plastic lock tabs snapped during cleaning' },
      { part: 'Kutchina Centrifugal Fan Wheel', price: '₹700 – ₹1,250', reason: 'Cracked hub or unbalanced blades causing loud vibration' },
      { part: 'Kutchina Main Power PCB', price: '₹1,150 – ₹2,100', reason: 'Relay burnt or voltage spike damaged circuit board' }
    ],
    experiences: [
      {
        tag: 'Kutchina i-Clean Auto-Clean',
        area: 'Kolathur, Chennai',
        complaint: 'Kutchina i-Clean button press pannalum heating sound varala, oil collector cup eppovume dry-ah irukku.',
        inspection: 'Opened canopy casing and tested electrical resistance across heating coil wrap using multimeter.',
        fault: 'Open circuit found in the thermal cut-off fuse due to a recent Chennai power fluctuation.',
        workDone: 'Replaced the blown thermal fuse and verified heating cycle reaching target temperature.',
        cost: '₹780',
        result: 'Auto-clean heating up hot and draining oil into cup within 8 minutes'
      },
      {
        tag: 'Kutchina Straight Line Hood',
        area: 'Perambur, Chennai',
        complaint: 'Speed 2 button stuck aaiduchu, press panna thirumba veliya varala. Chimney off panna plug remove panna vendiyatha irunthathu.',
        inspection: 'Dismantled front switch bezel and inspected the 5-key push button mechanical block.',
        fault: 'Thick cooking oil varnish had seeped past buttons, seizing internal copper contacts.',
        workDone: 'Replaced the switch block with a compatible enclosed 5-key cluster and tested all speeds.',
        cost: '₹650',
        result: 'All push buttons operating smoothly with positive mechanical click'
      },
      {
        tag: 'Kutchina Curved Glass Filterless',
        area: 'Madhavaram, Chennai',
        complaint: 'Chimney on panna heavy vibration and humming sound. Kitchen la smoke proper-ah veliya pogala.',
        inspection: 'Inspected blower impeller and tested motor run capacitor microfarad value.',
        fault: 'Squirrel cage fan had thick crusts of grease on one side, and capacitor value dropped to 1.8uF.',
        workDone: 'Chemically jet-cleaned the blower wheel and fitted a fresh 4uF heavy-duty run capacitor.',
        cost: '₹750',
        result: 'Vibration eliminated completely, strong suction pulling smoke away'
      },
      {
        tag: 'Kutchina Baffle Filter 60cm',
        area: 'Mogappair East, Chennai',
        complaint: 'Oil drops drip aagi stove mela vizhuguthu. Baffle filter wash panniyum problem solve aagala.',
        inspection: 'Inspected inner oil drainage trough and checked slope angle towards the collection cup.',
        fault: 'Drainage trough was plugged with black hardened oil sludge, causing overflow over the lip.',
        workDone: 'Flushed and descaled the internal oil gutters and reseated baffle filters at proper pitch.',
        cost: '₹550',
        result: 'Zero oil leakage, clean drainage straight into the collector tray'
      },
      {
        tag: 'Kutchina i-Clean 90cm',
        area: 'Ambattur, Chennai',
        complaint: 'Chimney totally dead, switch on pannalum light kooda yeriyala. Power socket-la current irukku.',
        inspection: 'Checked input line fuse on main PCB board and tested transformer output voltage.',
        fault: 'Glass fuse blown and input varistor shorted out from lightning spike.',
        workDone: 'Replaced board protection fuse, fitted new MOV surge suppressor, and tested motor operation.',
        cost: '₹680',
        result: 'Chimney powered back up fully, lights and motor working properly'
      },
      {
        tag: 'Kutchina Touch Sensor Chimney',
        area: 'Villivakkam, Chennai',
        complaint: 'Touch buttons click pannalum delayed response, speed change aagala. Single beep continuous-ah varuthu.',
        inspection: 'Dismantled glass front panel and inspected touch sensor ribbon connector.',
        fault: 'Moisture from boiling curries had corroded the touch ribbon pins.',
        workDone: 'Cleaned contacts with electronic solvent, dried the board, and sealed edges with moisture barrier.',
        cost: '₹850',
        result: 'Touch responsiveness restored to instant touch response'
      }
    ],
    faqs: [
      { q: 'What is the visiting fee for Kutchina chimney service in Chennai?', a: 'Our doorstep inspection charge is ₹199 to ₹299 across Chennai. This fee is adjusted against the repair charge if you approve the service.' },
      { q: 'Why is my Kutchina i-Clean chimney not melting grease into the oil cup?', a: 'This is usually caused by an open thermal fuse, burnt heating element wrap, or a faulty relay on the PCB. Our technician tests and replaces the component on-site.' },
      { q: 'Can stuck push buttons on Kutchina chimneys be repaired?', a: 'Yes. In most cases, we replace the 5-key mechanical switch assembly with a compatible unit so you do not have to struggle with jammed buttons.' },
      { q: 'How often should a Kutchina chimney receive deep cleaning in Chennai?', a: 'Even with auto-clean, deep manual degreasing is recommended every 6 months to remove hardened oil that heat alone cannot melt.' },
      { q: 'How much does a Kutchina chimney motor replacement cost in Chennai?', a: 'A compatible copper winding blower motor for Kutchina chimneys generally costs between ₹1,850 and ₹3,400 depending on model wattage and size.' },
      { q: 'Why does my Kutchina chimney vibrate violently on high speed?', a: 'Vibration occurs when grease accumulates unevenly on the blower fan wheel blades, throwing off rotational balance. A thorough fan wash fixes this.' },
      { q: 'Do you carry replacement oil collector cups for Kutchina chimneys?', a: 'Yes, our technicians carry compatible oil collector trays and cups for standard Kutchina models across Chennai.' },
      { q: 'Why is oil dripping onto my stove from the Kutchina chimney?', a: 'Oil drips when the inner drainage channel gets blocked with black grease sludge. We clear the internal channel so oil drains properly into the cup.' },
      { q: 'Can you service Kutchina chimneys in North Chennai like Perambur and Kolathur?', a: 'Yes, our technicians cover all localities across North, South, Central, and West Chennai with prompt doorstep visits.' },
      { q: 'Is it safe to use Kutchina chimney if the motor is humming without spinning?', a: 'No, switch it off immediately to prevent motor winding burnout. A humming motor usually only needs a new run capacitor to start spinning again.' }
    ]
  },

  // 4. Glen
  {
    slug: 'glen',
    brandName: 'Glen',
    title: 'Glen Chimney Repair Service in Chennai | Call 8882055269',
    metaDesc: 'Doorstep Glen kitchen chimney repair in Chennai. Expert repair for Glen heat auto-clean, motor capacitor, suction drop, push buttons, and curved glass models.',
    ogTitle: 'Glen Kitchen Chimney Repair in Chennai | Doorstep Suction & Motor Care',
    ogDesc: 'Looking for Glen chimney technician in Chennai? Fast doorstep fix for Glen heat auto-clean, baffle filter, motor and suction issues. Call 8882055269.',
    h1: 'Glen Chimney Not Working Properly? Doorstep Repair in Chennai',
    heroPill: 'Prompt doorstep repair for Glen heat auto-clean, motor & baffle filter chimneys in Chennai',
    heroIntro: 'Glen kitchen chimneys are popular in Chennai homes for solid Italian styling, reliable copper motors, and heavy baffle filters that handle high-heat cooking. However, continuous South Indian cooking with gingelly oil tadkas and fish fries eventually clogs Glen baffle filters, strains motor run capacitors, or triggers auto-clean heating element issues. When your Glen chimney produces low suction, makes grinding noises, or fails to start, our experienced Chennai chimney technicians reach your home quickly.',
    heroTanglish: 'Glen chimney suction romba dull aaiducha? Motor sound jasthi-ah irukku aana smoke kitchen kulla nillutha, illa push buttons stuck aagiducha? Our local Chennai technicians check your Glen chimney at your home and fix it with genuine-compatible parts.',
    commonProblemsIntro: 'Glen chimney owners in Chennai frequently face heavy baffle filter grease blockage, capacitor microfarad loss, and duct flap jamming.',
    commonProblems: [
      {
        title: '🌪️ Glen Suction Drop / Smoke Spreading',
        desc: 'Stainless steel baffle filters become saturated with sticky cooking oil, restricting airflow and forcing kitchen smoke back into living rooms.'
      },
      {
        title: '🔊 Loud Motor Humming or Bearing Noise',
        desc: 'Motor sleeve bearings dry up or the blower wheel gathers uneven grease crusts, creating a loud humming or rattling sound during operation.'
      },
      {
        title: '🔘 Glen Push Button Jamming',
        desc: 'Mechanical push buttons on Glen straight line and curved glass models stick inside the bezel due to grease vapor buildup on internal springs.'
      },
      {
        title: '🔥 Heat Auto-Clean Heating Element Fault',
        desc: 'In Glen heat auto-clean models, the thermal coil stops heating up, preventing grease from melting into the stainless steel oil collector.'
      },
      {
        title: '💧 Oil Dripping from Glen Filter Corners',
        desc: 'Liquid grease leaks down from the baffle filter frame onto the cooking counter when internal collection gutters overflow.'
      },
      {
        title: '⚡ Total Power Failure / Non-Responsive Unit',
        desc: 'Power surges or blown glass fuses on the input terminal board render the Glen chimney completely dead with no lights or motor movement.'
      }
    ],
    chimneyTypes: [
      {
        name: 'Glen Heat Auto Clean Chimney',
        intent: 'Glen heat auto clean chimney repair near me in Chennai?',
        desc: 'Features a thermal heating wrap around the motor housing. Technicians check the heating element, thermal cut-off relay, and stainless oil tray.',
        problems: 'Heating coil open circuit, thermal fuse trip, tray rust',
        spares: 'Heating element coil, thermal safety fuse, oil collector',
        cost: '₹650 – ₹1,950'
      },
      {
        name: 'Glen Curved Glass Baffle Chimney',
        intent: 'Glen curved glass chimney repair service in Chennai?',
        desc: 'Modern 60cm/90cm toughened glass hood with stainless steel baffle filters. Technicians service the motor capacitor, touch/push buttons, and LED lights.',
        problems: 'Baffle filter latch loose, capacitor drop, switch stickiness',
        spares: 'Baffle filter pair, 4uF capacitor, push switch block',
        cost: '₹500 – ₹1,800'
      },
      {
        name: 'Glen Straight Line Classic Chimney',
        intent: 'Glen straight line chimney technician in Chennai?',
        desc: 'Slimline stainless steel hood designed to mount flush under kitchen cabinets. Common repairs include mechanical switch clusters and exhaust duct clearing.',
        problems: 'Push button spring jam, duct blockage, motor vibration',
        spares: '5-gang push switch, exhaust duct adapter, motor capacitor',
        cost: '₹400 – ₹1,300'
      },
      {
        name: 'Glen Designer Inclined Chimney',
        intent: 'Glen inclined chimney repair in Chennai?',
        desc: 'Angular vertical chimney with motorized or manual glass hood. Technicians check touch panels, hydraulic struts, and internal blower alignment.',
        problems: 'Touch sensor unresponsiveness, hydraulic arm weakness, PCB error',
        spares: 'Touch sensor board, hydraulic strut, main control PCB',
        cost: '₹750 – ₹2,450'
      }
    ],
    repairServices: [
      { title: 'Glen Copper Motor Servicing & Capacitor', desc: 'Testing motor winding resistance, shaft bearing lubrication, and capacitor replacement.' },
      { title: 'Glen Heat Auto-Clean Repair', desc: 'Diagnosing heating element continuity, safety thermostat, and auto-clean timer circuit.' },
      { title: 'Glen Push Button & Switch Assembly Fix', desc: 'Replacing sticky 5-key push switch blocks and restoring smooth speed selection.' },
      { title: 'Glen Baffle Filter Jet Cleaning', desc: 'Professional chemical degreasing of heavy stainless steel baffle filters.' }
    ],
    deepCleaning: {
      title: 'Glen Chimney Deep Degreasing Service in Chennai',
      desc: 'High-temperature oil splutters from Chennai home cooking cling to Glen blower impellers, reducing suction capacity by over 50% within months.',
      points: [
        { title: 'Baffle Filter Jet Washing', desc: 'Ultrasonic chemical degreasing of Glen heavy stainless steel baffle filters to clear internal air curves.' },
        { title: 'Squirrel Cage Fan Detachment', desc: 'Uncoupling the centrifugal fan wheel for complete grease removal to restore aerodynamic balance.' },
        { title: 'Oil Gutter De-Silting', desc: 'Clearing hardened brown oil sludge from internal drainage troughs and oil cup spouts.' },
        { title: 'Motor Casing Cleaning', desc: 'Wiping down the outer motor shell to ensure proper heat dissipation during long cooking sessions.' }
      ],
      price: '₹650 – ₹1,400'
    },
    generalPricing: [
      { service: 'Glen Inspection & Diagnosis Visit', price: '₹199 – ₹299' },
      { service: 'Glen Complete Deep Degreasing', price: '₹650 – ₹1,400' },
      { service: 'Glen Motor Capacitor / Bearing Work', price: '₹450 – ₹1,100' },
      { service: 'Glen Heat Auto-Clean Element Work', price: '₹800 – ₹1,650' },
      { service: 'Glen Push Button Switch Cluster Repair', price: '₹450 – ₹950' },
      { service: 'Glen Copper Blower Motor Replacement', price: '₹1,900 – ₹3,500' }
    ],
    spareParts: [
      { part: 'Glen Motor Run Capacitor (3uF/4uF)', price: '₹350 – ₹600', reason: 'Motor makes humming noise without spinning or runs sluggishly' },
      { part: 'Glen Heat Auto-Clean Heating Element', price: '₹800 – ₹1,550', reason: 'Auto-clean element burnt out, no heat produced' },
      { part: 'Glen 5-Key Push Button Cluster', price: '₹450 – ₹900', reason: 'Push switches physically jammed by grease residue' },
      { part: 'Glen Stainless Steel Baffle Filter', price: '₹550 – ₹950', reason: 'Filter lock broken or mesh distorted' },
      { part: 'Glen Stainless Oil Collector Tray', price: '₹350 – ₹650', reason: 'Tray damaged, cracked, or missing collection tabs' },
      { part: 'Glen Blower Impeller Fan', price: '₹750 – ₹1,350', reason: 'Fan wheel unbalanced or cracked from hardened grease' },
      { part: 'Glen Main PCB Circuit Board', price: '₹1,200 – ₹2,300', reason: 'Voltage surge damaged onboard transformer or control relays' }
    ],
    experiences: [
      {
        tag: 'Glen Heat Auto-Clean 60cm',
        area: 'Adyar, Chennai',
        complaint: 'Glen chimney auto clean cycle on pannalum oil collection cup-la drop aagala. Heating feel aagave illa.',
        inspection: 'Opened the outer chimney cowl and tested electrical resistance on the thermal wrap element.',
        fault: 'Thermal safety cut-off fuse had blown due to an earlier voltage surge.',
        workDone: 'Replaced thermal cut-off fuse with genuine-grade component and verified heating cycle.',
        cost: '₹850',
        result: 'Auto clean heating up normally and oil melting into the collector tray'
      },
      {
        tag: 'Glen Curved Glass Baffle',
        area: 'Velachery, Chennai',
        complaint: 'Chimney high speed-la heavy humming sound pannuthu aana suction romba weak. Smoke kitchen kulla nikithu.',
        inspection: 'Tested air intake with paper draw test and checked the motor run capacitor with capacitance meter.',
        fault: 'Baffle filters were 90% clogged with grease, and capacitor had dropped from 4uF to 1.9uF.',
        workDone: 'Degreased baffle filters in alkaline wash and replaced weak capacitor with a 4uF heavy-duty part.',
        cost: '₹750',
        result: 'Full suction power restored, smoke cleared away within seconds'
      },
      {
        tag: 'Glen Straight Line Hood',
        area: 'Saidapet, Chennai',
        complaint: 'Speed 1 push button press pannitu release panla, stuck aaiduchu. Chimney off panna plug remove panna vendiyatha irunthathu.',
        inspection: 'Tested terminal voltage and disassembled front mechanical switch bracket.',
        fault: 'Cooking oil vapors had solidified inside the mechanical switch housing, locking the internal spring.',
        workDone: 'Fitted a new enclosed 5-key push switch cluster and checked all 3 speed selections.',
        cost: '₹680',
        result: 'All push buttons operating smoothly with distinct click action'
      },
      {
        tag: 'Glen Designer Inclined',
        area: 'Besant Nagar, Chennai',
        complaint: 'Touch panel flickering and beeping. Hand touch panna motor start aagala, light mattum yeriyuthu.',
        inspection: 'Removed tempered glass fascia and checked the touch capacitance sensor ribbon cable under lens.',
        fault: 'Steam condensation had caused oxidation on sensor ribbon pins.',
        workDone: 'Chemically cleaned connector pins, applied protective silicone seal, and tested touch sensitivity.',
        cost: '₹900',
        result: 'Touch controls responsive and stable across all fan speeds'
      },
      {
        tag: 'Glen Baffle Filter 90cm',
        area: 'Porur, Chennai',
        complaint: 'Oil drops drip aagi gas stove mela vizhuguthu. Cook pannum pothu kaduppa irukku.',
        inspection: 'Inspected baffle filter seating angle and internal oil drainage slopes.',
        fault: 'Internal grease troughs were completely filled with hardened tadka oil sludge, causing overflow.',
        workDone: 'Completely descaled internal drainage channels and repositioned baffle filters at correct slope.',
        cost: '₹580',
        result: 'Oil drainage flowing properly into collection cups, zero dripping'
      },
      {
        tag: 'Glen Classic Wall Mount',
        area: 'Tambaram, Chennai',
        complaint: 'Motor hum pannuthu aana blade rotate aagala. Burning smell vara arambichuduchu.',
        inspection: 'Checked motor rotor free rotation by hand and inspected input start winding.',
        fault: 'Motor sleeve bearings had seized from hardened oil grease, locking the motor shaft in place.',
        workDone: 'Disassembled motor, polished rotor shaft, replaced bearing bushes, and lubricated with synthetic oil.',
        cost: '₹950',
        result: 'Motor spinning freely with strong torque and zero burning smell'
      }
    ],
    faqs: [
      { q: 'What is the visiting charge for Glen chimney repair in Chennai?', a: 'Our doorstep inspection charge is ₹199 to ₹299 across Chennai. If you choose to carry out the recommended repair, this visiting charge is adjusted in the final bill.' },
      { q: 'Why is my Glen chimney motor humming but not turning?', a: 'This is usually caused by a weakened motor run capacitor or bearings seized by old oil grease. A capacitor replacement or bearing servicing usually resolves the issue without buying a new motor.' },
      { q: 'Can jammed push buttons on Glen chimneys be fixed at home?', a: 'Yes. Our technician carries compatible 5-key push button assemblies and replaces the damaged switch unit at your doorstep in under an hour.' },
      { q: 'How does Glen heat auto-clean work and why does it fail?', a: 'Heat auto-clean uses a heating wrap to melt oil inside the blower into an oil collector. It fails when the thermal heating element burns out or the thermal fuse blows.' },
      { q: 'How much does deep cleaning cost for a Glen chimney in Chennai?', a: 'Deep chemical degreasing for a Glen chimney ranges from ₹650 to ₹1,400 depending on chimney size (60cm vs 90cm) and grease thickness.' },
      { q: 'Do you carry genuine compatible spares for Glen chimneys?', a: 'Yes, we carry compatible Glen parts including baffle filters, motor capacitors, auto-clean coils, push switch clusters, and LED drivers.' },
      { q: 'Why is oil dripping from the corners of my Glen chimney?', a: 'Oil drips when the inner collection canal is choked with solid oil sludge. A thorough canal clean and proper filter alignment stops the drip.' },
      { q: 'How long does a Glen chimney motor replacement take?', a: 'A complete motor replacement is carried out on-site at your home and takes about 60 to 90 minutes, followed by an airflow and noise test.' },
      { q: 'Do you service Glen chimneys in South Chennai areas like Tambaram and Chromepet?', a: 'Yes, our technicians provide doorstep repair service across all South, North, Central, and West Chennai neighborhoods.' },
      { q: 'Can a torn Glen chimney duct pipe be replaced during the visit?', a: 'Yes, our technicians carry heavy-duty flexible aluminum exhaust pipes and duct clamps to replace torn or bent ducts on-site.' }
    ]
  },

  // 5. Kaff
  {
    slug: 'kaff',
    brandName: 'Kaff',
    title: 'Kaff Kitchen Chimney Repair in Chennai | Call 8882055269',
    metaDesc: 'Doorstep Kaff chimney repair and cleaning in Chennai. Expert service for Kaff curved glass, filterless gesture control, motor hum, and touch panel issues.',
    ogTitle: 'Kaff Kitchen Chimney Repair in Chennai | Doorstep Suction & Motor Care',
    ogDesc: 'Looking for Kaff chimney technician near me in Chennai? Fast doorstep fix for Kaff filterless, curved glass, and island chimneys. Call 8882055269.',
    h1: 'Kaff Kitchen Chimney Repair in Chennai',
    heroPill: 'Doorstep repair for Kaff high-suction, filterless & gesture touch chimneys in Chennai',
    heroIntro: 'Kaff is renowned for premium kitchen appliances with high suction capacities up to 1350 m3/hr and stylish tempered glass hoods. In Chennai homes where deep-frying and spicy tempering are common, Kaff chimneys face heavy grease buildup on high-speed blowers, gesture sensor unresponsiveness from steam, and capacitor wear. When your Kaff chimney makes excessive noise, fails to draw smoke, or develops electrical faults, our local Chennai chimney technicians visit your doorstep with compatible spares.',
    heroTanglish: 'Kaff chimney la suction speed kammi aaiducha? High-end filterless model aana kooda motor sound jasthi-ah irukka, touch screen buttons respond aagalaaya? Our local Chennai technicians inspect your Kaff chimney at your home with transparent pricing.',
    commonProblemsIntro: 'Kaff chimney owners across Chennai commonly encounter touch panel sensor glitches, high-speed blower imbalance, and auto-clean heating breaks.',
    commonProblems: [
      {
        title: '🌪️ High-Capacity Suction Drop',
        desc: 'Even powerful 1250+ m3/hr Kaff motors lose suction when heavy oil vapors coat the inner blower housing and block the exhaust backdraft damper.'
      },
      {
        title: '🖐️ Gesture & Feather Touch Unresponsive',
        desc: 'Optical sensors and capacitive touch panels on Kaff curved glass models fail to register finger taps due to steam moisture and grease films.'
      },
      {
        title: '🔊 Blower Vibration & Rattle at High Speeds',
        desc: 'Kaff high-RPM centrifugal blower wheels begin vibrating loudly when grease deposits accumulate unevenly across the curved plastic blades.'
      },
      {
        title: '🔥 Dry Auto-Clean / Heat Coil Inactive',
        desc: 'Heating element on Kaff auto-clean chimneys fails to generate heat, leaving the oil collector cup empty while grease stays trapped.'
      },
      {
        title: '💧 Oil Dripping Around Base Trim',
        desc: 'Grease leaks past the front stainless steel trim onto the kitchen slab when internal drainage channels become clogged with solidified oil.'
      },
      {
        title: '⚡ PCB Board Error / Random Beeping',
        desc: 'Voltage spikes in Chennai apartment complexes can damage the sensitive microprocessor on the Kaff main PCB, causing continuous beeps.'
      }
    ],
    chimneyTypes: [
      {
        name: 'Kaff Heavy Duty Curved Glass Chimney',
        intent: 'Kaff curved glass chimney repair near me in Chennai?',
        desc: 'Combines 60cm/90cm toughened glass with powerful copper motor. Technicians inspect the blower impeller, motor capacitor, and touch display board.',
        problems: 'Touch sensor unresponsiveness, motor hum, LED spotlight failure',
        spares: 'Touch PCB board, 4uF capacitor, 12V LED driver module',
        cost: '₹600 – ₹2,100'
      },
      {
        name: 'Kaff Filterless Gesture Control Hood',
        intent: 'Kaff filterless chimney gesture repair in Chennai?',
        desc: 'Features wave sensor controls and a filter-free motor chamber. Technicians service the optical gesture sensor and deep clean the sealed blower housing.',
        problems: 'Gesture sensor freeze, motor chamber oil crust, speed regulation fault',
        spares: 'Gesture sensor module, blower impeller, main relay PCB',
        cost: '₹750 – ₹2,400'
      },
      {
        name: 'Kaff Built-in Under Cabinet Chimney',
        intent: 'Kaff built-in chimney technician in Chennai?',
        desc: 'Concealed seamlessly inside modular kitchen cabinetry. Technicians check cabinet vibrations, compact duct alignments, and slide-out switches.',
        problems: 'Slide-out switch jam, cabinet resonance vibration, duct tear',
        spares: 'Micro switch assembly, aluminum duct collar, motor capacitor',
        cost: '₹550 – ₹1,850'
      },
      {
        name: 'Kaff Island Center Kitchen Hood',
        intent: 'Kaff island chimney hanging repair in Chennai?',
        desc: 'Suspended from high ceiling slabs over modular island counters. Technicians inspect ceiling anchor stability and extended ducting runs.',
        problems: 'Ceiling bracket wobble, extended duct resistance, dual control sync',
        spares: 'Heavy-duty suspension bracket, blower motor, control cable',
        cost: '₹950 – ₹3,500'
      }
    ],
    repairServices: [
      { title: 'Kaff High-RPM Motor Repair & Bearing Fix', desc: 'Precision servicing of Kaff high-torque copper motors and capacitor replacement.' },
      { title: 'Kaff Gesture Sensor & Touch Panel Repair', desc: 'Cleaning optical sensors, ribbon cable restoration, and touch PCB board repair.' },
      { title: 'Kaff Auto-Clean Heating Element Service', desc: 'Diagnosing heating element continuity, thermal cut-off fuse, and timer relays.' },
      { title: 'Kaff Complete Blower Chamber Degreasing', desc: 'Thorough dismantling and chemical degreasing of high-capacity blower housings.' }
    ],
    deepCleaning: {
      title: 'Kaff Chimney Deep Degreasing Service in Chennai',
      desc: 'With Kaff high-suction motors pulling huge volumes of air, oil vapor builds up rapidly inside the internal blower chamber, requiring professional chemical deep cleaning.',
      points: [
        { title: 'Glass Canopy Disassembly', desc: 'Careful removal of Kaff curved glass and touch panels without scratching or damaging delicate electronics.' },
        { title: 'Centrifugal Fan Jet Degrease', desc: 'Removing the squirrel cage fan and soaking it in food-safe degreasers to remove heavy grease crusts.' },
        { title: 'Internal Drainage Descaling', desc: 'Clearing hardened oil from internal collection channels so melted oil drops smoothly into the cup.' },
        { title: 'Dynamic Balance Verification', desc: 'Spinning the fan wheel at high speed to verify vibration-free operation before reassembling.' }
      ],
      price: '₹750 – ₹1,500'
    },
    generalPricing: [
      { service: 'Kaff Inspection & Diagnosis Visit', price: '₹199 – ₹299' },
      { service: 'Kaff Complete Deep Degreasing', price: '₹750 – ₹1,500' },
      { service: 'Kaff Motor Capacitor / Bearing Repair', price: '₹500 – ₹1,200' },
      { service: 'Kaff Auto-Clean Heating Element Work', price: '₹850 – ₹1,750' },
      { service: 'Kaff Touch / Gesture Control PCB Repair', price: '₹1,000 – ₹2,200' },
      { service: 'Kaff High-Capacity Copper Motor', price: '₹2,200 – ₹4,100' }
    ],
    spareParts: [
      { part: 'Kaff Motor Run Capacitor (3.5uF/4uF)', price: '₹380 – ₹650', reason: 'Motor loses starting torque or hums without rotating' },
      { part: 'Kaff Auto-Clean Heating Element', price: '₹850 – ₹1,650', reason: 'Auto clean element burns open, no heat generated' },
      { part: 'Kaff Gesture Sensor Board', price: '₹1,050 – ₹1,950', reason: 'Sensor fails to detect hand movement due to steam corrosion' },
      { part: 'Kaff Stainless Steel Baffle Filter', price: '₹600 – ₹1,050', reason: 'Filter frame bent or latch broken during rough cleaning' },
      { part: 'Kaff Oil Collector Cup', price: '₹350 – ₹600', reason: 'Locking teeth broken or plastic cracked from heat' },
      { part: 'Kaff High-Velocity Blower Wheel', price: '₹850 – ₹1,500', reason: 'Wheel out of balance or cracked by hardened cooking oil' },
      { part: 'Kaff Main Control PCB Motherboard', price: '₹1,350 – ₹2,500', reason: 'Microprocessor lockup or relay failure from electrical spike' }
    ],
    experiences: [
      {
        tag: 'Kaff Filterless Gesture Chimney',
        area: 'Anna Nagar West, Chennai',
        complaint: 'Gesture wave pannalum chimney start aagala, touch screen buttons kooda work aagala. Display beeping continuously.',
        inspection: 'Opened front tempered glass and inspected the gesture sensor ribbon and main control PCB.',
        fault: 'Grease vapor moisture had bridged the sensor pins on the optical board, causing a continuous error trigger.',
        workDone: 'Chemically cleaned the sensor board with isopropyl solvent, dried it, and sealed edges with moisture tape.',
        cost: '₹950',
        result: 'Gesture and touch controls working smoothly with instant response'
      },
      {
        tag: 'Kaff Curved Glass Auto-Clean',
        area: 'Shenoy Nagar, Chennai',
        complaint: 'Auto-clean run pannum pothu heating warm aaguthu aana oil tray-la single drop kooda collect aagala.',
        inspection: 'Checked internal drainage slope with an inspection mirror and tested heating strip temperature.',
        fault: 'The internal drain port was completely clogged by hardened black oil sludge from deep frying.',
        workDone: 'Hot-flushed the drainage canal, cleared the oil spout, and verified free oil flow into the tray.',
        cost: '₹750',
        result: 'Oil draining smoothly into the collector tray during the auto-clean cycle'
      },
      {
        tag: 'Kaff Heavy Duty Baffle 90cm',
        area: 'Kilpauk, Chennai',
        complaint: 'Motor high speed-la heavy vibration and rattling sound. Kitchen tiles shake aagura maari irukku.',
        inspection: 'Removed baffle filters and inspected squirrel cage blower fan wheel balance.',
        fault: 'Blower fan blades had thick, uneven clumps of hardened grease throwing off dynamic balance.',
        workDone: 'Removed blower wheel, jet-degreased both sides, balanced fan, and reinstalled with vibration dampers.',
        cost: '₹800',
        result: 'Chimney running smoothly and silently with zero vibration'
      },
      {
        tag: 'Kaff Built-in Under Cabinet',
        area: 'T Nagar, Chennai',
        complaint: 'Slide out switch pull pannalum motor engage aagala, light mattum yeriyuthu. Suction totally zero.',
        inspection: 'Tested electrical continuity on the micro limit switch activated by the slide-out hood.',
        fault: 'Slide-out limit switch contact was oxidized and stuck in the open circuit position.',
        workDone: 'Replaced the slide-out micro switch assembly and lubricated the sliding guide rails.',
        cost: '₹700',
        result: 'Chimney powers on automatically when slide hood is pulled out'
      },
      {
        tag: 'Kaff Island Hood',
        area: 'RA Puram, Chennai',
        complaint: 'Island chimney ceiling mounting loose aaiduchu, motor on panna canopy shake aaguthu.',
        inspection: 'Climbed access ladder to check ceiling expansion fasteners and suspension cables.',
        fault: 'Two ceiling anchor bolts had loosened from continuous motor torque vibration.',
        workDone: 'Fitted heavy-duty steel sleeve anchor bolts and leveled the island canopy with lock washers.',
        cost: '₹1,400',
        result: 'Canopy completely rigid and vibration-free at all speeds'
      },
      {
        tag: 'Kaff Straight Line 60cm',
        area: 'Vadapalani, Chennai',
        complaint: 'Chimney switch on panna motor loud humming sound pannuthu aana spin aagala. Hand-la push panna oduthu.',
        inspection: 'Measured capacitance value of motor run capacitor using a digital meter.',
        fault: '4uF motor run capacitor had degraded to 1.1uF, providing insufficient starting torque.',
        workDone: 'Installed a new high-temperature 4uF run capacitor with heavy-duty terminals.',
        cost: '₹550',
        result: 'Motor starts instantly with strong suction torque on all speed levels'
      }
    ],
    faqs: [
      { q: 'What is the visiting charge for Kaff chimney inspection in Chennai?', a: 'Our doorstep inspection charge is ₹199 to ₹299 across Chennai. This charge is adjusted in the final repair bill if you approve the work.' },
      { q: 'Why is my Kaff gesture control chimney not responding to hand gestures?', a: 'Cooking steam often creates a thin film of grease over the optical sensors behind the glass. Our technician cleans the sensors or replaces the sensor ribbon module if corroded.' },
      { q: 'How much does Kaff chimney deep cleaning cost in Chennai?', a: 'A complete Kaff chimney deep degreasing service ranges from ₹750 to ₹1,500 depending on model size (60cm vs 90cm) and the level of grease.' },
      { q: 'Can a humming Kaff chimney motor be repaired without replacement?', a: 'Yes. In most cases, a humming motor is caused by a failed capacitor or seized bearings, both of which can be replaced at your doorstep for a fraction of the cost of a new motor.' },
      { q: 'Why is oil dripping from the bottom edge of my Kaff chimney?', a: 'This occurs when the internal oil drainage channel gets blocked with thick grease. We clear the internal channel so oil drains properly into the collection cup.' },
      { q: 'Do you provide compatible spares for Kaff chimneys?', a: 'Yes, our technicians carry tested compatible Kaff spares including capacitors, baffle filters, oil trays, LED drivers, and touch PCBs.' },
      { q: 'Why is my Kaff chimney vibrating violently on speed 3?', a: 'High-speed vibration happens when grease accumulates unevenly on the blower fan wheel blades. A thorough chemical cleaning and rebalancing solves this.' },
      { q: 'How long does a Kaff chimney repair visit take?', a: 'Most repairs such as capacitor replacement, sensor cleaning, or switch repairs are completed in 45 to 60 minutes at your home.' },
      { q: 'Do you service Kaff island and built-in chimneys in Chennai?', a: 'Yes, our technicians are trained to service Kaff island, built-in under-cabinet, and wall-mounted models across all Chennai areas.' },
      { q: 'Can auto-clean heating issues on Kaff chimneys be fixed at home?', a: 'Yes, we test the heating wrap resistance and safety fuses on-site and replace faulty components in a single visit.' }
    ]
  }
];

module.exports = {
  BRANDS_1_5
};

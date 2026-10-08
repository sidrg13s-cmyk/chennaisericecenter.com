/**
 * differentiate_all_content.js
 * Comprehensive content differentiation engine for chennaiservicecenter.com:
 * 1. Overhauls hero starting sections across 10 distinct rhetorical angles.
 * 2. Tailors service center brand pages to ONLY include appliances the brand manufactures.
 * 3. Rewrites repetitive paragraphs in appliance sections with brand-authentic technology.
 * 4. Filters customer experiences and FAQs so brands only discuss valid appliances.
 * 5. Updates 10-link navigation and 9-appliance footer across ALL HTML files.
 */

const fs = require('fs');
const path = require('path');
const {
  NORTH_CHENNAI,
  SOUTH_CHENNAI,
  EAST_CHENNAI,
  WEST_CHENNAI,
  CHENNAI_CONTACT,
  BRAND_DISPLAY_NAMES,
  AI_REPLACEMENTS
} = require('./chennai_data');

const BRAND_APPLIANCES_MAP = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'brand_appliances_map.json'), 'utf8')
);

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

function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// Brand-specific technology and series descriptions
const BRAND_TECH = {
  'samsung': {
    name: 'Samsung',
    tech: 'Digital Inverter technology, WindFree cooling, EcoBubble wash, and Crystal 4K displays',
    ac: 'Samsung WindFree and Triple Protector Plus Inverter Split ACs',
    fridge: 'Samsung SpaceMax, Curd Maestro, and Twin Cooling Plus Frost-Free Refrigerators',
    wm: 'Samsung EcoBubble, Hygiene Steam, and AI Control Front & Top Load Washers',
    tv: 'Samsung Crystal 4K UHD, QLED, and Tizen Smart Televisions',
    mw: 'Samsung Slim Fry and Ceramic Enamel Convection Microwaves'
  },
  'lg': {
    name: 'LG',
    tech: 'AI Direct Drive, Dual Inverter compressors, OLED ThinQ displays, and Smart Inverter systems',
    ac: 'LG DUALCOOL, 6-in-1 AI Convertible Inverter Split ACs with Ocean Black fin protection',
    fridge: 'LG Smart Inverter, DoorCooling+, and Linear Inverter Frost-Free Refrigerators',
    wm: 'LG AI DD Front Load, TurboWash 3D Top Load, and Smart Motion Washers',
    tv: 'LG OLED, QNED, and webOS 4K UHD Smart Televisions',
    mw: 'LG Charcoal Convection, Diet Fry, and Stainless Steel Cavity Microwaves'
  },
  'whirlpool': {
    name: 'Whirlpool',
    tech: '6th Sense Intelligence, IntelliFresh cooling, and BloomWash laundry care',
    ac: 'Whirlpool Magicool, 4-in-1 Inverter Split ACs with 3D Cool technology',
    fridge: 'Whirlpool IntelliFresh, Protton 3-Door, and Neo Fresh Frost-Free Refrigerators',
    wm: 'Whirlpool 6th Sense, BloomWash, and FreshCare Inverter Washers',
    mw: 'Whirlpool Magic Cook and Crisp & Bake Convection Microwaves'
  },
  'daikin': {
    name: 'Daikin',
    tech: 'Streamer Discharge air purification, Neo Swing inverter compressors, and Coanda airflow design',
    ac: 'Daikin FTKF Dual Inverter, Coanda Airflow, and Econo Mode Split ACs',
    mw: 'Daikin Convection and Grill Kitchen Warming Units'
  },
  'bosch': {
    name: 'Bosch',
    tech: 'German-engineered EcoSilence Drive, VarioDrum wash, and VitaFresh cooling zones',
    fridge: 'Bosch MaxFlex, VitaFresh, and MultiAirFlow Frost-Free Refrigerators',
    wm: 'Bosch Serie 4, Serie 6, and Serie 8 Front Load VarioDrum Washers',
    mw: 'Bosch Serie Convection and AutoPilot Pre-set Cooking Microwaves'
  },
  'ifb': {
    name: 'IFB',
    tech: 'Aqua Energie hard water treatment, 4D wash system, and FastCool heavy-duty compressors',
    ac: 'IFB FastCool and Gold Series Heavy-Duty Inverter Split ACs',
    fridge: 'IFB Direct Cool and Frost-Free FreshGuard Refrigerators',
    wm: 'IFB Senator, Elena, Serena, and Executive Plus Front Load Washers',
    mw: 'IFB 30BRC2, 25BCG, and Convection Microwaves with Keep Warm'
  },
  'sony': {
    name: 'Sony',
    tech: 'Cognitive Processor XR, Triluminos Pro color, and Acoustic Surface Audio+',
    tv: 'Sony Bravia XR, 4K HDR Google TV, Triluminos Pro, and OLED Master Series',
    mw: 'Sony Kitchen Warming and Auxiliary Microwave Units'
  },
  'voltas': {
    name: 'Voltas',
    tech: 'All-Weather cooling, Maha-Adjustable inverter modes, and copper condenser engineering',
    ac: 'Voltas Maha-Adjustable PureAir, 4-in-1 Inverter Split and Window ACs',
    fridge: 'Voltas Beko ProSmart Inverter and HarvestFresh Frost-Free Refrigerators',
    mw: 'Voltas Beko Convection and Grill Microwaves with Auto-Cooking'
  },
  'blue-star': {
    name: 'Blue Star',
    tech: 'Precision Cooling Technology, Dual Rotor Inverter compressors, and coastal anti-corrosion fins',
    ac: 'Blue Star Precision Inverter, 5-Star Copper Split and Window ACs',
    fridge: 'Blue Star Inverter Frost-Free and Deep Storage Chillers',
    mw: 'Blue Star Convection and Grill Kitchen Warming Units'
  },
  'carrier': {
    name: 'Carrier',
    tech: 'HybridJet cooling, Flexicool 6-in-1 inverter technology, and Insta-Cool turbo mode',
    ac: 'Carrier Ester Pro, Durafresh, and Flexicool 6-in-1 Inverter Split ACs',
    mw: 'Carrier Auxiliary Microwave and Convection Heating Units'
  },
  'godrej': {
    name: 'Godrej',
    tech: 'Anti-Bacterial Nano Shield, 100% Copper condensers, and Turbo Inverter cooling',
    ac: 'Godrej 5-in-1 Convertible Inverter Split AC with Nano Shield',
    fridge: 'Godrej Eon, Edge Pro, and Nano Shield Inverter Frost-Free Refrigerators',
    wm: 'Godrej Eon Allure and Turbo 6 Pulsator Top & Front Load Washers',
    tv: 'Godrej LED and Smart Android Televisions',
    mw: 'Godrej Instachef Convection Microwaves with Oil-Free Cooking'
  },
  'panasonic': {
    name: 'Panasonic',
    tech: 'Miraie IoT connectivity, nanoe-X air purification, and Econavi sensor intelligence',
    ac: 'Panasonic Miraie AI Inverter Split AC with nanoe-G Protection',
    fridge: 'Panasonic Prime Fresh and Econavi Inverter Multi-Door Refrigerators',
    wm: 'Panasonic StainMaster+ and ActiveFoam Inverter Top & Front Loaders',
    tv: 'Panasonic 4K HDR Android TV and Google Smart TV Series',
    mw: 'Panasonic Inverter Microwave with 360-Degree Heat Distribution'
  },
  'haier': {
    name: 'Haier',
    tech: 'Triple Inverter technology, Direct Motion wash motors, and Self-Clean FrostWash',
    ac: 'Haier Triple Inverter and Self-Clean 7-in-1 Split ACs',
    fridge: 'Haier Bottom Mounted Refrigerator and Turbo Icing Frost-Free Units',
    wm: 'Haier Direct Motion Front Load and Ocean Wave Pulsator Washers',
    tv: 'Haier Bezel-Less 4K UHD Android Google TVs',
    mw: 'Haier Convection and Grill Microwaves with Multi-Stage Cooking'
  },
  'hitachi': {
    name: 'Hitachi',
    tech: 'Expandable Inverter, FrostWash auto cleaning, and tropical rotary compressors',
    ac: 'Hitachi Yoshi and Kashikoi Expandable Inverter Split ACs',
    fridge: 'Hitachi Dual Fan Cooling and Inverter French Door Refrigerators',
    tv: 'Hitachi 4K Ultra HD Smart Televisions',
    mw: 'Hitachi Convection Kitchen Microwave Units'
  },
  'lloyd': {
    name: 'Lloyd',
    tech: 'Rapid Cool in 45 seconds, Golden Fin condensers, and Havells engineering',
    ac: 'Lloyd Grande Inverter, 5-in-1 Convertible Split and Window ACs',
    fridge: 'Lloyd Inverter Frost-Free with Tenneco Insulation',
    wm: 'Lloyd Ultra-Clean Inverter Top & Front Load Washing Machines',
    tv: 'Lloyd QLED 4K WebOS Smart Televisions',
    mw: 'Lloyd Convection Microwaves with Auto-Menu Presets'
  },
  'faber': {
    name: 'Faber',
    tech: 'Italian kitchen appliance engineering, thermal heat clean, and micro-wave heating',
    mw: 'Faber Built-in and Countertop Convection Microwave Ovens'
  }
};

// 10 Distinct Rhetorical Angles for Hero Sections
function getHeroAngle(brandName, supportedAppliances, seed) {
  const brand = (brandName && brandName !== 'Multi-Brand') ? brandName : 'Home Appliance';
  const apps = supportedAppliances.map(a => a.toLowerCase()).join(', ');
  const angleIdx = seed % 10;

  let pill = '';
  let opening = '';
  let body = '';
  let note = '';

  switch (angleIdx) {
    case 0: // Direct Need
      pill = `Need ${brand} appliance repair in Chennai? Same-day doorstep service`;
      opening = `Need dependable ${brand} appliance repair in Chennai?`;
      body = `${brand} equipment is designed for durable everyday performance, but continuous Chennai heat, coastal moisture, and power fluctuations can cause unexpected operational faults. If your ${brand} ${apps} requires inspection, our local Chennai technicians visit your premises promptly. We carry specialized diagnostic tools and genuine-grade spares to fix issues cleanly across all Chennai localities.`;
      note = `💡 <strong>Local Chennai Service Note:</strong> ${brand} appliance problem-ah irukka? Call 8882055269 for prompt doorstep inspection and clear cost estimation before starting work.`;
      break;

    case 1: // Doorstep Visit
      pill = `Looking for a ${brand} service visit near you in Chennai? Quick home diagnosis`;
      opening = `Looking for a ${brand} service visit near you in Chennai?`;
      body = `Transporting heavy home appliances across Chennai traffic is inconvenient and risks handling damage. Our qualified Chennai technicians bring doorstep service right to your residence. Whether you need maintenance or urgent component replacement for your ${brand} ${apps}, we provide transparent troubleshooting and upfront quotes throughout Chennai and Chennai District.`;
      note = `💡 <strong>Local Chennai Service Note:</strong> Home doorstep checkup thevaiya? Our local Chennai technicians visit your house directly with test instruments and replacement spares.`;
      break;

    case 2: // Persistent Performance Issues
      pill = `Is your ${brand} appliance giving repeated performance issues in Chennai?`;
      opening = `Is your ${brand} appliance giving repeated performance issues in Chennai?`;
      body = `Recurring glitches—such as sudden tripping, performance drops, unusual humming sounds, or error codes—indicate that critical internal parts need professional checking. We inspect your ${brand} ${apps} thoroughly to pinpoint the root electrical or mechanical fault, preventing repeated breakdowns and extending appliance lifespan across Chennai.`;
      note = `💡 <strong>Local Chennai Service Note:</strong> Repeated problem varutha? We find the exact root cause and replace only the worn parts with genuine-grade components.`;
      break;

    case 3: // Doorstep Diagnostics
      pill = `Searching for doorstep ${brand} repair and diagnostics in Chennai?`;
      opening = `Searching for doorstep ${brand} repair and diagnostics in Chennai?`;
      body = `Accurate diagnosis is the most critical step in proper appliance care. Our local Chennai specialists test circuit voltages, sensor resistances, and mechanical components on-site before recommending any part change for your ${brand} ${apps}. We ensure honest advice, upfront pricing, and no unnecessary spare replacements.`;
      note = `💡 <strong>Local Chennai Service Note:</strong> Clear diagnosis first, repair quote second. You decide whether to proceed after our technician completes the on-site inspection.`;
      break;

    case 4: // Unexpected Breakdown
      pill = `Facing an unexpected breakdown with your ${brand} equipment in Chennai?`;
      opening = `Facing an unexpected breakdown with your ${brand} equipment in Chennai?`;
      body = `An unexpected appliance failure can completely halt your daily routine. When your ${brand} ${apps} stops working suddenly, waiting days for an appointment is frustrating. Our local Chennai mobile service units are positioned across major zones to deliver same-day doorstep attention with honest estimates.`;
      note = `💡 <strong>Local Chennai Service Note:</strong> Sudden breakdown in Chennai? Call 8882055269 for immediate same-day technician scheduling across town.`;
      break;

    case 5: // Quality Compatible Spares
      pill = `Want dependable ${brand} service with quality compatible spares in Chennai?`;
      opening = `Want dependable ${brand} service with quality compatible spares in Chennai?`;
      body = `Using substandard or mismatched parts often leads to secondary circuit failures. Our Chennai repair service uses only high-grade, brand-compatible replacement parts specifically matched to your ${brand} ${apps} model. Every replacement is tested under live operating load before handover.`;
      note = `💡 <strong>Local Chennai Service Note:</strong> Quality spares only. We use brand-compatible relays, capacitors, sensors, and boards with testing on live load.`;
      break;

    case 6: // Climate & Water Factors
      pill = `Chennai's coastal humidity and summer heat putting stress on your ${brand} unit?`;
      opening = `Chennai's coastal humidity and summer heat putting stress on your ${brand} unit?`;
      body = `Chennai's hot tropical summers, salty sea air in coastal belts like Adyar or ECR, and mineral-heavy borewell water in areas like Porur or Velachery accelerate wear on electrical boards and mechanical seals. Our technicians specialize in diagnosing environment-induced wear on ${brand} ${apps}, restoring peak operating efficiency.`;
      note = `💡 <strong>Local Chennai Service Note:</strong> Salt air corrosion or hard water scaling problem? Our local Chennai technicians carry heavy-duty protective fixes.`;
      break;

    case 7: // Trained Technicians
      pill = `Looking for trained technicians to inspect your ${brand} appliances at home in Chennai?`;
      opening = `Looking for trained technicians to inspect your ${brand} appliances at home in Chennai?`;
      body = `Modern home appliances incorporate inverter circuits, microcontrollers, and electronic sensors that require experienced technical handling. Our Chennai team brings years of field experience across ${brand} ${apps}, diagnosing faults quickly and safely at your doorstep without guesswork.`;
      note = `💡 <strong>Local Chennai Service Note:</strong> Trained technicians for doorstep inspection. Clear fault explanation and genuine pricing across all Chennai neighborhoods.`;
      break;

    case 8: // Fast Doorstep Assistance
      pill = `Having trouble with your ${brand} setup and need fast doorstep support in Chennai?`;
      opening = `Having trouble with your ${brand} setup and need fast doorstep support in Chennai?`;
      body = `When home appliances malfunction, busy Chennai families need prompt and dependable repair support. We offer fast doorstep service slots for your ${brand} ${apps} across North, South, East, and West Chennai, carrying common service parts to complete repairs on the very first visit.`;
      note = `💡 <strong>Local Chennai Service Note:</strong> Quick doorstep help across Chennai. Call 8882055269 for convenient morning, afternoon, or evening service slots.`;
      break;

    case 9: // Transparent Pricing
    default:
      pill = `Seeking transparent repair quotes and honest diagnosis for your ${brand} appliance in Chennai?`;
      opening = `Seeking transparent repair quotes and honest diagnosis for your ${brand} appliance in Chennai?`;
      body = `We believe in 100% upfront pricing with zero hidden surprises. Before our technician touches a screw or installs a part in your ${brand} ${apps}, you receive a clear breakdown of the problem and the exact repair cost. We proceed only after your explicit approval.`;
      note = `💡 <strong>Local Chennai Service Note:</strong> Clear quote before work starts. Honest diagnosis, no hidden fees, and clear warranty on replaced spares.`;
      break;
  }

  const h1 = (brandName && brandName !== 'Multi-Brand')
    ? `${brand} Service Center in Chennai`
    : 'Service Center in Chennai';

  return {
    pill,
    h1,
    heroDesc: `${opening} ${body}`,
    note
  };
}

// Generate complete Modern 10-Link Navigation Bar
function buildModernNavBar(activeCategory, isSubdir = true) {
  const prefix = isSubdir ? '../' : '';

  const links = [
    { href: `${prefix}index.html`, label: 'Home', cat: 'index' },
    { href: `${prefix}ac/ac-repair-service-chennai.html`, label: 'AC Repair', cat: 'ac' },
    { href: `${prefix}fridge/fridge-repair-service-chennai.html`, label: 'Fridge Repair', cat: 'fridge' },
    { href: `${prefix}washing-machine/washing-machine-repair-service-chennai.html`, label: 'Washing Machine', cat: 'washing-machine' },
    { href: `${prefix}tv/tv-repair-service-chennai.html`, label: 'TV Repair', cat: 'tv' },
    { href: `${prefix}microwave/microwave-repair-service-chennai.html`, label: 'Microwave', cat: 'microwave' },
    { href: `${prefix}kitchen-chimney/kitchen-chimney-repair-service-chennai.html`, label: 'Chimney', cat: 'kitchen-chimney' },
    { href: `${prefix}gas-top/gas-top-repair-service-chennai.html`, label: 'Gas Top', cat: 'gas-top' },
    { href: `${prefix}hob/hob-repair-service-chennai.html`, label: 'Hob', cat: 'hob' },
    { href: `${prefix}servicecenter/service-center-chennai.html`, label: 'Service Center', cat: 'servicecenter' }
  ];

  const linksHtml = links.map(l => {
    const isActive = l.cat === activeCategory ? ' active' : '';
    return `          <a href="${l.href}" class="nav-link${isActive}">${l.label}</a>`;
  }).join('\n');

  return `        <nav class="main-nav">
${linksHtml}
        </nav>`;
}

// Generate complete 9-Appliance Footer Section
function buildApplianceFooterCol(isSubdir = true) {
  const prefix = isSubdir ? '../' : '';

  return `        <div class="footer-col">
          <h3>Appliance Repairs</h3>
          <ul class="footer-links">
            <li><a href="${prefix}ac/ac-repair-service-chennai.html">AC Repair Service</a></li>
            <li><a href="${prefix}fridge/fridge-repair-service-chennai.html">Fridge Repair Service</a></li>
            <li><a href="${prefix}washing-machine/washing-machine-repair-service-chennai.html">Washing Machine Repair</a></li>
            <li><a href="${prefix}tv/tv-repair-service-chennai.html">TV Repair Service</a></li>
            <li><a href="${prefix}microwave/microwave-repair-service-chennai.html">Microwave Repair Service</a></li>
            <li><a href="${prefix}kitchen-chimney/kitchen-chimney-repair-service-chennai.html">Kitchen Chimney Repair</a></li>
            <li><a href="${prefix}gas-top/gas-top-repair-service-chennai.html">Gas Top Repair</a></li>
            <li><a href="${prefix}hob/hob-repair-service-chennai.html">Hob Repair Service</a></li>
            <li><a href="${prefix}servicecenter/service-center-chennai.html">Service Center Chennai</a></li>
          </ul>
        </div>`;
}

// Differentiate Brand Appliance Intro Paragraphs
function getApplianceSectionIntro(brandName, applianceType, seed) {
  const brand = brandName || 'Home Appliance';
  const profile = BRAND_TECH[brandName.toLowerCase()] || {};
  const seriesInfo = profile[applianceType] ? ` (${profile[applianceType]})` : '';

  const variations = [
    `Searching for ${brand} ${applianceType === 'ac' ? 'air conditioner' : applianceType} repair near me in Chennai? ${brand} cooling and home systems deliver excellent everyday utility${seriesInfo}. When your unit faces performance drops, electrical errors, or unusual sounds, our local Chennai technicians visit your doorstep with diagnostic tools and quality compatible spares.`,
    `Need dependable ${brand} ${applianceType === 'ac' ? 'AC' : applianceType} service in Chennai? Chennai's tropical humidity, hard water, and voltage swings can wear out capacitors, motors, and electronic boards. Our experienced technicians provide thorough on-site inspection, clear repair quotes, and reliable fixes across all Chennai localities.`,
    `Is your ${brand} ${applianceType === 'ac' ? 'AC' : applianceType} giving repeated trouble in Chennai? Whether you require routine seasonal servicing or urgent component replacement, our Chennai doorstep technicians arrive promptly with genuine-grade parts, upfront pricing, and live load testing.`,
    `Looking for experienced technicians to inspect your ${brand} ${applianceType === 'ac' ? 'air conditioner' : applianceType} in Chennai? We diagnose electrical and mechanical faults at your residence, providing honest advice on repair options and transparent part pricing across Chennai and Chennai District.`
  ];

  const idx = seed % variations.length;
  return variations[idx];
}

// Main processing function for each HTML file
function processHtmlFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const parts = filePath.replace(/\\/g, '/').split('/');
  const dir = parts.length > 1 ? parts[0] : '';
  const filename = parts[parts.length - 1];
  const isSubdir = dir !== '';
  const hash = simpleHash(filePath);

  let category = dir || 'index';
  let brandSlug = '';
  let brandName = 'Multi-Brand';

  if (category === 'servicecenter') {
    if (filename !== 'service-center-chennai.html') {
      brandSlug = filename.replace(/-service-center-chennai\.html$/, '');
      brandName = BRAND_DISPLAY_NAMES[brandSlug] || brandSlug.toUpperCase();
    }
  } else if (category === 'ac') {
    if (filename !== 'ac-repair-service-chennai.html') {
      brandSlug = filename.replace(/-ac-repair-service-chennai\.html$/, '');
      brandName = BRAND_DISPLAY_NAMES[brandSlug] || brandSlug.toUpperCase();
    }
  } else if (category === 'fridge') {
    if (filename !== 'fridge-repair-service-chennai.html') {
      brandSlug = filename.replace(/-fridge-repair-service-chennai\.html$/, '');
      brandName = BRAND_DISPLAY_NAMES[brandSlug] || brandSlug.toUpperCase();
    }
  } else if (category === 'washing-machine') {
    if (filename !== 'washing-machine-repair-service-chennai.html') {
      brandSlug = filename.replace(/-washing-machine-repair-service-chennai\.html$/, '');
      brandName = BRAND_DISPLAY_NAMES[brandSlug] || brandSlug.toUpperCase();
    }
  } else if (category === 'tv') {
    if (filename !== 'tv-repair-service-chennai.html') {
      brandSlug = filename.replace(/-tv-repair-service-chennai\.html$/, '');
      brandName = BRAND_DISPLAY_NAMES[brandSlug] || brandSlug.toUpperCase();
    }
  } else if (category === 'microwave') {
    if (filename !== 'microwave-repair-service-chennai.html') {
      brandSlug = filename.replace(/-microwave-repair-service-chennai\.html$/, '');
      brandName = BRAND_DISPLAY_NAMES[brandSlug] || brandSlug.toUpperCase();
    }
  }

  // 1. Update Navigation Bar
  const navHtml = buildModernNavBar(category, isSubdir);
  content = content.replace(/<nav class=["']main-nav["']>[\s\S]*?<\/nav>/i, navHtml);

  // 2. Update Footer Appliance Column
  const footerColHtml = buildApplianceFooterCol(isSubdir);
  content = content.replace(/<div class=["']footer-col["']>\s*<h3>Appliance Repairs<\/h3>[\s\S]*?<\/ul>\s*<\/div>/i, footerColHtml);

  // 3. Brand Service Center Customization
  if (category === 'servicecenter' && brandSlug && BRAND_APPLIANCES_MAP[brandSlug]) {
    const supportedApps = BRAND_APPLIANCES_MAP[brandSlug];
    const heroInfo = getHeroAngle(brandName, supportedApps, hash);

    // Replace Hero Pill, Title, Desc, and Note
    content = content.replace(/<span class=["']hero-pill["']>[\s\S]*?<\/span>/i,
      `<span class="hero-pill">${heroInfo.pill}</span>`);
    content = content.replace(/<p class=["']hero-desc["']>[\s\S]*?<\/p>/i,
      `<p class="hero-desc">${heroInfo.heroDesc}</p>`);

    // Replace Tanglish/Chennai service note in hero
    const noteBlockRegex = /<div style=["'][^"']*backdrop-filter:\s*blur\(8px\)[^"']*["']>[\s\S]*?<\/div>/i;
    if (noteBlockRegex.test(content)) {
      content = content.replace(noteBlockRegex,
        `<div style="background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(8px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 8px; padding: 14px 18px; margin: 20px 0 25px; max-width: 820px; font-size: 0.95rem; line-height: 1.6; color: #f1f5f9;">\n        ${heroInfo.note}\n      </div>`);
    }

    // Filter appliance sections: ONLY keep sections that the brand manufactures!
    const sectionTypes = [
      { id: 'ac', name: 'AC' },
      { id: 'fridge', name: 'Refrigerator' },
      { id: 'washing-machine', name: 'Washing Machine' },
      { id: 'tv', name: 'TV' },
      { id: 'microwave', name: 'Microwave' }
    ];

    sectionTypes.forEach(({ id, name }) => {
      const isSupported = supportedApps.includes(name);
      const sectionRegex = new RegExp(`<section class=["']section["'] id=["']${id}["'][\\s\\S]*?<\\/section>`, 'i');

      if (!isSupported) {
        // Remove unsupported appliance section entirely!
        if (sectionRegex.test(content)) {
          content = content.replace(sectionRegex, '');
        }
      } else {
        // Differentiate supported appliance section intro
        const introText = getApplianceSectionIntro(brandName, id, hash + simpleHash(id));
        const introPRegex = new RegExp(`<section class=["']section["'] id=["']${id}["'][\\s\\S]*?<h2[^>]*>.*?<\\/h2>\\s*<p style=["'][^"']*["']>([\\s\\S]*?)<\\/p>`, 'i');
        const match = content.match(introPRegex);
        if (match) {
          content = content.replace(match[1], `\n        ${introText}\n      `);
        }
      }
    });

    // Replace the Tanglish callout banner above sections
    const tanglishBannerRegex = /<div class=["']tanglish-box tanglish-box-blue["'][^>]*>[\s\S]*?<\/div>/i;
    if (tanglishBannerRegex.test(content)) {
      const bannerApps = supportedApps.join(', ');
      const newBanner = `<strong>Need Quick ${brandName} Service in Chennai? Fast Doorstep Technician Available!</strong>\n        If your ${brandName} ${bannerApps.toLowerCase()} is facing power issues, functional errors, or performance drops, our local Chennai technicians provide quick home visits with genuine-compatible parts and upfront pricing.`;
      content = content.replace(tanglishBannerRegex, `<div class="tanglish-box tanglish-box-blue" style="font-family: inherit;">\n        ${newBanner}\n      </div>`);
    }
  }

  // 4. Differentiate Generic & Brand Appliance Pages
  if (['ac', 'fridge', 'washing-machine', 'tv', 'microwave'].includes(category)) {
    const angleIdx = hash % 8;
    const appLabel = category === 'ac' ? 'AC' :
                     category === 'fridge' ? 'Refrigerator' :
                     category === 'washing-machine' ? 'Washing Machine' :
                     category === 'tv' ? 'TV' : 'Microwave';
    const bName = (brandName && brandName !== 'Multi-Brand') ? brandName : 'Home';
    const isBrandPage = brandName && brandName !== 'Multi-Brand';

    if (isBrandPage) {
      const openings = [
        `Need dependable ${bName} ${appLabel} repair in Chennai?`,
        `Looking for a ${bName} ${appLabel} service visit near you in Chennai?`,
        `Is your ${bName} ${appLabel} giving repeated performance problems in Chennai?`,
        `Searching for doorstep ${bName} ${appLabel} repair in Chennai?`,
        `Facing an unexpected breakdown with your ${bName} ${appLabel} in Chennai?`,
        `Want reliable ${bName} ${appLabel} service with genuine compatible spares in Chennai?`,
        `Chennai's coastal humidity and summer load affecting your ${bName} ${appLabel}?`,
        `Looking for experienced technicians to inspect your ${bName} ${appLabel} at home in Chennai?`
      ];

      const currentOpening = openings[angleIdx];
      // Update opening sentence of hero-desc if it starts with the generic phrase
      content = content.replace(/<p class=["']hero-desc["']>(Searching for|Looking for|Need expert|Need dependable|Having trouble with)[^?]*\?\s*/i,
        `<p class="hero-desc">${currentOpening} `);
    }
  }

  // 5. General AI Word Cleanup
  AI_REPLACEMENTS.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });

  fs.writeFileSync(filePath, content, 'utf8');
}

function runDifferentiation() {
  console.log('=== Starting Content Differentiation & Global Nav/Footer Overhaul ===');

  const DIRS = [
    'ac',
    'fridge',
    'washing-machine',
    'tv',
    'microwave',
    'kitchen-chimney',
    'gas-top',
    'hob',
    'servicecenter'
  ];

  let totalFiles = 0;
  DIRS.forEach(dir => {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
    files.forEach(f => {
      const fp = path.join(dir, f);
      processHtmlFile(fp);
      totalFiles++;
    });
  });

  // Process root files
  ['index.html', 'sitemap.html'].forEach(f => {
    processHtmlFile(f);
    totalFiles++;
  });

  console.log(`✓ Processed and differentiated ${totalFiles} HTML files.`);
  console.log('=== Differentiation Complete ===');
}

runDifferentiation();

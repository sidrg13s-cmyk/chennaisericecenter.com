/**
 * build_hob_brand_pages.js
 * Generates all 31 brand-specific Hob HTML pages in /hob/
 * and updates master directory, sitemap.html, and sitemap.xml
 */

const fs = require('fs');
const path = require('path');
const { BRANDS } = require('./hob_brand_data');
const {
  generateHeader,
  generateFooter,
  generateLocalitiesSection
} = require('./create_new_appliances');

const ACTION_PREFIXES = [
  'Doorstep Service in',
  'Burner & Ignition Repair in',
  'Deep Cleaning Service in',
  'Technician Visit in',
  'Auto-Ignition Repair in',
  'Gas Valve Servicing in',
  'Inspection in'
];

function generateBrandHtml(brand, seed) {
  const pageUrl = `https://chennaiservicecenter.com/hob/${brand.slug}-hob-repair-service-chennai.html`;
  const masterUrl = `https://chennaiservicecenter.com/hob/hob-repair-service-chennai.html`;
  const serviceName = `${brand.brandName} Hob Repair Service in Chennai`;

  // Brand Directory Grid (linking to all 31 brands)
  const otherBrandsHtml = BRANDS.map(b => {
    const isCurrent = b.slug === brand.slug;
    const activeStyle = isCurrent
      ? 'background: var(--primary); color: #ffffff; font-weight: 700;'
      : 'background: #ffffff; color: var(--secondary);';
    return `          <a href="${b.slug}-hob-repair-service-chennai.html" class="card" style="padding: 12px 14px; text-decoration: none; display: flex; align-items: center; justify-content: space-between; gap: 8px; font-size: 0.9rem; ${activeStyle}">
            <span>${b.brandName} Hob Repair</span>
            <span>&rarr;</span>
          </a>`;
  }).join('\n');

  return `<!DOCTYPE html>
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
  <title>${brand.seoTitle}</title>
  <meta name="description" content="${brand.metaDesc}">
  <link rel="canonical" href="${pageUrl}">
  <meta property="og:title" content="${brand.ogTitle}">
  <meta property="og:description" content="${brand.ogDesc}">
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
  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Service Center Chennai",
      "url": "https://chennaiservicecenter.com/",
      "telephone": "+918882055269",
      "priceRange": "₹₹",
      "image": "https://chennaiservicecenter.com/favicon.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No. 18, 2nd Avenue, Anna Nagar",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600040",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "06:00",
          "closes": "23:00"
        }
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Chennai"
        }
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "13.0827",
        "longitude": "80.2100"
      }
    },
    {
      "@type": "Service",
      "name": "${serviceName}",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Service Center Chennai"
      },
      "areaServed": {
        "@type": "City",
        "name": "Chennai"
      },
      "url": "${pageUrl}"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://chennaiservicecenter.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Hob Repair Service in Chennai",
          "item": "${masterUrl}"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "${brand.brandName} Hob Repair in Chennai",
          "item": "${pageUrl}"
        }
      ]
    }
  ]
}
  </script>
</head>
<body>

${generateHeader('hob')}

  <!-- Breadcrumbs -->
  <nav class="breadcrumb-section" aria-label="Breadcrumb">
    <div class="container">
      <ul class="breadcrumb-list">
        <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
        <li class="breadcrumb-item"><a href="hob-repair-service-chennai.html">Kitchen Hob</a></li>
        <li class="breadcrumb-item active" aria-current="page">${brand.brandName} Hob Repair in Chennai</li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <span class="hero-pill">${brand.heroLeadPill}</span>
      <h1>${brand.h1}</h1>
      <p class="hero-desc">${brand.heroDesc}</p>

      <div style="background: rgba(220, 38, 38, 0.2); border: 1.5px solid #ef4444; border-radius: 8px; padding: 14px 18px; margin: 18px 0 20px; max-width: 820px; font-size: 0.95rem; line-height: 1.6; color: #fee2e2;">
        ⚠️ <strong>Built-in Hob Safety Note:</strong> Always turn off the gas cylinder regulator switch or piped gas isolation valve before inspecting gas appliances. If you detect any odor of gas, ventilate your kitchen immediately, do not switch electrical buttons, and call for professional inspection.
      </div>

      <div style="background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(8px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 8px; padding: 14px 18px; margin: 0 0 25px; max-width: 820px; font-size: 0.95rem; line-height: 1.6; color: #f1f5f9;">
        💡 <strong>Local Chennai Service Note:</strong> ${brand.heroTanglish}
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
          <span>Experienced Hob Technicians</span>
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

  <!-- Common Brand-Specific Problems Handled -->
  <section class="section" style="padding: 40px 0 20px;">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag badge-tag-blue">Diagnostics &amp; Repair</span>
        <h2 class="section-title">Common ${brand.brandName} Hob Issues We Fix in Chennai</h2>
        <p class="section-subtitle">${brand.brandName} hob owners across Chennai report specific auto-ignition clicking, low burner flames, and stiff knob issues due to everyday cooking spills.</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
        ${brand.commonProblems.map(p => `
        <div class="card" style="padding: 22px;">
          <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 10px;">${p.title}</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">${p.desc}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- Brand-Specific Hob Types Serviced -->
  <section class="section" style="background: var(--bg-alt); padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">Hob Configurations</span>
        <h2 class="section-title">${brand.brandName} Kitchen Hob Types Serviced in Chennai</h2>
        <p class="section-subtitle">Doorstep repair expertise across ${brand.brandName} built-in designs and ignition systems.</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 22px;">
        ${brand.hobTypes.map(t => `
        <div class="card" style="padding: 24px; background: #ffffff;">
          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 10px;">${t.name}</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">${t.keywordSentence}</p>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">${t.desc}</p>
          <div style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6;">
            <div><strong>Common Problems:</strong> ${t.problems}</div>
            <div style="margin-top: 4px;"><strong>Common Spares:</strong> ${t.spares}</div>
            <div style="color: var(--primary); font-weight: 700; margin-top: 8px;">Indicative Cost: ${t.cost}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- Brand-Specific Repair Services -->
  <section class="section" style="padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">Repair Solutions</span>
        <h2 class="section-title">Our ${brand.brandName} Hob Repair &amp; Maintenance Services</h2>
        <p class="section-subtitle">Targeted repairs for ignition pulse generators, brass burners, gas valves, and safety sensors.</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
        ${brand.repairServices.map(rs => `
        <div class="card" style="padding: 22px;">
          <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 10px;">🔧 ${rs.title}</h3>
          <p style="font-size: 0.9rem; color: var(--text-main); line-height: 1.6;">${rs.desc}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- Deep Cleaning Service -->
  <section class="section" style="background: var(--bg-alt); padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">Sanitization &amp; Safety</span>
        <h2 class="section-title">${brand.deepCleaning.title}</h2>
        <p class="section-subtitle">${brand.deepCleaning.desc}</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-bottom: 30px;">
        ${brand.deepCleaning.points.map(p => `
        <div class="card" style="padding: 22px; background: #ffffff;">
          <h3 style="font-size: 1.1rem; color: var(--secondary); margin-bottom: 8px;">✨ ${p.title}</h3>
          <p style="font-size: 0.875rem; color: var(--text-main); line-height: 1.5; margin: 0;">${p.desc}</p>
        </div>`).join('')}
      </div>

      <div style="background: #ffffff; border-radius: 8px; border: 1px solid var(--border-color); padding: 20px; text-align: center; max-width: 650px; margin: 0 auto;">
        <strong style="color: var(--secondary); font-size: 1.1rem; display: block; margin-bottom: 6px;">Indicative Deep Cleaning Charge:</strong>
        <span class="price-highlight" style="font-size: 1.35rem; font-weight: 800;">${brand.deepCleaning.price}</span>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 8px; margin-bottom: 0;">Includes burner decarbonization, nozzle jet pinning, and secondary air adjustment.</p>
      </div>
    </div>
  </section>

  <!-- General Service Charges (Indicative Table) -->
  <section class="section" id="pricing" style="padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">Transparent Pricing</span>
        <h2 class="section-title">${brand.brandName} Hob Service Charges in Chennai</h2>
        <p class="section-subtitle">Indicative repair and servicing charges for ${brand.brandName} kitchen hobs across Chennai.</p>
      </div>

      <div class="table-responsive" style="max-width: 820px; margin: 0 auto;">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 65%;">Service / Work Description</th>
              <th style="width: 35%;">Indicative Service Range</th>
            </tr>
          </thead>
          <tbody>
            ${brand.generalPricing.map(gp => `
            <tr>
              <td><strong>${gp.service}</strong></td>
              <td class="price-highlight">${gp.price}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <p style="text-align: center; font-size: 0.85rem; color: var(--text-muted); margin-top: 14px;">
        * Indicative service charges only. Actual cost depends on hob model, fault complexity, and replacement parts required. Visiting charge is adjusted into the final bill if repair work is completed.
      </p>
    </div>
  </section>

  <!-- Spare Parts Section -->
  <section class="section" style="background: var(--bg-alt); padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">Quality Spares</span>
        <h2 class="section-title">${brand.brandName} Hob Spare Parts &amp; Indicative Prices</h2>
        <p class="section-subtitle">Typical price ranges and replacement reasons for ${brand.brandName} hob parts in Chennai.</p>
      </div>

      <div class="table-responsive" style="max-width: 860px; margin: 0 auto;">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 35%;">Part Name</th>
              <th style="width: 25%;">Typical Price Range</th>
              <th style="width: 40%;">Common Reason for Replacement</th>
            </tr>
          </thead>
          <tbody>
            ${brand.spareParts.map(sp => `
            <tr>
              <td><strong>${sp.part}</strong></td>
              <td class="price-highlight">${sp.price}</td>
              <td style="font-size: 0.875rem; color: var(--text-main);">${sp.reason}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <p style="text-align: center; font-size: 0.85rem; color: var(--text-muted); margin-top: 14px;">
        * Typical part price ranges shown for high-quality compatible parts. Final cost depends on specific model series and burner design.
      </p>
    </div>
  </section>

  <!-- Service Process Steps -->
  <section class="section" style="padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">Simple 4-Step Process</span>
        <h2 class="section-title">How We Service Your ${brand.brandName} Hob</h2>
        <p class="section-subtitle">Smooth doorstep repair experience from phone call to completed repair.</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px;">
        <div class="card" style="padding: 22px; text-align: center;">
          <div style="font-size: 2rem; margin-bottom: 10px;">📞</div>
          <h3 style="font-size: 1.1rem; color: var(--secondary); margin-bottom: 8px;">1. Book On-Call</h3>
          <p style="font-size: 0.875rem; color: var(--text-main); line-height: 1.5; margin: 0;">Call 8882055269 and share your ${brand.brandName} hob model, problem, and Chennai locality.</p>
        </div>
        <div class="card" style="padding: 22px; text-align: center;">
          <div style="font-size: 2rem; margin-bottom: 10px;">👨‍🔧</div>
          <h3 style="font-size: 1.1rem; color: var(--secondary); margin-bottom: 8px;">2. Doorstep Visit</h3>
          <p style="font-size: 0.875rem; color: var(--text-main); line-height: 1.5; margin: 0;">A trained technician arrives at your home, inspects burners, ignition pulse, and gas valves.</p>
        </div>
        <div class="card" style="padding: 22px; text-align: center;">
          <div style="font-size: 2rem; margin-bottom: 10px;">📋</div>
          <h3 style="font-size: 1.1rem; color: var(--secondary); margin-bottom: 8px;">3. Upfront Quote</h3>
          <p style="font-size: 0.875rem; color: var(--text-main); line-height: 1.5; margin: 0;">We explain the root cause and share transparent pricing before beginning any repair work.</p>
        </div>
        <div class="card" style="padding: 22px; text-align: center;">
          <div style="font-size: 2rem; margin-bottom: 10px;">✅</div>
          <h3 style="font-size: 1.1rem; color: var(--secondary); margin-bottom: 8px;">4. On-Site Fix &amp; Test</h3>
          <p style="font-size: 0.875rem; color: var(--text-main); line-height: 1.5; margin: 0;">Defective parts replaced, blue flame verified, and kitchen countertop left clean and tidy.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Customer Service Experiences (Randomized 1 to 8 Experiences) -->
  <section class="section" id="experiences" style="background: var(--bg-alt); padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">Doorstep Case Studies</span>
        <h2 class="section-title">Recent ${brand.brandName} Hob Service Experiences in Chennai</h2>
        <p class="section-subtitle">Real examples of issues diagnosed, parts replaced, and results delivered for ${brand.brandName} hob owners across Chennai.</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">
        ${brand.experiences.map((exp, idx) => `
        <div class="experience-card">
          <div class="exp-header">
            <div>
              <span class="exp-user">Customer Service Experience ${idx + 1}</span>
              <span class="exp-loc">${exp.area}</span>
            </div>
            <span class="badge-tag badge-tag-green">${exp.tag}</span>
          </div>
          <div class="exp-body">
            <p><strong>Customer Issue:</strong> "${exp.complaint}"</p>
            <p><strong>Inspection:</strong> ${exp.inspection}</p>
            <p><strong>Fault Found:</strong> ${exp.fault}</p>
            <p><strong>Work Done:</strong> ${exp.workDone}</p>
            <div class="exp-footer">
              <span>Approx. Cost: ${exp.cost}</span>
              <span style="color: #166534; font-weight: 700;">Result: ${exp.result}</span>
            </div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- FAQ Section (At least 10 Brand-Specific FAQs) -->
  <section class="section" id="faq" style="padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">Helpful Answers</span>
        <h2 class="section-title">${brand.brandName} Hob Repair FAQs in Chennai</h2>
        <p class="section-subtitle">Common questions regarding ${brand.brandName} hob inspection, burner issues, auto-ignition, and doorstep repairs.</p>
      </div>

      <div class="faq-list" style="max-width: 860px; margin: 0 auto;">
        ${brand.faqs.map(faq => `
        <details class="faq-item">
          <summary class="faq-question">${faq.q}</summary>
          <div class="faq-answer">
            <p>${faq.a}</p>
          </div>
        </details>`).join('')}
      </div>
    </div>
  </section>

  <!-- Dedicated Brand Directory Grid -->
  <section class="section" style="background: var(--bg-alt); padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 30px;">
        <span class="badge-tag badge-tag-blue">Multi-Brand Expertise</span>
        <h2 class="section-title">Kitchen Hob Brand Service Centers in Chennai</h2>
        <p class="section-subtitle">Doorstep hob repair and burner servicing for all 31 major hob brands across Chennai:</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; margin-bottom: 24px;">
${otherBrandsHtml}
      </div>

      <div style="text-align: center; margin-top: 20px;">
        <a href="hob-repair-service-chennai.html" class="btn btn-outline" style="font-weight: 700;">&larr; View Master Hob Repair Service in Chennai</a>
      </div>
    </div>
  </section>

${generateLocalitiesSection(`${brand.brandName} Hob Repair`, seed, ACTION_PREFIXES)}

${generateFooter()}

</body>
</html>`;
}

function updateMasterHobPage() {
  const masterPath = path.resolve(__dirname, '../hob/hob-repair-service-chennai.html');
  if (!fs.existsSync(masterPath)) return;

  let masterHtml = fs.readFileSync(masterPath, 'utf8');

  const brandGridHtml = `  <!-- All 31 Hob Brand Service Centers Directory -->
  <section class="section" style="background: #ffffff; padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 30px;">
        <span class="badge-tag badge-tag-blue">Brand-Wise Specialists</span>
        <h2 class="section-title">Kitchen Hob Brand Service Centers in Chennai</h2>
        <p class="section-subtitle">Explore dedicated repair and burner maintenance services for all 31 major kitchen hob brands in Chennai:</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px;">
${BRANDS.map(b => `        <a href="${b.slug}-hob-repair-service-chennai.html" class="card" style="padding: 12px 14px; text-decoration: none; display: flex; align-items: center; justify-content: space-between; gap: 8px; font-size: 0.9rem; background: #f8fafc; color: var(--secondary);">
          <span>${b.brandName} Hob Repair</span>
          <span>&rarr;</span>
        </a>`).join('\n')}
      </div>
    </div>
  </section>
`;

  // If already contains brand directory, replace it
  const existingSectionRegex = /<!-- All \d+ Hob Brand Service Centers Directory -->[\s\S]*?<\/section>/;
  if (existingSectionRegex.test(masterHtml)) {
    masterHtml = masterHtml.replace(existingSectionRegex, brandGridHtml.trim());
    fs.writeFileSync(masterPath, masterHtml, 'utf8');
    console.log('✓ Replaced brand directory grid in master hob page!');
  } else {
    // Insert before Localities Section or Contact Section
    const insertMarker = '<!-- Localities Section';
    if (masterHtml.includes(insertMarker)) {
      masterHtml = masterHtml.replace(insertMarker, `${brandGridHtml}\n  ${insertMarker}`);
      fs.writeFileSync(masterPath, masterHtml, 'utf8');
      console.log('✓ Inserted brand directory grid in master hob page!');
    }
  }
}

function updateSitemaps() {
  const sitemapHtmlPath = path.resolve(__dirname, '../sitemap.html');
  const sitemapXmlPath = path.resolve(__dirname, '../sitemap.xml');

  // 1. Update sitemap.html
  if (fs.existsSync(sitemapHtmlPath)) {
    let sitemapHtml = fs.readFileSync(sitemapHtmlPath, 'utf8');
    
    const hobBrandLinks = BRANDS.map(b => `          <li><a href="hob/${b.slug}-hob-repair-service-chennai.html" style="color: var(--primary); text-decoration: none; display: inline-block; padding: 4px 0;">📄 ${b.brandName} Hob Repair Chennai</a></li>`).join('\n');

    const newHobSectionHtml = `      <div class="sitemap-category-box" style="background: #ffffff; padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--surface-border); margin-bottom: 24px;">
        <h2 style="font-size: 1.35rem; color: var(--secondary); margin-bottom: 14px; border-bottom: 2px solid var(--primary-light); padding-bottom: 8px;">
          Hob Repair (32 Pages)
        </h2>
        <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 10px; list-style: none; padding-left: 0; font-size: 0.9rem;">
          <li><a href="hob/hob-repair-service-chennai.html" style="color: var(--primary); text-decoration: none; display: inline-block; padding: 4px 0; font-weight: 700;">📄 Hob Repair Service Chennai (Master)</a></li>
${hobBrandLinks}
        </ul>
      </div>`;

    // Replace the existing Hob Repair category box
    const hobBoxRegex = /<div class="sitemap-category-box"[^>]*>\s*<h2[^>]*>\s*Hob Repair \(\d+ Pages?\)[\s\S]*?<\/div>/;
    if (hobBoxRegex.test(sitemapHtml)) {
      sitemapHtml = sitemapHtml.replace(hobBoxRegex, newHobSectionHtml.trim());
      fs.writeFileSync(sitemapHtmlPath, sitemapHtml, 'utf8');
      console.log('✓ Updated sitemap.html with 32 hob pages!');
    }
  }

  // 2. Update sitemap.xml
  if (fs.existsSync(sitemapXmlPath)) {
    let sitemapXml = fs.readFileSync(sitemapXmlPath, 'utf8');
    
    // Remove all old hob brand URLs (keeping master)
    const oldHobUrlRegex = /\s*<url>\s*<loc>https:\/\/chennaiservicecenter\.com\/hob\/[a-z0-9-]+-hob-repair-service-chennai\.html<\/loc>[\s\S]*?<\/url>/g;
    sitemapXml = sitemapXml.replace(oldHobUrlRegex, '');

    // Add clean set of all 31 brand URLs
    const newHobUrls = BRANDS.map(b => `  <url>
    <loc>https://chennaiservicecenter.com/hob/${b.slug}-hob-repair-service-chennai.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n');

    sitemapXml = sitemapXml.replace('</urlset>', `${newHobUrls}\n</urlset>`);
    fs.writeFileSync(sitemapXmlPath, sitemapXml, 'utf8');
    console.log('✓ Updated sitemap.xml with all 31 brand URLs!');
  }
}

function buildAllBrandPages() {
  console.log('=== Building All 31 Brand-Specific Kitchen Hob Pages ===\n');

  const outputDir = path.resolve(__dirname, '../hob');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Clean up any old brand files not in the 31 brands
  const validFilenames = new Set([
    'hob-repair-service-chennai.html',
    ...BRANDS.map(b => `${b.slug}-hob-repair-service-chennai.html`)
  ]);

  const existingFiles = fs.readdirSync(outputDir);
  existingFiles.forEach(file => {
    if (file.endsWith('.html') && !validFilenames.has(file)) {
      fs.unlinkSync(path.join(outputDir, file));
      console.log(`[Removed obsolete file]: hob/${file}`);
    }
  });

  BRANDS.forEach((brand, idx) => {
    const filename = `${brand.slug}-hob-repair-service-chennai.html`;
    const targetPath = path.join(outputDir, filename);
    const seed = (idx + 1) * 83;

    const htmlContent = generateBrandHtml(brand, seed);
    fs.writeFileSync(targetPath, htmlContent, 'utf8');
    console.log(`[${idx + 1}/31] Created: hob/${filename} (${htmlContent.length} bytes)`);
  });

  console.log('\n✓ All 31 brand hob pages generated successfully in hob/!');

  updateMasterHobPage();
  updateSitemaps();
}

if (require.main === module) {
  buildAllBrandPages();
}

module.exports = {
  buildAllBrandPages
};

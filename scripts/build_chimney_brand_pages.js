/**
 * build_chimney_brand_pages.js
 * Generates all 20 brand-specific Kitchen Chimney HTML pages in /kitchen-chimney/
 */

const fs = require('fs');
const path = require('path');
const { BRANDS } = require('./chimney_brand_data');
const {
  generateHeader,
  generateFooter,
  generateLocalitiesSection
} = require('./create_new_appliances');

const ACTION_PREFIXES = [
  'Doorstep Service in',
  'Suction & Motor Repair in',
  'Deep Cleaning Service in',
  'Technician Visit in',
  'Auto-Clean Repair in',
  'Filter Cleaning in',
  'Inspection in'
];

function generateBrandHtml(brand, seed) {
  const pageUrl = `https://chennaiservicecenter.com/kitchen-chimney/${brand.slug}-chimney-repair-service-chennai.html`;
  const masterUrl = `https://chennaiservicecenter.com/kitchen-chimney/kitchen-chimney-repair-service-chennai.html`;
  const serviceName = `${brand.brandName} Chimney Repair Service in Chennai`;

  // Brand Directory Grid (linking to other 19 brands + master page)
  const otherBrandsHtml = BRANDS.map(b => {
    const isCurrent = b.slug === brand.slug;
    const activeStyle = isCurrent
      ? 'background: var(--primary); color: #ffffff; font-weight: 700;'
      : 'background: #ffffff; color: var(--secondary);';
    return `          <a href="${b.slug}-chimney-repair-service-chennai.html" class="card" style="padding: 12px 14px; text-decoration: none; display: flex; align-items: center; justify-content: space-between; gap: 8px; font-size: 0.9rem; ${activeStyle}">
            <span>${b.brandName} Chimney Repair</span>
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
  <title>${brand.title}</title>
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
        },
        {
          "@type": "AdministrativeArea",
          "name": "Chennai District"
        }
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "13.0850",
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
          "name": "Kitchen Chimney Repair Service in Chennai",
          "item": "${masterUrl}"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "${brand.brandName} Chimney Repair in Chennai",
          "item": "${pageUrl}"
        }
      ]
    }
  ]
}
  </script>
</head>
<body>

${generateHeader('chimney')}

  <!-- Breadcrumbs -->
  <nav class="breadcrumb-section" aria-label="Breadcrumb">
    <div class="container">
      <ul class="breadcrumb-list">
        <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
        <li class="breadcrumb-item"><a href="kitchen-chimney-repair-service-chennai.html">Kitchen Chimney</a></li>
        <li class="breadcrumb-item active" aria-current="page">${brand.brandName} Chimney Repair in Chennai</li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <span class="hero-pill">${brand.heroPill}</span>
      <h1>${brand.h1}</h1>
      <p class="hero-desc">${brand.heroIntro}</p>

      <div style="background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(8px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 8px; padding: 14px 18px; margin: 20px 0 25px; max-width: 820px; font-size: 0.95rem; line-height: 1.6; color: #f1f5f9;">
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

  <!-- Tanglish Notice Section -->
  <section class="section" style="padding: 24px 0 0;">
    <div class="container">
      <div class="tanglish-box tanglish-box-blue">
        <strong>Chennai Kitchen Chimney Troubleshooting:</strong> Heavy cooking grease choking your ${brand.brandName} chimney? Whether you have curved glass, wall mounted, auto-clean, or filterless models, our technicians carry specialized food-grade degreasers, motor capacitors, and switch panels right to your doorstep across Chennai.
      </div>
    </div>
  </section>

  <!-- Common Brand-Specific Problems Handled -->
  <section class="section" style="padding: 40px 0 20px;">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag badge-tag-blue">Diagnostics &amp; Repair</span>
        <h2 class="section-title">Common ${brand.brandName} Chimney Issues We Fix in Chennai</h2>
        <p class="section-subtitle">${brand.commonProblemsIntro}</p>
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

  <!-- Brand Chimney Types Section -->
  <section class="section" style="background: var(--bg-alt); padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">${brand.brandName} Models Handled</span>
        <h2 class="section-title">${brand.brandName} Kitchen Chimney Types We Service in Chennai</h2>
        <p class="section-subtitle">Specific repair expertise tailored to each ${brand.brandName} chimney design and suction mechanism.</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 22px;">
        ${brand.chimneyTypes.map(t => `
        <div class="card" style="padding: 24px; background: #ffffff;">
          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 10px;">${t.name}</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">${t.intent}</p>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">${t.desc}</p>
          <div style="font-size: 0.875rem; color: var(--text-muted); border-top: 1px solid var(--surface-border); padding-top: 10px; margin-top: 10px;">
            <div style="margin-bottom: 4px;"><strong>Common Problems:</strong> ${t.problems}</div>
            <div><strong>Common Spares:</strong> ${t.spares}</div>
            <div style="color: var(--primary); font-weight: 700; margin-top: 8px; font-size: 0.95rem;">Indicative Cost: ${t.cost}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- Repair & Service Offerings -->
  <section class="section" style="padding: 40px 0 20px;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 30px;">
        <span class="badge-tag badge-tag-blue">Doorstep Solutions</span>
        <h2 class="section-title">Specialized ${brand.brandName} Chimney Services</h2>
        <p class="section-subtitle">From motor overhauls to electrical repairs, we fix your ${brand.brandName} chimney at home.</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
        ${brand.repairServices.map(s => `
        <div class="card" style="padding: 22px; border-top: 3px solid var(--primary);">
          <h3 style="font-size: 1.1rem; color: var(--secondary); margin-bottom: 8px;">⚙️ ${s.title}</h3>
          <p style="font-size: 0.9rem; color: var(--text-main); line-height: 1.6; margin: 0;">${s.desc}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- Deep Cleaning Section -->
  <section class="section" style="background: var(--bg-alt); padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 30px;">
        <span class="badge-tag badge-tag-blue">Deep Degreasing Care</span>
        <h2 class="section-title">${brand.deepCleaning.title}</h2>
        <p class="section-subtitle">${brand.deepCleaning.desc}</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; max-width: 1000px; margin: 0 auto 30px;">
        ${brand.deepCleaning.points.map(pt => `
        <div class="card" style="padding: 20px; background: #ffffff; border-left: 4px solid var(--primary);">
          <strong style="color: var(--secondary); display: block; margin-bottom: 6px;">${pt.title}</strong>
          <p style="font-size: 0.9rem; color: var(--text-main); line-height: 1.5; margin: 0;">${pt.desc}</p>
        </div>`).join('')}
      </div>

      <div style="text-align: center; background: #ffffff; border: 1px solid #bfdbfe; border-radius: var(--radius-md); padding: 18px; max-width: 600px; margin: 0 auto; box-shadow: var(--shadow-sm);">
        <span style="font-size: 1.05rem; color: var(--secondary); font-weight: 600;">Deep Cleaning Service Range:</span>
        <div style="font-size: 1.35rem; color: var(--primary); font-weight: 800; margin-top: 4px;">${brand.deepCleaning.price}</div>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin: 6px 0 0;">Price depends on chimney width (60cm vs 90cm) and grease level. Complete blower and chamber wash.</p>
      </div>
    </div>
  </section>

  <!-- General Service Charges Section -->
  <section class="section" id="pricing" style="padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 30px;">
        <span class="badge-tag badge-tag-blue">Upfront &amp; Transparent</span>
        <h2 class="section-title">General Service Charges for ${brand.brandName} Chimney</h2>
        <p class="section-subtitle">Indicative service and repair ranges for ${brand.brandName} kitchen chimneys in Chennai. Exact estimate confirmed after physical on-site inspection.</p>
      </div>

      <div class="table-responsive" style="max-width: 760px; margin: 0 auto;">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 65%;">Service / Work Description</th>
              <th style="width: 35%;">Indicative Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            ${brand.generalPricing.map(row => `
            <tr>
              <td><strong>${row.service}</strong></td>
              <td class="price-highlight">${row.price}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <p style="text-align: center; font-size: 0.85rem; color: var(--text-muted); margin-top: 14px;">
        * Indicative service rates only. Cost varies based on fault complexity, part requirement, and chimney model. Visiting fee adjusted against approved repair work.
      </p>
    </div>
  </section>

  <!-- Spare Parts Section -->
  <section class="section" style="background: var(--bg-alt); padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 30px;">
        <span class="badge-tag badge-tag-blue">Compatible Parts</span>
        <h2 class="section-title">Common ${brand.brandName} Chimney Spare Parts</h2>
        <p class="section-subtitle">Typical price ranges and replacement reasons for ${brand.brandName} chimney parts in Chennai.</p>
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
        * Typical part price ranges shown for high-quality compatible parts. Final cost depends on specific model series and motor capacity.
      </p>
    </div>
  </section>

  <!-- Service Process Steps -->
  <section class="section" style="padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">Simple 4-Step Process</span>
        <h2 class="section-title">How We Service Your ${brand.brandName} Chimney</h2>
        <p class="section-subtitle">Smooth doorstep repair experience from phone call to completed repair.</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px;">
        <div class="card" style="padding: 22px; text-align: center;">
          <div style="font-size: 2rem; margin-bottom: 10px;">📞</div>
          <h3 style="font-size: 1.1rem; color: var(--secondary); margin-bottom: 8px;">1. Book On-Call</h3>
          <p style="font-size: 0.875rem; color: var(--text-main); line-height: 1.5; margin: 0;">Call 8882055269 and share your ${brand.brandName} chimney model, issue, and Chennai locality.</p>
        </div>
        <div class="card" style="padding: 22px; text-align: center;">
          <div style="font-size: 2rem; margin-bottom: 10px;">👨‍🔧</div>
          <h3 style="font-size: 1.1rem; color: var(--secondary); margin-bottom: 8px;">2. Doorstep Visit</h3>
          <p style="font-size: 0.875rem; color: var(--text-main); line-height: 1.5; margin: 0;">A trained technician arrives at your home, inspects motor, blower, filters, and electronics.</p>
        </div>
        <div class="card" style="padding: 22px; text-align: center;">
          <div style="font-size: 2rem; margin-bottom: 10px;">📋</div>
          <h3 style="font-size: 1.1rem; color: var(--secondary); margin-bottom: 8px;">3. Upfront Quote</h3>
          <p style="font-size: 0.875rem; color: var(--text-main); line-height: 1.5; margin: 0;">We explain the root cause and share transparent pricing before beginning any repair work.</p>
        </div>
        <div class="card" style="padding: 22px; text-align: center;">
          <div style="font-size: 2rem; margin-bottom: 10px;">✅</div>
          <h3 style="font-size: 1.1rem; color: var(--secondary); margin-bottom: 8px;">4. On-Site Fix &amp; Test</h3>
          <p style="font-size: 0.875rem; color: var(--text-main); line-height: 1.5; margin: 0;">Defective parts replaced, airflow velocity verified, and kitchen left clean and tidy.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Customer Service Experiences (Exactly 6 Experiences) -->
  <section class="section" id="experiences" style="background: var(--bg-alt); padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">Doorstep Case Studies</span>
        <h2 class="section-title">Recent ${brand.brandName} Chimney Service Experiences in Chennai</h2>
        <p class="section-subtitle">Real examples of issues diagnosed, parts replaced, and results delivered for ${brand.brandName} chimney owners across Chennai.</p>
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

  <!-- FAQ Section (10 Brand-Specific FAQs) -->
  <section class="section" id="faq" style="padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">Helpful Answers</span>
        <h2 class="section-title">${brand.brandName} Chimney Repair FAQs in Chennai</h2>
        <p class="section-subtitle">Common questions regarding ${brand.brandName} chimney inspection, motor issues, deep cleaning, and doorstep repairs.</p>
      </div>

      <div class="faq-list" style="max-width: 860px; margin: 0 auto;">
        ${brand.faqs.map(faq => `
        <details class="faq-item">
          <summary class="faq-question">${faq.q}</summary>
          <div class="faq-content">
            ${faq.a}
          </div>
        </details>`).join('')}
      </div>
    </div>
  </section>

  <!-- Other Brand Chimney Repair Directory Grid -->
  <section class="section" style="background: var(--bg-alt); padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 30px;">
        <span class="badge-tag badge-tag-blue">Multi-Brand Expertise</span>
        <h2 class="section-title">Kitchen Chimney Brand Service Centers in Chennai</h2>
        <p class="section-subtitle">Doorstep chimney repair and deep degreasing service for all major chimney brands across Chennai:</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; margin-bottom: 24px;">
${otherBrandsHtml}
      </div>

      <div style="text-align: center; margin-top: 20px;">
        <a href="kitchen-chimney-repair-service-chennai.html" class="btn btn-outline" style="font-weight: 700;">&larr; View Master Kitchen Chimney Repair Service in Chennai</a>
      </div>
    </div>
  </section>

${generateLocalitiesSection(`${brand.brandName} Chimney Repair`, seed, ACTION_PREFIXES)}

${generateFooter()}

</body>
</html>`;
}

function buildAllBrandPages() {
  console.log('=== Building All 20 Brand-Specific Kitchen Chimney Pages ===\n');

  const outputDir = path.resolve(__dirname, '../kitchen-chimney');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  BRANDS.forEach((brand, idx) => {
    const filename = `${brand.slug}-chimney-repair-service-chennai.html`;
    const targetPath = path.join(outputDir, filename);
    const seed = (idx + 1) * 73;

    const htmlContent = generateBrandHtml(brand, seed);
    fs.writeFileSync(targetPath, htmlContent, 'utf8');
    console.log(`[${idx + 1}/20] Created: kitchen-chimney/${filename} (${htmlContent.length} bytes)`);
  });

  console.log('\n✓ All 20 brand chimney pages generated successfully in kitchen-chimney/!');
}

if (require.main === module) {
  buildAllBrandPages();
}

module.exports = {
  buildAllBrandPages,
  generateBrandHtml
};

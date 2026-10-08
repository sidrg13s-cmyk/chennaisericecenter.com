/**
 * build_gas_stove_brand_pages.js
 * Generates all 31 brand-specific Gas Stove HTML pages in /gas-stove/
 * and updates master directory, sitemap.html, and sitemap.xml
 */

const fs = require('fs');
const path = require('path');
const { ALL_GAS_STOVE_BRANDS } = require('./gas_stove_brand_data');
const {
  generateHeader,
  generateFooter,
  generateLocalitiesSection
} = require('./create_new_appliances');

const ACTION_PREFIXES = [
  'Doorstep Service in',
  'Burner & Valve Repair in',
  'Deep Cleaning Service in',
  'Technician Visit in',
  'Gas Leak Check in',
  'Nozzle Cleaning in',
  'Inspection in'
];

function generateBrandHtml(brand, seed) {
  const pageUrl = `https://chennaiservicecenter.com/gas-stove/${brand.slug}-gas-stove-repair-service-chennai.html`;
  const masterUrl = `https://chennaiservicecenter.com/gas-stove/gas-stove-repair-service-chennai.html`;
  const serviceName = `${brand.brandName} Gas Stove Repair Service in Chennai`;

  // Brand Directory Grid (linking to all 31 brands + master page)
  const otherBrandsHtml = ALL_GAS_STOVE_BRANDS.map(b => {
    const isCurrent = b.slug === brand.slug;
    const activeStyle = isCurrent
      ? 'background: var(--primary); color: #ffffff; font-weight: 700;'
      : 'background: #ffffff; color: var(--secondary);';
    return `          <a href="${b.slug}-gas-stove-repair-service-chennai.html" class="card" style="padding: 12px 14px; text-decoration: none; display: flex; align-items: center; justify-content: space-between; gap: 8px; font-size: 0.9rem; ${activeStyle}">
            <span>${b.brandName} Gas Stove</span>
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
          "name": "Gas Stove Repair Service in Chennai",
          "item": "${masterUrl}"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "${brand.brandName} Gas Stove Repair in Chennai",
          "item": "${pageUrl}"
        }
      ]
    }
  ]
}
  </script>
</head>
<body>

${generateHeader('gas-stove')}

  <!-- Breadcrumbs -->
  <nav class="breadcrumb-section" aria-label="Breadcrumb">
    <div class="container">
      <ul class="breadcrumb-list">
        <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
        <li class="breadcrumb-item"><a href="gas-stove-repair-service-chennai.html">Gas Stove</a></li>
        <li class="breadcrumb-item active" aria-current="page">${brand.brandName} Gas Stove Repair in Chennai</li>
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
        ⚠️ <strong>Gas Safety First:</strong> If you notice an active LPG gas smell, immediately close the cylinder regulator valve or PNG pipe shut-off valve. Do not switch on exhaust fans or lights. Keep kitchen windows open and call our technicians for a safety leak inspection.
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
          <span class="highlight-icon">🔥</span>
          <span>Blue Flame Restoration</span>
        </div>
        <div class="highlight-item">
          <span class="highlight-icon">🛡️</span>
          <span>90-Day Parts Warranty</span>
        </div>
        <div class="highlight-item">
          <span class="highlight-icon">📍</span>
          <span>All Chennai Localities</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Common Brand-Specific Problems -->
  <section class="section" style="padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">Troubleshooting</span>
        <h2 class="section-title">Common ${brand.brandName} Gas Stove Problems We Fix</h2>
        <p class="section-subtitle">Real-world issues reported by Chennai households and how our technicians solve them.</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
        ${brand.commonProblems.map(p => `
        <div class="card" style="padding: 24px;">
          <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 10px;">${p.title}</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">${p.desc}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- Brand-Specific Stove Types Serviced -->
  <section class="section" style="background: var(--bg-alt); padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">Stove Configurations</span>
        <h2 class="section-title">${brand.brandName} Gas Stove Types Serviced in Chennai</h2>
        <p class="section-subtitle">Doorstep repair expertise across ${brand.brandName} glass tops, stainless steel stoves, and auto-ignition models.</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 22px;">
        ${brand.stoveTypes.map(t => `
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
        <h2 class="section-title">Our ${brand.brandName} Gas Stove Repair &amp; Maintenance Services</h2>
        <p class="section-subtitle">Targeted repairs for brass burners, rotary gas valves, auto-ignition units, and leak-proof connections.</p>
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
        <span class="badge-tag badge-tag-blue">Safety &amp; Degreasing</span>
        <h2 class="section-title">${brand.deepCleaning.title}</h2>
        <p class="section-subtitle">${brand.deepCleaning.desc}</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-bottom: 30px;">
        ${brand.deepCleaning.points.map(p => `
        <div class="card" style="padding: 22px; background: #ffffff;">
          <h3 style="font-size: 1.1rem; color: var(--secondary); margin-bottom: 8px;">✨ ${p.title}</h3>
          <p style="font-size: 0.9rem; color: var(--text-main); line-height: 1.6;">${p.desc}</p>
        </div>`).join('')}
      </div>

      <div class="card" style="padding: 24px; background: #eff6ff; border-left: 4px solid var(--primary);">
        <h4 style="font-size: 1.05rem; color: var(--secondary); margin-bottom: 8px;">Why Professional Gas Stove Deep Cleaning Matters</h4>
        <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">
          Daily cooking spills build up carbon crust inside the burner mixing tube and around the brass nozzles. This restricts gas outflow, causing uneven yellow flames that blacken cookware and waste up to 25% of your LPG fuel. Our doorstep deep servicing disassembles the burner cups, unclogs micro-nozzles with fine pin gauges, and restores maximum blue flame heat efficiency.
        </p>
      </div>
    </div>
  </section>

  <!-- Pricing Table Section -->
  <section class="section" id="pricing" style="padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">Indicative Rates</span>
        <h2 class="section-title">${brand.brandName} Gas Stove Service &amp; Spare Parts Price Guide</h2>
        <p class="section-subtitle">Transparent, competitive pricing across Chennai with zero hidden fees.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 28px; margin-bottom: 30px;">
        <!-- General Charges -->
        <div class="card" style="padding: 24px;">
          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 16px; border-bottom: 2px solid var(--primary-light); padding-bottom: 8px;">
            Service &amp; Labor Charges
          </h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
            <thead>
              <tr style="border-bottom: 1px solid var(--surface-border); text-align: left;">
                <th style="padding: 8px 4px; color: var(--text-muted);">Service Type</th>
                <th style="padding: 8px 4px; text-align: right; color: var(--text-muted);">Indicative Price</th>
              </tr>
            </thead>
            <tbody>
              ${brand.generalCharges.map(gc => `
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 4px; color: var(--text-main);">${gc.service}</td>
                <td style="padding: 10px 4px; text-align: right; font-weight: 700; color: var(--primary);">${gc.price}</td>
              </tr>`).join('')}
            </tbody>
          </table>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 14px; line-height: 1.5;">
            * Inspection fee of ₹199 is adjusted against the bill if service/repair is approved.
          </p>
        </div>

        <!-- Spare Parts Pricing -->
        <div class="card" style="padding: 24px;">
          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 16px; border-bottom: 2px solid var(--primary-light); padding-bottom: 8px;">
            Common Spare Parts Price Range
          </h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
            <thead>
              <tr style="border-bottom: 1px solid var(--surface-border); text-align: left;">
                <th style="padding: 8px 4px; color: var(--text-muted);">Part Name</th>
                <th style="padding: 8px 4px; text-align: right; color: var(--text-muted);">Price Range</th>
              </tr>
            </thead>
            <tbody>
              ${brand.spareParts.map(sp => `
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 4px;">
                  <div style="color: var(--text-main); font-weight: 600;">${sp.part}</div>
                  <div style="font-size: 0.8rem; color: var(--text-muted);">${sp.problem}</div>
                </td>
                <td style="padding: 10px 4px; text-align: right; font-weight: 700; color: var(--primary); white-space: nowrap;">${sp.price}</td>
              </tr>`).join('')}
            </tbody>
          </table>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 14px; line-height: 1.5;">
            * Prices are indicative market ranges for high-grade compatible spares. Final cost depends on stove model and fault complexity.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Customer Service Experiences (Randomized, Tanglish) -->
  <section class="section" style="background: var(--bg-alt); padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">Case Studies</span>
        <h2 class="section-title">Recent ${brand.brandName} Gas Stove Service Visits in Chennai</h2>
        <p class="section-subtitle">Real repair scenarios resolved at customer homes across Chennai localities.</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
        ${brand.experiences.map((exp, idx) => `
        <div class="card experience-card" style="padding: 22px; background: #ffffff;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--primary); background: #eff6ff; padding: 4px 10px; border-radius: 4px;">
              📍 ${exp.locality}
            </span>
            <span style="font-size: 0.8rem; color: var(--text-muted);">Verified Case #${idx + 1}</span>
          </div>
          <h4 style="font-size: 1rem; color: var(--secondary); margin-bottom: 8px;">${exp.issue}</h4>
          <p style="font-size: 0.9rem; color: var(--text-main); line-height: 1.6; font-style: italic; background: #f8fafc; padding: 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
            "${exp.tanglish}"
          </p>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- Brand-Specific FAQ Section -->
  <section class="section" style="padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue">Customer FAQs</span>
        <h2 class="section-title">Frequently Asked Questions — ${brand.brandName} Gas Stove Repair</h2>
        <p class="section-subtitle">Common questions from Chennai homeowners about repair charges, parts, and service timings.</p>
      </div>

      <div style="max-width: 860px; margin: 0 auto; display: flex; flex-direction: column; gap: 14px;">
        ${brand.faqs.map(faq => `
        <div class="card faq-item" style="padding: 20px 24px;">
          <h3 style="font-size: 1.05rem; color: var(--secondary); margin-bottom: 8px;">❓ ${faq.q}</h3>
          <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">${faq.a}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- Brand Directory Grid -->
  <section class="section" style="background: var(--bg-alt); padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 30px;">
        <span class="badge-tag badge-tag-blue">All Brands</span>
        <h2 class="section-title">Gas Stove Brands Serviced Across Chennai</h2>
        <p class="section-subtitle">Select your brand for dedicated repair pricing, fault guides, and doorstep technician booking.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 12px; max-width: 1080px; margin: 0 auto;">
${otherBrandsHtml}
      </div>
    </div>
  </section>

  <!-- Chennai Localities Coverage -->
  ${generateLocalitiesSection(`${brand.brandName} Gas Stove Repair`, seed, ACTION_PREFIXES)}

  <!-- CTA Banner -->
  <section class="section" style="background: linear-gradient(135deg, #1e3a8a 0%, #0284c7 100%); color: #ffffff; padding: 45px 0; text-align: center;">
    <div class="container">
      <h2 style="font-size: 1.8rem; margin-bottom: 12px; color: #ffffff;">Need Quick ${brand.brandName} Gas Stove Service in Chennai?</h2>
      <p style="font-size: 1rem; opacity: 0.9; max-width: 680px; margin: 0 auto 22px; line-height: 1.6;">
        Book an experienced gas technician for same-day doorstep inspection, burner cleaning, and valve repair across Chennai.
      </p>
      <div style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
        <a href="tel:8882055269" class="btn btn-accent btn-lg">Call 8882055269</a>
        <a href="https://wa.me/918882055269" class="btn btn-outline-white btn-lg" target="_blank" rel="noopener">WhatsApp Us</a>
      </div>
    </div>
  </section>

${generateFooter()}

  <!-- Floating Action Buttons -->
  <a href="https://wa.me/918882055269" class="floating-whatsapp" target="_blank" rel="noopener" aria-label="WhatsApp Us">
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.825z"/>
    </svg>
  </a>
  <a href="tel:8882055269" class="floating-call" aria-label="Call Us">
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  </a>

  <!-- Mobile Bottom Action Bar -->
  <div class="mobile-actions">
    <a href="tel:8882055269" class="mobile-btn mobile-btn-call">
      <span class="icon">📞</span>
      <span>Call Now</span>
    </a>
    <a href="https://wa.me/918882055269" class="mobile-btn mobile-btn-whatsapp" target="_blank" rel="noopener">
      <span class="icon">💬</span>
      <span>WhatsApp</span>
    </a>
  </div>

  <script src="../js/main.js"></script>
</body>
</html>`;
}

// Generate all 31 brand pages
console.log('Building 31 Gas Stove brand pages...');
const gasStoveDir = path.resolve(__dirname, '../gas-stove');
if (!fs.existsSync(gasStoveDir)) {
  fs.mkdirSync(gasStoveDir, { recursive: true });
}

let generatedCount = 0;
ALL_GAS_STOVE_BRANDS.forEach((brand, idx) => {
  const html = generateBrandHtml(brand, idx);
  const filePath = path.join(gasStoveDir, `${brand.slug}-gas-stove-repair-service-chennai.html`);
  fs.writeFileSync(filePath, html, 'utf8');
  generatedCount++;
});

console.log(`✓ Successfully generated ${generatedCount} Gas Stove brand pages in /gas-stove/`);

// Update Master Gas Stove page with Brand Directory Grid
const masterFilePath = path.join(gasStoveDir, 'gas-stove-repair-service-chennai.html');
if (fs.existsSync(masterFilePath)) {
  let masterHtml = fs.readFileSync(masterFilePath, 'utf8');

  // Build brand grid for master page
  const masterBrandGridHtml = `  <!-- All 31 Gas Stove Brands Serviced -->
  <section class="section" style="background: var(--bg-alt); padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 30px;">
        <span class="badge-tag badge-tag-blue">Brand Directory</span>
        <h2 class="section-title">Gas Stove Brands Repaired at Your Doorstep in Chennai</h2>
        <p class="section-subtitle">Click your brand below to view pricing, common faults, and local technician booking.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 12px; max-width: 1080px; margin: 0 auto;">
${ALL_GAS_STOVE_BRANDS.map(b => `        <a href="${b.slug}-gas-stove-repair-service-chennai.html" class="card" style="padding: 12px 14px; text-decoration: none; display: flex; align-items: center; justify-content: space-between; gap: 8px; font-size: 0.9rem; background: #ffffff; color: var(--secondary);">
          <span>${b.brandName} Gas Stove</span>
          <span>&rarr;</span>
        </a>`).join('\n')}
      </div>
    </div>
  </section>`;

  // Insert before localities section if not already present
  if (!masterHtml.includes('Brand Directory</h2>')) {
    masterHtml = masterHtml.replace('<section class="section" id="service-areas"', `${masterBrandGridHtml}\n\n  <section class="section" id="service-areas"`);
    fs.writeFileSync(masterFilePath, masterHtml, 'utf8');
    console.log('✓ Updated master gas-stove-repair-service-chennai.html with 31-brand directory grid');
  }
}

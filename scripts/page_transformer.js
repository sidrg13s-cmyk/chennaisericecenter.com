/**
 * page_transformer.js
 * Core engine to transform any Salem HTML page into a complete, genuine Chennai page.
 */

const {
  CHENNAI_CONTACT,
  BRAND_DISPLAY_NAMES,
  AI_REPLACEMENTS
} = require('./chennai_data');
const { generateChennaiLocalitiesSection } = require('./locality_builder');
const { generateCustomerExperiences } = require('./experience_generator');
const { generateFaqSection } = require('./faq_generator');
const { generateHeroSection } = require('./hero_and_types_generator');

function getPageMetadata(filePath) {
  const parts = filePath.replace(/\\/g, '/').split('/');
  const dir = parts.length > 1 ? parts[0] : '';
  const filename = parts[parts.length - 1];

  let slug = filename.replace(/\.html$/, '');
  let newFilename = filename.replace(/-salem\.html$/, '-chennai.html');

  let brandSlug = '';
  let brandName = 'Multi-Brand';
  let applianceCategory = dir;

  if (dir === 'ac') {
    if (filename === 'ac-repair-service-salem.html') {
      brandSlug = 'multi-brand';
      brandName = 'Multi-Brand';
    } else {
      brandSlug = filename.replace(/-ac-repair-service-salem\.html$/, '');
      brandName = BRAND_DISPLAY_NAMES[brandSlug] || brandSlug.toUpperCase();
    }
  } else if (dir === 'fridge') {
    if (filename === 'fridge-repair-service-salem.html') {
      brandSlug = 'multi-brand';
      brandName = 'Multi-Brand';
    } else {
      brandSlug = filename.replace(/-fridge-repair-service-salem\.html$/, '');
      brandName = BRAND_DISPLAY_NAMES[brandSlug] || brandSlug.toUpperCase();
    }
  } else if (dir === 'washing-machine') {
    if (filename === 'washing-machine-repair-service-salem.html') {
      brandSlug = 'multi-brand';
      brandName = 'Multi-Brand';
    } else {
      brandSlug = filename.replace(/-washing-machine-repair-service-salem\.html$/, '');
      brandName = BRAND_DISPLAY_NAMES[brandSlug] || brandSlug.toUpperCase();
    }
  } else if (dir === 'tv') {
    if (filename === 'tv-repair-service-salem.html') {
      brandSlug = 'multi-brand';
      brandName = 'Multi-Brand';
    } else {
      brandSlug = filename.replace(/-tv-repair-service-salem\.html$/, '');
      brandName = BRAND_DISPLAY_NAMES[brandSlug] || brandSlug.toUpperCase();
    }
  } else if (dir === 'microwave') {
    if (filename === 'microwave-repair-service-salem.html') {
      brandSlug = 'multi-brand';
      brandName = 'Multi-Brand';
    } else {
      brandSlug = filename.replace(/-microwave-repair-service-salem\.html$/, '');
      brandName = BRAND_DISPLAY_NAMES[brandSlug] || brandSlug.toUpperCase();
    }
  } else if (dir === 'servicecenter') {
    if (filename === 'service-center-salem.html') {
      brandSlug = 'multi-brand';
      brandName = 'Multi-Brand';
    } else {
      brandSlug = filename.replace(/-service-center-salem\.html$/, '');
      brandName = BRAND_DISPLAY_NAMES[brandSlug] || brandSlug.toUpperCase();
    }
  }

  return {
    dir,
    filename,
    newFilename,
    slug,
    brandSlug,
    brandName,
    applianceCategory
  };
}

function getApplianceLabel(category) {
  switch (category) {
    case 'ac': return 'Air Conditioner';
    case 'fridge': return 'Refrigerator';
    case 'washing-machine': return 'Washing Machine';
    case 'tv': return 'Television';
    case 'microwave': return 'Microwave Oven';
    case 'servicecenter': return 'Home Appliance';
    default: return 'Home Appliance';
  }
}

function generateContactSection() {
  return `  <!-- Contact & Location Section -->
  <section class="section contact-location-section">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 30px;">
        <span class="badge-tag badge-tag-blue" style="margin-bottom: 8px;">Visit or Contact Us</span>
        <h2 class="section-title">Service Center Chennai Location &amp; Contact</h2>
        <p class="section-subtitle">Reach out for quick doorstep home appliance repair across Chennai and nearby Chennai localities.</p>
      </div>

      <div class="contact-location-grid">
        <!-- Contact Card -->
        <div class="contact-info-card">
          <div>
            <h3 style="font-size: 1.25rem; color: var(--secondary); margin-bottom: 16px;">Service Center Chennai</h3>
            
            <div style="display: flex; gap: 12px; margin-bottom: 16px;">
              <div style="font-size: 1.25rem; line-height: 1;">📍</div>
              <div>
                <strong>Service Address:</strong>
                <address style="font-style: normal; color: var(--text-main); line-height: 1.5; margin-top: 4px;">
                  ${CHENNAI_CONTACT.fullAddress}
                </address>
              </div>
            </div>

            <div style="display: flex; gap: 12px; margin-bottom: 16px;">
              <div style="font-size: 1.25rem; line-height: 1;">📞</div>
              <div>
                <strong>Phone Helpline:</strong>
                <div style="margin-top: 4px;">
                  <a href="tel:${CHENNAI_CONTACT.phone}" style="color: var(--primary); font-weight: 700; font-size: 1.1rem;">${CHENNAI_CONTACT.phoneDisplay}</a>
                </div>
              </div>
            </div>

            <div style="display: flex; gap: 12px; margin-bottom: 20px;">
              <div style="font-size: 1.25rem; line-height: 1;">⏱️</div>
              <div>
                <strong>Working Hours:</strong>
                <div style="color: var(--text-main); margin-top: 4px;">${CHENNAI_CONTACT.openingHours}</div>
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <a href="tel:${CHENNAI_CONTACT.phone}" class="btn btn-primary btn-sm">Call Now</a>
            <a href="${CHENNAI_CONTACT.mapSearchUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">Open in Google Maps &rarr;</a>
          </div>
        </div>

        <!-- Map Embed -->
        <div class="contact-map-card">
          <iframe
            title="Service Center Chennai Location Map"
            src="${CHENNAI_CONTACT.mapEmbedUrl}"
            width="100%"
            height="100%"
            style="border:0; min-height: 280px; border-radius: var(--radius-sm); display: block;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  </section>`;
}

function generateFooter(isSubdir = true) {
  const prefix = isSubdir ? '../' : '';
  const allBrands = Object.entries(BRAND_DISPLAY_NAMES).sort((a, b) => a[0].localeCompare(b[0]));
  const brandLinksHtml = allBrands.map(([slug, name]) => {
    return `          <a href="${prefix}servicecenter/${slug}-service-center-chennai.html">${name} Service Center</a>`;
  }).join('\n');

  return `  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <!-- Disclaimer -->
      <div class="disclaimer-box">
        <strong>Disclaimer:</strong> ${CHENNAI_CONTACT.domainNoProtocol} is an independent third-party multi-brand home appliance service provider in Chennai, Tamil Nadu. We are not directly affiliated with, sponsored by, or an authorized service center of any specific manufacturer or OEM brand unless expressly stated. Brand names, logos, and trademarks mentioned on this website belong to their respective owners and are used purely for identification and descriptive purposes.
      </div>

      <div class="footer-grid">
        <div class="footer-col">
          <h3>Service Center Chennai</h3>
          <p>Your dependable local solution for home appliance repair and maintenance across Chennai and surrounding areas in Tamil Nadu.</p>
          <p><strong>Address:</strong> ${CHENNAI_CONTACT.fullAddress}</p>
          <p><strong>Phone:</strong> <a href="tel:${CHENNAI_CONTACT.phone}" style="color: #93c5fd;">${CHENNAI_CONTACT.phoneDisplay}</a></p>
          <p><strong>Working Hours:</strong> ${CHENNAI_CONTACT.openingHours}</p>
        </div>

        <div class="footer-col">
          <h3>Appliance Repairs</h3>
          <ul class="footer-links">
            <li><a href="${prefix}ac/ac-repair-service-chennai.html">AC Repair Service</a></li>
            <li><a href="${prefix}fridge/fridge-repair-service-chennai.html">Fridge Repair Service</a></li>
            <li><a href="${prefix}washing-machine/washing-machine-repair-service-chennai.html">Washing Machine Repair</a></li>
            <li><a href="${prefix}tv/tv-repair-service-chennai.html">TV Repair Service</a></li>
            <li><a href="${prefix}microwave/microwave-repair-service-chennai.html">Microwave Repair Service</a></li>
            <li><a href="${prefix}servicecenter/service-center-chennai.html">Service Center Chennai</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <li><a href="${prefix}index.html">Home</a></li>
            <li><a href="${prefix}servicecenter/service-center-chennai.html">All Service Centers</a></li>
            <li><a href="${prefix}sitemap.html">HTML Sitemap</a></li>
            <li><a href="${prefix}sitemap.xml">XML Sitemap</a></li>
            <li><a href="tel:${CHENNAI_CONTACT.phone}">Contact Support</a></li>
          </ul>
        </div>
      </div>

      <!-- Footer Brand Directory (All 58 Valid Service Center Brands) -->
      <div class="footer-brands-section">
        <h4 class="footer-brands-title">Brand Service Centers in Chennai</h4>
        <p class="footer-brands-subtitle">Doorstep repair coordination for all major appliance brands across Chennai and Chennai District:</p>
        <div class="footer-brands-grid">
${brandLinksHtml}
        </div>
      </div>

      <div class="footer-bottom">
        <div>&copy; 2026 ${CHENNAI_CONTACT.domainNoProtocol}. All Rights Reserved.</div>
        <div>Chennai, Tamil Nadu</div>
      </div>
    </div>
  </footer>`;
}

function generateLocalBusinessSchema(pageUrl) {
  return `  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Service Center Chennai",
  "url": "https://chennaiservicecenter.com/",
  "telephone": "+918882055269",
  "priceRange": "₹₹",
  "image": "https://chennaiservicecenter.com/favicon.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "${CHENNAI_CONTACT.streetAddress}",
    "addressLocality": "${CHENNAI_CONTACT.addressLocality}",
    "addressRegion": "${CHENNAI_CONTACT.addressRegion}",
    "postalCode": "${CHENNAI_CONTACT.postalCode}",
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
    "latitude": "${CHENNAI_CONTACT.latitude}",
    "longitude": "${CHENNAI_CONTACT.longitude}"
  }
}
  </script>`;
}

function transformPageContent(html, filePath) {
  const meta = getPageMetadata(filePath);
  const isSubdir = meta.dir !== '';
  const prefix = isSubdir ? '../' : '';
  const canonicalUrl = isSubdir
    ? `${CHENNAI_CONTACT.domain}/${meta.dir}/${meta.newFilename}`
    : `${CHENNAI_CONTACT.domain}/${meta.newFilename}`;

  let content = html;

  // 1. Replace Canonical & OG URLs
  content = content.replace(/<link rel=["']canonical["'] href=["'][^"']*["']>/gi,
    `<link rel="canonical" href="${canonicalUrl}">`);
  content = content.replace(/<meta property=["']og:url["'] content=["'][^"']*["']>/gi,
    `<meta property="og:url" content="${canonicalUrl}">`);

  // 2. Replace Schema LocalBusiness
  content = content.replace(/<script type=["']application\/ld\+json["']>[\s\S]*?"@type":\s*"LocalBusiness"[\s\S]*?<\/script>/gi,
    generateLocalBusinessSchema(canonicalUrl));

  // 3. Replace Header Logo & Nav links
  content = content.replace(/<span class=["']logo-badge["']>SCS<\/span>\s*<span>Service Center Salem<\/span>/gi,
    `<span class="logo-badge">SCC</span>\n          <span>Service Center Chennai</span>`);

  // Update navigation links to point to -chennai.html
  content = content.replace(/ac-repair-service-salem\.html/gi, 'ac-repair-service-chennai.html');
  content = content.replace(/fridge-repair-service-salem\.html/gi, 'fridge-repair-service-chennai.html');
  content = content.replace(/washing-machine-repair-service-salem\.html/gi, 'washing-machine-repair-service-chennai.html');
  content = content.replace(/tv-repair-service-salem\.html/gi, 'tv-repair-service-chennai.html');
  content = content.replace(/microwave-repair-service-salem\.html/gi, 'microwave-repair-service-chennai.html');
  content = content.replace(/service-center-salem\.html/gi, 'service-center-chennai.html');

  // 4. Replace Hero Section
  const heroHtml = generateHeroSection(meta.applianceCategory, meta.brandName, meta.slug);
  content = content.replace(/<section class=["']hero["']>[\s\S]*?<\/section>/i, heroHtml);

  // 5. Replace Customer Experiences Section
  if (/<section[^>]*id=["']experiences["'][^>]*>[\s\S]*?<\/section>/i.test(content)) {
    const expHtml = generateCustomerExperiences(meta.applianceCategory, meta.brandName, meta.slug);
    content = content.replace(/<section[^>]*id=["']experiences["'][^>]*>[\s\S]*?<\/section>/i, expHtml);
  }

  // 6. Replace Localities Section
  const locHtml = generateChennaiLocalitiesSection(meta.slug, meta.brandName, getApplianceLabel(meta.applianceCategory));
  content = content.replace(/<section[^>]*id=["']localities["'][^>]*>[\s\S]*?<\/section>/i, locHtml);

  // 7. Replace FAQ Section
  const faqHtml = generateFaqSection(meta.applianceCategory, meta.brandName, meta.slug);
  content = content.replace(/<section[^>]*id=["']faq["'][^>]*>[\s\S]*?<\/section>/i, faqHtml);

  // 8. Replace Contact & Location Section
  const contactHtml = generateContactSection();
  content = content.replace(/<section[^>]*class=["'][^"']*contact-location-section[^"']*["'][^>]*>[\s\S]*?<\/section>/i, contactHtml);

  // 9. Replace Footer Section
  const footerHtml = generateFooter(isSubdir);
  content = content.replace(/<footer class=["']site-footer["']>[\s\S]*?<\/footer>/i, footerHtml);

  // 10. General Replacement of Salem to Chennai across all sections, headings, paragraphs, and links
  content = content.replace(/-salem\.html/gi, '-chennai.html');
  content = content.replace(/servicecentersalem\.com/gi, 'chennaiservicecenter.com');
  content = content.replace(/Service Center Salem/gi, 'Service Center Chennai');

  // External 24x7homecare links:
  content = content.replace(/24x7homecare\.com\/services\/([a-z-]+)-service-centre-in-salem\.html/gi,
    '24x7homecare.com/services/$1-service-centre-in-chennai.html');
  content = content.replace(/Looking for Additional Appliance Resources in Salem\?/gi,
    'Looking for Additional Appliance Resources in Chennai?');
  content = content.replace(/Service Centre in Salem<\/a>/gi,
    'Service Centre in Chennai</a>');

  // General text replacements:
  content = content.replace(/across Salem and Salem District/gi, 'across Chennai and Chennai District');
  content = content.replace(/in Salem and Salem District/gi, 'in Chennai and Chennai District');
  content = content.replace(/Salem and Salem District/gi, 'Chennai and Chennai District');
  content = content.replace(/Salem District/gi, 'Chennai District');
  content = content.replace(/across Salem/gi, 'across Chennai');
  content = content.replace(/in Salem/gi, 'in Chennai');
  content = content.replace(/for Salem/gi, 'for Chennai');
  content = content.replace(/to Salem/gi, 'to Chennai');
  content = content.replace(/at Salem/gi, 'at Chennai');
  content = content.replace(/Salem town/gi, 'Chennai city');
  content = content.replace(/Salem city/gi, 'Chennai city');
  content = content.replace(/Salem homes/gi, 'Chennai homes');
  content = content.replace(/Salem home/gi, 'Chennai home');
  content = content.replace(/Salem technicians/gi, 'Chennai technicians');
  content = content.replace(/Salem technician/gi, 'Chennai technician');
  content = content.replace(/Salem localities/gi, 'Chennai localities');
  content = content.replace(/Salem locality/gi, 'Chennai locality');
  content = content.replace(/Salem neighborhoods/gi, 'Chennai neighborhoods');
  content = content.replace(/Salem neighborhood/gi, 'Chennai neighborhood');
  content = content.replace(/Salem residents/gi, 'Chennai residents');
  content = content.replace(/Salem resident/gi, 'Chennai resident');
  content = content.replace(/Salem area/gi, 'Chennai area');
  content = content.replace(/Salem areas/gi, 'Chennai areas');
  content = content.replace(/Salem customers/gi, 'Chennai customers');
  content = content.replace(/Salem customer/gi, 'Chennai customer');
  content = content.replace(/Salem Service/gi, 'Chennai Service');
  content = content.replace(/Salem Repair/gi, 'Chennai Repair');
  content = content.replace(/\bSalem\b/g, 'Chennai');

  // Old Salem localities replacements if any remain in text:
  const salemOldLocs = [
    'Hasthampatti', 'Fairlands', 'Meyyanur', 'Suramangalam', 'Ammapet',
    'Gugai', 'Gorimedu', 'Alagapuram', 'Kondalampatti', 'Dadagapatti',
    'Salem Junction', 'Mamangam', 'Reddiyur', 'Kannankurichi', 'Yercaud Foothills',
    'Narasothipatti', 'Kurangu Chavadi', 'Vincent', 'Shevapet'
  ];
  const chennaiNewLocs = [
    'Anna Nagar', 'Velachery', 'Adyar', 'Porur', 'Mylapore',
    'Ambattur', 'T. Nagar', 'Perambur', 'Guindy', 'Sholinganallur',
    'Madipakkam', 'Thiruvanmiyur', 'Kilpauk', 'Kodambakkam', 'Vadapalani',
    'Nungambakkam', 'Royapettah', 'Tambaram', 'Anna Nagar'
  ];
  salemOldLocs.forEach((oldLoc, i) => {
    const reg = new RegExp(`\\b${oldLoc}\\b`, 'gi');
    content = content.replace(reg, chennaiNewLocs[i]);
  });

  // Old coordinates & address residue
  content = content.replace(/636002/g, '600040');
  content = content.replace(/11\.6515/g, '13.0850');
  content = content.replace(/78\.1474/g, '80.2100');

  // Floating call button aria label:
  content = content.replace(/aria-label=["']Call Service Center Salem["']/gi,
    'aria-label="Call Service Center Chennai"');

  // Title tag check:
  content = content.replace(/<title>(.*?)<\/title>/i, (m, titleText) => {
    let clean = titleText.replace(/Salem/gi, 'Chennai');
    return `<title>${clean}</title>`;
  });

  // Meta description check:
  content = content.replace(/<meta name=["']description["']\s+content=["'](.*?)["']>/i, (m, desc) => {
    let clean = desc.replace(/Salem/gi, 'Chennai');
    return `<meta name="description" content="${clean}">`;
  });

  // OG Title & Description check:
  content = content.replace(/<meta property=["']og:title["']\s+content=["'](.*?)["']>/i, (m, ogt) => {
    let clean = ogt.replace(/Salem/gi, 'Chennai');
    return `<meta property="og:title" content="${clean}">`;
  });
  content = content.replace(/<meta property=["']og:description["']\s+content=["'](.*?)["']>/i, (m, ogd) => {
    let clean = ogd.replace(/Salem/gi, 'Chennai');
    return `<meta property="og:description" content="${clean}">`;
  });

  // 11. AI Buzzwords replacement
  AI_REPLACEMENTS.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });

  return content;
}

module.exports = {
  getPageMetadata,
  transformPageContent,
  generateFooter,
  generateContactSection
};

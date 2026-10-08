/**
 * create_new_appliances.js
 * Generates production-ready pages for:
 * 1. /kitchen-chimney/kitchen-chimney-repair-service-chennai.html
 * 2. /gas-top/gas-top-repair-service-chennai.html
 * 3. /hob/hob-repair-service-chennai.html
 */

const fs = require('fs');
const path = require('path');
const {
  NORTH_CHENNAI,
  SOUTH_CHENNAI,
  EAST_CHENNAI,
  WEST_CHENNAI,
  CHENNAI_CONTACT,
  BRAND_DISPLAY_NAMES
} = require('./chennai_data');

function seededShuffle(arr, seed) {
  const result = [...arr];
  let m = result.length;
  let s = seed;
  while (m) {
    s = (s * 9301 + 49297) % 233280;
    const rnd = s / 233280;
    const i = Math.floor(rnd * m--);
    const t = result[m];
    result[m] = result[i];
    result[i] = t;
  }
  return result;
}

function buildLocalityCards(localities, applianceName, seed, actionPrefixes) {
  return localities.map((loc, idx) => {
    const pIdx = (seed + idx) % actionPrefixes.length;
    const phrase = actionPrefixes[pIdx];
    const label = `📍 ${applianceName} ${phrase} ${loc}`;
    return `          <div class="card" style="padding: 12px 14px; text-align: left;">
            <strong style="color: var(--secondary); font-size: 0.925rem; display: block;">${label}</strong>
          </div>`;
  }).join('\n');
}

function generateLocalitiesSection(applianceName, seed, actionPrefixes) {
  const north = seededShuffle(NORTH_CHENNAI, seed + 11);
  const south = seededShuffle(SOUTH_CHENNAI, seed + 22);
  const east = seededShuffle(EAST_CHENNAI, seed + 33);
  const west = seededShuffle(WEST_CHENNAI, seed + 44);

  return `  <!-- Localities Section (200 Genuine Chennai Localities) -->
  <section class="section" id="localities" style="background: var(--bg-alt); padding: 50px 0;">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 35px;">
        <span class="badge-tag badge-tag-blue" style="margin-bottom: 8px;">Chennai Service Coverage</span>
        <h2 class="section-title">200+ Chennai Localities Covered for Doorstep ${applianceName}</h2>
        <p class="section-subtitle">Our technicians provide doorstep ${applianceName.toLowerCase()} across North, South, East, and West Chennai neighborhoods daily.</p>
      </div>

      <!-- North Chennai (50 Localities) -->
      <div style="margin-bottom: 35px;">
        <h3 style="font-size: 1.25rem; color: var(--secondary); margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
          <span>📍 North Chennai Localities (50 Areas)</span>
        </h3>
        <div class="cards-grid" style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px;">
${buildLocalityCards(north, applianceName, seed + 101, actionPrefixes)}
        </div>
      </div>

      <!-- South Chennai (50 Localities) -->
      <div style="margin-bottom: 35px;">
        <h3 style="font-size: 1.25rem; color: var(--secondary); margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
          <span>📍 South Chennai Localities (50 Areas)</span>
        </h3>
        <div class="cards-grid" style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px;">
${buildLocalityCards(south, applianceName, seed + 202, actionPrefixes)}
        </div>
      </div>

      <!-- East Chennai (50 Localities) -->
      <div style="margin-bottom: 35px;">
        <h3 style="font-size: 1.25rem; color: var(--secondary); margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
          <span>📍 East &amp; Central Chennai Localities (50 Areas)</span>
        </h3>
        <div class="cards-grid" style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px;">
${buildLocalityCards(east, applianceName, seed + 303, actionPrefixes)}
        </div>
      </div>

      <!-- West Chennai (50 Localities) -->
      <div style="margin-bottom: 20px;">
        <h3 style="font-size: 1.25rem; color: var(--secondary); margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
          <span>📍 West Chennai Localities (50 Areas)</span>
        </h3>
        <div class="cards-grid" style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px;">
${buildLocalityCards(west, applianceName, seed + 404, actionPrefixes)}
        </div>
      </div>
    </div>
  </section>`;
}

function generateHeader(activeCategory) {
  return `  <!-- Header -->
  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="../index.html" class="logo">
          <span class="logo-badge">SCC</span>
          <span>Service Center Chennai</span>
        </a>

        <button class="menu-toggle" aria-label="Toggle Navigation" aria-expanded="false">☰</button>

        <nav class="main-nav">
          <a href="../index.html" class="nav-link">Home</a>
          <a href="../ac/ac-repair-service-chennai.html" class="nav-link">AC Repair</a>
          <a href="../fridge/fridge-repair-service-chennai.html" class="nav-link">Fridge Repair</a>
          <a href="../washing-machine/washing-machine-repair-service-chennai.html" class="nav-link">Washing Machine</a>
          <a href="../tv/tv-repair-service-chennai.html" class="nav-link">TV Repair</a>
          <a href="../microwave/microwave-repair-service-chennai.html" class="nav-link">Microwave</a>
          <a href="../kitchen-chimney/kitchen-chimney-repair-service-chennai.html" class="nav-link${activeCategory === 'chimney' ? ' active' : ''}">Chimney</a>
          <a href="../gas-stove/gas-stove-repair-service-chennai.html" class="nav-link${activeCategory === 'gas-stove' ? ' active' : ''}">Gas Stove</a>
          <a href="../hob/hob-repair-service-chennai.html" class="nav-link${activeCategory === 'hob' ? ' active' : ''}">Hob</a>
          <a href="../servicecenter/service-center-chennai.html" class="nav-link">Service Center</a>
        </nav>

        <div class="header-cta">
          <a href="tel:${CHENNAI_CONTACT.phone}" class="btn btn-primary btn-sm">Book Repair</a>
        </div>
      </div>
    </div>
  </header>`;
}

function generateFooter() {
  const allBrands = Object.entries(BRAND_DISPLAY_NAMES).sort((a, b) => a[0].localeCompare(b[0]));
  const brandLinksHtml = allBrands.map(([slug, name]) => {
    return `          <a href="../servicecenter/${slug}-service-center-chennai.html">${name} Service Center</a>`;
  }).join('\n');

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
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
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
            <li><a href="../ac/ac-repair-service-chennai.html">AC Repair Service</a></li>
            <li><a href="../fridge/fridge-repair-service-chennai.html">Fridge Repair Service</a></li>
            <li><a href="../washing-machine/washing-machine-repair-service-chennai.html">Washing Machine Repair</a></li>
            <li><a href="../tv/tv-repair-service-chennai.html">TV Repair Service</a></li>
            <li><a href="../microwave/microwave-repair-service-chennai.html">Microwave Repair Service</a></li>
            <li><a href="../kitchen-chimney/kitchen-chimney-repair-service-chennai.html">Kitchen Chimney Repair</a></li>
            <li><a href="../gas-stove/gas-stove-repair-service-chennai.html">Gas Stove Repair</a></li>
            <li><a href="../hob/hob-repair-service-chennai.html">Hob Repair Service</a></li>
            <li><a href="../servicecenter/service-center-chennai.html">Service Center Chennai</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <li><a href="../index.html">Home</a></li>
            <li><a href="../servicecenter/service-center-chennai.html">All Service Centers</a></li>
            <li><a href="../sitemap.html">HTML Sitemap</a></li>
            <li><a href="../sitemap.xml">XML Sitemap</a></li>
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
  </footer>

  <script src="../js/main.js"></script>

  <!-- Floating Action Buttons -->
  <a href="https://wa.me/918882055269" class="floating-side-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
    <span class="btn-text">WhatsApp</span>
  </a>
  <a href="tel:${CHENNAI_CONTACT.phone}" class="floating-side-call" aria-label="Call Service Center Chennai">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.1-.6-2.3-.6-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/></svg>
    <span class="btn-text">Call Now</span>
  </a>

  <!-- Mobile Fixed Bottom Action Bar -->
  <div class="bottom-action-bar">
    <a href="https://wa.me/918882055269" class="btn-bottom-bar btn-bottom-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      <span>WhatsApp</span>
    </a>
    <a href="tel:${CHENNAI_CONTACT.phone}" class="btn-bottom-bar btn-bottom-call" aria-label="Call Technician Now">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.1-.6-2.3-.6-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/></svg>
      <span>Call Now</span>
    </a>
  </div>`;
}

function generateLocalBusinessSchema(pageUrl, serviceName) {
  return `  <script type="application/ld+json">
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
          "name": "${serviceName}",
          "item": "${pageUrl}"
        }
      ]
    }
  ]
}
  </script>`;
}

// Export functions for the builders
module.exports = {
  generateHeader,
  generateFooter,
  generateLocalitiesSection,
  generateLocalBusinessSchema
};

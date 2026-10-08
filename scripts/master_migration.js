/**
 * master_migration.js
 * Executes complete localization & content rebuild from Salem to Chennai.
 */

const fs = require('fs');
const path = require('path');
const {
  CHENNAI_CONTACT,
  AI_REPLACEMENTS
} = require('./chennai_data');
const {
  transformPageContent,
  generateFooter,
  generateContactSection
} = require('./page_transformer');
const { generateCustomerExperiences } = require('./experience_generator');
const { generateFaqSection } = require('./faq_generator');

const DIRS = ['ac', 'fridge', 'washing-machine', 'tv', 'microwave', 'servicecenter'];

function transformIndexHtml(html) {
  let content = html;

  content = content.replace(/<title>.*?<\/title>/i,
    '<title>Home Appliance Repair Service in Chennai | Call 8882055269</title>');
  content = content.replace(/<meta name=["']description["']\s+content=["'].*?["']>/i,
    '<meta name="description" content="Call 8882055269. Looking for home appliance repair service in Chennai? Quick doorstep repair for AC, fridge, washing machine, TV, and microwave oven with clear prices.">');
  content = content.replace(/<link rel=["']canonical["'] href=["'].*?["']>/i,
    `<link rel="canonical" href="${CHENNAI_CONTACT.domain}/">`);
  content = content.replace(/<meta property=["']og:title["'] content=["'].*?["']>/i,
    '<meta property="og:title" content="Home Appliance Repair Service in Chennai | Doorstep Service Center">');
  content = content.replace(/<meta property=["']og:description["'] content=["'].*?["']>/i,
    '<meta property="og:description" content="Looking for home appliance repair service in Chennai? Quick doorstep repair for AC, fridge, washing machine, TV, and microwave oven. Clear prices and local technicians.">');
  content = content.replace(/<meta property=["']og:url["'] content=["'].*?["']>/i,
    `<meta property="og:url" content="${CHENNAI_CONTACT.domain}/">`);

  content = content.replace(/<script type=["']application\/ld\+json["']>[\s\S]*?"@type":\s*"LocalBusiness"[\s\S]*?<\/script>/i,
    `  <script type="application/ld+json">
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
  </script>`);

  content = content.replace(/<span class=["']logo-badge["']>SCS<\/span>\s*<span>Service Center Salem<\/span>/gi,
    `<span class="logo-badge">SCC</span>\n          <span>Service Center Chennai</span>`);

  const heroHtml = `  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <span class="hero-pill">Local Doorstep Technician Service in Chennai</span>
      <h1>Home Appliance Repair Service in Chennai</h1>
      <p>Searching for home appliance repair near me in Chennai? Looking for dependable home appliance repair service in Chennai? Our certified local technicians visit your home to inspect and fix air conditioners, refrigerators, washing machines, televisions, and microwave ovens across Chennai and Chennai District.</p>
      <div class="hero-actions">
        <a href="tel:8882055269" class="btn btn-accent">Call for Home Visit</a>
        <a href="servicecenter/service-center-chennai.html" class="btn btn-outline-white">Browse Brand Service Centers</a>
      </div>
      <div class="trust-strip" style="margin-top: 25px; display: flex; gap: 20px; flex-wrap: wrap; font-size: 0.9rem; color: #cbd5e1;">
        <span>✓ Doorstep Appliance Repair</span>
        <span>✓ Upfront Cost Estimate</span>
        <span>✓ Direct Technician Support</span>
        <span>✓ 6:00 AM – 11:00 PM Daily</span>
      </div>
    </div>
  </section>`;
  content = content.replace(/<section class=["']hero["']>[\s\S]*?<\/section>/i, heroHtml);

  const expHtml = generateCustomerExperiences('index', 'Multi-Brand', 'home-index-page');
  content = content.replace(/<section[^>]*id=["']experiences["'][^>]*>[\s\S]*?<\/section>/i, expHtml);

  const faqHtml = generateFaqSection('servicecenter', 'Multi-Brand Home Appliance', 'home-index-page');
  content = content.replace(/<section[^>]*id=["']faq["'][^>]*>[\s\S]*?<\/section>/i, faqHtml);

  const contactHtml = generateContactSection();
  content = content.replace(/<section[^>]*class=["'][^"']*contact-location-section[^"']*["'][^>]*>[\s\S]*?<\/section>/i, contactHtml);

  const footerHtml = generateFooter(false);
  content = content.replace(/<footer class=["']site-footer["']>[\s\S]*?<\/footer>/i, footerHtml);

  content = content.replace(/-salem\.html/gi, '-chennai.html');
  content = content.replace(/servicecentersalem\.com/gi, 'chennaiservicecenter.com');
  content = content.replace(/Service Center Salem/gi, 'Service Center Chennai');
  content = content.replace(/\bSalem\b/g, 'Chennai');

  AI_REPLACEMENTS.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });

  return content;
}

function transformSitemapHtml(html) {
  let content = html;

  content = content.replace(/<title>.*?<\/title>/i,
    '<title>Service Center Chennai Sitemap | Call 8882055269</title>');
  content = content.replace(/<meta name=["']description["']\s+content=["'].*?["']>/i,
    '<meta name="description" content="Call 8882055269. Service Center Chennai HTML sitemap directory. Easily find all home appliance repair pages, AC, fridge, washing machine, TV, and brand service centers.">');
  content = content.replace(/<link rel=["']canonical["'] href=["'].*?["']>/i,
    `<link rel="canonical" href="${CHENNAI_CONTACT.domain}/sitemap.html">`);
  content = content.replace(/<meta property=["']og:title["'] content=["'].*?["']>/i,
    '<meta property="og:title" content="Sitemap | Service Center Chennai HTML Page Directory">');
  content = content.replace(/<meta property=["']og:description["'] content=["'].*?["']>/i,
    '<meta property="og:description" content="Complete HTML sitemap directory for Service Center Chennai. Easily access all home appliance repair pages, AC, fridge, washing machine, TV, and brand service centers.">');
  content = content.replace(/<meta property=["']og:url["'] content=["'].*?["']>/i,
    `<meta property="og:url" content="${CHENNAI_CONTACT.domain}/sitemap.html">`);

  content = content.replace(/<script type=["']application\/ld\+json["']>[\s\S]*?"@type":\s*"LocalBusiness"[\s\S]*?<\/script>/i,
    `  <script type="application/ld+json">
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
  </script>`);

  content = content.replace(/<span class=["']logo-badge["']>SCS<\/span>\s*<span>Service Center Salem<\/span>/gi,
    `<span class="logo-badge">SCC</span>\n          <span>Service Center Chennai</span>`);

  const contactHtml = generateContactSection();
  content = content.replace(/<section[^>]*class=["'][^"']*contact-location-section[^"']*["'][^>]*>[\s\S]*?<\/section>/i, contactHtml);

  const footerHtml = generateFooter(false);
  content = content.replace(/<footer class=["']site-footer["']>[\s\S]*?<\/footer>/i, footerHtml);

  content = content.replace(/-salem\.html/gi, '-chennai.html');
  content = content.replace(/servicecentersalem\.com/gi, 'chennaiservicecenter.com');
  content = content.replace(/Service Center Salem/gi, 'Service Center Chennai');
  content = content.replace(/\bSalem\b/g, 'Chennai');

  AI_REPLACEMENTS.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });

  return content;
}

function runMigration() {
  console.log('=== Starting Master Salem -> Chennai Migration ===');

  let totalFilesScanned = 0;
  let totalFilesModified = 0;
  let subcategoryFiles = [];

  DIRS.forEach(dir => {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
    files.forEach(file => {
      totalFilesScanned++;
      subcategoryFiles.push({ dir, file, fullPath: path.join(dir, file) });
    });
  });

  totalFilesScanned += 2; // index.html + sitemap.html
  console.log(`Total HTML files scanned: ${totalFilesScanned}`);

  // Process subcategory files
  subcategoryFiles.forEach(({ dir, file, fullPath }) => {
    const originalContent = fs.readFileSync(fullPath, 'utf8');
    const transformedContent = transformPageContent(originalContent, `${dir}/${file}`);

    const newFilename = file.replace(/-salem\.html$/, '-chennai.html');
    const newFullPath = path.join(dir, newFilename);

    fs.writeFileSync(newFullPath, transformedContent, 'utf8');
    if (newFullPath !== fullPath) {
      fs.unlinkSync(fullPath);
    }
    totalFilesModified++;
  });
  console.log(`Processed and renamed ${subcategoryFiles.length} subcategory HTML files.`);

  // Process index.html
  if (fs.existsSync('index.html')) {
    const originalIndex = fs.readFileSync('index.html', 'utf8');
    const transformedIndex = transformIndexHtml(originalIndex);
    fs.writeFileSync('index.html', transformedIndex, 'utf8');
    totalFilesModified++;
    console.log('Updated index.html.');
  }

  // Process sitemap.html
  if (fs.existsSync('sitemap.html')) {
    const originalSitemap = fs.readFileSync('sitemap.html', 'utf8');
    const transformedSitemap = transformSitemapHtml(originalSitemap);
    fs.writeFileSync('sitemap.html', transformedSitemap, 'utf8');
    totalFilesModified++;
    console.log('Updated sitemap.html.');
  }

  // Process sitemap.xml
  if (fs.existsSync('sitemap.xml')) {
    let sitemapXml = fs.readFileSync('sitemap.xml', 'utf8');
    sitemapXml = sitemapXml.replace(/servicecentersalem\.com/gi, 'chennaiservicecenter.com');
    sitemapXml = sitemapXml.replace(/-salem\.html/gi, '-chennai.html');
    fs.writeFileSync('sitemap.xml', sitemapXml, 'utf8');
    console.log('Updated sitemap.xml.');
  }

  // Process sitemap.redirect.xml
  if (fs.existsSync('sitemap.redirect.xml')) {
    let sitemapRedirXml = fs.readFileSync('sitemap.redirect.xml', 'utf8');
    sitemapRedirXml = sitemapRedirXml.replace(/servicecentersalem\.com/gi, 'chennaiservicecenter.com');
    sitemapRedirXml = sitemapRedirXml.replace(/-salem\.html/gi, '-chennai.html');
    sitemapRedirXml = sitemapRedirXml.replace(/Salem/g, 'Chennai');
    fs.writeFileSync('sitemap.redirect.xml', sitemapRedirXml, 'utf8');
    console.log('Updated sitemap.redirect.xml.');
  }

  // Process robots.txt
  if (fs.existsSync('robots.txt')) {
    let robotsTxt = fs.readFileSync('robots.txt', 'utf8');
    robotsTxt = robotsTxt.replace(/servicecentersalem\.com/gi, 'chennaiservicecenter.com');
    fs.writeFileSync('robots.txt', robotsTxt, 'utf8');
    console.log('Updated robots.txt.');
  }

  // Process README.md
  if (fs.existsSync('README.md')) {
    let readme = fs.readFileSync('README.md', 'utf8');
    readme = readme.replace(/servicecentersalem\.com/gi, 'chennaiservicecenter.com');
    readme = readme.replace(/Salem/gi, 'Chennai');
    fs.writeFileSync('README.md', readme, 'utf8');
    console.log('Updated README.md.');
  }

  console.log(`=== Migration Finished! Total HTML files modified: ${totalFilesModified} ===`);
}

runMigration();

/**
 * locality_builder.js
 * Generates randomized, genuine Chennai locality sections with keyword-rich cards.
 */

const {
  NORTH_CHENNAI,
  SOUTH_CHENNAI,
  EAST_CHENNAI,
  WEST_CHENNAI
} = require('./chennai_data');

function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

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

const ACTION_PHRASES = [
  'Repair in',
  'Service in',
  'Doorstep Service in',
  'Technician in',
  'Repair Service in',
  'Home Repair in',
  'Inspection in',
  'Appliance Service in'
];

function buildLocalityCards(localities, brand, appliance, seed) {
  return localities.map((loc, idx) => {
    const phraseIdx = (seed + idx) % ACTION_PHRASES.length;
    const phrase = ACTION_PHRASES[phraseIdx];
    let label = '';
    if (brand && brand !== 'Multi-Brand') {
      label = `📍 ${brand} ${appliance} ${phrase} ${loc}`;
    } else {
      label = `📍 ${appliance} ${phrase} ${loc}`;
    }
    return `          <div class="card" style="padding: 12px 14px; text-align: left;">
            <strong style="color: var(--secondary); font-size: 0.925rem; display: block;">${label}</strong>
          </div>`;
  }).join('\n');
}

function generateChennaiLocalitiesSection(pageSlug, brandName, applianceName) {
  const seed = simpleHash(pageSlug);

  const north = seededShuffle(NORTH_CHENNAI, seed + 11);
  const south = seededShuffle(SOUTH_CHENNAI, seed + 23);
  const east = seededShuffle(EAST_CHENNAI, seed + 37);
  const west = seededShuffle(WEST_CHENNAI, seed + 49);

  const displayTitle = (brandName && brandName !== 'Multi-Brand')
    ? `${brandName} ${applianceName}`
    : applianceName;

  const northCards = buildLocalityCards(north, brandName, applianceName, seed + 1);
  const southCards = buildLocalityCards(south, brandName, applianceName, seed + 2);
  const eastCards = buildLocalityCards(east, brandName, applianceName, seed + 3);
  const westCards = buildLocalityCards(west, brandName, applianceName, seed + 4);

  return `  <!-- Chennai Locality System (4 Directions, 200 Localities) -->
  <section class="section section-alt" id="localities">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">${displayTitle} Repair Service Areas in Chennai</h2>
        <p class="section-subtitle">We provide doorstep inspection and repair across North, South, East, and West Chennai localities (200 areas served).</p>
      </div>

      <!-- North Chennai -->
      <div class="content-box" style="margin-bottom: 24px;">
        <h3 style="color: var(--primary); margin-bottom: 15px;">North Chennai Service Localities (50 Areas)</h3>
        <p style="font-size: 0.925rem; color: var(--text-muted); margin-bottom: 18px;">Doorstep technician service available across North Chennai neighborhoods:</p>
        <div class="cards-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px;">
${northCards}
        </div>
      </div>

      <!-- South Chennai -->
      <div class="content-box" style="margin-bottom: 24px;">
        <h3 style="color: var(--primary); margin-bottom: 15px;">South Chennai Service Localities (50 Areas)</h3>
        <p style="font-size: 0.925rem; color: var(--text-muted); margin-bottom: 18px;">Doorstep technician service available across South Chennai neighborhoods:</p>
        <div class="cards-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px;">
${southCards}
        </div>
      </div>

      <!-- East Chennai -->
      <div class="content-box" style="margin-bottom: 24px;">
        <h3 style="color: var(--primary); margin-bottom: 15px;">East Chennai Service Localities (50 Areas)</h3>
        <p style="font-size: 0.925rem; color: var(--text-muted); margin-bottom: 18px;">Doorstep technician service available across East Chennai neighborhoods:</p>
        <div class="cards-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px;">
${eastCards}
        </div>
      </div>

      <!-- West Chennai -->
      <div class="content-box" style="margin-bottom: 24px;">
        <h3 style="color: var(--primary); margin-bottom: 15px;">West Chennai Service Localities (50 Areas)</h3>
        <p style="font-size: 0.925rem; color: var(--text-muted); margin-bottom: 18px;">Doorstep technician service available across West Chennai neighborhoods:</p>
        <div class="cards-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px;">
${westCards}
        </div>
      </div>
    </div>
  </section>`;
}

module.exports = {
  generateChennaiLocalitiesSection
};

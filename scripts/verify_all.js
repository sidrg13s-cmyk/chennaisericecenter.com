const fs = require('fs');
const path = require('path');

const files = [
  'kitchen-chimney/kitchen-chimney-repair-service-chennai.html',
  'gas-top/gas-top-repair-service-chennai.html',
  'hob/hob-repair-service-chennai.html'
];

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const locIndex = c.indexOf('id="localities"');
  if (locIndex !== -1) {
    const after = c.substring(locIndex);
    const endSec = after.indexOf('</section>');
    const secHtml = after.substring(0, endSec);
    const cards = (secHtml.match(/class="card"/g) || []).length;
    console.log(f, 'Exact Locality Card Count:', cards);
  }
});

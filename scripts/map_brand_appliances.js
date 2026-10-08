const fs = require('fs');

const files = fs.readdirSync('servicecenter').filter(f => f.endsWith('.html') && f !== 'service-center-chennai.html');
const brandAppliances = {};

files.forEach(f => {
  const brand = f.replace('-service-center-chennai.html', '');
  const c = fs.readFileSync('servicecenter/' + f, 'utf8');
  const sections = [];
  if (c.includes('id="ac"') || /Air Conditioner Service Center/i.test(c)) sections.push('AC');
  if (c.includes('id="fridge"') || /Refrigerator Service Center/i.test(c)) sections.push('Refrigerator');
  if (c.includes('id="washing-machine"') || /Washing Machine Service Center/i.test(c)) sections.push('Washing Machine');
  if (c.includes('id="tv"') || /TV Service Center/i.test(c) || /Television Service Center/i.test(c)) sections.push('TV');
  if (c.includes('id="microwave"') || /Microwave/i.test(c)) sections.push('Microwave');
  brandAppliances[brand] = sections;
});

console.log('Brand appliances count:', Object.keys(brandAppliances).length);
fs.writeFileSync('scripts/brand_appliances_map.json', JSON.stringify(brandAppliances, null, 2), 'utf8');
console.log('Saved brand_appliances_map.json');

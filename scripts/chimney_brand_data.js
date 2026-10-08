/**
 * chimney_brand_data.js
 * Aggregator for all 20 kitchen chimney brands metadata:
 * 1. Faber
 * 2. Elica
 * 3. Kutchina
 * 4. Glen
 * 5. Kaff
 * 6. Hindware
 * 7. Crompton
 * 8. Livpure
 * 9. Whirlpool
 * 10. Havells
 * 11. V-Guard
 * 12. Prestige
 * 13. Sunflame
 * 14. Kenstar
 * 15. Sujata
 * 16. Bosch
 * 17. IFB
 * 18. Inalsa
 * 19. Butterfly
 * 20. BlowHot
 */

const { BRANDS_1_5 } = require('./chimney_brands_1_5');
const { BRANDS_6_10 } = require('./chimney_brands_6_10');
const { BRANDS_11_15 } = require('./chimney_brands_11_15');
const { BRANDS_16_20 } = require('./chimney_brands_16_20');

const BRANDS = [
  ...BRANDS_1_5,
  ...BRANDS_6_10,
  ...BRANDS_11_15,
  ...BRANDS_16_20
];

module.exports = {
  BRANDS
};

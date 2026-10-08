/**
 * hob_brand_data.js
 * Aggregator for all 31 hob brand metadata objects matching the user's master list:
 * 1. Prestige
 * 2. Pigeon
 * 3. Butterfly
 * 4. Bajaj
 * 5. Cello
 * 6. Greenchef
 * 7. Glen
 * 8. Faber
 * 9. Khaitan
 * 10. Sunflame
 * 11. Elica
 * 12. Lifelong
 * 13. Sujata
 * 14. Usha
 * 15. Milton
 * 16. Preethi
 * 17. Hindware
 * 18. Bosch
 * 19. V-Guard
 * 20. Suryaflame
 * 21. Crompton
 * 22. Whirlpool
 * 23. Borosil
 * 24. Vidiem
 * 25. Sigri-wala
 * 26. 4uonly
 * 27. A Connect Z
 * 28. Abha Surya
 * 29. Abzonic
 * 30. Aclix
 * 31. Adfresh
 */

const { HOB_BRANDS_1_8 } = require('./hob_brands_1_8');
const { HOB_BRANDS_9_16 } = require('./hob_brands_9_16');
const { HOB_BRANDS_17_24 } = require('./hob_brands_17_24');
const { HOB_BRANDS_25_31 } = require('./hob_brands_25_31');

const BRANDS = [
  ...HOB_BRANDS_1_8,
  ...HOB_BRANDS_9_16,
  ...HOB_BRANDS_17_24,
  ...HOB_BRANDS_25_31
];

module.exports = {
  BRANDS
};

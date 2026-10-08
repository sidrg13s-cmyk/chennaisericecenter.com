/**
 * gas_stove_brand_data.js
 * Aggregator for all 31 Gas Stove brands.
 */

const { GAS_STOVE_BRANDS_1_8 } = require('./gas_stove_brands_1_8');
const { GAS_STOVE_BRANDS_9_16 } = require('./gas_stove_brands_9_16');
const { GAS_STOVE_BRANDS_17_24 } = require('./gas_stove_brands_17_24');
const { GAS_STOVE_BRANDS_25_31 } = require('./gas_stove_brands_25_31');

const ALL_GAS_STOVE_BRANDS = [
  ...GAS_STOVE_BRANDS_1_8,
  ...GAS_STOVE_BRANDS_9_16,
  ...GAS_STOVE_BRANDS_17_24,
  ...GAS_STOVE_BRANDS_25_31
];

module.exports = { ALL_GAS_STOVE_BRANDS };

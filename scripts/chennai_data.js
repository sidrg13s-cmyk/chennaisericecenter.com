/**
 * chennai_data.js
 * Central configuration, genuine Chennai localities, brand mappings, and contact information.
 */

const NORTH_CHENNAI = [
  'Royapuram', 'Washermenpet', 'Tondiarpet', 'Perambur', 'Madhavaram',
  'Kolathur', 'Manali', 'Moolakadai', 'Vyasarpadi', 'Korukkupet',
  'Ennore', 'Tiruvottiyur', 'Minjur', 'Red Hills', 'Kodungaiyur',
  'Broadway', 'Sowcarpet', 'George Town', 'Kasimedu', 'Basin Bridge',
  'Jamalia', 'Pattalam', 'Otteri', 'Purasawalkam', 'Pulianthope',
  'Villivakkam', 'ICF', 'Jawahar Nagar', 'Sembium', 'Retteri',
  'Lakshmipuram', 'Vinayagapuram', 'Surapet', 'Puzhal', 'Kathivakkam',
  'Ernavur', 'Wimco Nagar', 'Tollgate', 'Kaladipet', 'Korattur',
  'Padi', 'Mogappair East', 'Mannurpet', 'Thirumullaivoyal', 'Ambattur OT',
  'Oragadam Ambattur', 'Kallikuppam', 'Menambedu', 'Sidco Nagar', 'TVK Nagar'
];

const SOUTH_CHENNAI = [
  'Adyar', 'Besant Nagar', 'Thiruvanmiyur', 'Velachery', 'Guindy',
  'Madipakkam', 'Pallikaranai', 'Sholinganallur', 'Thoraipakkam', 'Perungudi',
  'Medavakkam', 'Kovilambakkam', 'Nanmangalam', 'Keelkattalai', 'Nanganallur',
  'Alandur', 'Meenambakkam', 'St. Thomas Mount', 'Saidapet', 'Kotturpuram',
  'RA Puram', 'Mandaveli', 'Mylapore', 'Santhome', 'MRC Nagar',
  'Palavakkam', 'Kottivakkam', 'Neelankarai', 'Injambakkam', 'Akkarai',
  'Uthandi', 'Semmancheri', 'Navalur', 'Siruseri', 'Padur',
  'Kelambakkam', 'Tambaram', 'Chromepet', 'Pallavaram', 'Tambaram Sanatorium',
  'Chitlapakkam', 'Selaiyur', 'Sembakkam', 'Hasthinapuram', 'Camp Road',
  'Peerkankaranai', 'Mudichur', 'Perungalathur', 'Vandalur', 'East Tambaram'
];

const EAST_CHENNAI = [
  'Anna Nagar East', 'Kilpauk', 'Nungambakkam', 'Teynampet', 'Alwarpet',
  'Royapettah', 'Gopalapuram', 'Thousand Lights', 'Egmore', 'Chetpet',
  'Shenoy Nagar', 'Aminjikarai', 'Choolaimedu', 'Kodambakkam', 'Vadapalani',
  'Ashok Nagar', 'KK Nagar', 'West Mambalam', 'Triplicane', 'Chepauk',
  'Pudupet', 'Chintadripet', 'Park Town', 'Vepery', 'Kellys',
  'Kilpauk Garden', 'Taylors Road', 'Sterling Road', 'Wallace Garden', 'Poes Garden',
  'Venus Colony', 'CIT Colony', 'Trustpuram', 'Gill Nagar', 'Mahalingapuram',
  'Spurtank Road', 'Greams Road', 'Royapettah High Road', 'Lloyds Road', 'Peters Road',
  'Ice House', 'Pycrofts Road', 'Mirsahibpet', 'Bells Road', 'TTK Road',
  'Eldams Road', 'Venus Colony Alwarpet', 'Harrington Road', 'Ormes Road', 'Balfour Road'
];

const WEST_CHENNAI = [
  'Ambattur', 'Avadi', 'Mogappair West', 'Porur', 'Ramapuram',
  'Valasaravakkam', 'Poonamallee', 'Iyyappanthangal', 'Mangadu', 'Kumananchavadi',
  'Kattupakkam', 'Karambakkam', 'Nolambur', 'Maduravoyal', 'Vanagaram',
  'Ayanambakkam', 'Thiruverkadu', 'Senneerkuppam', 'Paruthipattu', 'Pattabiram',
  'Thiruninravur', 'Nemilichery', 'Mittanamalli', 'Muthapudupet', 'Kovur',
  'Kundrathur', 'Gerugambakkam', 'Moulivakkam', 'Kolapakkam', 'Manapakkam',
  'Nandambakkam', 'Mugalivakkam', 'Ramachandra Nagar', 'Alapakkam', 'Chinmaya Nagar',
  'Nerkundram', 'Thirumangalam', 'Anna Nagar West', 'Anna Nagar Western Extension', 'Padi Pudhu Nagar',
  'Golden Flats', 'JJ Nagar', 'Nolambur Phase 1', 'Nolambur Phase 2', 'Eri Scheme',
  'Jaswant Nagar', 'Athipet', 'Tiruverkadu Co-op Nagar', 'Karayanchavadi', 'Senneerkuppam Bypass'
];

const CHENNAI_CONTACT = {
  businessName: 'Service Center Chennai',
  badge: 'SCC',
  domain: 'https://chennaiservicecenter.com',
  domainNoProtocol: 'chennaiservicecenter.com',
  phone: '8882055269',
  phoneDisplay: '8882055269',
  phoneInt: '+918882055269',
  streetAddress: 'Plot No. 18, 2nd Avenue, Anna Nagar',
  addressLocality: 'Chennai',
  addressRegion: 'Tamil Nadu',
  postalCode: '600040',
  fullAddress: 'Plot No. 18, 2nd Avenue, Anna Nagar, Chennai, Tamil Nadu 600040, India',
  latitude: '13.0850',
  longitude: '80.2100',
  mapEmbedUrl: 'https://maps.google.com/maps?q=Plot+No.+18,+2nd+Avenue,+Anna+Nagar,+Chennai,+Tamil+Nadu+600040,+India&t=&z=15&ie=UTF8&iwloc=&output=embed',
  mapSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Plot+No.+18,+2nd+Avenue,+Anna+Nagar,+Chennai,+Tamil+Nadu+600040,+India',
  openingHours: '6:00 AM – 11:00 PM (Monday – Sunday)'
};

const BRAND_DISPLAY_NAMES = {
  'acer': 'Acer',
  'acerpure': 'Acerpure',
  'aiwa': 'Aiwa',
  'akai': 'Akai',
  'bajaj': 'Bajaj',
  'blue-star': 'Blue Star',
  'bosch': 'Bosch',
  'bpl': 'BPL',
  'carrier': 'Carrier',
  'daewoo': 'Daewoo',
  'daikin': 'Daikin',
  'electrolux': 'Electrolux',
  'faber': 'Faber',
  'godrej': 'Godrej',
  'haier': 'Haier',
  'havells': 'Havells',
  'hisense': 'Hisense',
  'hitachi': 'Hitachi',
  'hyundai': 'Hyundai',
  'ifb': 'IFB',
  'iffalcon': 'iFFALCON',
  'intex': 'Intex',
  'kelvinator': 'Kelvinator',
  'kenstar': 'Kenstar',
  'kodak': 'Kodak',
  'koryo': 'Koryo',
  'liebherr': 'Liebherr',
  'lloyd': 'Lloyd',
  'mi': 'Mi',
  'micromax': 'Micromax',
  'midea': 'Midea',
  'mitsubishi': 'Mitsubishi',
  'morphy-richards': 'Morphy Richards',
  'motorola': 'Motorola',
  'o-general': 'O General',
  'oneplus': 'OnePlus',
  'onida': 'Onida',
  'panasonic': 'Panasonic',
  'philips': 'Philips',
  'redmi': 'Redmi',
  'samsung': 'Samsung',
  'sansui': 'Sansui',
  'sanyo': 'Sanyo',
  'sharp': 'Sharp',
  'siemens': 'Siemens',
  'sony': 'Sony',
  'tcl': 'TCL',
  'thomson': 'Thomson',
  'toshiba': 'Toshiba',
  'videocon': 'Videocon',
  'voltas': 'Voltas',
  'voltas-beko': 'Voltas Beko',
  'vu': 'Vu',
  'vw': 'VW',
  'westinghouse': 'Westinghouse',
  'whirlpool': 'Whirlpool',
  'white-westinghouse': 'White Westinghouse',
  'xiaomi': 'Xiaomi'
};

const AI_REPLACEMENTS = [
  { from: /\bseamless\b/gi, to: 'smooth' },
  { from: /\bcomprehensive\b/gi, to: 'thorough' },
  { from: /\bcutting-edge\b/gi, to: 'advanced' },
  { from: /\bstate-of-the-art\b/gi, to: 'modern' },
  { from: /\bbespoke\b/gi, to: 'custom' },
  { from: /\brobust\b/gi, to: 'sturdy' },
  { from: /\bstreamlined\b/gi, to: 'quick' },
  { from: /\bholistic\b/gi, to: 'complete' },
  { from: /\bunparalleled\b/gi, to: 'reliable' },
  { from: /\bmeticulously\b/gi, to: 'carefully' },
  { from: /\bleveraging\b/gi, to: 'using' },
  { from: /\bfacilitate\b/gi, to: 'help with' },
  { from: /\boptimized solutions\b/gi, to: 'proper repair' },
  { from: /\bpremium solutions\b/gi, to: 'quality service' },
  { from: /\bcustomer-centric\b/gi, to: 'customer-focused' },
  { from: /\bexpertise-driven\b/gi, to: 'experienced' },
  { from: /\bprecision-engineered\b/gi, to: 'properly built' }
];

module.exports = {
  NORTH_CHENNAI,
  SOUTH_CHENNAI,
  EAST_CHENNAI,
  WEST_CHENNAI,
  CHENNAI_CONTACT,
  BRAND_DISPLAY_NAMES,
  AI_REPLACEMENTS
};

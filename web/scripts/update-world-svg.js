#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import countries from 'i18n-iso-countries';
import en from 'i18n-iso-countries/langs/en.json' with { type: 'json' };

// Register English locale
countries.registerLocale(en);

// Path to the World.svelte file
const worldSveltePath = path.join(process.cwd(), 'src/lib/components/home/World.svelte');

// Read the file
let content = fs.readFileSync(worldSveltePath, 'utf-8');

// Pattern to match path elements with id attribute
const idPattern = /<path\s+([^>]*?)id="([A-Z]{2})"([^>]*?)>/g;

// Pattern to match path elements with class attribute containing country name
const classPattern = /<path\s+([^>]*?)class="([^"]+)"([^>]*?)>/g;

// First pass: Add data-country-code to paths with id
content = content.replace(idPattern, (match, before, countryCode, after) => {
  // Check if data-country-code already exists
  if (match.includes('data-country-code')) {
    return match;
  }
  return `<path ${before}id="${countryCode}"${after} data-country-code="${countryCode}">`;
});

// Second pass: Add data-country-code to paths with class
content = content.replace(classPattern, (match, before, className, after) => {
  // Check if data-country-code already exists
  if (match.includes('data-country-code')) {
    return match;
  }

  // Try to get country code from class name
  // Handle multi-word countries (e.g., "United.Kingdom" or "United Kingdom")
  // Special case: "United States US" should extract "US"
  const classWords = className.replace(/\./g, ' ').split(' ');

  // Check if the last word is a 2-letter country code
  const lastWord = classWords[classWords.length - 1];
  if (lastWord && lastWord.length === 2 && lastWord === lastWord.toUpperCase()) {
    return `<path ${before}class="${className}"${after} data-country-code="${lastWord}">`;
  }

  const countryName = classWords[0]; // Get first word for multi-part classes

  // Special mappings for countries with class names
  const specialMappings = {
    Angola: 'AO',
    Argentina: 'AR',
    Australia: 'AU',
    Azerbaijan: 'AZ',
    Albania: 'AL',
    Armenia: 'AM',
    Antarctica: 'AQ',
    Algeria: 'DZ',
    American: 'AS', // American Samoa
    Andorra: 'AD',
    Antigua: 'AG', // Antigua and Barbuda
    Bahamas: 'BS',
    Bahrain: 'BH',
    Bangladesh: 'BD',
    Barbados: 'BB',
    Belarus: 'BY',
    Belgium: 'BE',
    Belize: 'BZ',
    Benin: 'BJ',
    Bermuda: 'BM',
    Bhutan: 'BT',
    Bolivia: 'BO',
    Bosnia: 'BA', // Bosnia and Herzegovina
    Botswana: 'BW',
    Brazil: 'BR',
    British: 'VG', // British Virgin Islands or IO for British Indian Ocean Territory
    Brunei: 'BN',
    Bulgaria: 'BG',
    Burkina: 'BF', // Burkina Faso
    Burundi: 'BI',
    Cambodia: 'KH',
    Cameroon: 'CM',
    Canada: 'CA',
    Canary: 'ES', // Canary Islands (part of Spain)
    Cape: 'CV', // Cape Verde
    Cayman: 'KY', // Cayman Islands
    Central: 'CF', // Central African Republic
    Chad: 'TD',
    Chile: 'CL',
    China: 'CN',
    Christmas: 'CX', // Christmas Island
    Cocos: 'CC', // Cocos Islands
    Colombia: 'CO',
    Comoros: 'KM',
    Congo: 'CG', // or CD for Democratic Republic
    Cook: 'CK', // Cook Islands
    Costa: 'CR', // Costa Rica
    Croatia: 'HR',
    Cuba: 'CU',
    Cyprus: 'CY',
    Czech: 'CZ', // Czech Republic
    Denmark: 'DK',
    Djibouti: 'DJ',
    Dominica: 'DM',
    Dominican: 'DO', // Dominican Republic
    Ecuador: 'EC',
    Egypt: 'EG',
    El: 'SV', // El Salvador
    Equatorial: 'GQ', // Equatorial Guinea
    Eritrea: 'ER',
    Estonia: 'EE',
    Ethiopia: 'ET',
    Falkland: 'FK', // Falkland Islands
    Faroe: 'FO', // Faroe Islands
    Faeroe: 'FO', // Faeroe Islands (alternative spelling)
    Federated: 'FM', // Federated States of Micronesia
    Fiji: 'FJ',
    Finland: 'FI',
    France: 'FR',
    French: 'GF', // French Guiana or PF for French Polynesia
    Gabon: 'GA',
    Gambia: 'GM',
    Georgia: 'GE',
    Germany: 'DE',
    Ghana: 'GH',
    Gibraltar: 'GI',
    Greece: 'GR',
    Greenland: 'GL',
    Grenada: 'GD',
    Guadeloupe: 'GP',
    Guam: 'GU',
    Guatemala: 'GT',
    Guernsey: 'GG',
    Guinea: 'GN',
    Guyana: 'GY',
    Haiti: 'HT',
    Honduras: 'HN',
    Hong: 'HK', // Hong Kong
    Hungary: 'HU',
    Iceland: 'IS',
    India: 'IN',
    Indonesia: 'ID',
    Iran: 'IR',
    Iraq: 'IQ',
    Ireland: 'IE',
    Isle: 'IM', // Isle of Man
    Israel: 'IL',
    Italy: 'IT',
    Ivory: 'CI', // Ivory Coast
    Jamaica: 'JM',
    Japan: 'JP',
    Jersey: 'JE',
    Jordan: 'JO',
    Kazakhstan: 'KZ',
    Kenya: 'KE',
    Kiribati: 'KI',
    Korea: 'KR', // South Korea
    Kuwait: 'KW',
    Kyrgyzstan: 'KG',
    Lao: 'LA', // Lao PDR
    Latvia: 'LV',
    Lebanon: 'LB',
    Lesotho: 'LS',
    Liberia: 'LR',
    Libya: 'LY',
    Liechtenstein: 'LI',
    Lithuania: 'LT',
    Luxembourg: 'LU',
    Macao: 'MO',
    Macedonia: 'MK',
    Madagascar: 'MG',
    Malawi: 'MW',
    Malaysia: 'MY',
    Maldives: 'MV',
    Mali: 'ML',
    Malta: 'MT',
    Marshall: 'MH', // Marshall Islands
    Martinique: 'MQ',
    Mauritania: 'MR',
    Mauritius: 'MU',
    Mayotte: 'YT',
    Mexico: 'MX',
    Micronesia: 'FM',
    Moldova: 'MD',
    Monaco: 'MC',
    Mongolia: 'MN',
    Montenegro: 'ME',
    Montserrat: 'MS',
    Morocco: 'MA',
    Mozambique: 'MZ',
    Myanmar: 'MM',
    Namibia: 'NA',
    Nauru: 'NR',
    Nepal: 'NP',
    Netherlands: 'NL',
    New: 'NZ', // New Zealand or NC for New Caledonia
    Nicaragua: 'NI',
    Niger: 'NE',
    Nigeria: 'NG',
    Niue: 'NU',
    Norfolk: 'NF', // Norfolk Island
    Northern: 'MP', // Northern Mariana Islands
    Norway: 'NO',
    Oman: 'OM',
    Pakistan: 'PK',
    Palau: 'PW',
    Palestine: 'PS',
    Panama: 'PA',
    Papua: 'PG', // Papua New Guinea
    Paraguay: 'PY',
    Peru: 'PE',
    Philippines: 'PH',
    Pitcairn: 'PN',
    Poland: 'PL',
    Portugal: 'PT',
    Puerto: 'PR', // Puerto Rico
    Qatar: 'QA',
    Reunion: 'RE',
    Romania: 'RO',
    Russian: 'RU', // Russian Federation
    Rwanda: 'RW',
    Saint: 'SH', // Could be many Saint islands
    Samoa: 'WS',
    San: 'SM', // San Marino
    Sao: 'ST', // Sao Tome and Principe
    São: 'ST', // São Tomé and Principe
    Saudi: 'SA', // Saudi Arabia
    Senegal: 'SN',
    Serbia: 'RS',
    Seychelles: 'SC',
    Sierra: 'SL', // Sierra Leone
    Singapore: 'SG',
    Slovakia: 'SK',
    Slovenia: 'SI',
    Solomon: 'SB', // Solomon Islands
    Somalia: 'SO',
    South: 'ZA', // South Africa (or SS for South Sudan)
    Spain: 'ES',
    Sri: 'LK', // Sri Lanka
    Sudan: 'SD',
    Suriname: 'SR',
    Svalbard: 'SJ',
    Swaziland: 'SZ',
    Sweden: 'SE',
    Switzerland: 'CH',
    Syrian: 'SY', // Syrian Arab Republic
    Taiwan: 'TW',
    Tajikistan: 'TJ',
    Tanzania: 'TZ',
    Thailand: 'TH',
    Timor: 'TL', // Timor-Leste
    Togo: 'TG',
    Tokelau: 'TK',
    Tonga: 'TO',
    Trinidad: 'TT', // Trinidad and Tobago
    Tunisia: 'TN',
    Turkey: 'TR',
    Turkmenistan: 'TM',
    Turks: 'TC', // Turks and Caicos Islands
    Tuvalu: 'TV',
    Uganda: 'UG',
    Ukraine: 'UA',
    United: 'GB', // United Kingdom (or US for United States, AE for United Arab Emirates)
    Uruguay: 'UY',
    Uzbekistan: 'UZ',
    Vanuatu: 'VU',
    Vatican: 'VA',
    Venezuela: 'VE',
    Viet: 'VN', // Viet Nam
    Virgin: 'VI', // US Virgin Islands
    Wallis: 'WF', // Wallis and Futuna
    Western: 'EH', // Western Sahara
    Yemen: 'YE',
    Zambia: 'ZM',
    Zimbabwe: 'ZW'
  };

  // Check special mappings first
  if (specialMappings[countryName]) {
    return `<path ${before}class="${className}"${after} data-country-code="${specialMappings[countryName]}">`;
  }

  // Try to get code using i18n-iso-countries
  const code = countries.getAlpha2Code(countryName, 'en');
  if (code) {
    return `<path ${before}class="${className}"${after} data-country-code="${code}">`;
  }

  // If we can't find a code, return unchanged
  console.warn(`Could not find country code for class: ${className}`);
  return match;
});

// Write the updated content back
fs.writeFileSync(worldSveltePath, content, 'utf-8');

console.log('Successfully added data-country-code attributes to World.svelte');

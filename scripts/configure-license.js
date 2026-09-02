const fs = require('fs');
const path = require('path');

const target = (process.env.SNITCH_LICENSE_TARGET || process.env.YOUR_PROJECT_LICENSE_TARGET || 'pre').trim().toLowerCase();

const defaults = {
  pre: {
    buyLicenseUrl: 'https://github.com/codewithevilxd/snitch',
    licenseApiBaseUrl: 'https://your-pre-supabase-project-ref.supabase.co/functions/v1',
    supabasePublishableKey: 'YOUR_PRE_SUPABASE_PUBLISHABLE_KEY',
  },
  pro: {
    buyLicenseUrl: 'https://github.com/codewithevilxd/snitch',
    licenseApiBaseUrl: 'https://your-pro-supabase-project-ref.supabase.co/functions/v1',
    supabasePublishableKey: 'YOUR_PRO_SUPABASE_PUBLISHABLE_KEY',
  },
};

const targetUpper = target.toUpperCase();
const config = {
  buyLicenseUrl: process.env[`SNITCH_${targetUpper}_BUY_LICENSE_URL`] || process.env[`YOUR_PROJECT_${targetUpper}_BUY_LICENSE_URL`] || defaults[target]?.buyLicenseUrl || '',
  licenseApiBaseUrl: process.env[`SNITCH_${targetUpper}_LICENSE_API_BASE_URL`] || process.env[`YOUR_PROJECT_${targetUpper}_LICENSE_API_BASE_URL`] || defaults[target]?.licenseApiBaseUrl || '',
  supabasePublishableKey: process.env[`SNITCH_${targetUpper}_SUPABASE_PUBLISHABLE_KEY`] || process.env[`YOUR_PROJECT_${targetUpper}_SUPABASE_PUBLISHABLE_KEY`] || defaults[target]?.supabasePublishableKey || '',
};

for (const [key, value] of Object.entries(config)) {
  if (!value) {
    throw new Error(`Missing ${key} for ${target}. Set ${envPrefix}_${key.replace(/[A-Z]/g, (letter) => `_${letter}`).toUpperCase()}.`);
  }
}

const outputPath = path.join(__dirname, '..', 'src', 'license-config.js');
const output = `module.exports = ${JSON.stringify(config, null, 2)};\n`;

fs.writeFileSync(outputPath, output);
console.log(`Configured Snitch ${target.toUpperCase()} license endpoint: ${config.licenseApiBaseUrl}`);

/** @type {import('next').NextConfig} */
const path = require('path');
// const pathTranslations = require('./pathTranslations.ts');

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    trailingSlash: true,
    output: 'export',
};

module.exports = nextConfig;

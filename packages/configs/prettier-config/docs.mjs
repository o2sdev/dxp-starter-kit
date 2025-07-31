import base from './base.mjs';

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    ...base,
    importOrder: [
        '@dxp/framework',
        '@dxp/framework/sdk',
        '@dxp/ui',
        '@o2s/frontend',
        '@docusaurus',
        '@site',
        '@theme',
        '^(\.\.\/)',
        '^(\.\/)',
    ],
};

export default config;

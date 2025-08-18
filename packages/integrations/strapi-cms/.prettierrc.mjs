import apiConfig from '@dxp/prettier-config/api.mjs';

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    ...apiConfig,
};

export default config;

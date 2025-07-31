// this config is used only so that IDEs (like webstorm) could properly "see" it for every package
import apiConfig from '@dxp/prettier-config/api.mjs';
import uiConfig from '@dxp/prettier-config/ui.mjs';
import webConfig from '@dxp/prettier-config/frontend.mjs';

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    ...apiConfig,
    ...webConfig,
    ...uiConfig,
};

export default config;

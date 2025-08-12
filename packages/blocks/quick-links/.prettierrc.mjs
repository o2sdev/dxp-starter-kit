import apiConfig from "@dxp/prettier-config/api.mjs";
import frontendConfig from "@dxp/prettier-config/frontend.mjs";

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    overrides: [
        {
            files: "./src/api-harmonization/**/*",
            options: apiConfig,
        },
        {
            files: "./src/frontend/**/*",
            options: frontendConfig,
        },
        {
            files: "./src/sdk/**/*",
            options: frontendConfig,
        },
    ],
};

export default config;

import { config as apiConfig } from '@dxp/eslint-config/api';
import { config as frontendConfig } from '@dxp/eslint-config/frontend';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        files: ['src/api-harmonization/**/*'],
        extends: [apiConfig],
    },
    {
        files: ['src/frontend/**/*'],
        extends: [frontendConfig],
    },
    {
        files: ['src/sdk/**/*'],
        extends: [frontendConfig],
    },
]);

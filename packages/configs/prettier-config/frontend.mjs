import base from './base.mjs';

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    ...base,
    importOrder: [
        '@o2s/utils',
        '@dxp/framework',
        '@dxp/framework/sdk',
        '@o2s/integrations',
        '@dxp/ui/lib',
        '@dxp/ui/utils',
        '@dxp/ui/hooks',
        '@dxp/ui/providers',
        '@dxp/ui/components',
        '@dxp/ui/elements',
        '@o2s/frontend',
        '@/api',
        '@/sdk',
        '@/actions',
        '@/utils',
        '@/auth',
        '@/i18n',
        '@/providers',
        '@/templates',
        '@/containers',
        '@/blocks',
        '@/components',
        '@/assets',
        '@/styles',
        '^(\.\.\/)',
        '^(\.\/)',
    ],
};

export default config;

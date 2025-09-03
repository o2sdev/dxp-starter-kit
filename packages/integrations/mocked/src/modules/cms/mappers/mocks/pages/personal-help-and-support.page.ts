import { CMS } from '@dxp/framework/modules';

export const PAGE_PERSONAL_HELP_AND_SUPPORT_1_EN: CMS.Model.Page.Page = {
    id: 'personal-help-and-support-1',
    slug: '/personal/help-and-support',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Help and Support',
        description:
            "Demo app of Digital Experience Platform Kit. Build future-proof portals with composable architecture and a modern frontend tech stack. DXP offers a Next.js boilerplate, an API integration & data normalization server, and capabilities to integrate headless APIs like CMS, CRM, Search or headless e-commerce. It's powered by Next.js, React.js, TypeScript, and NestJS.",
        keywords: [
            'open source portal',
            'headless portal',
            'composable frontend',
            'fullstack framework',
            'composable architecture',
            'MACH',
            'Next.js',
            'TypeScript',
            'NestJS',
            'headless integration',
            'portal framework',
            'headless CMS',
            'headless self service',
            'CRM headless frontend',
            'e-commerce API',
            'open-source frontend',
            'composable CX',
            'digital experience',
            'digital experience platform',
            'frontend starter',
        ],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/dxp-social-card-1.png',
            width: 150,
            height: 150,
            alt: 'Digital Experience Platform Kit - The Open Source Composable Frontend for Portals',
        },
    },
    parent: {
        slug: '/personal',
        seo: {
            title: 'Personal',
        },
    },
    theme: 'personal',
    permissions: [],
    hasOwnTitle: false,
    showBreadcrumbs: true,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                    layout: {
                        variant: 'narrow',
                        spacing: 'large',
                        background: 'none',
                    },
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_PERSONAL_HELP_AND_SUPPORT_1_DE: CMS.Model.Page.Page = {
    id: 'personal-help-and-support-1',
    slug: '/personlich/hilfe-und-support',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Hilfe und Support | Persönlich',
        description:
            "Demo app of Digital Experience Platform Kit. Build future-proof portals with composable architecture and a modern frontend tech stack. DXP offers a Next.js boilerplate, an API integration & data normalization server, and capabilities to integrate headless APIs like CMS, CRM, Search or headless e-commerce. It's powered by Next.js, React.js, TypeScript, and NestJS.",
        keywords: [
            'open source portal',
            'headless portal',
            'composable frontend',
            'fullstack framework',
            'composable architecture',
            'MACH',
            'Next.js',
            'TypeScript',
            'NestJS',
            'headless integration',
            'portal framework',
            'headless CMS',
            'headless self service',
            'CRM headless frontend',
            'e-commerce API',
            'open-source frontend',
            'composable CX',
            'digital experience',
            'digital experience platform',
            'frontend starter',
        ],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/dxp-social-card-1.png',
            width: 150,
            height: 150,
            alt: 'Digital Experience Platform Kit - The Open Source Composable Frontend for Portals',
        },
    },
    parent: {
        slug: '/personlich',
        seo: {
            title: 'Persönlich',
        },
    },
    theme: 'personal',
    permissions: [],
    hasOwnTitle: false,
    showBreadcrumbs: true,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                    layout: {
                        variant: 'narrow',
                        spacing: 'large',
                        background: 'none',
                    },
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_PERSONAL_HELP_AND_SUPPORT_1_PL: CMS.Model.Page.Page = {
    id: 'personal-help-and-support-1',
    slug: '/indywidualny/pomoc-i-wsparcie',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Pomoc i wsparcie | Indywidualny',
        description:
            "Demo app of Digital Experience Platform Kit. Build future-proof portals with composable architecture and a modern frontend tech stack. DXP offers a Next.js boilerplate, an API integration & data normalization server, and capabilities to integrate headless APIs like CMS, CRM, Search or headless e-commerce. It's powered by Next.js, React.js, TypeScript, and NestJS.",
        keywords: [
            'open source portal',
            'headless portal',
            'composable frontend',
            'fullstack framework',
            'composable architecture',
            'MACH',
            'Next.js',
            'TypeScript',
            'NestJS',
            'headless integration',
            'portal framework',
            'headless CMS',
            'headless self service',
            'CRM headless frontend',
            'e-commerce API',
            'open-source frontend',
            'composable CX',
            'digital experience',
            'digital experience platform',
            'frontend starter',
        ],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/dxp-social-card-1.png',
            width: 150,
            height: 150,
            alt: 'Digital Experience Platform Kit - The Open Source Composable Frontend for Portals',
        },
    },
    parent: {
        slug: '/indywidualny',
        seo: {
            title: 'Indywidualny',
        },
    },
    theme: 'personal',
    permissions: [],
    hasOwnTitle: false,
    showBreadcrumbs: true,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                    layout: {
                        variant: 'narrow',
                        spacing: 'large',
                        background: 'none',
                    },
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

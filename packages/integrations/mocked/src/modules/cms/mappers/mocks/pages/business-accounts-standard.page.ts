import { CMS } from '@dxp/framework/modules';

export const PAGE_BUSINESS_ACCOUNTS_STANDARD_EN: CMS.Model.Page.Page = {
    id: 'business-accounts-standard-1',
    slug: '/business/accounts/standard',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Standard account',
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
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/feature/image-optimization/packages/integrations/mocked/public/images/dxp-social-card-1.png',
            width: 150,
            height: 150,
            alt: 'Digital Experience Platform Kit - The Open Source Composable Frontend for Portals',
        },
    },
    theme: 'business',
    parent: {
        slug: '/business/accounts',
        seo: {
            title: 'Accounts',
        },
        parent: {
            slug: '/business',
            seo: {
                title: 'Business',
            },
        },
    },
    permissions: [],
    hasOwnTitle: true,
    showBreadcrumbs: true,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'HeroSectionBlock',
                    id: 'hero-section-51',
                    layout: {
                        variant: 'wide',
                        spacing: 'small',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-52',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-53',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-54',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                    layout: {
                        variant: 'narrow',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'DocumentListBlock',
                    id: 'document-list-1',
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

export const PAGE_BUSINESS_ACCOUNTS_STANDARD_DE: CMS.Model.Page.Page = {
    id: 'business-accounts-standard-1',
    slug: '/geschaftlich/konten/standard',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Standardkonto',
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
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/feature/image-optimization/packages/integrations/mocked/public/images/dxp-social-card-1.png',
            width: 150,
            height: 150,
            alt: 'Digital Experience Platform Kit - The Open Source Composable Frontend for Portals',
        },
    },
    theme: 'business',
    parent: {
        slug: '/geschaftlich/konten',
        seo: {
            title: 'Konten',
        },
        parent: {
            slug: '/geschaftlich',
            seo: {
                title: 'Geschäftlich',
            },
        },
    },
    permissions: [],
    hasOwnTitle: true,
    showBreadcrumbs: true,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'HeroSectionBlock',
                    id: 'hero-section-51',
                    layout: {
                        variant: 'wide',
                        spacing: 'small',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-52',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-53',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-54',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                    layout: {
                        variant: 'narrow',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'DocumentListBlock',
                    id: 'document-list-1',
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

export const PAGE_BUSINESS_ACCOUNTS_STANDARD_PL: CMS.Model.Page.Page = {
    id: 'business-accounts-standard-1',
    slug: '/firma/konta/standard',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Standardowe konto',
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
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/feature/image-optimization/packages/integrations/mocked/public/images/dxp-social-card-1.png',
            width: 150,
            height: 150,
            alt: 'Digital Experience Platform Kit - The Open Source Composable Frontend for Portals',
        },
    },
    theme: 'business',
    parent: {
        slug: '/firma/konta',
        seo: {
            title: 'Konta',
        },
        parent: {
            slug: '/firma',
            seo: {
                title: 'Firma',
            },
        },
    },
    permissions: [],
    hasOwnTitle: true,
    showBreadcrumbs: true,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'HeroSectionBlock',
                    id: 'hero-section-51',
                    layout: {
                        variant: 'wide',
                        spacing: 'small',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-52',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-53',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-54',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                    layout: {
                        variant: 'narrow',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'DocumentListBlock',
                    id: 'document-list-1',
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

import { CMS } from '@dxp/framework/modules';

export const PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_EN: CMS.Model.Page.Page = {
    id: 'personal-accounts-savings-account-1',
    slug: '/personal/accounts/savings-account',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Savings Account',
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
    theme: 'personal',
    parent: {
        slug: '/personal/accounts',
        seo: {
            title: 'Accounts',
        },
        parent: {
            slug: '/personal',
            seo: {
                title: 'Personal',
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
                    id: 'hero-section-3',
                    layout: {
                        variant: 'wide',
                        spacing: 'small',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-4',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-5',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-6',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'MediaSectionBlock',
                    id: 'media-section-2',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'brand',
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

export const PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_DE: CMS.Model.Page.Page = {
    id: 'personal-accounts-savings-account-1',
    slug: '/personlich/konten/sparen-konto',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Sparen Konto',
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
    theme: 'personal',
    parent: {
        slug: '/personlich/konten',
        seo: {
            title: 'Konten',
        },
        parent: {
            slug: '/personlich',
            seo: {
                title: 'Persönlich',
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
                    id: 'hero-section-3',
                    layout: {
                        variant: 'wide',
                        spacing: 'small',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-4',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-5',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-6',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'MediaSectionBlock',
                    id: 'media-section-2',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'brand',
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

export const PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_PL: CMS.Model.Page.Page = {
    id: 'personal-accounts-savings-account-1',
    slug: '/indywidualny/konta/konto-oszczednosciowe',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Konto Oszczędnościowe | Konta | Indywidualny',
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
    theme: 'personal',
    parent: {
        slug: '/indywidualny/konta',
        seo: {
            title: 'Konta',
        },
        parent: {
            slug: '/indywidualny',
            seo: {
                title: 'Indywidualny',
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
                    id: 'hero-section-3',
                    layout: {
                        variant: 'wide',
                        spacing: 'small',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-4',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-5',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-6',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'MediaSectionBlock',
                    id: 'media-section-2',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'brand',
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

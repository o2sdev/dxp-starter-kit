import { CMS } from '@dxp/framework/modules';

export const PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_EN: CMS.Model.Page.Page = {
    id: 'personal-accounts-everyday-account-1',
    slug: '/personal/accounts/everyday-account',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Everyday Account',
        description: 'Everyday Account',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
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
                    id: 'hero-section-2',
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
                    __typename: 'CtaSectionBlock',
                    id: 'media-section-2',
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

export const PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_DE: CMS.Model.Page.Page = {
    id: 'personal-accounts-everyday-account-1',
    slug: '/personlich/konten/tageskonto',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Tageskonto',
        description: 'Tageskonto',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
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
                    id: 'hero-section-2',
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
                    __typename: 'CtaSectionBlock',
                    id: 'media-section-2',
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

export const PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_PL: CMS.Model.Page.Page = {
    id: 'personal-accounts-everyday-account-1',
    slug: '/indywidualny/konta/konto-codzienne',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Konto Codzienne',
        description: 'Konto Codzienne',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    parent: {
        slug: '/indywidualny/konta',
        seo: {
            title: 'Konten',
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
                    id: 'hero-section-2',
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
                    __typename: 'CtaSectionBlock',
                    id: 'media-section-2',
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

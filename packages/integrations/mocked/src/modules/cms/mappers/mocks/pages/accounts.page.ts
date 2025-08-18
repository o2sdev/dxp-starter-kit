import { CMS } from '@dxp/framework/modules';

export const PAGE_ACCOUNTS_EN: CMS.Model.Page.Page = {
    id: 'accounts',
    slug: '/',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Accounts',
        description: 'Accounts',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    permissions: [],
    hasOwnTitle: false,
    showBreadcrumbs: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'FeatureSectionGridBlock',
                    id: 'feature-section-grid-1',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_ACCOUNTS_DE: CMS.Model.Page.Page = {
    id: 'accounts',
    slug: '/',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Accounts',
        description: 'Accounts',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    permissions: [],
    hasOwnTitle: false,
    showBreadcrumbs: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'FeatureSectionGridBlock',
                    id: 'feature-section-grid-1',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_ACCOUNTS_PL: CMS.Model.Page.Page = {
    id: 'accounts',
    slug: '/',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Accounts',
        description: 'Accounts',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    permissions: [],
    hasOwnTitle: false,
    showBreadcrumbs: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'FeatureSectionGridBlock',
                    id: 'feature-section-grid-1',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

import { CMS } from '@dxp/framework/modules';

export const PAGE_HELP_AND_SUPPORT_EN: CMS.Model.Page.Page = {
    id: 'help-and-support',
    slug: '/help-and-support',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Help and Support',
        description: 'Help and Support',
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
    showBreadcrumbs: true,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
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

export const PAGE_HELP_AND_SUPPORT_DE: CMS.Model.Page.Page = {
    id: 'help-and-support',
    slug: '/hilfe-und-support',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Hilfe und Support',
        description: 'Hilfe und Support',
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
    showBreadcrumbs: true,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
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

export const PAGE_HELP_AND_SUPPORT_PL: CMS.Model.Page.Page = {
    id: 'help-and-support',
    slug: '/pomoc-i-wsparcie',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Pomoc i wsparcie',
        description: 'Pomoc i wsparcie',
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
    showBreadcrumbs: true,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
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

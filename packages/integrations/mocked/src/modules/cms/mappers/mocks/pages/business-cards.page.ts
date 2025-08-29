import { CMS } from '@dxp/framework/modules';

export const PAGE_BUSINESS_CARDS_EN: CMS.Model.Page.Page = {
    id: 'business-cards-1',
    slug: '/business/cards',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Cards',
        description: 'Cards',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    parent: {
        slug: '/business',
        seo: {
            title: 'Business',
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
                    __typename: 'PricingSectionBlock',
                    id: 'pricing-section-51',
                    layout: {
                        variant: 'wide',
                        spacing: 'small',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-55',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-56',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-57',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-2',
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

export const PAGE_BUSINESS_CARDS_DE: CMS.Model.Page.Page = {
    id: 'business-cards-1',
    slug: '/geschaftlich/karten',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Karten',
        description: 'Karten',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    parent: {
        slug: '/geschaftlich',
        seo: {
            title: 'Geschäftlich',
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
                    __typename: 'PricingSectionBlock',
                    id: 'pricing-section-51',
                    layout: {
                        variant: 'wide',
                        spacing: 'small',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-55',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionGridBlock',
                    id: 'feature-section-grid-56',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-57',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-2',
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

export const PAGE_BUSINESS_CARDS_PL: CMS.Model.Page.Page = {
    id: 'business-cards-1',
    slug: '/firma/karty',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Karty',
        description: 'Karty',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    parent: {
        slug: '/firma',
        seo: {
            title: 'Firma',
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
                    __typename: 'PricingSectionBlock',
                    id: 'pricing-section-51',
                    layout: {
                        variant: 'wide',
                        spacing: 'small',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-55',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionGridBlock',
                    id: 'feature-section-grid-56',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-57',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-2',
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

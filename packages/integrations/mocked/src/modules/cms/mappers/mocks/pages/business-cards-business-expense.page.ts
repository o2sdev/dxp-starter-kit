import { CMS } from '@dxp/framework/modules';

export const PAGE_BUSINESS_CARDS_BUSINESS_EXPENSE_EN: CMS.Model.Page.Page = {
    id: 'business-cards-business-expense-1',
    slug: '/business/cards/business-expense',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Business Expense',
        description: 'Business Expense',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    parent: {
        slug: '/business/cards',
        seo: {
            title: 'Cards',
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
                    id: 'hero-section-54',
                    layout: {
                        variant: 'wide',
                        spacing: 'small',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-58',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-59',
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

export const PAGE_BUSINESS_CARDS_BUSINESS_EXPENSE_DE: CMS.Model.Page.Page = {
    id: 'business-cards-business-expense-1',
    slug: '/geschaftlich/karten/business-expense',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Geschäftliche Ausgaben',
        description: 'Geschäftliche Ausgaben',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    parent: {
        slug: '/geschaftlich/karten',
        seo: {
            title: 'Karten',
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
                    id: 'hero-section-54',
                    layout: {
                        variant: 'wide',
                        spacing: 'small',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-58',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-59',
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

export const PAGE_BUSINESS_CARDS_BUSINESS_EXPENSE_PL: CMS.Model.Page.Page = {
    id: 'business-cards-business-expense-1',
    slug: '/firma/karty/business-expense',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Business Expense',
        description: 'Business Expense',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    parent: {
        slug: '/firma/karty',
        seo: {
            title: 'Karty',
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
                    id: 'hero-section-54',
                    layout: {
                        variant: 'wide',
                        spacing: 'small',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-58',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-59',
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

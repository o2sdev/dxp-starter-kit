import { CMS } from '@dxp/framework/modules';

export const PAGE_DASHBOARD_EN: CMS.Model.Page.Page = {
    id: 'dashboard',
    slug: '/',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Dashboard',
        description: 'Dashboard',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    permissions: [],
    hasOwnTitle: true,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'HeroBannerBlock',
                    id: 'hero-banner-1',
                },
                {
                    __typename: 'QuickLinksBlock',
                    id: 'quick-links-1',
                },
                {
                    __typename: 'MediaSectionBlock',
                    id: 'media-section-1',
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-1',
                },
                {
                    __typename: 'CtaSectionBlock',
                    id: 'cta-section-1',
                },
                {
                    __typename: 'BentoGridBlock',
                    id: 'bento-grid-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_DASHBOARD_DE: CMS.Model.Page.Page = {
    id: 'dashboard',
    slug: '/',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Dashboard',
        description: 'Dashboard',
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
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'HeroBannerBlock',
                    id: 'hero-banner-1',
                },
                {
                    __typename: 'QuickLinksBlock',
                    id: 'quick-links-1',
                },
                {
                    __typename: 'MediaSectionBlock',
                    id: 'media-section-1',
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-1',
                },
                {
                    __typename: 'CtaSectionBlock',
                    id: 'cta-section-1',
                },
                {
                    __typename: 'BentoGridBlock',
                    id: 'bento-grid-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_DASHBOARD_PL: CMS.Model.Page.Page = {
    id: 'dashboard',
    slug: '/',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Dashboard',
        description: 'Dashboard',
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
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'HeroBannerBlock',
                    id: 'hero-banner-1',
                },
                {
                    __typename: 'QuickLinksBlock',
                    id: 'quick-links-1',
                },
                {
                    __typename: 'MediaSectionBlock',
                    id: 'media-section-1',
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-1',
                },
                {
                    __typename: 'CtaSectionBlock',
                    id: 'cta-section-1',
                },
                {
                    __typename: 'BentoGridBlock',
                    id: 'bento-grid-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

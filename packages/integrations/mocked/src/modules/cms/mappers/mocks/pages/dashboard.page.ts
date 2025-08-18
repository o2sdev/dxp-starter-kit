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
    showBreadcrumbs: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'HeroSectionBlock',
                    id: 'hero-section-1',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'QuickLinksBlock',
                    id: 'quick-links-1',
                    layout: {
                        variant: 'wide',
                        spacing: 'small',
                        background: 'none',
                    },
                },
                {
                    __typename: 'MediaSectionBlock',
                    id: 'media-section-1',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'brand',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-1',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'CtaSectionBlock',
                    id: 'cta-section-1',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'BentoGridBlock',
                    id: 'bento-grid-1',
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
                        variant: 'narrow',
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
    showBreadcrumbs: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'HeroSectionBlock',
                    id: 'hero-section-1',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'QuickLinksBlock',
                    id: 'quick-links-1',
                    layout: {
                        variant: 'wide',
                        spacing: 'small',
                        background: 'none',
                    },
                },
                {
                    __typename: 'MediaSectionBlock',
                    id: 'media-section-1',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'brand',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-1',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'CtaSectionBlock',
                    id: 'cta-section-1',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'BentoGridBlock',
                    id: 'bento-grid-1',
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
                        variant: 'narrow',
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
    showBreadcrumbs: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'HeroSectionBlock',
                    id: 'hero-section-1',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'QuickLinksBlock',
                    id: 'quick-links-1',
                    layout: {
                        variant: 'wide',
                        spacing: 'small',
                        background: 'none',
                    },
                },
                {
                    __typename: 'MediaSectionBlock',
                    id: 'media-section-1',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'brand',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-1',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'CtaSectionBlock',
                    id: 'cta-section-1',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'BentoGridBlock',
                    id: 'bento-grid-1',
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
                        variant: 'narrow',
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

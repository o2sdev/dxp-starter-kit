import { CMS } from '@dxp/framework/modules';

export const PAGE_BUSINESS_EN: CMS.Model.Page.Page = {
    id: 'business-1',
    slug: '/business',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Business',
        description: 'Business',
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
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_BUSINESS_DE: CMS.Model.Page.Page = {
    id: 'business-1',
    slug: '/geschäftlich',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Business',
        description: 'Business',
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
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_BUSINESS_PL: CMS.Model.Page.Page = {
    id: 'business-1',
    slug: '/firma',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Business',
        description: 'Business',
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
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

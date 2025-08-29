import { CMS } from '@dxp/framework/modules';

export const PAGE_HOME_EN: CMS.Model.Page.Page = {
    id: 'personal-1',
    slug: '/',
    locale: 'en',
    theme: 'personal',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Personal',
        description: 'Personal',
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
    redirect: '/personal',
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_HOME_DE: CMS.Model.Page.Page = {
    id: 'personal-1',
    slug: '/',
    locale: 'de',
    theme: 'personal',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Personal',
        description: 'Personal',
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
    redirect: '/persönlich',
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_HOME_PL: CMS.Model.Page.Page = {
    id: 'personal-1',
    slug: '/',
    locale: 'pl',
    theme: 'personal',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Personal',
        description: 'Personal',
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
    redirect: '/indywidualny',
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

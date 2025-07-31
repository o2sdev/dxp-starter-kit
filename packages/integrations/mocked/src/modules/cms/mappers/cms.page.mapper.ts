import { CMS } from '@dxp/framework/modules';

import {
    PAGE_HELP_AND_SUPPORT_DE,
    PAGE_HELP_AND_SUPPORT_EN,
    PAGE_HELP_AND_SUPPORT_PL,
} from './mocks/pages/knowledge-base.page';

export const mapPage = (slug: string, locale: string): CMS.Model.Page.Page | undefined => {
    switch (slug) {
        case '/':
            return locale === 'pl'
                ? PAGE_HELP_AND_SUPPORT_PL
                : locale === 'de'
                  ? PAGE_HELP_AND_SUPPORT_DE
                  : PAGE_HELP_AND_SUPPORT_EN;

        default:
            return undefined;
    }
};

export const getAllPages = (locale: string): CMS.Model.Page.Page[] => {
    switch (locale) {
        case 'pl':
            return [PAGE_HELP_AND_SUPPORT_PL];
        case 'de':
            return [PAGE_HELP_AND_SUPPORT_DE];
        case 'en':
            return [PAGE_HELP_AND_SUPPORT_EN];
        default:
            return [];
    }
};

export const getAlternativePages = (id: string, slug: string, locale: string): CMS.Model.Page.Page[] => {
    return [PAGE_HELP_AND_SUPPORT_DE, PAGE_HELP_AND_SUPPORT_EN, PAGE_HELP_AND_SUPPORT_PL]
        .filter((page) => page.id === id)
        .map((page) => mapPage(page.slug, locale)!)
        .map((page) => {
            return {
                ...page,
                slug: page.slug.replace('(.+)', slug.match(/(.+)\/(.+)/)?.[2] || ''),
            };
        });
};

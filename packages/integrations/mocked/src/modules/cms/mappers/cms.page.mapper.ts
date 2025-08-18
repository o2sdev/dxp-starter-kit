import { CMS } from '@dxp/framework/modules';

import { PAGE_ACCOUNTS_DE, PAGE_ACCOUNTS_EN, PAGE_ACCOUNTS_PL } from './mocks/pages/accounts.page';
import { PAGE_DASHBOARD_DE, PAGE_DASHBOARD_EN, PAGE_DASHBOARD_PL } from './mocks/pages/dashboard.page';
import {
    PAGE_HELP_AND_SUPPORT_DE,
    PAGE_HELP_AND_SUPPORT_EN,
    PAGE_HELP_AND_SUPPORT_PL,
} from './mocks/pages/knowledge-base.page';

export const mapPage = (slug: string, locale: string): CMS.Model.Page.Page | undefined => {
    switch (slug) {
        case '/':
            return locale === 'pl' ? PAGE_DASHBOARD_PL : locale === 'de' ? PAGE_DASHBOARD_DE : PAGE_DASHBOARD_EN;

        case '/accounts':
            return PAGE_ACCOUNTS_EN;

        case '/konten':
            return PAGE_ACCOUNTS_DE;

        case '/konta':
            return PAGE_ACCOUNTS_PL;

        case '/help-and-support':
            return PAGE_HELP_AND_SUPPORT_EN;

        case '/hilfe-und-support':
            return PAGE_HELP_AND_SUPPORT_DE;

        case '/pomoc-i-wsparcie':
            return PAGE_HELP_AND_SUPPORT_PL;

        default:
            return undefined;
    }
};

export const getAllPages = (locale: string): CMS.Model.Page.Page[] => {
    switch (locale) {
        case 'pl':
            return [PAGE_DASHBOARD_PL, PAGE_HELP_AND_SUPPORT_PL, PAGE_ACCOUNTS_PL];
        case 'de':
            return [PAGE_DASHBOARD_DE, PAGE_HELP_AND_SUPPORT_DE, PAGE_ACCOUNTS_DE];
        case 'en':
            return [PAGE_DASHBOARD_EN, PAGE_HELP_AND_SUPPORT_EN, PAGE_ACCOUNTS_EN];
        default:
            return [];
    }
};

export const getAlternativePages = (id: string, slug: string, locale: string): CMS.Model.Page.Page[] => {
    return [
        PAGE_DASHBOARD_DE,
        PAGE_DASHBOARD_EN,
        PAGE_DASHBOARD_PL,
        PAGE_ACCOUNTS_DE,
        PAGE_ACCOUNTS_EN,
        PAGE_ACCOUNTS_PL,
        PAGE_HELP_AND_SUPPORT_DE,
        PAGE_HELP_AND_SUPPORT_EN,
        PAGE_HELP_AND_SUPPORT_PL,
    ]
        .filter((page) => page.id === id)
        .map((page) => mapPage(page.slug, locale)!)
        .map((page) => {
            return {
                ...page,
                slug: page.slug.replace('(.+)', slug.match(/(.+)\/(.+)/)?.[2] || ''),
            };
        });
};

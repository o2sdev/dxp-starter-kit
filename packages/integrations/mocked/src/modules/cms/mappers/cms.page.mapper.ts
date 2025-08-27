import { CMS } from '@dxp/framework/modules';

import {
    PAGE_BUSINESS_ACCOUNTS_DE,
    PAGE_BUSINESS_ACCOUNTS_EN,
    PAGE_BUSINESS_ACCOUNTS_PL,
} from './mocks/pages/business-accounts.page';
import { PAGE_BUSINESS_DE, PAGE_BUSINESS_EN, PAGE_BUSINESS_PL } from './mocks/pages/business.page';
import { PAGE_HOME_DE, PAGE_HOME_EN, PAGE_HOME_PL } from './mocks/pages/home.page';
import {
    PAGE_HELP_AND_SUPPORT_DE,
    PAGE_HELP_AND_SUPPORT_EN,
    PAGE_HELP_AND_SUPPORT_PL,
} from './mocks/pages/knowledge-base.page';
import {
    PAGE_PERSONAL_ACCOUNTS_DE,
    PAGE_PERSONAL_ACCOUNTS_EN,
    PAGE_PERSONAL_ACCOUNTS_PL,
} from './mocks/pages/personal-accounts.page';
import {
    PAGE_PERSONAL_CARDS_DE,
    PAGE_PERSONAL_CARDS_EN,
    PAGE_PERSONAL_CARDS_PL,
} from './mocks/pages/personal-cards.page';
import { PAGE_PERSONAL_DE, PAGE_PERSONAL_EN, PAGE_PERSONAL_PL } from './mocks/pages/personal.page';

export const mapPage = (slug: string, locale: string): CMS.Model.Page.Page | undefined => {
    switch (slug) {
        case '/':
            return locale === 'en' ? PAGE_HOME_EN : locale === 'de' ? PAGE_HOME_DE : PAGE_HOME_PL;

        case '/personal':
            return PAGE_PERSONAL_EN;

        case '/persönlich':
            return PAGE_PERSONAL_DE;

        case '/indywidualny':
            return PAGE_PERSONAL_PL;

        case '/personal/accounts':
            return PAGE_PERSONAL_ACCOUNTS_EN;

        case '/persönlich/konten':
            return PAGE_PERSONAL_ACCOUNTS_DE;

        case '/indywidualny/konta':
            return PAGE_PERSONAL_ACCOUNTS_PL;

        case '/personal/cards':
            return PAGE_PERSONAL_CARDS_EN;

        case '/persönlich/karten':
            return PAGE_PERSONAL_CARDS_DE;

        case '/indywidualny/karty':
            return PAGE_PERSONAL_CARDS_PL;

        case '/business':
            return PAGE_BUSINESS_EN;

        case '/geschäftlich':
            return PAGE_BUSINESS_DE;

        case '/firma':
            return PAGE_BUSINESS_PL;

        case '/business/accounts':
            return PAGE_BUSINESS_ACCOUNTS_EN;

        case '/geschäftlich/konten':
            return PAGE_BUSINESS_ACCOUNTS_DE;

        case '/firma/konta':
            return PAGE_BUSINESS_ACCOUNTS_PL;

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
            return [
                PAGE_BUSINESS_PL,
                PAGE_HELP_AND_SUPPORT_PL,
                PAGE_PERSONAL_ACCOUNTS_PL,
                PAGE_BUSINESS_ACCOUNTS_PL,
                PAGE_PERSONAL_PL,
                PAGE_PERSONAL_CARDS_PL,
            ];
        case 'de':
            return [
                PAGE_BUSINESS_DE,
                PAGE_HELP_AND_SUPPORT_DE,
                PAGE_PERSONAL_ACCOUNTS_DE,
                PAGE_BUSINESS_ACCOUNTS_DE,
                PAGE_PERSONAL_DE,
                PAGE_PERSONAL_CARDS_DE,
            ];
        case 'en':
            return [
                PAGE_BUSINESS_EN,
                PAGE_HELP_AND_SUPPORT_EN,
                PAGE_PERSONAL_ACCOUNTS_EN,
                PAGE_BUSINESS_ACCOUNTS_EN,
                PAGE_PERSONAL_EN,
                PAGE_PERSONAL_CARDS_EN,
            ];
        default:
            return [];
    }
};

export const getAlternativePages = (id: string, slug: string, locale: string): CMS.Model.Page.Page[] => {
    return [
        PAGE_BUSINESS_DE,
        PAGE_BUSINESS_EN,
        PAGE_BUSINESS_PL,
        PAGE_PERSONAL_DE,
        PAGE_PERSONAL_EN,
        PAGE_PERSONAL_PL,
        PAGE_PERSONAL_ACCOUNTS_DE,
        PAGE_PERSONAL_ACCOUNTS_EN,
        PAGE_PERSONAL_ACCOUNTS_PL,
        PAGE_BUSINESS_ACCOUNTS_DE,
        PAGE_BUSINESS_ACCOUNTS_EN,
        PAGE_BUSINESS_ACCOUNTS_PL,
        PAGE_HELP_AND_SUPPORT_DE,
        PAGE_HELP_AND_SUPPORT_EN,
        PAGE_HELP_AND_SUPPORT_PL,
        PAGE_PERSONAL_CARDS_DE,
        PAGE_PERSONAL_CARDS_EN,
        PAGE_PERSONAL_CARDS_PL,
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

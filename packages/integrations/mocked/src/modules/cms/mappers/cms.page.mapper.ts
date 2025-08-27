import { CMS } from '@dxp/framework/modules';

import {
    PAGE_BUSINESS_ACCOUNTS_DE,
    PAGE_BUSINESS_ACCOUNTS_EN,
    PAGE_BUSINESS_ACCOUNTS_PL,
} from './mocks/pages/business-accounts.page';
import { PAGE_BUSINESS_DE, PAGE_BUSINESS_EN, PAGE_BUSINESS_PL } from './mocks/pages/business.page';
import {
    PAGE_HELP_AND_SUPPORT_DE,
    PAGE_HELP_AND_SUPPORT_EN,
    PAGE_HELP_AND_SUPPORT_PL,
} from './mocks/pages/knowledge-base.page';
import {
    PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_DE,
    PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_EN,
    PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_PL,
} from './mocks/pages/personal-accounts-everyday-account.page';
import {
    PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_DE,
    PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_EN,
    PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_PL,
} from './mocks/pages/personal-accounts-savings-account.page';
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
    console.log('mapPage slug', slug);
    console.log('mapPage locale', locale);
    switch (slug) {
        case '/':
            return locale === 'pl' ? PAGE_PERSONAL_EN : locale === 'de' ? PAGE_PERSONAL_DE : PAGE_PERSONAL_PL;

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

        case '/personal/accounts/savings-account':
            return PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_EN;

        case '/persönlich/konten/sparen-konto':
            return PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_DE;

        case '/indywidualny/konta/konto-oszczędnościowe':
            return PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_PL;

        case '/personal/accounts/everyday-account':
            return PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_EN;

        case '/persönlich/konten/tageskonto':
            return PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_DE;

        case '/indywidualny/konta/konto-codzienne':
            return PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_PL;

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
                PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_PL,
                PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_PL,
                PAGE_PERSONAL_CARDS_PL,
            ];
        case 'de':
            return [
                PAGE_BUSINESS_DE,
                PAGE_HELP_AND_SUPPORT_DE,
                PAGE_PERSONAL_ACCOUNTS_DE,
                PAGE_BUSINESS_ACCOUNTS_DE,
                PAGE_PERSONAL_DE,
                PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_DE,
                PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_DE,
                PAGE_PERSONAL_CARDS_DE,
            ];
        case 'en':
            return [
                PAGE_BUSINESS_EN,
                PAGE_HELP_AND_SUPPORT_EN,
                PAGE_PERSONAL_ACCOUNTS_EN,
                PAGE_BUSINESS_ACCOUNTS_EN,
                PAGE_PERSONAL_EN,
                PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_EN,
                PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_EN,
                PAGE_PERSONAL_CARDS_EN,
            ];
        default:
            return [];
    }
};

export const getAlternativePages = (id: string, slug: string, locale: string): CMS.Model.Page.Page[] => {
    console.log('id', id);
    console.log('slug', slug);
    console.log('locale', locale);
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
        PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_DE,
        PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_EN,
        PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_PL,
        PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_DE,
        PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_EN,
        PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_PL,
    ]
        .filter((page) => page.id === id)
        .map((page) => {
            console.log('page1: ', page, mapPage(page.slug, locale));
            return mapPage(page.slug, locale)!;
        })
        .map((page) => {
            return {
                ...page,
                slug: page.slug.replace('(.+)', slug.match(/(.+)\/(.+)/)?.[2] || ''),
            };
        });
};

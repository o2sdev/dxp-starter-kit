import { CMS } from '@dxp/framework/modules';

const MOCK_HEADER_EN: CMS.Model.Header.Header = {
    id: 'fqj6nnyk4irqq5b7rnc4ogsj',
    title: 'MOCK_HEADER_EN',
    logoLabel: 'Go to home',
    logo: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/logo.svg',
        alt: 'Logo',
        width: 92,
        height: 24,
    },
    contextSwitcher: {
        showContextSwitcher: true,
        closeLabel: 'Close',
    },
    languageSwitcherLabel: 'Language',
    mobileMenuLabel: {
        open: 'Open menu',
        close: 'Close Menu',
    },
    items: [
        {
            __typename: 'NavigationGroup',
            title: 'Personal',
            url: '/personal',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'Accounts',
                    url: '/personal/accounts',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Cards',
                    url: '/personal/cards',
                },
            ],
        },
        {
            __typename: 'NavigationGroup',
            title: 'Business',
            url: '/business',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'Accounts',
                    url: '/business/accounts',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Cards',
                    url: '/business/cards',
                },
            ],
        },
    ],
};
const MOCK_HEADER_DE: CMS.Model.Header.Header = {
    id: 'fqj6nnyk4irqq5b7rnc4ogsj',
    title: 'MOCK_HEADER_DE',
    logoLabel: 'Zur Startseite',
    logo: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/logo.svg',
        alt: 'Logo',
        width: 92,
        height: 24,
    },
    contextSwitcher: {
        showContextSwitcher: true,
        closeLabel: 'Schließen',
    },
    languageSwitcherLabel: 'Sprache',
    mobileMenuLabel: {
        open: 'Menü öffnen',
        close: 'Menü schließen',
    },
    items: [
        {
            __typename: 'NavigationGroup',
            title: 'Kunden Portal',
            url: '/persönlich',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'Konten',
                    url: '/persönlich/konten',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Karten',
                    url: '/persönlich/karten',
                },
            ],
        },
        {
            __typename: 'NavigationGroup',
            title: 'Geschäftlich',
            url: '/geschäftlich',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'Konten',
                    url: '/geschäftlich/konten',
                },
            ],
        },
    ],
};
const MOCK_HEADER_PL: CMS.Model.Header.Header = {
    id: 'fqj6nnyk4irqq5b7rnc4ogsj',
    title: 'MOCK_HEADER_PL',
    logoLabel: 'Przejdź do strony głównej',
    logo: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/logo.svg',
        alt: 'Logo',
        width: 92,
        height: 24,
    },
    contextSwitcher: {
        showContextSwitcher: true,
        closeLabel: 'Zamknij',
    },
    languageSwitcherLabel: 'Język',
    mobileMenuLabel: {
        open: 'Otwórz menu',
        close: 'Zamknij menu',
    },
    items: [
        {
            __typename: 'NavigationGroup',
            title: 'Indywidualny',
            url: '/indywidualny',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'Konta',
                    url: '/indywidualny/konta',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Karty',
                    url: '/indywidualny/karty',
                },
            ],
        },
        {
            __typename: 'NavigationGroup',
            title: 'Firma',
            url: '/firma',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'Konta',
                    url: '/firma/konta',
                },
            ],
        },
    ],
};

export const mapHeader = (id: string, locale: string): CMS.Model.Header.Header => {
    const headerList = [MOCK_HEADER_EN, MOCK_HEADER_DE, MOCK_HEADER_PL];

    const header = headerList
        .filter((header) => header.title?.endsWith(locale.toUpperCase()))
        .find((header) => header.id === id);

    if (!header) {
        return MOCK_HEADER_EN;
    }
    return header;
};

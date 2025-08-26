import { CMS } from '@dxp/framework/modules';

const MOCK_FOOTER_EN: CMS.Model.Footer.Footer = {
    id: 'laee0xa1zmm9uraev3hpruho',
    title: 'Legal and privacy',
    logo: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/logo.svg',
        alt: 'Logo',
        width: 92,
        height: 24,
    },
    logoLabel: 'Go to home',
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
    copyright: '© Open Self Service 2025',
};

const MOCK_FOOTER_PL: CMS.Model.Footer.Footer = {
    id: 'laee0xa1zmm9uraev3hpruho',
    title: 'Informacje prawne i prywatność',
    logo: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/logo.svg',
        alt: 'Logo',
        width: 92,
        height: 24,
    },
    logoLabel: 'Przejdź do strony głównej',
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
    copyright: '© Open Self Service 2025',
};

const MOCK_FOOTER_DE: CMS.Model.Footer.Footer = {
    id: 'laee0xa1zmm9uraev3hpruho',
    title: 'Rechtliches und Datenschutz',
    logo: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/logo.svg',
        alt: 'Logo',
        width: 92,
        height: 24,
    },
    logoLabel: 'Zur Startseite',
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
    copyright: '© Open Self Service 2025',
};

export const mapFooter = (locale: string): CMS.Model.Footer.Footer => {
    switch (locale) {
        case 'pl':
            return MOCK_FOOTER_PL;
        case 'de':
            return MOCK_FOOTER_DE;
        default:
            return MOCK_FOOTER_EN;
    }
};

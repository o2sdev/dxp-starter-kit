import { CMS } from '@dxp/framework/modules';

const MOCK_QUICK_LINKS_BLOCK_1_EN: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-1',
    items: [
        {
            label: 'Open account',
            icon: 'CircleUser',
            url: '/personal/accounts',
            variant: 'link',
        },
        {
            label: 'Cards',
            icon: 'CreditCard',
            url: '/personal/cards',
            variant: 'link',
        },
        {
            label: 'Download app',
            icon: 'ArrowDownToLine',
            url: '/personal',
            variant: 'link',
        },
        {
            label: 'Support',
            icon: 'HandHelping',
            url: '/',
            variant: 'link',
        },
    ],
};

const MOCK_QUICK_LINKS_BLOCK_1_DE: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-1',
    items: [
        {
            label: 'Konto öffnen',
            icon: 'CircleUser',
            url: '/persönlich/konten',
            variant: 'link',
        },
        {
            label: 'Karten',
            icon: 'CreditCard',
            url: '/persönlich/karten',
            variant: 'link',
        },
        {
            label: 'App herunterladen',
            icon: 'ArrowDownToLine',
            url: '/persönlich',
            variant: 'link',
        },
        {
            label: 'Hilfe',
            icon: 'HandHelping',
            url: '/',
            variant: 'link',
        },
    ],
};

const MOCK_QUICK_LINKS_BLOCK_1_PL: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-1',
    items: [
        {
            label: 'Otwórz konto',
            icon: 'CircleUser',
            url: '/indywidualny/konta',
            variant: 'link',
        },
        {
            label: 'Karty',
            icon: 'CreditCard',
            url: '/indywidualny/karty',
            variant: 'link',
        },
        {
            label: 'Pobierz aplikację',
            icon: 'ArrowDownToLine',
            url: '/indywidualny',
            variant: 'link',
        },
        {
            label: 'Wsparcie',
            icon: 'HandHelping',
            url: '/',
            variant: 'link',
        },
    ],
};

const QUICK_LINKS_BLOCKS_EN = [MOCK_QUICK_LINKS_BLOCK_1_EN];
const QUICK_LINKS_BLOCKS_DE = [MOCK_QUICK_LINKS_BLOCK_1_DE];
const QUICK_LINKS_BLOCKS_PL = [MOCK_QUICK_LINKS_BLOCK_1_PL];

export const mapQuickLinksBlock = ({
    locale,
    id,
}: CMS.Request.GetCmsEntryParams): CMS.Model.QuickLinksBlock.QuickLinksBlock | undefined => {
    switch (locale) {
        case 'de':
            return QUICK_LINKS_BLOCKS_DE.find((block) => block.id === id);
        case 'pl':
            return QUICK_LINKS_BLOCKS_PL.find((block) => block.id === id);
        default:
            return QUICK_LINKS_BLOCKS_EN.find((block) => block.id === id);
    }
};

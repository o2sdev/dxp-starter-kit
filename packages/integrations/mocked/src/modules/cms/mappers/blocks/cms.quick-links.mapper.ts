import { CMS } from '@dxp/framework/modules';

const MOCK_QUICK_LINKS_BLOCK_EN: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-1',
    preTitle: 'Quick Links',
    title: 'Find it in an instant',
    description: 'Quickly explore the most important links for easy navigation to key resources.',
    items: [
        {
            label: 'Open account',
            icon: 'MapPin',
            url: '/',
            variant: 'link',
        },
        {
            label: 'Cards',
            icon: 'Drill',
            url: '/',
            variant: 'link',
        },
        {
            label: 'Download app',
            icon: 'SmilePlus',
            url: '/',
            variant: 'link',
        },
        {
            label: 'Support',
            icon: 'CreditCard',
            url: '/',
            variant: 'link',
        },
    ],
};

const MOCK_QUICK_LINKS_BLOCK_DE: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-1',
    preTitle: 'Quick Links',
    title: 'Find it in an instant',
    description: 'Quickly explore the most important links for easy navigation to key resources.',
    items: [
        {
            label: 'Find a retailer',
            description: 'Locate nearby authorized retailers for products and services.',
            icon: 'MapPin',
            url: '/',
            variant: 'link',
        },
        {
            label: 'Online repair',
            description: 'Request repair and support through our platform.',
            icon: 'Drill',
            url: '/',
            variant: 'link',
        },
        {
            label: 'Rate service',
            description: 'Share your feedback to help us improve the quality of our service.',
            icon: 'SmilePlus',
            url: '/',
            variant: 'link',
        },
        {
            label: 'Check payment history',
            description: 'View and track your past payments to stay updated.',
            icon: 'CreditCard',
            url: '/',
            variant: 'link',
        },
    ],
};

const MOCK_QUICK_LINKS_BLOCK_PL: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-1',
    preTitle: 'Quick Links',
    title: 'Find it in an instant',
    description: 'Quickly explore the most important links for easy navigation to key resources.',
    items: [
        {
            label: 'Find a retailer',
            description: 'Locate nearby authorized retailers for products and services.',
            icon: 'MapPin',
            url: '/',
            variant: 'link',
        },
    ],
};

export const mapQuickLinksBlock = (locale: string): CMS.Model.QuickLinksBlock.QuickLinksBlock => {
    switch (locale) {
        case 'de':
            return MOCK_QUICK_LINKS_BLOCK_DE;
        case 'pl':
            return MOCK_QUICK_LINKS_BLOCK_PL;
        default:
            return MOCK_QUICK_LINKS_BLOCK_EN;
    }
};

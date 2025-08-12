import { CMS } from '@dxp/framework/modules';

const MOCK_QUICK_LINKS_BLOCK_EN: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-1',
    preTitle: 'Quick Links',
    title: 'Find it in an instant',
    description: 'Quickly explore the most important links for easy navigation to key resources.',
    items: [
        {
            title: 'Open account',
            icon: 'MapPin',
            link: {
                label: 'Learn more',
                url: '/',
                icon: 'ArrowRight',
            },
        },
        {
            title: 'Cards',
            icon: 'Drill',
            link: {
                label: 'Learn more',
                url: '/',
                icon: 'ArrowRight',
            },
        },
        {
            title: 'Download app',
            icon: 'SmilePlus',
            link: {
                label: 'Learn more',
                url: '/',
                icon: 'ArrowRight',
            },
        },
        {
            title: 'Support',
            icon: 'CreditCard',
            link: {
                label: 'Learn more',
                url: '/',
                icon: 'ArrowRight',
            },
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
            title: 'Find a retailer',
            description: 'Locate nearby authorized retailers for products and services.',
            icon: 'MapPin',
            link: {
                label: 'Learn more',
                url: '/',
                icon: 'ArrowRight',
            },
        },
        {
            title: 'Online repair',
            description: 'Request repair and support through our platform.',
            icon: 'Drill',
            link: {
                label: 'Learn more',
                url: '/',
                icon: 'ArrowRight',
            },
        },
        {
            title: 'Rate service',
            description: 'Share your feedback to help us improve the quality of our service.',
            icon: 'SmilePlus',
            link: {
                label: 'Learn more',
                url: '/',
                icon: 'ArrowRight',
            },
        },
        {
            title: 'Check payment history',
            description: 'View and track your past payments to stay updated.',
            icon: 'CreditCard',
            link: {
                label: 'Learn more',
                url: '/',
                icon: 'ArrowRight',
            },
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
            title: 'Find a retailer',
            description: 'Locate nearby authorized retailers for products and services.',
            icon: 'MapPin',
            link: {
                label: 'Learn more',
                url: '/',
                icon: 'ArrowRight',
            },
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

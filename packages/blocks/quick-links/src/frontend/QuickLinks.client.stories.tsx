import type { Meta, StoryObj } from '@storybook/nextjs';

import { QuickLinksPure } from './QuickLinks.client';

const meta = {
    title: 'Blocks/QuickLinks',
    component: QuickLinksPure,
} satisfies Meta<typeof QuickLinksPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        locale: 'en',
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzY0MTIyfQ.snZ5H6Vd897wXR1RlWWRxyhybm5mE5jvBIWPLQKYVJE',
        routing: {
            locales: ['en', 'de', 'pl'],
            defaultLocale: 'en',
            pathnames: {},
        },
        __typename: 'QuickLinksBlock',
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
    },
};

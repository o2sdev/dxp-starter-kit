import type { Meta, StoryObj } from '@storybook/nextjs';

import { FaqPure } from './Faq.client';

const meta = {
    title: 'Blocks/Faq',
    component: FaqPure,
} satisfies Meta<typeof FaqPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        locale: 'en',
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzYzNDQyfQ.1JT9Sjz_ch1LTFrqqQXJWmhkEWXRBok_8YkFbJFhxgk',
        routing: {
            locales: ['en', 'de', 'pl'],
            defaultLocale: 'en',
            pathnames: {},
        },
        __typename: 'FaqBlock',
        id: 'faq-1',
        preTitle: 'FAQ section',
        title: 'Frequently asked questions',
        description:
            "We've compiled the most important information to help you get the most out of your experience. Can't find what you're looking for? <a href='/contact-us'>Contact us</a>.",
        sections: [
            {
                title: 'General',
                items: [
                    {
                        title: 'How do I manage my PowerPro devices?',
                        content:
                            'You can view and manage all your PowerPro devices through our online self-service portal. Navigate to "Device Management" where you will find your devices categorized as purchased devices or fleet service devices. From there, you can request repairs, track repair status, or report lost devices.',
                    },
                    {
                        title: 'How do I report a stolen or lost tool?',
                        content:
                            '\n        ### Reporting Stolen or Lost Fleet Devices\n        \n        If your fleet device has been stolen or lost, follow these steps:\n        1. Log in to your PowerPro account\n        2. Navigate to "Device Management"\n        3. Select "Report theft/loss"\n        4. Complete the form with all relevant information\n        5. Submit your report\n        \n        Our team will process your report and contact you with further instructions within 1-2 business days.\n        ',
                    },
                    {
                        title: 'How can I request a device repair?',
                        content:
                            '\n        ## Device Repair Process\n        \n        To request a repair for your PowerPro device:\n        \n        1. Log in to your PowerPro account\n        2. Go to "Device Management" > "Request Repair"\n        3. Select the device that needs repair\n        4. Describe the issue with the device\n        5. Indicate if you need a replacement device during repair\n        6. Select delivery address\n        7. Submit your repair request\n        \n        You can track the status of your repair by visiting "Track Repairs" in the Device Management section.\n        ',
                    },
                    {
                        title: 'What mobile applications does PowerPro offer?',
                        content:
                            'PowerPro offers several mobile applications to help manage your tools and projects more efficiently. These include the PowerPro Service for tool information and service requests, the PowerPro Manager for asset management, and various technical applications for specific construction tasks like anchor design and firestop documentation. All applications can be downloaded from the App Store or Google Play Store.',
                    },
                    {
                        title: 'How do I change my fleet service billing location?',
                        content:
                            'If your company is expanding and you need to change the cost center for your fleet devices, you can easily update this information. Go to "Device Management" section, select "Change cost center location", choose the devices you want to reassign, and select the new cost center. This helps you manage costs across different project sites more effectively.',
                    },
                    {
                        title: 'How can I track my equipment repair status?',
                        content:
                            'After requesting a repair, you can track its status through our online portal. Go to "Device Management" and select "Track Repair Status". You\'ll see a visual dashboard showing where your device is in the repair process, from pickup to delivery of the repaired tool. This feature allows you to plan your work accordingly while waiting for your tool to be returned.',
                    },
                ],
            },
            {
                title: 'Billing',
                items: [
                    {
                        title: 'How do I manage my PowerPro devices?',
                        content:
                            'You can view and manage all your PowerPro devices through our online self-service portal. Navigate to "Device Management" where you will find your devices categorized as purchased devices or fleet service devices. From there, you can request repairs, track repair status, or report lost devices.',
                    },
                    {
                        title: 'How do I report a stolen or lost tool?',
                        content:
                            '\n        ### Reporting Stolen or Lost Fleet Devices\n        \n        If your fleet device has been stolen or lost, follow these steps:\n        1. Log in to your PowerPro account\n        2. Navigate to "Device Management"\n        3. Select "Report theft/loss"\n        4. Complete the form with all relevant information\n        5. Submit your report\n        \n        Our team will process your report and contact you with further instructions within 1-2 business days.\n        ',
                    },
                    {
                        title: 'How can I request a device repair?',
                        content:
                            '\n        ## Device Repair Process\n        \n        To request a repair for your PowerPro device:\n        \n        1. Log in to your PowerPro account\n        2. Go to "Device Management" > "Request Repair"\n        3. Select the device that needs repair\n        4. Describe the issue with the device\n        5. Indicate if you need a replacement device during repair\n        6. Select delivery address\n        7. Submit your repair request\n        \n        You can track the status of your repair by visiting "Track Repairs" in the Device Management section.\n        ',
                    },
                    {
                        title: 'What mobile applications does PowerPro offer?',
                        content:
                            'PowerPro offers several mobile applications to help manage your tools and projects more efficiently. These include the PowerPro Service for tool information and service requests, the PowerPro Manager for asset management, and various technical applications for specific construction tasks like anchor design and firestop documentation. All applications can be downloaded from the App Store or Google Play Store.',
                    },
                    {
                        title: 'How do I change my fleet service billing location?',
                        content:
                            'If your company is expanding and you need to change the cost center for your fleet devices, you can easily update this information. Go to "Device Management" section, select "Change cost center location", choose the devices you want to reassign, and select the new cost center. This helps you manage costs across different project sites more effectively.',
                    },
                    {
                        title: 'How can I track my equipment repair status?',
                        content:
                            'After requesting a repair, you can track its status through our online portal. Go to "Device Management" and select "Track Repair Status". You\'ll see a visual dashboard showing where your device is in the repair process, from pickup to delivery of the repaired tool. This feature allows you to plan your work accordingly while waiting for your tool to be returned.',
                    },
                ],
            },
        ],
        banner: {
            title: 'Still have questions?',
            description: 'Have questions or need assistance? Our team is here to help! ',
            link: {
                label: 'Contact us',
                url: '/',
                variant: 'primary',
            },
        },
        oneColumn: true,
    },
};

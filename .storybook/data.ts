import { GlobalProviderProps } from '@dxp/ui/providers/GlobalProvider';

export const globalProviderConfig: GlobalProviderProps['config'] = {
    locales: [
        {
            value: 'en',
            label: 'EN',
        },
        {
            value: 'de',
            label: 'DE',
        },
        {
            value: 'pl',
            label: 'PL',
        },
    ],
    common: {
        header: {
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
        },
        footer: {
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
        },
    },
    labels: {
        errors: {
            requestError: {
                title: 'Uh oh! Something went wrong.',
                content: 'There was a problem with your request.',
            },
        },
        dates: {
            today: 'Today',
            yesterday: 'Yesterday',
        },
        actions: {
            showMore: 'Show more',
            showLess: 'Show less',
            show: 'Show',
            hide: 'Hide',
            edit: 'Edit',
            save: 'Save',
            cancel: 'Cancel',
            delete: 'Delete',
            logOut: 'Log out',
            settings: 'Settings',
            renew: 'Renew',
            details: 'Details',
        },
    }
};

export const globalProviderLabels: GlobalProviderProps['labels'] = {
    errors: {
        requestError: {
            title: 'Uh oh! Something went wrong.',
            content: 'There was a problem with your request.',
        },
    },
    dates: {
        today: 'Today',
        yesterday: 'Yesterday',
    },
    actions: {
        showMore: 'Show more',
        showLess: 'Show less',
        show: 'Show',
        hide: 'Hide',
        edit: 'Edit',
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        logOut: 'Log out',
        settings: 'Settings',
        renew: 'Renew',
        details: 'Details',
    },
};

export const globalProviderThemes: GlobalProviderProps['themes'] = {
    default: {
        name: 'default',
        logo: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/logo.svg',
            alt: 'Logo',
            width: 92,
            height: 24,
        },
    },
    personal: {
        name: 'personal',
        logo: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/logo.svg',
            alt: 'Logo',
            width: 92,
            height: 24,
        },
    },
    business: {
        name: 'business',
        logo: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/logo.svg',
            alt: 'Logo',
            width: 92,
            height: 24,
        },
    },
};

export const globalProviderCurrentTheme: GlobalProviderProps['currentTheme'] = 'default';

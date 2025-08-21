import { CMS } from '@dxp/framework/modules';

const MOCK_PRICING_SECTION_BLOCK_EN: CMS.Model.PricingSectionBlock.PricingSectionBlock = {
    id: 'pricing-section-1',
    title: 'Accounts',
    subtitle: 'Subtitle',
    description: 'Choose the right account for your needs and enjoy simple, secure banking every day.',
    headingType: 'h1',
    pricingList: [
        {
            title: 'Everyday account',
            description: 'A flexible account for daily banking, designed to managing your money effortless.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
                width: 1920,
                height: 1080,
                alt: 'Pricing section image',
                priority: true,
            },
            price: {
                currency: 'USD',
                value: 0.99,
            },
            isPromoted: false,
            links: [
                {
                    label: 'Get started',
                    icon: '',
                    description: 'Learn more about our pricing',
                    url: '/',
                    variant: 'secondary',
                },
                {
                    label: 'Learn more',
                    description: 'Learn more about our pricing',
                    icon: 'ArrowRight',
                    url: '/',
                    variant: 'default',
                },
            ],
            featureListTitle: 'What’s included:',
            featureList: [
                {
                    title: 'Instant account opening with no paperwork.',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: '24/7 in-app support from banking experts',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
            ],
        },
        {
            title: 'Savings Account',
            description: 'Grow your wealth with an account built for easy saving and smart financial planning',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
                width: 1920,
                height: 1080,
                alt: 'Pricing section image',
                priority: true,
            },
            price: {
                currency: 'USD',
                value: 999.99,
            },
            tags: [
                {
                    label: 'Most popular',
                    variant: 'default',
                },
            ],
            links: [
                {
                    label: 'Get started',
                    icon: '',
                    description: 'Learn more about our pricing',
                    url: '/',
                    variant: 'primary',
                },
                {
                    label: 'Learn more',
                    description: 'Learn more about our pricing',
                    icon: 'ArrowRight',
                    url: '/',
                    variant: 'default',
                },
            ],
            isPromoted: true,
            featureListTitle: 'Everything in Everyday account, plus:',
            featureList: [
                {
                    title: 'Automated savings tools to help you reach your goals',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: 'Higher interest rates than everyday accounts',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: 'Personalized budgeting and spending insights',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
            ],
        },
        {
            title: 'Savings Account',
            description: 'Grow your wealth with an account built for easy saving and smart financial planning',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/sign-in.jpg',
                width: 1920,
                height: 1080,
                alt: 'Pricing section image',
                priority: true,
            },
            price: {
                currency: 'USD',
                value: 10.0,
            },
            links: [
                {
                    label: 'Get started',
                    icon: '',
                    description: 'Learn more about our pricing',
                    url: '/',
                    variant: 'secondary',
                },
                {
                    label: 'Learn more',
                    description: 'Learn more about our pricing',
                    icon: 'ArrowRight',
                    url: '/',
                    variant: 'default',
                },
            ],
            isPromoted: false,
            featureListTitle: 'Everything in Everyday account, plus:',
            featureList: [
                {
                    title: 'Automated savings tools to help you reach your goals',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: 'Higher interest rates than everyday accounts',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: 'Personalized budgeting and spending insights',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
            ],
        },
    ],
};

const MOCK_PRICING_SECTION_BLOCK_DE: CMS.Model.PricingSectionBlock.PricingSectionBlock = {
    id: 'pricing-section-1',
    title: 'Accounts',
    subtitle: 'Subtitle',
    description: 'Choose the right account for your needs and enjoy simple, secure banking every day.',
    headingType: 'h1',
    pricingList: [
        {
            title: 'Everyday account',
            description: 'A flexible account for daily banking, designed to managing your money effortless.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
                width: 1920,
                height: 1080,
                alt: 'Pricing section image',
                priority: true,
            },
            price: {
                currency: 'USD',
                value: 0.99,
            },
            isPromoted: false,
            links: [
                {
                    label: 'Get started',
                    icon: '',
                    description: 'Learn more about our pricing',
                    url: '/',
                    variant: 'secondary',
                },
                {
                    label: 'Learn more',
                    description: 'Learn more about our pricing',
                    icon: 'ArrowRight',
                    url: '/',
                    variant: 'default',
                },
            ],
            featureListTitle: 'What’s included:',
            featureList: [
                {
                    title: 'Instant account opening with no paperwork.',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: '24/7 in-app support from banking experts',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
            ],
        },
        {
            title: 'Savings Account',
            description: 'Grow your wealth with an account built for easy saving and smart financial planning',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
                width: 1920,
                height: 1080,
                alt: 'Pricing section image',
                priority: true,
            },
            price: {
                currency: 'USD',
                value: 999.99,
            },
            tags: [
                {
                    label: 'Recommended',
                    variant: 'secondary',
                },
            ],
            links: [
                {
                    label: 'Get started',
                    icon: '',
                    description: 'Learn more about our pricing',
                    url: '/',
                    variant: 'primary',
                },
                {
                    label: 'Learn more',
                    description: 'Learn more about our pricing',
                    icon: 'ArrowRight',
                    url: '/',
                    variant: 'default',
                },
            ],
            isPromoted: true,
            featureListTitle: 'Everything in Everyday account, plus:',
            featureList: [
                {
                    title: 'Automated savings tools to help you reach your goals',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: 'Higher interest rates than everyday accounts',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: 'Personalized budgeting and spending insights',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
            ],
        },
    ],
};

const MOCK_PRICING_SECTION_BLOCK_PL: CMS.Model.PricingSectionBlock.PricingSectionBlock = {
    id: 'pricing-section-1',
    title: "Headline that shows solution's impact on user success",
    subtitle: 'Subtitle',
    description: 'Description',
    headingType: 'h1',
    pricingList: [
        {
            title: 'Everyday account',
            description: 'A flexible account for daily banking, designed to managing your money effortless.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
                width: 1920,
                height: 1080,
                alt: 'Pricing section image',
                priority: true,
            },
            price: {
                currency: 'USD',
                value: 0.99,
            },
            isPromoted: false,
            tags: [
                {
                    label: 'Recommended',
                    variant: 'secondary',
                },
            ],
            links: [
                {
                    label: 'Get started',
                    icon: '',
                    description: 'Learn more about our pricing',
                    url: '/',
                    variant: 'secondary',
                },
                {
                    label: 'Learn more',
                    description: 'Learn more about our pricing',
                    icon: 'ArrowRight',
                    url: '/',
                    variant: 'default',
                },
            ],
            featureListTitle: 'What’s included:',
            featureList: [
                {
                    title: 'Instant account opening with no paperwork.',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: '24/7 in-app support from banking experts',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
            ],
        },
        {
            title: 'Savings Account',
            description: 'Grow your wealth with an account built for easy saving and smart financial planning',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
                width: 1920,
                height: 1080,
                alt: 'Pricing section image',
                priority: true,
            },
            price: {
                currency: 'USD',
                value: 999.99,
            },
            links: [
                {
                    label: 'Get started',
                    icon: '',
                    description: 'Learn more about our pricing',
                    url: '/',
                    variant: 'primary',
                },
                {
                    label: 'Learn more',
                    description: 'Learn more about our pricing',
                    icon: 'ArrowRight',
                    url: '/',
                    variant: 'default',
                },
            ],
            isPromoted: true,
            featureListTitle: 'Everything in Everyday account, plus:',
            featureList: [
                {
                    title: 'Automated savings tools to help you reach your goals',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: 'Higher interest rates than everyday accounts',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: 'Personalized budgeting and spending insights',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
            ],
        },
    ],
};

export const mapPricingSectionBlock = (locale: string): CMS.Model.PricingSectionBlock.PricingSectionBlock => {
    switch (locale) {
        case 'de':
            return MOCK_PRICING_SECTION_BLOCK_DE;
        case 'pl':
            return MOCK_PRICING_SECTION_BLOCK_PL;
        default:
            return MOCK_PRICING_SECTION_BLOCK_EN;
    }
};

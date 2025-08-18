import { CMS } from '@dxp/framework/modules';

const MOCK_FEATURE_SECTION_GRID_BLOCK_EN: CMS.Model.FeatureSectionGridBlock.FeatureSectionGridBlock = {
    id: 'feature-section-grid-1',
    preTitle: 'Feature section grid',
    title: 'Why Choose Our Accounts?',
    description:
        'Experience banking designed for your lifestyle—secure, convenient, and packed with features that help you manage and grow your money.',
    featureList: [
        {
            title: 'Instant Access',
            description: 'Open and manage your account from anywhere, at any time, with our intuitive mobile app.',
            icon: 'Check',
        },
        {
            title: 'Instant Access',
            description: 'Open and manage your account from anywhere, at any time, with our intuitive mobile app.',
            icon: 'Check',
        },
        {
            title: 'Instant Access',
            description: 'Open and manage your account from anywhere, at any time, with our intuitive mobile app.',
            icon: 'Check',
        },
        {
            title: 'Instant Access',
            description: 'Open and manage your account from anywhere, at any time, with our intuitive mobile app.',
            icon: 'Check',
        },
        {
            title: 'Benefit driven feature title',
            description:
                'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
            icon: 'AlarmClockCheck',
        },
        {
            title: 'Benefit driven feature title',
            description: 'Description 3',
            icon: 'Check',
        },
    ],
    inverted: false,
};

const MOCK_FEATURE_SECTION_GRID_BLOCK_DE: CMS.Model.FeatureSectionGridBlock.FeatureSectionGridBlock = {
    id: 'feature-section-grid-1',
    title: "Headline that shows solution's impact on user success",
    featureList: [
        {
            title: 'Benefit driven feature title',
            description:
                'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
            icon: 'Check',
        },
    ],
    inverted: false,
};

const MOCK_FEATURE_SECTION_GRID_BLOCK_PL: CMS.Model.FeatureSectionGridBlock.FeatureSectionGridBlock = {
    id: 'feature-section-grid-1',
    title: "Headline that shows solution's impact on user success",
    featureList: [
        {
            title: 'Benefit driven feature title',
            description:
                'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
            icon: 'Check',
        },
        {
            title: 'Benefit driven feature title',
            description:
                'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
            icon: 'Check',
        },
        {
            title: 'Benefit driven feature title',
            description:
                'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
            icon: 'Check',
        },
    ],
    inverted: true,
};

export const mapFeatureSectionGridBlock = (
    locale: string,
): CMS.Model.FeatureSectionGridBlock.FeatureSectionGridBlock => {
    switch (locale) {
        case 'de':
            return MOCK_FEATURE_SECTION_GRID_BLOCK_DE;
        case 'pl':
            return MOCK_FEATURE_SECTION_GRID_BLOCK_PL;
        default:
            return MOCK_FEATURE_SECTION_GRID_BLOCK_EN;
    }
};

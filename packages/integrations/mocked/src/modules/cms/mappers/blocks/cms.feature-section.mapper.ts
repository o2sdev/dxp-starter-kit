import { CMS } from '@dxp/framework/modules';

const MOCK_FEATURE_SECTION_BLOCK_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-1',
    preTitle: 'Feature section',
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
            icon: 'AlarmClockCheck',
        },
        {
            title: 'Benefit driven feature title',
            description: 'Description 3',
            icon: 'Check',
        },
    ],
    inverted: true,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
        width: 1920,
        height: 1080,
        alt: 'Hero Banner Image',
        priority: true,
    },
    links: [
        {
            label: 'Get started',
            icon: 'ArrowRight',
            description: 'Button 1 description',
            url: '/',
        },
        {
            label: 'Explore',
            description: 'Button 2 description',
            icon: 'ArrowRight',
            url: '/',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-1',
    title: "Headline that shows solution's impact on user success",
    featureList: [
        {
            title: 'Benefit driven feature title',
            description:
                'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
            icon: 'Check',
        },
    ],
    inverted: true,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
        width: 1920,
        height: 1080,
        alt: 'Hero Banner Image',
        priority: false,
    },
    links: [
        {
            label: 'Get started',
            icon: 'ArrowRight',
            url: '/',
            description: 'Button 1 description',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-1',
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
    inverted: false,
    labels: {
        showMore: 'Pokaż więcej',
    },
};

export const mapFeatureSectionBlock = (locale: string): CMS.Model.FeatureSectionBlock.FeatureSectionBlock => {
    switch (locale) {
        case 'de':
            return MOCK_FEATURE_SECTION_BLOCK_DE;
        case 'pl':
            return MOCK_FEATURE_SECTION_BLOCK_PL;
        default:
            return MOCK_FEATURE_SECTION_BLOCK_EN;
    }
};

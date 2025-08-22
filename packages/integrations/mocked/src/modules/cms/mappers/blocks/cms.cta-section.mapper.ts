import { CMS } from '@dxp/framework/modules';

const MOCK_CTA_SECTION_BLOCK_EN: CMS.Model.CtaSectionBlock.CtaSectionBlock = {
    id: 'cta-section-1',
    preTitle: 'CTA section',
    title: 'Action-driving headline that creates urgency',
    description:
        'Add one or two compelling sentences that reinforce your main value proposition and overcome final objections.',
    inverted: false,
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
            variant: 'primary',
        },
        {
            label: 'Explore',
            description: 'Button 2 description',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_CTA_SECTION_BLOCK_DE: CMS.Model.CtaSectionBlock.CtaSectionBlock = {
    id: 'cta-section-1',
    title: 'Action-driving headline that creates urgency',
    description:
        'Add one or two compelling sentences that reinforce your main value proposition and overcome final objections.',
    inverted: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
        width: 1920,
        height: 1080,
        alt: 'Hero Banner Image',
        priority: true,
    },
    labels: {
        showMore: 'Mehr anzeigen',
    },
    links: [
        {
            label: 'Get started',
            icon: 'ArrowRight',
            url: '/',
            description: 'Button 1 description',
            variant: 'primary',
        },
    ],
};

const MOCK_CTA_SECTION_BLOCK_PL: CMS.Model.CtaSectionBlock.CtaSectionBlock = {
    id: 'cta-section-1',
    title: 'Action-driving headline that creates urgency',
    description:
        'Add one or two compelling sentences that reinforce your main value proposition and overcome final objections.',
    inverted: false,
    links: [
        {
            label: 'Get started',
            icon: 'ArrowRight',
            url: '/',
            description: 'Button 1 description',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

export const mapCtaSectionBlock = (locale: string): CMS.Model.CtaSectionBlock.CtaSectionBlock => {
    switch (locale) {
        case 'de':
            return MOCK_CTA_SECTION_BLOCK_DE;
        case 'pl':
            return MOCK_CTA_SECTION_BLOCK_PL;
        default:
            return MOCK_CTA_SECTION_BLOCK_EN;
    }
};

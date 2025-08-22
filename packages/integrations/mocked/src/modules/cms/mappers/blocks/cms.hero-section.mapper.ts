import { CMS } from '@dxp/framework/modules';

const MOCK_HERO_SECTION_BLOCK_EN: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-1',
    preTitle: 'Hero Section',
    title: "Headline that solves user's {highlightedText}",
    highlightedText: 'main problem',
    subtitle: 'Subtitle that explains the headline',
    description:
        'Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
        width: 1920,
        height: 1080,
        alt: 'Hero Section Image',
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

const MOCK_HERO_SECTION_BLOCK_DE: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-1',
    title: "Headline that solves user's {highlightedText}",
    highlightedText: 'main problem',
    description:
        'Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.',
    inverted: true,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
        width: 1920,
        height: 1080,
        alt: 'Hero Section Image',
        priority: false,
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
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_HERO_SECTION_BLOCK_PL: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-1',
    title: "Headline that solves user's {highlightedText}",
    highlightedText: 'main problem',
    subtitle: 'Subtitle that explains the headline',
    description:
        'Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.',
    inverted: false,
    headingType: 'h1',
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

export const mapHeroSectionBlock = (locale: string): CMS.Model.HeroSectionBlock.HeroSectionBlock => {
    switch (locale) {
        case 'de':
            return MOCK_HERO_SECTION_BLOCK_DE;
        case 'pl':
            return MOCK_HERO_SECTION_BLOCK_PL;
        default:
            return MOCK_HERO_SECTION_BLOCK_EN;
    }
};

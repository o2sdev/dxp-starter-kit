import { CMS } from '@dxp/framework/modules';

const MOCK_HERO_BANNER_BLOCK_EN: CMS.Model.HeroBannerBlock.HeroBannerBlock = {
    id: 'hero-banner-1',
    preTitle: 'Pre Title',
    title: "Headline that solves user's main problem",
    subtitle: 'Subtitle that explains the headline',
    description:
        'Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.',
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
            label: 'Button 1',
            icon: 'arrow-right',
            description: 'Button 1 description',
            url: '/',
        },
        {
            label: 'Button 2',
            description: 'Button 2 description',
            icon: 'arrow-right',
            url: '/',
        },
    ],
};

const MOCK_HERO_BANNER_BLOCK_DE: CMS.Model.HeroBannerBlock.HeroBannerBlock = {
    id: 'hero-banner-1',
    preTitle: 'Pre Title',
    title: "Headline that solves user's main problem",
    subtitle: 'Subtitle that explains the headline',
    description:
        'Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.',
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
            label: 'Button 1',
            icon: 'arrow-right',
            url: '/',
            description: 'Button 1 description',
        },
    ],
};

const MOCK_HERO_BANNER_BLOCK_PL: CMS.Model.HeroBannerBlock.HeroBannerBlock = {
    id: 'hero-banner-1',
    preTitle: 'Przed tytułem tekst',
    title: "Headline that solves user's main problem",
    subtitle: 'Subtitle that explains the headline',
    description:
        'Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.',
    inverted: false,
    links: [
        {
            label: 'Button 1',
            icon: 'arrow-right',
            url: '/',
            description: 'Button 1 description',
        },
    ],
};

export const mapHeroBannerBlock = (locale: string): CMS.Model.HeroBannerBlock.HeroBannerBlock => {
    switch (locale) {
        case 'de':
            return MOCK_HERO_BANNER_BLOCK_DE;
        case 'pl':
            return MOCK_HERO_BANNER_BLOCK_PL;
        default:
            return MOCK_HERO_BANNER_BLOCK_EN;
    }
};

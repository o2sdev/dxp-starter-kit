import { CMS } from '@dxp/framework/modules';

const MOCK_MEDIA_SECTION_BLOCK_EN: CMS.Model.MediaSectionBlock.MediaSectionBlock = {
    id: 'media-section-1',
    preTitle: 'Media section',
    title: 'All-in-One Banking',
    description: 'See how every feature works together to give you a seamless, secure, and modern banking experience.',
    media: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
        width: 1920,
        height: 1080,
        alt: 'Hero Banner Image',
        priority: true,
    },
    links: [
        {
            label: 'Learn more',
            url: '/',
            icon: 'ArrowRight',
        },
    ],
    labels: {
        play: 'Play',
        pause: 'Pause',
        mute: 'Mute',
        unmute: 'Unmute',
    },
};

const MOCK_MEDIA_SECTION_BLOCK_DE: CMS.Model.MediaSectionBlock.MediaSectionBlock = {
    id: 'media-section-1',
    preTitle: 'Media section',
    title: 'All-in-One Banking',
    description: 'See how every feature works together to give you a seamless, secure, and modern banking experience.',
    media: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
        width: 1920,
        height: 1080,
        alt: 'Hero Banner Image',
        priority: true,
    },
    links: [
        {
            label: 'Learn more',
            url: '/',
            icon: 'ArrowRight',
        },
        {
            label: 'Learn more',
            url: '/',
            icon: 'ArrowRight',
        },
    ],
    labels: {
        play: 'Play',
        pause: 'Pause',
        mute: 'Mute',
        unmute: 'Unmute',
    },
};

const MOCK_MEDIA_SECTION_BLOCK_PL: CMS.Model.MediaSectionBlock.MediaSectionBlock = {
    id: 'media-section-1',
    title: 'All-in-One Banking',
    description: 'See how every feature works together to give you a seamless, secure, and modern banking experience.',
    media: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
        width: 1920,
        height: 1080,
        alt: 'Hero Banner Image',
        priority: true,
    },
    labels: {
        play: 'Play',
        pause: 'Pause',
        mute: 'Mute',
        unmute: 'Unmute',
    },
};

export const mapMediaSectionBlock = (locale: string): CMS.Model.MediaSectionBlock.MediaSectionBlock => {
    switch (locale) {
        case 'de':
            return MOCK_MEDIA_SECTION_BLOCK_DE;
        case 'pl':
            return MOCK_MEDIA_SECTION_BLOCK_PL;
        default:
            return MOCK_MEDIA_SECTION_BLOCK_EN;
    }
};

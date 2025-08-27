import { CMS } from '@dxp/framework/modules';

const MOCK_MEDIA_SECTION_BLOCK_1_EN: CMS.Model.MediaSectionBlock.MediaSectionBlock = {
    id: 'media-section-1',
    title: 'All-in-One Banking',
    description: 'See how every feature works together to give you a seamless, secure, and modern banking experience.',
    media: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/video-placeholder.jpg',
        width: 1024,
        height: 640,
        alt: 'Video placeholder',
        priority: true,
    },
    labels: {
        play: 'Play',
        pause: 'Pause',
        mute: 'Mute',
        unmute: 'Unmute',
        showMore: 'Show more',
    },
};

const MOCK_MEDIA_SECTION_BLOCK_1_DE: CMS.Model.MediaSectionBlock.MediaSectionBlock = {
    id: 'media-section-1',
    title: 'Banking All-in-One',
    description:
        'Sehen Sie sich an, wie jede Funktion zusammenarbeitet, um Ihnen eine reibungslose, sichere und moderne Bankerfahrung zu bieten.',
    media: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/video-placeholder.jpg',
        width: 1024,
        height: 640,
        alt: 'Video placeholder',
        priority: true,
    },
    labels: {
        play: 'Wiedergabe',
        pause: 'Pause',
        mute: 'Stummschalten',
        unmute: 'Stummschaltung aufheben',
        showMore: 'Mehr erfahren',
    },
};

const MOCK_MEDIA_SECTION_BLOCK_1_PL: CMS.Model.MediaSectionBlock.MediaSectionBlock = {
    id: 'media-section-1',
    title: 'Bankowość wszystko w jednym',
    description:
        'Zobacz, jak każda funkcja współpracuje, aby dać Ci płynny, bezpieczny i nowoczesny doświadczenie bankowości.',
    media: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/video-placeholder.jpg',
        width: 1024,
        height: 640,
        alt: 'Video placeholder',
        priority: true,
    },
    labels: {
        play: 'Odtwórz',
        pause: 'Pause',
        mute: 'Mute',
        unmute: 'Wycisz',
        showMore: 'Więcej',
    },
};

const MEDIA_SECTION_BLOCKS_EN = [MOCK_MEDIA_SECTION_BLOCK_1_EN];
const MEDIA_SECTION_BLOCKS_DE = [MOCK_MEDIA_SECTION_BLOCK_1_DE];
const MEDIA_SECTION_BLOCKS_PL = [MOCK_MEDIA_SECTION_BLOCK_1_PL];

export const mapMediaSectionBlock = ({
    locale,
    id,
}: CMS.Request.GetCmsEntryParams): CMS.Model.MediaSectionBlock.MediaSectionBlock | undefined => {
    switch (locale) {
        case 'de':
            return MEDIA_SECTION_BLOCKS_DE.find((block) => block.id === id);
        case 'pl':
            return MEDIA_SECTION_BLOCKS_PL.find((block) => block.id === id);
        default:
            return MEDIA_SECTION_BLOCKS_EN.find((block) => block.id === id);
    }
};

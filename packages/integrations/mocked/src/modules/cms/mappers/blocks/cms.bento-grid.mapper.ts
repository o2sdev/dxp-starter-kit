import { CMS } from '@dxp/framework/modules';

const MOCK_BENTO_GRID_BLOCK_EN: CMS.Model.BentoGridBlock.BentoGridBlock = {
    id: 'bento-grid-1',
    preTitle: 'Bento grid',
    title: 'Feature-rich layout that captures attention',
    description:
        "Add a concise value statement that highlights your product's key features and benefits in a visually dynamic grid. Focus on creating balanced content blocks while keeping it under 2-3 lines. Align with your grid layout structure.",
    items: [
        {
            title: 'Feature title',
            description:
                'Shortly describe how this feature solves a specific user problem. Focus on benefits rather than features.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
                width: 1920,
                height: 1080,
                alt: 'Hero Banner Image',
                priority: true,
            },
            link: {
                label: 'Learn more',
                url: '/',
                icon: 'ArrowRight',
            },
        },
        {
            title: 'Feature title',
            description:
                'Shortly describe how this feature solves a specific user problem. Focus on benefits rather than features.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
                width: 1920,
                height: 1080,
                alt: 'Hero Banner Image',
                priority: true,
            },
            link: {
                label: 'Learn more',
                url: '/',
                icon: 'ArrowRight',
            },
        },
        {
            title: 'Feature title',
            description:
                'Shortly describe how this feature solves a specific user problem. Focus on benefits rather than features.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
                width: 1920,
                height: 1080,
                alt: 'Hero Banner Image',
                priority: true,
            },
            link: {
                label: 'Learn more',
                url: '/',
                icon: 'ArrowRight',
            },
        },
    ],
};

const MOCK_BENTO_GRID_BLOCK_DE: CMS.Model.BentoGridBlock.BentoGridBlock = {
    id: 'bento-grid-1',
    title: 'Feature-rich layout that captures attention',
    description:
        "Add a concise value statement that highlights your product's key features and benefits in a visually dynamic grid. Focus on creating balanced content blocks while keeping it under 2-3 lines. Align with your grid layout structure.",
    items: [
        {
            title: 'Feature title',
            description:
                'Shortly describe how this feature solves a specific user problem. Focus on benefits rather than features.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
                width: 1920,
                height: 1080,
                alt: 'Hero Banner Image',
                priority: true,
            },
            link: {
                label: 'Learn more',
                url: '/',
                icon: 'ArrowRight',
            },
        },
        {
            title: 'Feature title',
            description:
                'Shortly describe how this feature solves a specific user problem. Focus on benefits rather than features.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
                width: 1920,
                height: 1080,
                alt: 'Hero Banner Image',
                priority: true,
            },
            link: {
                label: 'Learn more',
                url: '/',
                icon: 'ArrowRight',
            },
        },
    ],
};

const MOCK_BENTO_GRID_BLOCK_PL: CMS.Model.BentoGridBlock.BentoGridBlock = {
    id: 'bento-grid-1',
    title: 'Feature-rich layout that captures attention',
    description:
        "Add a concise value statement that highlights your product's key features and benefits in a visually dynamic grid. Focus on creating balanced content blocks while keeping it under 2-3 lines. Align with your grid layout structure.",
    items: [
        {
            title: 'Feature title',
            description:
                'Shortly describe how this feature solves a specific user problem. Focus on benefits rather than features.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
                width: 1920,
                height: 1080,
                alt: 'Hero Banner Image',
                priority: true,
            },
            link: {
                label: 'Learn more',
                url: '/',
                icon: 'ArrowRight',
            },
        },
    ],
};

export const mapBentoGridBlock = (locale: string): CMS.Model.BentoGridBlock.BentoGridBlock => {
    switch (locale) {
        case 'de':
            return MOCK_BENTO_GRID_BLOCK_DE;
        case 'pl':
            return MOCK_BENTO_GRID_BLOCK_PL;
        default:
            return MOCK_BENTO_GRID_BLOCK_EN;
    }
};

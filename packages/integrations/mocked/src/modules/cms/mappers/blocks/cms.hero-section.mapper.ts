import { CMS } from '@dxp/framework/modules';

const MOCK_HERO_SECTION_BLOCK_1_EN: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-1',
    title: 'Your Money, {highlightedText}',
    highlightedText: 'Your Way.',
    description: 'Modern banking that adapts to your lifestyle  — anytime, anywhere.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-1.jpg',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Sign up',
            icon: 'ArrowRight',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_HERO_SECTION_BLOCK_1_DE: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-1',
    title: 'Ihr Geld, {highlightedText}',
    highlightedText: 'Ihre Art.',
    description: 'Modernes Banking, das Ihrem Leben entspricht — jederzeit, überall.',
    inverted: true,
    headingType: 'h1',
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-1.jpg',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: false,
    },
    links: [
        {
            label: 'Registrieren',
            icon: 'ArrowRight',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_HERO_SECTION_BLOCK_1_PL: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-1',
    title: 'Twoje pieniądze, {highlightedText}',
    highlightedText: 'Twoja droga.',
    description:
        'Nowoczesne bankowanie, które dostosowuje się do Twojego stylu życia — w każdej chwili, w każdym miejscu.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-1.jpg',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: false,
    },
    links: [
        {
            label: 'Zarejestruj się',
            icon: 'ArrowRight',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_HERO_SECTION_BLOCK_2_EN: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-2',
    title: 'Everyday account',
    description: 'Simplify your daily banking with an account designed for convenience, control, and peace of mind.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-2.jpg',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Create an account',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Learn more',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_HERO_SECTION_BLOCK_2_DE: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-2',
    title: 'Tageskonto',
    description:
        'Vereinfachen Sie Ihr tägliches Bankwesen mit einem Konto, das für Bequemlichkeit, Kontrolle und Ruhe sorgt.',
    inverted: true,
    headingType: 'h1',
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-2.jpg',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: false,
    },
    links: [
        {
            label: 'Konto erstellen',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Mehr erfahren',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_HERO_SECTION_BLOCK_2_PL: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-2',
    title: 'Konto codzienne',
    description: 'Zarządzaj swoimi codziennymi finansami z kontem, które zapewnia wygodę, kontrolę i spokój umysłu.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-2.jpg',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: false,
    },
    links: [
        {
            label: 'Utwórz konto',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Dowiedz się więcej',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_HERO_SECTION_BLOCK_3_EN: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-3',
    title: 'Savings account',
    description: 'Simplify your daily banking with an account designed for convenience, control, and peace of mind.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-3.jpg',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Create an account',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Learn more',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_HERO_SECTION_BLOCK_3_DE: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-3',
    title: 'Sparbuch',
    description:
        'Vereinfachen Sie Ihr tägliches Bankwesen mit einem Konto, das für Bequemlichkeit, Kontrolle und Ruhe sorgt.',
    inverted: true,
    headingType: 'h1',
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-3.jpg',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: false,
    },
    links: [
        {
            label: 'Konto erstellen',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Mehr erfahren',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_HERO_SECTION_BLOCK_3_PL: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-3',
    title: 'Konto oszczędnościowe',
    description: 'Zarządzaj swoimi oszczędnościami z kontem, które zapewnia wygodę, kontrolę i spokój umysłu.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-3.jpg',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: false,
    },
    links: [
        {
            label: 'Utwórz konto',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Dowiedz się więcej',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const HERO_SECTION_BLOCKS_EN = [
    MOCK_HERO_SECTION_BLOCK_1_EN,
    MOCK_HERO_SECTION_BLOCK_2_EN,
    MOCK_HERO_SECTION_BLOCK_3_EN,
];
const HERO_SECTION_BLOCKS_DE = [
    MOCK_HERO_SECTION_BLOCK_1_DE,
    MOCK_HERO_SECTION_BLOCK_2_DE,
    MOCK_HERO_SECTION_BLOCK_3_DE,
];
const HERO_SECTION_BLOCKS_PL = [
    MOCK_HERO_SECTION_BLOCK_1_PL,
    MOCK_HERO_SECTION_BLOCK_2_PL,
    MOCK_HERO_SECTION_BLOCK_3_PL,
];

export const mapHeroSectionBlock = ({
    locale,
    id,
}: CMS.Request.GetCmsEntryParams): CMS.Model.HeroSectionBlock.HeroSectionBlock | undefined => {
    switch (locale) {
        case 'de':
            return HERO_SECTION_BLOCKS_DE.find((block) => block.id === id);
        case 'pl':
            return HERO_SECTION_BLOCKS_PL.find((block) => block.id === id);
        default:
            return HERO_SECTION_BLOCKS_EN.find((block) => block.id === id);
    }
};

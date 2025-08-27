import { CMS } from '@dxp/framework/modules';

const MOCK_PRICING_SECTION_BLOCK_1_EN: CMS.Model.PricingSectionBlock.PricingSectionBlock = {
    id: 'pricing-section-1',
    title: 'Accounts',
    description: 'Choose the right account for your needs and enjoy simple, secure banking every day.',
    headingType: 'h1',
    pricingList: [
        {
            title: 'Everyday Account',
            description: 'A flexible account for daily banking, designed to managing your money effortless.',
            image: {
                url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-9.jpg',
                width: 351,
                height: 233,
                alt: 'Pricing section image',
                priority: true,
            },
            isPromoted: false,
            links: [
                {
                    label: 'Get started',
                    icon: '',
                    description: 'Learn more about our pricing',
                    url: '/personal/accounts/everyday-account',
                    variant: 'secondary',
                },
                {
                    label: 'Learn more',
                    description: 'Learn more about our pricing',
                    icon: 'ArrowRight',
                    url: '/personal/accounts/everyday-account',
                    variant: 'link',
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
                url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-9.jpg',
                width: 351,
                height: 233,
                alt: 'Pricing section image',
                priority: true,
            },
            links: [
                {
                    label: 'Get started',
                    icon: '',
                    description: 'Learn more about our pricing',
                    url: '/personal/accounts/savings-account',
                    variant: 'primary',
                },
                {
                    label: 'Learn more',
                    description: 'Learn more about our pricing',
                    icon: 'ArrowRight',
                    url: '/personal/accounts/savings-account',
                    variant: 'link',
                },
            ],
            isPromoted: true,
            featureListTitle: 'Everything in Everyday Account, plus:',
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

const MOCK_PRICING_SECTION_BLOCK_1_DE: CMS.Model.PricingSectionBlock.PricingSectionBlock = {
    id: 'pricing-section-1',
    title: 'Konten',
    description:
        'Wählen Sie das richtige Konto für Ihre Bedürfnisse und genießen Sie jeden Tag einfaches, sicheres Banking.',
    headingType: 'h1',
    pricingList: [
        {
            title: 'Alltagskonto',
            description: 'Ein flexibles Konto für das tägliche Banking, entwickelt, um Ihr Geld mühelos zu verwalten.',
            image: {
                url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-9.jpg',
                width: 351,
                height: 233,
                alt: 'Bild der Preissektion',
                priority: true,
            },
            isPromoted: false,
            links: [
                {
                    label: 'Loslegen',
                    icon: '',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    url: '/persönlich/konten/tageskonto',
                    variant: 'secondary',
                },
                {
                    label: 'Erfahren Sie mehr',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    icon: 'ArrowRight',
                    url: '/persönlich/konten/tageskonto',
                    variant: 'link',
                },
            ],
            featureListTitle: 'Was ist enthalten:',
            featureList: [
                {
                    title: 'Sofortige Kontoeröffnung ohne Papierkram.',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf die Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
                {
                    title: '24/7 In-App-Support von Bankexperten',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf die Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
            ],
        },
        {
            title: 'Sparkonto',
            description:
                'Vermehren Sie Ihr Vermögen mit einem Konto, das für einfaches Sparen und intelligente Finanzplanung entwickelt wurde',
            image: {
                url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-9.jpg',
                width: 351,
                height: 233,
                alt: 'Bild der Preissektion',
                priority: true,
            },
            links: [
                {
                    label: 'Loslegen',
                    icon: '',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    url: '/persönlich/konten/sparen-konto',
                    variant: 'primary',
                },
                {
                    label: 'Erfahren Sie mehr',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    icon: 'ArrowRight',
                    url: '/persönlich/konten/sparen-konto',
                    variant: 'link',
                },
            ],
            isPromoted: true,
            featureListTitle: 'Alles im Alltagskonto, plus:',
            featureList: [
                {
                    title: 'Automatisierte Sparwerkzeuge, die Ihnen helfen, Ihre Ziele zu erreichen',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf die Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
                {
                    title: 'Höhere Zinssätze als Alltagskonten',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf die Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
                {
                    title: 'Personalisierte Budgetierung und Ausgabenanalysen',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf die Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
            ],
        },
    ],
};

const MOCK_PRICING_SECTION_BLOCK_1_PL: CMS.Model.PricingSectionBlock.PricingSectionBlock = {
    id: 'pricing-section-1',
    title: 'Konta',
    description:
        'Wybierz odpowiednie konto dla swoich potrzeb i ciesz się prostym, bezpiecznym bankowaniem każdego dnia.',
    headingType: 'h1',
    pricingList: [
        {
            title: 'Konto codzienne',
            description:
                'Elastyczne konto do codziennego bankowania, zaprojektowane tak, aby zarządzanie pieniędzmi było bezwysiłkowe.',
            image: {
                url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-9.jpg',
                width: 351,
                height: 233,
                alt: 'Obraz sekcji cenowej',
                priority: true,
            },
            isPromoted: false,
            links: [
                {
                    label: 'Rozpocznij',
                    icon: '',
                    description: 'Dowiedz się więcej o naszych cenach',
                    url: '/indywidualny/konta/konto-codzienne',
                    variant: 'secondary',
                },
                {
                    label: 'Dowiedz się więcej',
                    description: 'Dowiedz się więcej o naszych cenach',
                    icon: 'ArrowRight',
                    url: '/indywidualny/konta/konto-codzienne',
                    variant: 'link',
                },
            ],
            featureListTitle: 'Co jest w zestawie:',
            featureList: [
                {
                    title: 'Natychmiastowe otwarcie konta bez papierkowej roboty.',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
                {
                    title: 'Całodobowe wsparcie w aplikacji od ekspertów bankowych',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
            ],
        },
        {
            title: 'Konto oszczędnościowe',
            description:
                'Pomnażaj swoje bogactwo dzięki kontu stworzonym do łatwego oszczędzania i inteligentnego planowania finansowego',
            image: {
                url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-9.jpg',
                width: 351,
                height: 233,
                alt: 'Obraz sekcji cenowej',
                priority: true,
            },
            links: [
                {
                    label: 'Rozpocznij',
                    icon: '',
                    description: 'Dowiedz się więcej o naszych cenach',
                    url: '/indywidualny/konta/konto-oszczędnościowe',
                    variant: 'primary',
                },
                {
                    label: 'Dowiedz się więcej',
                    description: 'Dowiedz się więcej o naszych cenach',
                    icon: 'ArrowRight',
                    url: '/indywidualny/konta/konto-oszczędnościowe',
                    variant: 'link',
                },
            ],
            isPromoted: true,
            featureListTitle: 'Wszystko w koncie codziennym, plus:',
            featureList: [
                {
                    title: 'Zautomatyzowane narzędzia oszczędnościowe, które pomogą Ci osiągnąć cele',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
                {
                    title: 'Wyższe oprocentowanie niż w kontach codziennych',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
                {
                    title: 'Spersonalizowane budżetowanie i wgląd w wydatki',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
            ],
        },
    ],
};

const MOCK_PRICING_SECTION_BLOCKS_EN = [MOCK_PRICING_SECTION_BLOCK_1_EN];
const MOCK_PRICING_SECTION_BLOCKS_DE = [MOCK_PRICING_SECTION_BLOCK_1_DE];
const MOCK_PRICING_SECTION_BLOCKS_PL = [MOCK_PRICING_SECTION_BLOCK_1_PL];

export const mapPricingSectionBlock = ({
    locale,
    id,
}: CMS.Request.GetCmsEntryParams): CMS.Model.PricingSectionBlock.PricingSectionBlock | undefined => {
    switch (locale) {
        case 'de':
            return MOCK_PRICING_SECTION_BLOCKS_DE.find((block) => block.id === id);
        case 'pl':
            return MOCK_PRICING_SECTION_BLOCKS_PL.find((block) => block.id === id);
        default:
            return MOCK_PRICING_SECTION_BLOCKS_EN.find((block) => block.id === id);
    }
};

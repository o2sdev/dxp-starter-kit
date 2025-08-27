import { CMS } from '@dxp/framework/modules';

const MOCK_FEATURE_SECTION_BLOCK_1_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-1',
    title: 'Effortless Everyday Banking',
    description: 'Enjoy seamless access to the essential banking features you need, exactly when you need them.',
    featureList: [
        {
            title: 'Instant Account Opening.',
            description: 'No paperwork required.',
            icon: 'Check',
        },
        {
            title: 'Personalized Budgeting.',
            description: 'Create and track budgets tailored to your lifestyle.',
            icon: 'Check',
        },
        {
            title: 'Automated Savings Tools.',
            description: 'Round up purchases to grow your savings.',
            icon: 'Check',
        },
    ],
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-3.jpg',
        width: 560,
        height: 560,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Sign up',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_1_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-1',
    title: 'Müheloses tägliches Banking',
    description:
        'Genießen Sie nahtlosen Zugriff auf die wesentlichen Bankfunktionen, die Sie genau dann benötigen, wenn Sie sie brauchen.',
    featureList: [
        {
            title: 'Sofortige Kontoeröffnung.',
            description: 'Keine Papierarbeit erforderlich.',
            icon: 'Check',
        },
        {
            title: 'Personalisierte Budgetierung.',
            description: 'Erstellen und verfolgen Sie Budgets, die auf Ihren Lebensstil zugeschnitten sind.',
            icon: 'Check',
        },
        {
            title: 'Automatisierte Sparwerkzeuge.',
            description: 'Runden Sie Einkäufe auf, um Ihre Ersparnisse zu steigern.',
            icon: 'Check',
        },
    ],
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-3.jpg',
        width: 560,
        height: 560,
        alt: 'Feature Section Image',
        priority: false,
    },
    links: [
        {
            label: 'Konto öffnen',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_1_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-1',
    title: 'Bezproblemowe codzienne bankowanie',
    description:
        'Ciesz się płynnym dostępem do niezbędnych funkcji bankowych, których potrzebujesz dokładnie wtedy, gdy ich potrzebujesz.',
    featureList: [
        {
            title: 'Natychmiastowe otwarcie konta.',
            description: 'Bez wymogu papierkowej roboty.',
            icon: 'Check',
        },
        {
            title: 'Spersonalizowane budżetowanie.',
            description: 'Twórz i śledź budżety dostosowane do Twojego stylu życia.',
            icon: 'Check',
        },
        {
            title: 'Zautomatyzowane narzędzia oszczędnościowe.',
            description: 'Zaokrąglaj zakupy, aby zwiększyć swoje oszczędności.',
            icon: 'Check',
        },
    ],
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-3.jpg',
        width: 560,
        height: 560,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Otwórz konto',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_2_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-2',
    title: 'Next-Gen Security & Flexibility',
    description:
        'Secure access with biometric login, instantly lock or unlock your card if it’s lost or stolen, and fee-free payments worldwide.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-4.jpg',
        width: 560,
        height: 560,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Learn more',
            icon: 'ArrowRight',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_2_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-2',
    title: 'Sicherheit & Flexibilität der nächsten Generation',
    description:
        'Sicherer Zugang mit biometrischem Login, sofortiges Sperren oder Entsperren Ihrer Karte, wenn sie verloren geht oder gestohlen wird, und gebührenfreie Zahlungen weltweit.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-4.jpg',
        width: 560,
        height: 560,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Erfahren Sie mehr',
            icon: 'ArrowRight',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_2_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-2',
    title: 'Bezpieczeństwo i elastyczność nowej generacji',
    description:
        'Bezpieczny dostęp z logowaniem biometrycznym, natychmiastowe blokowanie lub odblokowywanie karty, jeśli zostanie zgubiona lub skradziona, oraz bezpłatne płatności na całym świecie.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-4.jpg',
        width: 560,
        height: 560,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Dowiedz się więcej',
            icon: 'ArrowRight',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_3_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-3',
    iconBorder: true,
    featureList: [
        {
            title: 'Seamless digital access anytime, anywhere.',
            icon: 'Wifi',
        },
        {
            title: 'Advanced security features for peace of mind',
            icon: 'LockKeyhole',
        },
        {
            title: 'Effortless money management with smart tools',
            icon: 'BarChart',
        },
        {
            title: 'Dedicated support whenever you need it',
            icon: 'HandHelping',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_3_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-3',
    iconBorder: true,
    featureList: [
        {
            title: 'Nahtloser digitaler Zugang jederzeit und überall.',
            icon: 'Wifi',
        },
        {
            title: 'Erweiterte Sicherheitsfunktionen für ein beruhigendes Gefühl',
            icon: 'LockKeyhole',
        },
        {
            title: 'Mühelose Geldverwaltung mit intelligenten Tools',
            icon: 'BarChart',
        },
        {
            title: 'Engagierter Support, wann immer Sie ihn brauchen',
            icon: 'HandHelping',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_3_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-3',
    iconBorder: true,
    featureList: [
        {
            title: 'Bezproblemowy dostęp cyfrowy o każdej porze i w każdym miejscu.',
            icon: 'Wifi',
        },
        {
            title: 'Zaawansowane funkcje bezpieczeństwa dla spokoju ducha',
            icon: 'LockKeyhole',
        },
        {
            title: 'Bezproblemowe zarządzanie pieniędzmi za pomocą inteligentnych narzędzi',
            icon: 'BarChart',
        },
        {
            title: 'Dedykowane wsparcie, kiedy tylko go potrzebujesz',
            icon: 'HandHelping',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_4_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-4',
    iconBorder: true,
    featureList: [
        {
            title: 'Instant account setup',
            icon: 'Rocket',
        },
        {
            title: 'Real-time notifications for every transaction.',
            icon: 'Rocket',
        },
        {
            title: '24/7 access and expert support',
            icon: 'Rocket',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_4_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-4',
    iconBorder: true,
    featureList: [
        {
            title: 'Sofortige Kontoeröffnung',
            icon: 'Rocket',
        },
        {
            title: 'Echtzeitbenachrichtigungen für jede Transaktion.',
            icon: 'Rocket',
        },
        {
            title: '24/7 Zugang und Expertenunterstützung',
            icon: 'Rocket',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_4_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-4',
    iconBorder: true,
    featureList: [
        {
            title: 'Natychmiastowe zakładanie konta',
            icon: 'Rocket',
        },
        {
            title: 'Powiadomienia w czasie rzeczywistym dla każdej transakcji.',
            icon: 'Rocket',
        },
        {
            title: 'Dostęp 24/7 i wsparcie ekspertów',
            icon: 'Rocket',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_5_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-5',
    title: 'Effortless Money Management',
    description: 'Track your spending and manage your finances easily with intuitive tools.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-12.jpg',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_5_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-5',
    title: 'Mühelose Geldverwaltung',
    description: 'Verfolgen Sie Ihre Ausgaben und verwalten Sie Ihre Finanzen einfach mit intuitiven Tools.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-12.jpg',
        width: 584,
        height: 584,
        alt: 'Bild des Funktionsabschnitts',
        priority: true,
    },
    links: [
        {
            label: 'Erfahren Sie mehr',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_5_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-5',
    title: 'Bezproblemowe zarządzanie pieniędzmi',
    description: 'Śledź swoje wydatki i zarządzaj finansami łatwo dzięki intuicyjnym narzędziom.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-12.jpg',
        width: 584,
        height: 584,
        alt: 'Obraz sekcji funkcji',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_8_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-8',
    title: 'Unlock more freedom and growth',
    description: 'Choose the account that fits your life and start banking smarter today.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-11.jpg',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_8_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-8',
    title: 'Entfesseln Sie mehr Freiheit und Wachstum',
    description:
        'Wählen Sie das Konto, das zu Ihrem Leben passt, und beginnen Sie noch heute, intelligenter zu bankieren.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-11.jpg',
        width: 584,
        height: 584,
        alt: 'Bild des Funktionsabschnitts',
        priority: true,
    },
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_8_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-8',
    title: 'Odkryj więcej wolności i wzrostu',
    description: 'Wybierz konto, które pasuje do Twojego życia i zacznij bankować mądrzej już dziś.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-11.jpg',
        width: 584,
        height: 584,
        alt: 'Obraz sekcji funkcji',
        priority: true,
    },
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_6_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-6',
    title: 'Smart Security',
    description: 'Rest easy with advanced protections for your money and data.',
    inverted: false,
    iconBorder: true,
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-13.jpg',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    featureList: [
        {
            title: 'Biometric Login',
            description: 'Log in securely using face or fingerprint recognition.',
            icon: 'Rocket',
        },
        {
            title: 'Instant Card Freeze',
            description: 'Lock or unlock your card immediately if it’s lost or stolen.',
            icon: 'Rocket',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_6_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-6',
    title: 'Intelligente Sicherheit',
    description: 'Schlafen Sie ruhig mit fortschrittlichem Schutz für Ihr Geld und Ihre Daten.',
    inverted: false,
    iconBorder: true,
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-13.jpg',
        width: 584,
        height: 584,
        alt: 'Bild des Funktionsabschnitts',
        priority: true,
    },
    featureList: [
        {
            title: 'Biometrische Anmeldung',
            description: 'Melden Sie sich sicher mit Gesichts- oder Fingerabdruckerkennung an.',
            icon: 'Rocket',
        },
        {
            title: 'Instant Card Freeze',
            description: 'Sperren oder entsperren Sie Ihre Karte sofort, wenn sie verloren geht oder gestohlen wird.',
            icon: 'Rocket',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_6_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-6',
    title: 'Inteligentne bezpieczeństwo',
    description: 'Śpij spokojnie dzięki zaawansowanej ochronie Twoich pieniędzy i danych.',
    inverted: false,
    iconBorder: true,
    image: {
        url: 'https://github.com/o2sdev/dxp-starter-kit/tree/main/packages/integrations/mocked/public/images/demo/Frame-13.jpg',
        width: 584,
        height: 584,
        alt: 'Obraz sekcji funkcji',
        priority: true,
    },
    featureList: [
        {
            title: 'Biometryczne logowanie',
            description: 'Zaloguj się bezpiecznie za pomocą rozpoznawania twarzy lub odcisku palca.',
            icon: 'Rocket',
        },
        {
            title: 'Natychmiastowe zawieszenie karty',
            description: 'Zawieś lub odblokuj swoją kartę natychmiastowo, jeśli zostanie zgubiona lub skradziona.',
            icon: 'Rocket',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_7_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-7',
    inverted: false,
    iconBorder: true,
    featureList: [
        {
            title: 'Instant account setup',
            icon: 'Rocket',
        },
        {
            title: 'Real-time notifications for every transaction.',
            icon: 'Rocket',
        },
        {
            title: '24/7 access and expert support',
            icon: 'Rocket',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_7_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-7',
    inverted: false,
    iconBorder: true,
    featureList: [
        {
            title: 'Sofortige Kontoeröffnung',
            icon: 'Rocket',
        },
        {
            title: 'Echtzeitbenachrichtigungen für jede Transaktion.',
            icon: 'Rocket',
        },
        {
            title: '24/7 Zugang und Expertenunterstützung',
            icon: 'Rocket',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_7_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-7',
    inverted: false,
    iconBorder: true,
    featureList: [
        {
            title: 'Natychmiastowe zakładanie konta',
            icon: 'Rocket',
        },
        {
            title: 'Powiadomienia w czasie rzeczywistym dla każdej transakcji.',
            icon: 'Rocket',
        },
        {
            title: 'Dostęp 24/7 i wsparcie ekspertów',
            icon: 'Rocket',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const FEATURE_SECTION_BLOCKS_EN = [
    MOCK_FEATURE_SECTION_BLOCK_1_EN,
    MOCK_FEATURE_SECTION_BLOCK_2_EN,
    MOCK_FEATURE_SECTION_BLOCK_3_EN,
    MOCK_FEATURE_SECTION_BLOCK_4_EN,
    MOCK_FEATURE_SECTION_BLOCK_5_EN,
    MOCK_FEATURE_SECTION_BLOCK_6_EN,
    MOCK_FEATURE_SECTION_BLOCK_7_EN,
    MOCK_FEATURE_SECTION_BLOCK_8_EN,
];
const FEATURE_SECTION_BLOCKS_DE = [
    MOCK_FEATURE_SECTION_BLOCK_1_DE,
    MOCK_FEATURE_SECTION_BLOCK_2_DE,
    MOCK_FEATURE_SECTION_BLOCK_3_DE,
    MOCK_FEATURE_SECTION_BLOCK_4_DE,
    MOCK_FEATURE_SECTION_BLOCK_5_DE,
    MOCK_FEATURE_SECTION_BLOCK_6_DE,
    MOCK_FEATURE_SECTION_BLOCK_7_DE,
    MOCK_FEATURE_SECTION_BLOCK_8_DE,
];
const FEATURE_SECTION_BLOCKS_PL = [
    MOCK_FEATURE_SECTION_BLOCK_1_PL,
    MOCK_FEATURE_SECTION_BLOCK_2_PL,
    MOCK_FEATURE_SECTION_BLOCK_3_PL,
    MOCK_FEATURE_SECTION_BLOCK_4_PL,
    MOCK_FEATURE_SECTION_BLOCK_5_PL,
    MOCK_FEATURE_SECTION_BLOCK_6_PL,
    MOCK_FEATURE_SECTION_BLOCK_7_PL,
    MOCK_FEATURE_SECTION_BLOCK_8_PL,
];

export const mapFeatureSectionBlock = ({
    locale,
    id,
}: CMS.Request.GetCmsEntryParams): CMS.Model.FeatureSectionBlock.FeatureSectionBlock | undefined => {
    switch (locale) {
        case 'de':
            return FEATURE_SECTION_BLOCKS_DE.find((block) => block.id === id);
        case 'pl':
            return FEATURE_SECTION_BLOCKS_PL.find((block) => block.id === id);
        default:
            return FEATURE_SECTION_BLOCKS_EN.find((block) => block.id === id);
    }
};

import { CMS } from '@dxp/framework/modules';

const MOCK_FAQ_LIST_BLOCK_1_EN: CMS.Model.FaqBlock.FaqBlock = {
    id: 'faq-1',
    title: 'Frequently asked questions',
    oneColumn: true,
    description:
        "We've compiled the most important information to help you get the most out of your experience. Can't find what you're looking for? <a href='/contact-us'>Contact us</a>.",
    sections: [
        {
            items: [
                {
                    title: 'How do I open an account?',
                    content:
                        'You can open any account online or through our mobile app in just a few minutes—no paperwork required.',
                },
                {
                    title: 'What security features protect my account?',
                    content:
                        'We use the latest security features to protect your account. We also have a team of experts who are always available to help you with any questions you may have.',
                },
                {
                    title: 'Can I switch between account types later?',
                    content:
                        'Yes, you can switch between account types later. You can also switch between different accounts within the same type.',
                },
            ],
        },
    ],
    banner: {
        title: 'Still have questions?',
        description: 'Have questions or need assistance? Our team is here to help! ',
        link: { label: 'Contact us', url: '/', variant: 'primary' },
    },
};

const MOCK_FAQ_LIST_BLOCK_1_DE: CMS.Model.FaqBlock.FaqBlock = {
    id: 'faq-1',
    title: 'Häufig gestellte Fragen',
    oneColumn: true,
    description:
        "Wir haben die wichtigsten Informationen zusammengestellt, um Ihnen zu helfen, das Beste aus Ihrer Erfahrung herauszuholen. Können Sie nicht finden, wonach Sie suchen? <a href='/contact-us'>Kontaktieren Sie uns</a>.",
    sections: [
        {
            items: [
                {
                    title: 'Wie eröffne ich ein Konto?',
                    content:
                        'Sie können jedes Konto online oder über unsere mobile App in nur wenigen Minuten eröffnen – ohne Papierkram.',
                },
                {
                    title: 'Welche Sicherheitsfunktionen schützen mein Konto?',
                    content:
                        'Wir verwenden die neuesten Sicherheitsfunktionen, um Ihr Konto zu schützen. Wir haben auch ein Expertenteam, das Ihnen bei Fragen jederzeit zur Verfügung steht.',
                },
                {
                    title: 'Kann ich später zwischen Kontotypen wechseln?',
                    content:
                        'Ja, Sie können später zwischen Kontotypen wechseln. Sie können auch zwischen verschiedenen Konten innerhalb desselben Typs wechseln.',
                },
            ],
        },
    ],
    banner: {
        title: 'Haben Sie noch Fragen?',
        description: 'Haben Sie Fragen oder benötigen Sie Unterstützung? Unser Team ist hier, um zu helfen!',
        link: { label: 'Kontaktieren Sie uns', url: '/', variant: 'primary' },
    },
};

const MOCK_FAQ_LIST_BLOCK_1_PL: CMS.Model.FaqBlock.FaqBlock = {
    id: 'faq-1',
    title: 'Często zadawane pytania',
    oneColumn: true,
    description:
        "Zebraliśmy najważniejsze informacje, aby pomóc Ci w pełni wykorzystać Twoje doświadczenie. Nie możesz znaleźć tego, czego szukasz? <a href='/contact-us'>Skontaktuj się z nami</a>.",
    sections: [
        {
            items: [
                {
                    title: 'Jak otworzyć konto?',
                    content:
                        'Możesz otworzyć dowolne konto online lub za pośrednictwem naszej aplikacji mobilnej w zaledwie kilka minut – bez papierkowej roboty.',
                },
                {
                    title: 'Jakie funkcje bezpieczeństwa chronią moje konto?',
                    content:
                        'Używamy najnowszych funkcji bezpieczeństwa, aby chronić Twoje konto. Mamy również zespół ekspertów, którzy są zawsze dostępni, aby pomóc Ci w razie pytań.',
                },
                {
                    title: 'Czy mogę później zmienić typ konta?',
                    content:
                        'Tak, możesz później zmienić typ konta. Możesz również przełączać się między różnymi kontami w ramach tego samego typu.',
                },
            ],
        },
    ],
    banner: {
        title: 'Masz jeszcze pytania?',
        description: 'Masz pytania lub potrzebujesz pomocy? Nasz zespół jest tutaj, aby pomóc!',
        link: { label: 'Skontaktuj się z nami', url: '/', variant: 'primary' },
    },
};

const MOCK_FAQ_LIST_BLOCK_2_EN: CMS.Model.FaqBlock.FaqBlock = {
    id: 'faq-2',
    title: 'Frequently asked questions',
    oneColumn: true,
    description:
        "We've compiled the most important information to help you get the most out of your experience. Can't find what you're looking for? <a href='/contact-us'>Contact us</a>.",
    sections: [
        {
            items: [
                {
                    title: 'How do I open an Everyday Account?',
                    content:
                        'You can open any account online or through our mobile app in just a few minutes—no paperwork required.',
                },
                {
                    title: 'What security features are included?',
                    content:
                        'We use the latest security features to protect your account. We also have a team of experts who are always available to help you with any questions you may have.',
                },
                {
                    title: 'Is there a minimum balance required?',
                    content:
                        'Yes, you can switch between account types later. You can also switch between different accounts within the same type.',
                },
            ],
        },
    ],
    banner: {
        title: 'Still have questions?',
        description: 'Have questions or need assistance? Our team is here to help! ',
        link: { label: 'Contact us', url: '/', variant: 'primary' },
    },
};

const MOCK_FAQ_LIST_BLOCK_2_DE: CMS.Model.FaqBlock.FaqBlock = {
    id: 'faq-2',
    title: 'Häufig gestellte Fragen',
    oneColumn: true,
    description:
        "Wir haben die wichtigsten Informationen zusammengestellt, um Ihnen zu helfen, das Beste aus Ihrer Erfahrung herauszuholen. Können Sie nicht finden, wonach Sie suchen? <a href='/contact-us'>Kontaktieren Sie uns</a>.",
    sections: [
        {
            items: [
                {
                    title: 'Wie eröffne ich ein Alltagskonto?',
                    content:
                        'Sie können jedes Konto online oder über unsere mobile App in nur wenigen Minuten eröffnen – ohne Papierkram.',
                },
                {
                    title: 'Welche Sicherheitsfunktionen sind enthalten?',
                    content:
                        'Wir verwenden die neuesten Sicherheitsfunktionen, um Ihr Konto zu schützen. Wir haben auch ein Expertenteam, das Ihnen bei Fragen jederzeit zur Verfügung steht.',
                },
                {
                    title: 'Ist ein Mindestguthaben erforderlich?',
                    content:
                        'Ja, Sie können später zwischen Kontotypen wechseln. Sie können auch zwischen verschiedenen Konten innerhalb desselben Typs wechseln.',
                },
            ],
        },
    ],
    banner: {
        title: 'Haben Sie noch Fragen?',
        description: 'Haben Sie Fragen oder benötigen Sie Unterstützung? Unser Team ist hier, um zu helfen!',
        link: { label: 'Kontaktieren Sie uns', url: '/', variant: 'primary' },
    },
};

const MOCK_FAQ_LIST_BLOCK_2_PL: CMS.Model.FaqBlock.FaqBlock = {
    id: 'faq-2',
    title: 'Często zadawane pytania',
    oneColumn: true,
    description:
        "Zebraliśmy najważniejsze informacje, aby pomóc Ci w pełni wykorzystać Twoje doświadczenie. Nie możesz znaleźć tego, czego szukasz? <a href='/contact-us'>Skontaktuj się z nami</a>.",
    sections: [
        {
            items: [
                {
                    title: 'Jak otworzyć Konto Codzienne?',
                    content:
                        'Możesz otworzyć dowolne konto online lub za pośrednictwem naszej aplikacji mobilnej w zaledwie kilka minut – bez papierkowej roboty.',
                },
                {
                    title: 'Jakie funkcje bezpieczeństwa są wliczone?',
                    content:
                        'Używamy najnowszych funkcji bezpieczeństwa, aby chronić Twoje konto. Mamy również zespół ekspertów, którzy są zawsze dostępni, aby pomóc Ci w razie pytań.',
                },
                {
                    title: 'Czy wymagane jest minimalne saldo?',
                    content:
                        'Tak, możesz później zmienić typ konta. Możesz również przełączać się między różnymi kontami w ramach tego samego typu.',
                },
            ],
        },
    ],
    banner: {
        title: 'Masz jeszcze pytania?',
        description: 'Masz pytania lub potrzebujesz pomocy? Nasz zespół jest tutaj, aby pomóc!',
        link: { label: 'Skontaktuj się z nami', url: '/', variant: 'primary' },
    },
};

const MOCK_FAQ_LIST_BLOCKS_EN = [MOCK_FAQ_LIST_BLOCK_1_EN, MOCK_FAQ_LIST_BLOCK_2_EN];
const MOCK_FAQ_LIST_BLOCKS_DE = [MOCK_FAQ_LIST_BLOCK_1_DE, MOCK_FAQ_LIST_BLOCK_2_DE];
const MOCK_FAQ_LIST_BLOCKS_PL = [MOCK_FAQ_LIST_BLOCK_1_PL, MOCK_FAQ_LIST_BLOCK_2_PL];

export const mapFaqBlock = ({ locale, id }: CMS.Request.GetCmsEntryParams): CMS.Model.FaqBlock.FaqBlock | undefined => {
    switch (locale) {
        case 'de':
            return MOCK_FAQ_LIST_BLOCKS_DE.find((block) => block.id === id);
        case 'pl':
            return MOCK_FAQ_LIST_BLOCKS_PL.find((block) => block.id === id);
        default:
            return MOCK_FAQ_LIST_BLOCKS_EN.find((block) => block.id === id);
    }
};

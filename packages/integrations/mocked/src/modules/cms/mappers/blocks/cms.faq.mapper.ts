import { NotFoundException } from '@nestjs/common';

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
    title: 'Frequently Asked Questions',
    oneColumn: true,
    description:
        "We've compiled the most important information to help you make the most of your experience. Can't find what you're looking for? <a href='/contact-us'>Contact us</a>.",
    sections: [
        {
            items: [
                {
                    title: 'How do I order a card?',
                    content:
                        'You can order a card online or through our mobile app in just a few minutes—no paperwork required.',
                },
                {
                    title: 'What security features protect my card?',
                    content:
                        'We use the latest security features to protect your card. We also have a team of experts who are always available to help you with any questions you may have.',
                },
                {
                    title: 'Can I change the card type later?',
                    content:
                        'Yes, you can change the card type later. You can also switch between different cards within the same type.',
                },
                {
                    title: 'Can I change the card PIN?',
                    content: 'Yes, you can change the card PIN. You can also change the card PIN within the same type.',
                },
            ],
        },
    ],
    banner: {
        title: 'Still have questions?',
        description: 'Have questions or need assistance? Our team is here to help!',
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
                    title: 'Wie bestelle ich eine Karte?',
                    content:
                        'Sie können eine Karte online oder über unsere mobile App in nur wenigen Minuten bestellen – ohne Papierkram.',
                },
                {
                    title: 'Welche Sicherheitsfunktionen schützen meine Karte?',
                    content:
                        'Wir verwenden die neuesten Sicherheitsfunktionen, um Ihre Karte zu schützen. Wir haben auch ein Expertenteam, das Ihnen bei Fragen jederzeit zur Verfügung steht.',
                },
                {
                    title: 'Kann ich den Kartentyp später ändern?',
                    content:
                        'Ja, Sie können den Kartentyp später ändern. Sie können auch zwischen verschiedenen Karten innerhalb desselben Typs wechseln.',
                },
                {
                    title: 'Kann ich die Karten-PIN ändern?',
                    content:
                        'Ja, Sie können die Karten-PIN ändern. Sie können auch die Karten-PIN innerhalb desselben Typs ändern.',
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
                    title: 'Jak zamówić kartę?',
                    content:
                        'Możesz zamówić kartę online lub za pośrednictwem naszej aplikacji mobilnej w zaledwie kilka minut – bez papierkowej roboty.',
                },
                {
                    title: 'Jakie funkcje bezpieczeństwa chronią moją kartę?',
                    content:
                        'Używamy najnowszych funkcji bezpieczeństwa, aby chronić Twoją kartę. Mamy również zespół ekspertów, którzy są zawsze dostępni, aby pomóc Ci w razie pytań.',
                },
                {
                    title: 'Czy mogę później zmienić typ karty?',
                    content:
                        'Tak, możesz później zmienić typ karty. Możesz również przełączać się między różnymi kartami w ramach tego samego typu.',
                },
                {
                    title: 'Czy mogę zmienić kod PIN karty?',
                    content:
                        'Tak, możesz zmienić kod PIN karty. Możesz również zmienić kod PIN karty w ramach tego samego typu.',
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

const MOCK_FAQ_LIST_BLOCK_3_EN: CMS.Model.FaqBlock.FaqBlock = {
    id: 'faq-3',
    title: 'Frequently Asked Questions',
    oneColumn: true,
    description:
        "We've compiled the most important information to help you make the most of your experience. Can't find what you're looking for? <a href='/contact-us'>Contact us</a>.",
    sections: [
        {
            items: [
                {
                    title: 'How do I collect my insurance?',
                    content:
                        'You can collect your insurance online or through our mobile app in just a few minutes—no paperwork required.',
                },
                {
                    title: 'What security features protect my insurance?',
                    content:
                        'We use the latest security features to protect your insurance. We also have a team of experts who are always available to help you with any questions you may have.',
                },
                {
                    title: 'Can I change the insurance type later?',
                    content:
                        'Yes, you can change the insurance type later. You can also switch between different insurances within the same type.',
                },
                {
                    title: 'Can I change the insurance PIN?',
                    content:
                        'Yes, you can change the insurance PIN. You can also change the insurance PIN within the same type.',
                },
            ],
        },
    ],
    banner: {
        title: 'Still have questions?',
        description: 'Have questions or need assistance? Our team is here to help!',
        link: { label: 'Contact us', url: '/', variant: 'primary' },
    },
};

const MOCK_FAQ_LIST_BLOCK_3_DE: CMS.Model.FaqBlock.FaqBlock = {
    id: 'faq-3',
    title: 'Häufig gestellte Fragen',
    oneColumn: true,
    description:
        'Wir haben die wichtigsten Informationen zusammengestellt, um Ihnen zu helfen, das Beste aus Ihrer Erfahrung zu machen. Können Sie nicht finden, wonach Sie suchen? <a href="/contact-us">Kontaktieren Sie uns</a>.',
    sections: [
        {
            items: [
                {
                    title: 'Wie erhalte ich meine Versicherung?',
                    content:
                        'Sie können Ihre Versicherung online oder über unsere mobile App in nur wenigen Minuten erhalten—keine Papierarbeit erforderlich.',
                },
                {
                    title: 'Welche Sicherheitsfunktionen schützen meine Versicherung?',
                    content:
                        'Wir verwenden die neuesten Sicherheitsfunktionen, um Ihre Versicherung zu schützen. Wir haben auch ein Expertenteam, das Ihnen bei Fragen jederzeit zur Verfügung steht.',
                },
                {
                    title: 'Kann ich den Versicherungstyp später ändern?',
                    content:
                        'Ja, Sie können den Versicherungstyp später ändern. Sie können auch zwischen verschiedenen Versicherungen innerhalb desselben Typs wechseln.',
                },
                {
                    title: 'Kann ich die Versicherungs-PIN ändern?',
                    content:
                        'Ja, Sie können die Versicherungs-PIN ändern. Sie können auch die Versicherungs-PIN innerhalb desselben Typs ändern.',
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

const MOCK_FAQ_LIST_BLOCK_3_PL: CMS.Model.FaqBlock.FaqBlock = {
    id: 'faq-3',
    title: 'Najczęściej zadawane pytania',
    oneColumn: true,
    description:
        'Zebraliśmy najważniejsze informacje, aby pomóc Ci w pełni wykorzystać swoje doświadczenie. Nie możesz znaleźć tego, czego szukasz? <a href="/contact-us">Skontaktuj się z nami</a>.',
    sections: [
        {
            items: [
                {
                    title: 'Jak mogę odebrać moje ubezpieczenie?',
                    content:
                        'Możesz odebrać swoje ubezpieczenie online lub za pośrednictwem naszej aplikacji mobilnej w zaledwie kilka minut—bez papierkowej roboty.',
                },
                {
                    title: 'Jakie funkcje bezpieczeństwa chronią moje ubezpieczenie?',
                    content:
                        'Używamy najnowszych funkcji bezpieczeństwa, aby chronić Twoje ubezpieczenie. Mamy również zespół ekspertów, którzy są zawsze dostępni, aby pomóc Ci w przypadku jakichkolwiek pytań.',
                },
                {
                    title: 'Czy mogę później zmienić rodzaj ubezpieczenia?',
                    content:
                        'Tak, możesz później zmienić rodzaj ubezpieczenia. Możesz również przełączać się między różnymi ubezpieczeniami w ramach tego samego typu.',
                },
                {
                    title: 'Czy mogę zmienić PIN ubezpieczenia?',
                    content:
                        'Tak, możesz zmienić PIN ubezpieczenia. Możesz również zmienić PIN ubezpieczenia w ramach tego samego typu.',
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

const MOCK_FAQ_LIST_BLOCKS_EN = [MOCK_FAQ_LIST_BLOCK_1_EN, MOCK_FAQ_LIST_BLOCK_2_EN, MOCK_FAQ_LIST_BLOCK_3_EN];
const MOCK_FAQ_LIST_BLOCKS_DE = [MOCK_FAQ_LIST_BLOCK_1_DE, MOCK_FAQ_LIST_BLOCK_2_DE, MOCK_FAQ_LIST_BLOCK_3_DE];
const MOCK_FAQ_LIST_BLOCKS_PL = [MOCK_FAQ_LIST_BLOCK_1_PL, MOCK_FAQ_LIST_BLOCK_2_PL, MOCK_FAQ_LIST_BLOCK_3_PL];

export const mapFaqBlock = ({ locale, id }: CMS.Request.GetCmsEntryParams): CMS.Model.FaqBlock.FaqBlock => {
    switch (locale) {
        case 'de':
            return MOCK_FAQ_LIST_BLOCKS_DE.find((block) => block.id === id)!;
        case 'pl':
            return MOCK_FAQ_LIST_BLOCKS_PL.find((block) => block.id === id)!;
        case 'en':
            return MOCK_FAQ_LIST_BLOCKS_EN.find((block) => block.id === id)!;
        default:
            throw new NotFoundException();
    }
};

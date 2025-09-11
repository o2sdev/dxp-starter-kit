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

const MOCK_FAQ_LIST_BLOCK_4_EN: CMS.Model.FaqBlock.FaqBlock = {
    id: 'faq-4',
    title: 'Frequently asked questions',
    oneColumn: false,
    description:
        "We've compiled the most important information to help you get the most out of your experience. Can't find what you're looking for? <a href='/contact-us'>Contact us</a>.",
    sections: [
        {
            title: 'Accounts',
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
        {
            title: 'Cards',
            items: [
                {
                    title: 'How do I apply for a new card?',
                    content:
                        'You can apply for a new card through your online banking account or mobile app. The process takes just a few minutes.',
                },
                {
                    title: 'What should I do if I lose my card?',
                    content:
                        'If you lose your card, immediately block it through the app or online banking. You can also call our 24/7 support line.',
                },
                {
                    title: 'Are there any foreign transaction fees?',
                    content:
                        'Foreign transaction fees vary by card type. Premium accounts often include fee-free international transactions.',
                },
            ],
        },
        {
            title: 'Transfers',
            items: [
                {
                    title: 'How long do transfers take?',
                    content:
                        'Domestic transfers usually complete within minutes. International transfers may take 1-3 business days.',
                },
                {
                    title: 'What information do I need for a transfer?',
                    content:
                        "For domestic transfers, you need the recipient's name and account number. International transfers require SWIFT / BIC code.",
                },
                {
                    title: 'Is there a limit on transfer amounts?',
                    content:
                        'Transfer limits depend on your account type and security settings. You can view and adjust them in online banking.',
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

const MOCK_FAQ_LIST_BLOCK_4_DE: CMS.Model.FaqBlock.FaqBlock = {
    id: 'faq-4',
    title: 'Häufig gestellte Fragen',
    oneColumn: false,
    description:
        "Wir haben die wichtigsten Informationen zusammengestellt, um Ihnen zu helfen, das Beste aus Ihrer Erfahrung herauszuholen. Können Sie nicht finden, wonach Sie suchen? <a href='/contact-us'>Kontaktieren Sie uns</a>.",
    sections: [
        {
            title: 'Konten',
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
        {
            title: 'Karten',
            items: [
                {
                    title: 'Wie beantrage ich eine neue Karte?',
                    content:
                        'Sie können eine neue Karte über Ihr Online-Banking-Konto oder die mobile App beantragen. Der Vorgang dauert nur wenige Minuten.',
                },
                {
                    title: 'Was soll ich tun, wenn ich meine Karte verliere?',
                    content:
                        'Wenn Sie Ihre Karte verlieren, sperren Sie sie sofort über die App oder das Online-Banking. Sie können auch unsere 24/7-Hotline anrufen.',
                },
                {
                    title: 'Gibt es Gebühren für Auslandstransaktionen?',
                    content:
                        'Die Gebühren für Auslandstransaktionen variieren je nach Kartentyp. Premium-Konten beinhalten oft gebührenfreie internationale Transaktionen.',
                },
            ],
        },
        {
            title: 'Überweisungen',
            items: [
                {
                    title: 'Wie lange dauern Überweisungen?',
                    content:
                        'Inlandsüberweisungen sind in der Regel innerhalb von Minuten abgeschlossen. Internationale Überweisungen können 1-3 Werktage dauern.',
                },
                {
                    title: 'Welche Informationen benötige ich für eine Überweisung?',
                    content:
                        'Für Inlandsüberweisungen benötigen Sie den Namen und die Kontonummer des Empfängers. Internationale Überweisungen erfordern den SWIFT / BIC-Code.',
                },
                {
                    title: 'Gibt es ein Limit für Überweisungsbeträge?',
                    content:
                        'Die Überweisungslimits hängen von Ihrem Kontotyp und den Sicherheitseinstellungen ab. Sie können diese im Online-Banking einsehen und anpassen.',
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

const MOCK_FAQ_LIST_BLOCK_4_PL: CMS.Model.FaqBlock.FaqBlock = {
    id: 'faq-4',
    title: 'Często zadawane pytania',
    oneColumn: false,
    description:
        "Zebraliśmy najważniejsze informacje, aby pomóc Ci w pełni wykorzystać Twoje doświadczenie. Nie możesz znaleźć tego, czego szukasz? <a href='/contact-us'>Skontaktuj się z nami</a>.",
    sections: [
        {
            title: 'Konta',
            items: [
                {
                    title: 'Jak otworzyć konto?',
                    content:
                        'Możesz otworzyć dowolne konto online lub za pośrednictwem naszej aplikacji mobilnej w zaledwie kilka minut - bez dokumentów papierowych.',
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
        {
            title: 'Karty',
            items: [
                {
                    title: 'Jak złożyć wniosek o nową kartę?',
                    content:
                        'Możesz złożyć wniosek o nową kartę przez bankowość internetową lub aplikację mobilną. Proces zajmuje tylko kilka minut.',
                },
                {
                    title: 'Co zrobić w przypadku zgubienia karty?',
                    content:
                        'Jeśli zgubisz kartę, natychmiast zablokuj ją przez aplikację lub bankowość internetową. Możesz również zadzwonić na naszą całodobową linię wsparcia.',
                },
                {
                    title: 'Czy są jakieś opłaty za transakcje zagraniczne?',
                    content:
                        'Opłaty za transakcje zagraniczne różnią się w zależności od typu karty. Konta premium często zawierają międzynarodowe transakcje bez opłat.',
                },
            ],
        },
        {
            title: 'Przelewy',
            items: [
                {
                    title: 'Jak długo trwają przelewy?',
                    content:
                        'Przelewy krajowe realizowane są zwykle w ciągu kilku minut. Przelewy międzynarodowe mogą trwać 1-3 dni robocze.',
                },
                {
                    title: 'Jakie informacje są potrzebne do wykonania przelewu?',
                    content:
                        'W przypadku przelewów krajowych potrzebujesz nazwiska odbiorcy i numeru konta. Przelewy międzynarodowe wymagają kodu SWIFT / BIC.',
                },
                {
                    title: 'Czy istnieje limit kwoty przelewu?',
                    content:
                        'Limity przelewów zależą od typu konta i ustawień bezpieczeństwa. Możesz je sprawdzić i dostosować w bankowości internetowej.',
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

const MOCK_FAQ_LIST_BLOCKS_EN = [
    MOCK_FAQ_LIST_BLOCK_1_EN,
    MOCK_FAQ_LIST_BLOCK_2_EN,
    MOCK_FAQ_LIST_BLOCK_3_EN,
    MOCK_FAQ_LIST_BLOCK_4_EN,
];
const MOCK_FAQ_LIST_BLOCKS_DE = [
    MOCK_FAQ_LIST_BLOCK_1_DE,
    MOCK_FAQ_LIST_BLOCK_2_DE,
    MOCK_FAQ_LIST_BLOCK_3_DE,
    MOCK_FAQ_LIST_BLOCK_4_DE,
];
const MOCK_FAQ_LIST_BLOCKS_PL = [
    MOCK_FAQ_LIST_BLOCK_1_PL,
    MOCK_FAQ_LIST_BLOCK_2_PL,
    MOCK_FAQ_LIST_BLOCK_3_PL,
    MOCK_FAQ_LIST_BLOCK_4_PL,
];

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

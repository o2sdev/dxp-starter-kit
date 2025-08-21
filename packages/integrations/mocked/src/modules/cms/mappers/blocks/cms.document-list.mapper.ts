import { CMS } from '@dxp/framework/modules';

const MOCK_DOCUMENT_LIST_BLOCK_EN: CMS.Model.DocumentListBlock.DocumentListBlock = {
    id: 'document-list-1',
    title: 'Document List',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    documents: [
        {
            title: 'Tariff of commissions and fees for natural persons lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum',
            file: {
                url: 'https://www.google.com',
                alt: 'Tariff of commissions and fees for natural persons',
            },
            icon: 'FileText',
        },
        {
            title: 'Tariff of commissions and fees for natural persons lorem ipsum',
            file: {
                url: 'https://www.google.com',
                alt: 'Tariff of commissions and fees for natural persons',
            },
            icon: 'FileText',
        },
        {
            title: 'Tariff of commissions and fees for natural persons lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum',
            file: {
                url: 'https://www.google.com',
                alt: 'Tariff of commissions and fees for natural persons',
            },
            icon: 'FileText',
        },
        {
            title: 'Tariff of commissions and fees for natural persons',
            file: {
                url: 'https://www.google.com',
                alt: 'Tariff of commissions and fees for natural persons',
            },
            icon: 'FileText',
        },
    ],
};

const MOCK_DOCUMENT_LIST_BLOCK_DE: CMS.Model.DocumentListBlock.DocumentListBlock = {
    id: 'document-list-1',
    title: 'Document List',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    documents: [
        {
            title: 'Tariff of commissions and fees for natural persons',
            file: {
                url: 'https://www.google.com',
                alt: 'Tariff of commissions and fees for natural persons',
            },
            icon: 'FileText',
        },
    ],
};

const MOCK_DOCUMENT_LIST_BLOCK_PL: CMS.Model.DocumentListBlock.DocumentListBlock = {
    id: 'document-list-1',
    title: 'Document List',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    documents: [
        {
            title: 'Tariff of commissions and fees for natural persons',
            file: {
                url: 'https://www.google.com',
                alt: 'Tariff of commissions and fees for natural persons',
            },
            icon: 'FileText',
        },
    ],
};

export const mapDocumentListBlock = (locale: string): CMS.Model.DocumentListBlock.DocumentListBlock => {
    switch (locale) {
        case 'de':
            return MOCK_DOCUMENT_LIST_BLOCK_DE;
        case 'pl':
            return MOCK_DOCUMENT_LIST_BLOCK_PL;
        default:
            return MOCK_DOCUMENT_LIST_BLOCK_EN;
    }
};

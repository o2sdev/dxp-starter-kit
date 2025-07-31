// this unused import is necessary for TypeScript to properly resolve API methods
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Blocks, Modules } from '@dxp/api-harmonization';
// this unused import is necessary for TypeScript to properly resolve API methods
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Models } from '@dxp/utils.api-harmonization';

import { extendSdk, getSdk } from '@dxp/framework/sdk';

import { notFoundPage } from '@/api/modules/not-found-page';
import { page } from '@/api/modules/page';

const API_URL =
    (typeof window === 'undefined' ? process.env.NEXT_PUBLIC_API_URL_INTERNAL : process.env.NEXT_PUBLIC_API_URL) ||
    process.env.NEXT_PUBLIC_API_URL;

const internalSdk = getSdk({
    apiUrl: API_URL!,
    logger: {
        // @ts-expect-error missing types
        level: process.env.NEXT_PUBLIC_LOG_LEVEL,
        // @ts-expect-error missing types
        format: process.env.NEXT_PUBLIC_LOG_FORMAT,
        colorsEnabled: process.env.NEXT_PUBLIC_LOG_COLORS_ENABLED === 'true',
    },
});

export const sdk = extendSdk(internalSdk, {
    modules: {
        getInit: page(internalSdk).modules.getInit,
        getPage: page(internalSdk).modules.getPage,
        getNotFoundPage: notFoundPage(internalSdk).modules.getNotFoundPage,
    },
});

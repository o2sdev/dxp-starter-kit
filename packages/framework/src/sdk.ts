import { FetchOptions, ofetch } from 'ofetch';

import { createInterceptors } from './interceptors';
import { LoggerConfig } from './utils/logger';

export interface CompatRequestConfig {
    url?: string;
    method?: string;
    headers?: Record<string, string>;
    params?: unknown;
    data?: unknown;
    [key: string]: unknown;
}

export interface SdkConfig {
    apiUrl: string;
    logger?: LoggerConfig;
}

// Define API method groups as a generic type for better scalability.
export interface ApiMethodGroup {
    [key: string]: (makeRequest: RequestMethod) => (...args: never[]) => unknown;
}

// Define the generic `RequestMethod` type.
export type RequestMethod = <T>(config: CompatRequestConfig) => Promise<T>;

// Helper function to generate grouped APIs dynamically
const _createApiGroup = <T extends ApiMethodGroup>(
    methods: T,
    makeRequest: RequestMethod,
): { [K in keyof T]: ReturnType<T[K]> } => {
    return Object.fromEntries(Object.entries(methods).map(([key, method]) => [key, method(makeRequest)])) as {
        [K in keyof T]: ReturnType<T[K]>;
    };
};

export interface Sdk {
    makeRequest: RequestMethod;
}

// The primary SDK factory function
export const getSdk = ({ apiUrl, logger }: SdkConfig): Sdk => {
    const { onRequest, onRequestError, onResponse, onResponseError } = createInterceptors({
        logger,
    });

    const ofetchInstance = ofetch.create({
        baseURL: apiUrl,
        onRequest,
        onRequestError,
        onResponse,
        onResponseError,
    });

    const makeRequest: RequestMethod = <T>(config: CompatRequestConfig): Promise<T> => {
        const fetchOptions: FetchOptions = {
            method: config.method,
            query: config.params as Record<string, unknown>,
            body: config.data as BodyInit,
        };

        if (config.headers) {
            fetchOptions.headers = config.headers as FetchOptions['headers'];
        }

        const url = config.url || '';
        return ofetchInstance(url, fetchOptions) as Promise<T>;
    };

    // Define API method groups here

    return {
        makeRequest,
    };
};

// Extending the SDK while maintaining type safety
export const extendSdk = <CustomMethods extends Partial<Record<string, unknown>>>(
    sdk: ReturnType<typeof getSdk>,
    overrides: CustomMethods,
): typeof sdk & CustomMethods => {
    return {
        ...sdk,
        ...overrides,
    };
};

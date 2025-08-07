import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { HeroBannerProps } from './HeroBanner.types';

export const HeroBannerDynamic = dynamic(() => import('./HeroBanner.client').then((module) => module.HeroBannerPure));

export const HeroBanner: React.FC<HeroBannerProps> = async ({ id, accessToken, locale, routing }) => {
    try {
        const data = await sdk.blocks.getHeroBanner(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

        return <HeroBannerDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />;
    } catch (_error) {
        return null;
    }
};

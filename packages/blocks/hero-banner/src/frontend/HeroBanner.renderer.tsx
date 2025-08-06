import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@dxp/ui/components/Loading';

import { HeroBanner } from './HeroBanner.server';
import { HeroBannerRendererProps } from './HeroBanner.types';

export const HeroBannerRenderer: React.FC<HeroBannerRendererProps> = ({ id, accessToken, routing }) => {
    const locale = useLocale();

    return (
        <Suspense key={id} fallback={<Loading bars={15} />}>
            <HeroBanner id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@dxp/ui/components/Container';
import { Loading } from '@dxp/ui/components/Loading';

import { HeroBanner } from './HeroBanner.server';
import { HeroBannerRendererProps } from './HeroBanner.types';

export const HeroBannerRenderer: React.FC<HeroBannerRendererProps> = ({ id, accessToken, routing }) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <Container>
                    <Loading bars={12} />
                </Container>
            }
        >
            <HeroBanner id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

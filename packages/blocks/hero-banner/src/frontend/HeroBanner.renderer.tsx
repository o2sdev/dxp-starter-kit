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
                <Container variant="full">
                    <div className="h-full w-full flex flex-col lg:flex-row gap-12 lg:gap-16'">
                        <Loading bars={15} />
                        <Loading bars={15} />
                    </div>
                </Container>
            }
        >
            <HeroBanner id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

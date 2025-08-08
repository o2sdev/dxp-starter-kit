import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@dxp/ui/components/Container';
import { Loading } from '@dxp/ui/components/Loading';

import { CtaSection } from './CtaSection.server';
import { CtaSectionRendererProps } from './CtaSection.types';

export const CtaSectionRenderer: React.FC<CtaSectionRendererProps> = ({ id, accessToken, routing }) => {
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
            <CtaSection id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

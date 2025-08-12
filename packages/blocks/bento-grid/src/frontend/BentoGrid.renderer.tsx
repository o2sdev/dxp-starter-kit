import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@dxp/ui/components/Container';
import { Loading } from '@dxp/ui/components/Loading';

import { BentoGrid } from './BentoGrid.server';
import { BentoGridRendererProps } from './BentoGrid.types';

export const BentoGridRenderer: React.FC<BentoGridRendererProps> = ({ id, accessToken, routing }) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <Container variant="full">
                    <div className="flex flex-col gap-12">
                        <Loading bars={5} />
                        <div className="flex flex-col lg:flex-row gap-12">
                            <Loading bars={15} />
                            <Loading bars={15} />
                            <Loading bars={15} />
                        </div>
                    </div>
                </Container>
            }
        >
            <BentoGrid id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

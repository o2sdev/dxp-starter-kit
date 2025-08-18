import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@dxp/ui/components/Loading';

import { QuickLinks } from './QuickLinks.server';
import { QuickLinksRendererProps } from './QuickLinks.types';

export const QuickLinksRenderer: React.FC<QuickLinksRendererProps> = ({ id, accessToken, routing }) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <div className="flex flex-col gap-5 md:gap-6">
                    <Loading bars={1} />
                    <div className="grid grid-flow-row gap-6 sm:grid-cols-[repeat(2,minmax(250px,600px))] lg:grid-cols-[repeat(4,minmax(200px,600px))]">
                        <Loading bars={3} />
                        <Loading bars={3} />
                        <Loading bars={3} />
                        <Loading bars={3} />
                    </div>
                </div>
            }
        >
            <QuickLinks id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

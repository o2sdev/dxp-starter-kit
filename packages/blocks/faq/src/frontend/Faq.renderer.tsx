import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@dxp/ui/components/Loading';

import { Faq } from './Faq.server';
import { FaqRendererProps } from './Faq.types';

export const FaqRenderer: React.FC<FaqRendererProps> = ({ id, accessToken, routing }) => {
    const locale = useLocale();

    return (
        <Suspense key={id} fallback={<Loading bars={[13, 14]} />}>
            <Faq id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

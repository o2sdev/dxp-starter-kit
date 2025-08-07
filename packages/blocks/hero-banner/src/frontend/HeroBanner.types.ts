import { VariantProps } from 'class-variance-authority';
import { defineRouting } from 'next-intl/routing';

import { buttonVariants } from '@dxp/ui/elements/button';

import { Model } from '../api-harmonization/hero-banner.client';

export interface HeroBannerProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type HeroBannerPureProps = HeroBannerProps & Model.HeroBannerBlock;

export type HeroBannerRendererProps = Omit<HeroBannerProps, ''> & {
    slug: string[];
};

'use server';

import { Modules } from '@dxp/api-harmonization';
import * as BentoGrid from '@dxp/blocks.bento-grid/frontend';
import * as CtaSection from '@dxp/blocks.cta-section/frontend';
import * as Faq from '@dxp/blocks.faq/frontend';
import * as FeatureSection from '@dxp/blocks.feature-section/frontend';
import * as HeroBanner from '@dxp/blocks.hero-banner/frontend';
import * as MediaSection from '@dxp/blocks.media-section/frontend';
// BLOCK IMPORT

import { getLocale } from 'next-intl/server';
import React from 'react';

import { CMS } from '@dxp/framework/modules';

import { auth } from '@/auth';

import { routing } from '@/i18n';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[], slug: string[]) => {
    const session = await auth();
    const locale = await getLocale();

    return blocks.map((block) => {
        const blockProps = {
            id: block.id,
            slug: slug,
            locale: locale,
            accessToken: session?.accessToken,
            routing: routing,
        };

        switch (block.__typename as Modules.Page.Model.Blocks) {
            case 'FaqBlock':
                return <Faq.Renderer key={block.id} {...blockProps} />;
            case 'HeroBannerBlock':
                return <HeroBanner.Renderer key={block.id} {...blockProps} />;
            case 'FeatureSectionBlock':
                return <FeatureSection.Renderer key={block.id} {...blockProps} />;
            case 'CtaSectionBlock':
                return <CtaSection.Renderer key={block.id} {...blockProps} />;
            case 'BentoGridBlock':
                return <BentoGrid.Renderer key={block.id} {...blockProps} />;
            case 'MediaSectionBlock':
                return <MediaSection.Renderer key={block.id} {...blockProps} />;
            // BLOCK REGISTER
            default:
                return null;
        }
    });
};

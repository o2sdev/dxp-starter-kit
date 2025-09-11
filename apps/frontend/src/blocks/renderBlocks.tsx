'use server';

import { Modules } from '@dxp/api-harmonization';
import * as ArticleList from '@dxp/blocks.article-list/frontend';
import * as ArticleSearch from '@dxp/blocks.article-search/frontend';
import * as Article from '@dxp/blocks.article/frontend';
import * as BentoGrid from '@dxp/blocks.bento-grid/frontend';
import * as CategoryList from '@dxp/blocks.category-list/frontend';
import * as Category from '@dxp/blocks.category/frontend';
import * as CtaSection from '@dxp/blocks.cta-section/frontend';
import * as DocumentList from '@dxp/blocks.document-list/frontend';
import * as Faq from '@dxp/blocks.faq/frontend';
import * as FeatureSectionGrid from '@dxp/blocks.feature-section-grid/frontend';
import * as FeatureSection from '@dxp/blocks.feature-section/frontend';
import * as HeroSection from '@dxp/blocks.hero-section/frontend';
import * as MediaSection from '@dxp/blocks.media-section/frontend';
import * as PricingSection from '@dxp/blocks.pricing-section/frontend';
import * as QuickLinks from '@dxp/blocks.quick-links/frontend';
// BLOCK IMPORT
import { getLocale } from 'next-intl/server';
import React from 'react';

import { CMS } from '@dxp/framework/modules';

import { Container } from '@dxp/ui/components/Container';

import { auth } from '@/auth';

import { routing } from '@/i18n';

interface BlockProps {
    id: string;
    slug: string[];
    locale: string;
    accessToken: string | undefined;
    routing: typeof routing;
}

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[], slug: string[]) => {
    const session = await auth();
    const locale = await getLocale();

    return blocks.map((block) => {
        const blockProps: BlockProps = {
            id: block.id,
            slug: slug,
            locale: locale,
            accessToken: session?.accessToken,
            routing: routing,
        };

        return (
            <Container
                variant={block.layout?.variant}
                spacing={block.layout?.spacing}
                background={block.layout?.background}
                theme={block.layout?.theme}
                key={block.id}
            >
                {renderBlock(block.__typename, blockProps)}
            </Container>
        );
    });
};

const renderBlock = (typename: string, blockProps: BlockProps) => {
    switch (typename as Modules.Page.Model.Blocks) {
        case 'FaqBlock':
            return <Faq.Renderer {...blockProps} />;
        case 'FeatureSectionBlock':
            return <FeatureSection.Renderer {...blockProps} />;
        case 'CtaSectionBlock':
            return <CtaSection.Renderer {...blockProps} />;
        case 'BentoGridBlock':
            return <BentoGrid.Renderer {...blockProps} />;
        case 'MediaSectionBlock':
            return <MediaSection.Renderer {...blockProps} />;
        case 'QuickLinksBlock':
            return <QuickLinks.Renderer {...blockProps} />;
        case 'HeroSectionBlock':
            return <HeroSection.Renderer {...blockProps} />;
        case 'FeatureSectionGridBlock':
            return <FeatureSectionGrid.Renderer {...blockProps} />;
        case 'PricingSectionBlock':
            return <PricingSection.Renderer {...blockProps} />;
        case 'DocumentListBlock':
            return <DocumentList.Renderer {...blockProps} />;
        case 'CategoryListBlock':
            return <CategoryList.Renderer {...blockProps} />;
        case 'ArticleListBlock':
            return <ArticleList.Renderer {...blockProps} />;
        case 'CategoryBlock':
            return <Category.Renderer {...blockProps} renderBlocks={renderBlocks} />;
        case 'ArticleBlock':
            return <Article.Renderer {...blockProps} />;
        case 'ArticleSearchBlock':
            return <ArticleSearch.Renderer {...blockProps} />;
        // BLOCK REGISTER
        default:
            return null;
    }
};

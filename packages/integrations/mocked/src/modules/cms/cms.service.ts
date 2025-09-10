import { Injectable } from '@nestjs/common';
import { of } from 'rxjs';

import { CMS } from '@dxp/framework/modules';

import { mapArticleListBlock } from './mappers/blocks/cms.article-list.mapper';
import { mapArticleSearchBlock } from './mappers/blocks/cms.article-search.mapper';
import { mapBentoGridBlock } from './mappers/blocks/cms.bento-grid.mapper';
import { mapCtaSectionBlock } from './mappers/blocks/cms.cta-section.mapper';
import { mapDocumentListBlock } from './mappers/blocks/cms.document-list.mapper';
import { mapFaqBlock } from './mappers/blocks/cms.faq.mapper';
import { mapFeatureSectionGridBlock } from './mappers/blocks/cms.feature-section-grid.mapper';
import { mapFeatureSectionBlock } from './mappers/blocks/cms.feature-section.mapper';
import { mapHeroSectionBlock } from './mappers/blocks/cms.hero-section.mapper';
import { mapMediaSectionBlock } from './mappers/blocks/cms.media-section.mapper';
import { mapPricingSectionBlock } from './mappers/blocks/cms.pricing-section.mapper';
import { mapQuickLinksBlock } from './mappers/blocks/cms.quick-links.mapper';
import { mapAppConfig } from './mappers/cms.app-config.mapper';
import { mapCategoryListBlock } from './mappers/cms.category-list.mapper';
import { mapCategoryBlock } from './mappers/cms.category.mapper';
import { mapFooter } from './mappers/cms.footer.mapper';
import { mapHeader } from './mappers/cms.header.mapper';
import { mapNotFoundPage } from './mappers/cms.not-found-page.mapper';
import { getAllPages, getAlternativePages, mapPage } from './mappers/cms.page.mapper';
import { responseDelay } from '@/utils/delay';

@Injectable()
export class CmsService implements CMS.Service {
    getEntry<T>(_options: CMS.Request.GetCmsEntryParams) {
        return of<T>({} as T);
    }

    getEntries<T>(_options: CMS.Request.GetCmsEntriesParams) {
        return of<T>({} as T);
    }

    getAppConfig(options: CMS.Request.GetCmsAppConfigParams) {
        return of(mapAppConfig(options.locale, options.referrer));
    }

    getPage(options: CMS.Request.GetCmsPageParams) {
        return of(mapPage(options.slug, options.locale));
    }

    getPages(options: CMS.Request.GetCmsPagesParams) {
        return of(getAllPages(options.locale));
    }

    getAlternativePages(options: CMS.Request.GetCmsAlternativePagesParams) {
        return of(getAlternativePages(options.id, options.slug, options.locale));
    }

    getNotFoundPage(options: CMS.Request.GetCmsNotFoundPageParams) {
        return of(mapNotFoundPage(options.locale));
    }

    getHeader(options: CMS.Request.GetCmsHeaderParams) {
        return of(mapHeader(options.id, options.locale));
    }

    getFooter(options: CMS.Request.GetCmsFooterParams) {
        return of(mapFooter(options.locale));
    }

    getFaqBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapFaqBlock(options)).pipe(responseDelay());
    }

    getHeroSectionBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapHeroSectionBlock(options)).pipe(responseDelay());
    }

    getFeatureSectionBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapFeatureSectionBlock(options)).pipe(responseDelay());
    }

    getCtaSectionBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapCtaSectionBlock(options)).pipe(responseDelay());
    }

    getBentoGridBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapBentoGridBlock(options)).pipe(responseDelay());
    }

    getMediaSectionBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapMediaSectionBlock(options)).pipe(responseDelay());
    }

    getQuickLinksBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapQuickLinksBlock(options)).pipe(responseDelay());
    }

    getFeatureSectionGridBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapFeatureSectionGridBlock(options)).pipe(responseDelay());
    }

    getPricingSectionBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapPricingSectionBlock(options)).pipe(responseDelay());
    }

    getDocumentListBlock(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapDocumentListBlock(_options.locale)).pipe(responseDelay());
    }

    getArticleListBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapArticleListBlock(options.id, options.locale)).pipe(responseDelay());
    }

    getCategoryBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapCategoryBlock(options.id, options.locale)).pipe(responseDelay());
    }

    getCategoryListBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapCategoryListBlock(options.locale)).pipe(responseDelay());
    }

    getArticleSearchBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapArticleSearchBlock(options.id, options.locale)).pipe(responseDelay());
    }
}

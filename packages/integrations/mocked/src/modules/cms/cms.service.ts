import { Injectable } from '@nestjs/common';
import { of } from 'rxjs';

import { CMS } from '@dxp/framework/modules';

import { mapBentoGridBlock } from './mappers/blocks/cms.bento-grid.mapper';
import { mapCtaSectionBlock } from './mappers/blocks/cms.cta-section.mapper';
import { mapFaqBlock } from './mappers/blocks/cms.faq.mapper';
import { mapFeatureSectionBlock } from './mappers/blocks/cms.feature-section.mapper';
import { mapHeroSectionBlock } from './mappers/blocks/cms.hero-section.mapper';
import { mapMediaSectionBlock } from './mappers/blocks/cms.media-section.mapper';
import { mapQuickLinksBlock } from './mappers/blocks/cms.quick-links.mapper';
import { mapAppConfig } from './mappers/cms.app-config.mapper';
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

    getFaqBlock(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapFaqBlock(_options.locale)).pipe(responseDelay());
    }

    getHeroSectionBlock(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapHeroSectionBlock(_options.locale)).pipe(responseDelay());
    }

    getFeatureSectionBlock(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapFeatureSectionBlock(_options.locale)).pipe(responseDelay());
    }

    getCtaSectionBlock(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapCtaSectionBlock(_options.locale)).pipe(responseDelay());
    }

    getBentoGridBlock(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapBentoGridBlock(_options.locale)).pipe(responseDelay());
    }

    getMediaSectionBlock(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapMediaSectionBlock(_options.locale)).pipe(responseDelay());
    }

    getQuickLinksBlock(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapQuickLinksBlock(_options.locale)).pipe(responseDelay());
    }
}

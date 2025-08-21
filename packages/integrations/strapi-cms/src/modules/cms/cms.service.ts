import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore module type mismatch
import { parse, stringify } from 'flatted';
import { Observable, concatMap, forkJoin, from, map, mergeMap, of } from 'rxjs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Auth, CMS, Cache, Models } from '@dxp/framework/modules';

import { PageFragment } from '@/generated/strapi';

import { Service as GraphqlService } from '@/modules/graphql';

import { mapArticleListBlock } from './mappers/blocks/cms.article-list.mapper';
import { mapArticleSearchBlock } from './mappers/blocks/cms.article-search.mapper';
import { mapBentoGridBlock } from './mappers/blocks/cms.bento-grid.mapper';
import { mapCategoryListBlock } from './mappers/blocks/cms.category-list.mapper';
import { mapCategoryBlock } from './mappers/blocks/cms.category.mapper';
import { mapCtaSectionBlock } from './mappers/blocks/cms.cta-section.mapper';
import { mapDocumentListBlock } from './mappers/blocks/cms.decument-list.mapper';
import { mapFaqBlock } from './mappers/blocks/cms.faq.mapper';
import { mapFeatureSectionGridBlock } from './mappers/blocks/cms.feature-section-grid.mapper';
import { mapFeatureSectionBlock } from './mappers/blocks/cms.feature-section.mapper';
import { mapHeroSectionBlock } from './mappers/blocks/cms.hero-section.mapper';
import { mapMediaSectionBlock } from './mappers/blocks/cms.media-section.mapper';
import { mapPricingSectionBlock } from './mappers/blocks/cms.pricing-section.mapper';
import { mapQuickLinksBlock } from './mappers/blocks/cms.quick-links.mapper';
import { mapAppConfig } from './mappers/cms.app-config.mapper';
import { mapFooter } from './mappers/cms.footer.mapper';
import { mapHeader } from './mappers/cms.header.mapper';
import { mapNotFoundPage } from './mappers/cms.not-found-page.mapper';
import { mapPage } from './mappers/cms.page.mapper';

@Injectable()
export class CmsService implements CMS.Service {
    baseUrl: string;

    constructor(
        private readonly graphqlService: GraphqlService,
        private readonly config: ConfigService,
        private readonly cacheService: Cache.Service,
    ) {
        this.baseUrl = this.config.get('CMS_STRAPI_BASE_URL')!;
    }

    private getBlock = (options: CMS.Request.GetCmsEntryParams) => {
        const key = `component-${options.id}-${options.locale}`;

        return from(this.cacheService.get(key)).pipe(
            mergeMap((cachedBlock) => {
                if (cachedBlock) {
                    return of(parse(cachedBlock));
                }

                const component = this.graphqlService.getComponent({
                    id: options.id,
                    locale: options.locale,
                });

                return forkJoin([component]).pipe(
                    map(([component]) => {
                        if (!component?.data.component || !component?.data.configurableTexts) {
                            throw new NotFoundException();
                        }
                        const data = component.data;
                        this.cacheService.set(key, stringify(data));
                        return data;
                    }),
                );
            }),
        );
    };

    private getCachedBlock<T>(key: string, getData: () => Observable<T>): Observable<T> {
        return from(this.cacheService.get(key)).pipe(
            mergeMap((cachedData) => {
                if (cachedData) {
                    return of(parse(cachedData));
                }
                return getData().pipe(
                    map((data) => {
                        this.cacheService.set(key, stringify(data));
                        return data;
                    }),
                );
            }),
        );
    }

    getAppConfig(options: CMS.Request.GetCmsAppConfigParams) {
        const key = `app-config-${options.locale}`;
        return this.getCachedBlock(key, () => {
            const appConfig = this.graphqlService.getAppConfig({
                locale: options.locale,
            });

            return forkJoin([appConfig]).pipe(map(([appConfig]) => mapAppConfig(appConfig.data)));
        });
    }

    getEntry(options: CMS.Request.GetCmsEntryParams) {
        const key = `entry-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => of(undefined));
    }

    getEntries(options: CMS.Request.GetCmsEntriesParams) {
        const key = `entries-${options.type}-${options.locale}-${JSON.stringify(options.filters || {})}`;
        return this.getCachedBlock(key, () => of(undefined));
    }

    getPage(options: CMS.Request.GetCmsPageParams) {
        const key = `page-${options.slug}-${options.locale}`;
        return this.getCachedBlock(key, () => {
            const pages = this.graphqlService.getPages({
                locale: options.locale,
            });

            return forkJoin([pages]).pipe(
                map(([pages]) => {
                    if (!pages?.data?.pages?.length) {
                        throw new NotFoundException();
                    }

                    const page = pages.data.pages.find((page) => {
                        const pattern = new RegExp(`^${page.slug}$`, 'i');
                        return pattern.test(options.slug);
                    });

                    if (!page) {
                        throw new NotFoundException();
                    }

                    return mapPage(page);
                }),
            );
        });
    }

    getPages(options: CMS.Request.GetCmsPagesParams) {
        const pages = this.graphqlService.getPages({
            locale: options.locale,
        });

        return forkJoin([pages]).pipe(
            map(([pages]) => {
                if (!pages?.data?.pages?.length) {
                    throw new NotFoundException();
                }
                return pages.data.pages.map((page) => mapPage(page));
            }),
        );
    }

    getAlternativePages(options: CMS.Request.GetCmsAlternativePagesParams) {
        const locales = this.graphqlService.getLocales();

        return forkJoin([locales]).pipe(
            concatMap(([locales]) => {
                return forkJoin(
                    locales.data.i18NLocales.map((locale) =>
                        this.graphqlService.getPages({
                            locale: locale.code,
                        }),
                    ),
                ).pipe(
                    map((pages) => {
                        if (!pages?.length) {
                            throw new NotFoundException();
                        }

                        const allPages = pages.reduce<PageFragment[]>((prev, current) => {
                            return [...prev, ...current.data.pages];
                        }, []);

                        return allPages
                            .filter((page) => page.documentId === options.id)
                            .map((page) => mapPage(page))
                            .map((page) => {
                                return {
                                    ...page,
                                    slug: page.slug.replace('(.+)', options.slug.match(/(.+)\/(.+)/)?.[2] || ''),
                                };
                            });
                    }),
                );
            }),
        );
    }

    getNotFoundPage(options: CMS.Request.GetCmsNotFoundPageParams) {
        const key = `not-found-page-${options.locale}`;
        return this.getCachedBlock(key, () => {
            const notFoundPage = this.graphqlService.getNotFoundPage({
                locale: options.locale,
            });

            return forkJoin([notFoundPage]).pipe(
                map(([notFoundPage]) => {
                    if (!notFoundPage?.data.notFoundPage) {
                        throw new NotFoundException();
                    }

                    return mapNotFoundPage(notFoundPage.data);
                }),
            );
        });
    }

    getHeader(options: CMS.Request.GetCmsHeaderParams) {
        const key = `header-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => {
            const header = this.graphqlService.getHeader({
                locale: options.locale,
                id: options.id,
            });

            return forkJoin([header]).pipe(
                map(([header]) => {
                    if (!header?.data.header) {
                        throw new NotFoundException();
                    }

                    return mapHeader(header.data, this.baseUrl);
                }),
            );
        });
    }

    getFooter(options: CMS.Request.GetCmsFooterParams) {
        const key = `footer-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => {
            const footer = this.graphqlService.getFooter({
                locale: options.locale,
                id: options.id,
            });

            return forkJoin([footer]).pipe(
                map(([footer]) => {
                    if (!footer?.data.footer) {
                        throw new NotFoundException();
                    }

                    return mapFooter(footer.data, this.baseUrl);
                }),
            );
        });
    }

    getFaqBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `faq-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapFaqBlock)));
    }

    getArticleListBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.ArticleListBlock.ArticleListBlock> {
        const key = `quick-links-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () =>
            this.getBlock(options).pipe(map((data) => mapArticleListBlock(data, this.baseUrl))),
        );
    }

    getCategoryBlock(options: CMS.Request.GetCmsEntryParams): Observable<CMS.Model.CategoryBlock.CategoryBlock> {
        const key = `quick-links-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () =>
            this.getBlock(options).pipe(map((data) => mapCategoryBlock(data, this.baseUrl))),
        );
    }

    getCategoryListBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `quick-links-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () =>
            this.getBlock(options).pipe(map((data) => mapCategoryListBlock(data, this.baseUrl))),
        );
    }

    getQuickLinksBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `quick-links-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map((data) => mapQuickLinksBlock(data))));
    }

    getHeroSectionBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `hero-section-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () =>
            this.getBlock(options).pipe(map((data) => mapHeroSectionBlock(data, this.baseUrl))),
        );
    }

    getMediaSectionBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `media-section-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () =>
            this.getBlock(options).pipe(map((data) => mapMediaSectionBlock(data, this.baseUrl))),
        );
    }

    getFeatureSectionBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `feature-section-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () =>
            this.getBlock(options).pipe(map((data) => mapFeatureSectionBlock(data, this.baseUrl))),
        );
    }

    getFeatureSectionGridBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `feature-section-grid-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () =>
            this.getBlock(options).pipe(map((data) => mapFeatureSectionGridBlock(data))),
        );
    }

    getArticleSearchBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `article-search-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapArticleSearchBlock)));
    }

    getCtaSectionBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `cta-section-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () =>
            this.getBlock(options).pipe(map((data) => mapCtaSectionBlock(data, this.baseUrl))),
        );
    }

    getBentoGridBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `bento-grid-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () =>
            this.getBlock(options).pipe(map((data) => mapBentoGridBlock(data, this.baseUrl))),
        );
    }

    getPricingSectionBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `pricing-section-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () =>
            this.getBlock(options).pipe(map((data) => mapPricingSectionBlock(data, this.baseUrl))),
        );
    }

    getDocumentListBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `document-list-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () =>
            this.getBlock(options).pipe(map((data) => mapDocumentListBlock(data, this.baseUrl))),
        );
    }
}

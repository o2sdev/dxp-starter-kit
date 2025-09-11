import { Articles, CMS } from '@dxp/configs.integrations';
import { Models as ApiModels } from '@dxp/utils.api-harmonization';
import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { mapArticleSearch, mapArticles } from './article-search.mapper';
import { ArticleList, ArticleSearchBlock } from './article-search.model';
import { GetArticleSearchBlockQuery, SearchArticlesQuery } from './article-search.request';

@Injectable()
export class ArticleSearchService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly articlesService: Articles.Service,
    ) {}

    getArticleSearchBlock(
        query: GetArticleSearchBlockQuery,
        headers: ApiModels.Headers.AppHeaders,
    ): Observable<ArticleSearchBlock> {
        const cms = this.cmsService.getArticleSearchBlock({ ...query, locale: headers['x-locale'] });
        return forkJoin([cms]).pipe(map(([cms]) => mapArticleSearch(cms, headers['x-locale'])));
    }

    searchArticles(query: SearchArticlesQuery, headers: ApiModels.Headers.AppHeaders): Observable<ArticleList> {
        return this.articlesService
            .searchArticles({ ...query, locale: headers['x-locale'] })
            .pipe(map((articles) => mapArticles(articles)));
    }
}

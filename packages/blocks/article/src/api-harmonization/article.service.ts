import { Articles, CMS } from '@dxp/configs.integrations';
import { Models as ApiModels } from '@dxp/utils.api-harmonization';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { mapArticle } from './article.mapper';
import { ArticleBlock } from './article.model';
import { GetArticleBlockQuery } from './article.request';

@Injectable()
export class ArticleService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly articlesService: Articles.Service,
    ) {}

    getArticleBlock(query: GetArticleBlockQuery, headers: ApiModels.Headers.AppHeaders): Observable<ArticleBlock> {
        const cms = this.cmsService.getAppConfig({ locale: headers['x-locale'] });
        const article = this.articlesService.getArticle({ slug: query.slug, locale: headers['x-locale'] });

        return forkJoin([cms, article]).pipe(
            map(([cms, article]) => {
                if (!article) {
                    throw new NotFoundException();
                }

                return mapArticle(cms, article, headers['x-locale'], headers['x-client-timezone'] || '');
            }),
        );
    }
}

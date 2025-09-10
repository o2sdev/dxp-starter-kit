import { Models as ApiModels } from '@dxp/utils.api-harmonization';
import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@dxp/framework/modules';

import { GetArticleListBlockQuery } from './article-list.request';
import { ArticleListService } from './article-list.service';
import { URL } from './index';

@Controller(URL)
@UseInterceptors(LoggerService)
export class ArticleListController {
    constructor(protected readonly service: ArticleListService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getArticleListBlock(@Headers() headers: ApiModels.Headers.AppHeaders, @Query() query: GetArticleListBlockQuery) {
        return this.service.getArticleListBlock(query, headers);
    }
}

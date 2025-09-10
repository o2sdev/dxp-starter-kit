import { Models as ApiModels } from '@dxp/utils.api-harmonization';
import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@dxp/framework/modules';

import { URL } from './';
import { GetArticleBlockQuery } from './article.request';
import { ArticleService } from './article.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class ArticleController {
    constructor(protected readonly service: ArticleService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getArticleBlock(@Headers() headers: ApiModels.Headers.AppHeaders, @Query() query: GetArticleBlockQuery) {
        return this.service.getArticleBlock(query, headers);
    }
}

import { Models as ApiModels } from '@dxp/utils.api-harmonization';
import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@dxp/framework/modules';

import { GetCategoryListBlockQuery } from './category-list.request';
import { CategoryListService } from './category-list.service';
import { URL } from './index';

@Controller(URL)
@UseInterceptors(LoggerService)
export class CategoryListController {
    constructor(protected readonly service: CategoryListService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getCategoryListBlock(@Headers() headers: ApiModels.Headers.AppHeaders, @Query() query: GetCategoryListBlockQuery) {
        return this.service.getCategoryListBlock(query, headers);
    }
}

import { Models } from '@dxp/utils.api-harmonization';
import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@dxp/framework/modules';

import { URL } from './';
import { GetFeatureSectionGridBlockQuery } from './feature-section-grid.request';
import { FeatureSectionGridService } from './feature-section-grid.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class FeatureSectionGridController {
    constructor(protected readonly service: FeatureSectionGridService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getFeatureSectionGridBlock(
        @Headers() headers: Models.Headers.AppHeaders,
        @Query() query: GetFeatureSectionGridBlockQuery,
    ) {
        return this.service.getFeatureSectionGridBlock(query, headers);
    }
}

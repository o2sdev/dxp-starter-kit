import { Models } from '@dxp/utils.api-harmonization';
import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@dxp/framework/modules';

import { URL } from './';
import { GetPricingSectionBlockQuery } from './pricing-section.request';
import { PricingSectionService } from './pricing-section.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class PricingSectionController {
    constructor(protected readonly service: PricingSectionService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getPricingSectionBlock(@Headers() headers: Models.Headers.AppHeaders, @Query() query: GetPricingSectionBlockQuery) {
        return this.service.getPricingSectionBlock(query, headers);
    }
}

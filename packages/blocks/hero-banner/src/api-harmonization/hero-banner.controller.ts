import { Models } from '@dxp/utils.api-harmonization';
import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@dxp/framework/modules';

import { URL } from './';
import { GetHeroBannerBlockQuery } from './hero-banner.request';
import { HeroBannerService } from './hero-banner.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class HeroBannerController {
    constructor(protected readonly service: HeroBannerService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getHeroBannerBlock(@Headers() headers: Models.Headers.AppHeaders, @Query() query: GetHeroBannerBlockQuery) {
        return this.service.getHeroBannerBlock(query, headers);
    }
}

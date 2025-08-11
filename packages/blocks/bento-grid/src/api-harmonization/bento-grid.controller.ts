import { Models } from '@dxp/utils.api-harmonization';
import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@dxp/framework/modules';

import { URL } from './';
import { GetBentoGridBlockQuery } from './bento-grid.request';
import { BentoGridService } from './bento-grid.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class BentoGridController {
    constructor(protected readonly service: BentoGridService) {} 
    
    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getBentoGridBlock(@Headers() headers: Models.Headers.AppHeaders, @Query() query: GetBentoGridBlockQuery) { 
        return this.service.getBentoGridBlock(query, headers);
    }
}

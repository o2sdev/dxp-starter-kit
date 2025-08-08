import { Models } from '@dxp/utils.api-harmonization';
import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@dxp/framework/modules';

import { URL } from './';
import { GetCtaSectionBlockQuery } from './cta-section.request';
import { CtaSectionService } from './cta-section.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class CtaSectionController {
    constructor(protected readonly service: CtaSectionService) {} 
    
    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getCtaSectionBlock(@Headers() headers: Models.Headers.AppHeaders, @Query() query: GetCtaSectionBlockQuery) { 
        return this.service.getCtaSectionBlock(query, headers);
    }
}

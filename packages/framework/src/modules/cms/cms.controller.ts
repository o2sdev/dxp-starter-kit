import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { CmsService } from './cms.service';

@Controller('/cms')
@UseInterceptors(LoggerService)
export class CmsController {
    constructor(protected readonly cms: CmsService) {}

    @Get('/get-entry')
    getEntry(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getEntry(params);
    }

    @Get('/get-entries')
    getEntries(@Query() params: Request.GetCmsEntriesParams) {
        return this.cms.getEntries(params);
    }

    @Get('/page')
    getPage(@Query() params: Request.GetCmsPageParams) {
        return this.cms.getPage(params);
    }

    @Get('/pages')
    getPages(@Query() params: Request.GetCmsPagesParams) {
        return this.cms.getPages(params);
    }

    @Get('/not-found-page')
    getNotFoundPage(@Query() params: Request.GetCmsNotFoundPageParams) {
        return this.cms.getNotFoundPage(params);
    }

    @Get('/header')
    getHeader(@Query() params: Request.GetCmsHeaderParams) {
        return this.cms.getHeader(params);
    }

    @Get('/footer')
    getFooter(@Query() params: Request.GetCmsFooterParams) {
        return this.cms.getFooter(params);
    }

    @Get('/app-config')
    getAppConfig(@Query() params: Request.GetCmsAppConfigParams) {
        return this.cms.getAppConfig(params);
    }

    @Get('/blocks/faq')
    getFaqBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getFaqBlock(params);
    }
}

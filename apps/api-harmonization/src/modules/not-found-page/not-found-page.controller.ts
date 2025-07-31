import { URL } from '.';
import { Models } from '@dxp/utils.api-harmonization';
import { Controller, Get, Headers } from '@nestjs/common';

import { NotFoundPageService } from './not-found-page.service';

@Controller(URL)
export class NotFoundPageController {
    constructor(protected readonly service: NotFoundPageService) {}

    @Get()
    getNotFoundPage(@Headers() headers: Models.Headers.AppHeaders) {
        return this.service.getNotFoundPage(headers);
    }
}

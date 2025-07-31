import { CMS } from '@dxp/configs.integrations';
import { Models } from '@dxp/utils.api-harmonization';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Observable, map } from 'rxjs';

import { mapNotFoundPage } from './not-found-page.mapper';
import { NotFoundPage } from './not-found-page.model';

@Injectable()
export class NotFoundPageService {
    constructor(private readonly cmsService: CMS.Service) {}

    getNotFoundPage(headers: Models.Headers.AppHeaders): Observable<NotFoundPage> {
        return this.cmsService.getNotFoundPage({ locale: headers['x-locale'] }).pipe(
            map((notFoundPage) => {
                if (!notFoundPage) {
                    throw new NotFoundException();
                }
                return mapNotFoundPage(notFoundPage);
            }),
        );
    }
}

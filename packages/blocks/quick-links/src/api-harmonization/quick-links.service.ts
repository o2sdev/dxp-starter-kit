import { CMS } from '@dxp/configs.integrations';
import { Models } from '@dxp/utils.api-harmonization';
import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { mapQuickLinks } from './quick-links.mapper';
import { QuickLinksBlock } from './quick-links.model';
import { GetQuickLinksBlockQuery } from './quick-links.request';

@Injectable()
export class QuickLinksService {
    constructor(
        private readonly cmsService: CMS.Service,
    ) {}

    getQuickLinksBlock(
        query: GetQuickLinksBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<QuickLinksBlock> {
        const cms = this.cmsService.getQuickLinksBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(map(([cms]) => mapQuickLinks(cms, headers['x-locale'])));
    }
}

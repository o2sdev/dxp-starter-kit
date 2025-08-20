import { CMS } from '@dxp/configs.integrations';
import { Models } from '@dxp/utils.api-harmonization';
import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { mapCtaSection } from './cta-section.mapper';
import { CtaSectionBlock } from './cta-section.model';
import { GetCtaSectionBlockQuery } from './cta-section.request';

@Injectable()
export class CtaSectionService {
    constructor(private readonly cmsService: CMS.Service) {}

    getCtaSectionBlock(
        query: GetCtaSectionBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<CtaSectionBlock> {
        const cms = this.cmsService.getCtaSectionBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(map(([cms]) => mapCtaSection(cms, headers['x-locale'])));
    }
}

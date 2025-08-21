import { CMS } from '@dxp/configs.integrations';
import { Models } from '@dxp/utils.api-harmonization';
import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { mapPricingSection } from './pricing-section.mapper';
import { PricingSectionBlock } from './pricing-section.model';
import { GetPricingSectionBlockQuery } from './pricing-section.request';

@Injectable()
export class PricingSectionService {
    constructor(private readonly cmsService: CMS.Service) {}

    getPricingSectionBlock(
        query: GetPricingSectionBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<PricingSectionBlock> {
        const cms = this.cmsService.getPricingSectionBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(map(([cms]) => mapPricingSection(cms, headers['x-locale'])));
    }
}

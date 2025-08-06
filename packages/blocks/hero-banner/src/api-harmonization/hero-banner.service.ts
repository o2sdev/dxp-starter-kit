import { CMS } from '@dxp/configs.integrations';
import { Models } from '@dxp/utils.api-harmonization';
import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { mapHeroBanner } from './hero-banner.mapper';
import { HeroBannerBlock } from './hero-banner.model';
import { GetHeroBannerBlockQuery } from './hero-banner.request';

@Injectable()
export class HeroBannerService {
    constructor(private readonly cmsService: CMS.Service) {}

    getHeroBannerBlock(
        query: GetHeroBannerBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<HeroBannerBlock> {
        const cms = this.cmsService.getHeroBannerBlock({
            ...query,
            locale: headers['x-locale'],
        });

        return forkJoin([cms]).pipe(map(([cms]) => mapHeroBanner(cms)));
    }
}

import { CMS } from '@dxp/configs.integrations';
import { Models } from '@dxp/utils.api-harmonization';
import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { mapHeroSection } from './hero-section.mapper';
import { HeroSectionBlock } from './hero-section.model';
import { GetHeroSectionBlockQuery } from './hero-section.request';

@Injectable()
export class HeroSectionService {
    constructor(private readonly cmsService: CMS.Service) {}

    getHeroSectionBlock(
        query: GetHeroSectionBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<HeroSectionBlock> {
        const cms = this.cmsService.getHeroSectionBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(map(([cms]) => mapHeroSection(cms, headers['x-locale'])));
    }
}

import { CMS } from '@dxp/configs.integrations';
import { Models } from '@dxp/utils.api-harmonization';
import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { mapFaq } from './faq.mapper';
import { FaqBlock } from './faq.model';
import { GetFaqBlockQuery } from './faq.request';

@Injectable()
export class FaqService {
    constructor(private readonly cmsService: CMS.Service) {}

    getFaqBlock(query: GetFaqBlockQuery, headers: Models.Headers.AppHeaders): Observable<FaqBlock> {
        const cms = this.cmsService.getFaqBlock({
            ...query,
            locale: headers['x-locale'],
        });

        return forkJoin([cms]).pipe(map(([cms]) => mapFaq(cms)));
    }
}

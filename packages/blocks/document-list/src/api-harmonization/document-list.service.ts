import { CMS } from '@dxp/configs.integrations';
import { Models } from '@dxp/utils.api-harmonization';
import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { mapDocumentList } from './document-list.mapper';
import { DocumentListBlock } from './document-list.model';
import { GetDocumentListBlockQuery } from './document-list.request';

@Injectable()
export class DocumentListService {
    constructor(private readonly cmsService: CMS.Service) {}

    getDocumentListBlock(
        query: GetDocumentListBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<DocumentListBlock> {
        const cms = this.cmsService.getDocumentListBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(map(([cms]) => mapDocumentList(cms, headers['x-locale'])));
    }
}

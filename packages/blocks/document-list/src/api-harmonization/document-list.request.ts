import { CMS } from '@dxp/framework/modules';

export class GetDocumentListBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}

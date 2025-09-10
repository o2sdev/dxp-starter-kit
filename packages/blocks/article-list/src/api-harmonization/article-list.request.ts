import { CMS } from '@dxp/framework/modules';

export class GetArticleListBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    offset?: number;
    limit?: number;
}

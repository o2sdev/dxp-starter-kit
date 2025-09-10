import { CMS } from '@dxp/framework/modules';

export class GetCategoryBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    limit?: number;
}

export class GetCategoryBlockArticlesQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    offset?: number;
    limit?: number;
    category?: string;
}

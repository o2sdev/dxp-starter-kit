import { Articles, CMS } from '@dxp/framework/modules';

export class GetArticleSearchBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}

export class SearchArticlesQuery implements Omit<Articles.Request.SearchArticlesBody, 'locale'> {
    query!: string;
    limit!: number;
    offset!: number;
    category?: string;
}

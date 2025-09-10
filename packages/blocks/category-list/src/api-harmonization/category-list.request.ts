import { CMS } from '@dxp/framework/modules';

export class GetCategoryListBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}

import { CMS } from '@dxp/framework/modules';

export class GetQuickLinksBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}

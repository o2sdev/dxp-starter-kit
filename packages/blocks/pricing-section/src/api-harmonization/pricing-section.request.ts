import { CMS } from '@dxp/framework/modules';

export class GetPricingSectionBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}

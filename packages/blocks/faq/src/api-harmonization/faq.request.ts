import { CMS } from '@dxp/framework/modules';

export class GetFaqBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}

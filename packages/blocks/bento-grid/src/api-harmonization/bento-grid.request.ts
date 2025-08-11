import { CMS } from '@dxp/framework/modules';

export class GetBentoGridBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}

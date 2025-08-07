import { CMS } from '@dxp/framework/modules';

export class GetFeatureSectionBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}

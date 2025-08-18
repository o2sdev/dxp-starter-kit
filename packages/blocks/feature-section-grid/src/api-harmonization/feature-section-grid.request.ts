import { CMS } from '@dxp/framework/modules';

export class GetFeatureSectionGridBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}

import { CMS } from '@dxp/framework/modules';

export class GetHeroSectionBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}

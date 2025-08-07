import { CMS } from '@dxp/framework/modules';

export class GetHeroBannerBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}

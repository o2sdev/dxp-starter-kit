import { CMS } from '@dxp/framework/modules';

export class GetMediaSectionBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}

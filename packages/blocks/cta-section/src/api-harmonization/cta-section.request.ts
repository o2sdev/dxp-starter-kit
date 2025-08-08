import { CMS } from '@dxp/framework/modules';

export class GetCtaSectionBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}

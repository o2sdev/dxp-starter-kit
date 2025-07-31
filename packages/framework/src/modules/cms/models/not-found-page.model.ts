import { Models } from '@dxp/framework/modules';

export class NotFoundPage {
    title!: string;
    description!: Models.RichText.RichText;
    url?: string;
    urlLabel!: string;
}

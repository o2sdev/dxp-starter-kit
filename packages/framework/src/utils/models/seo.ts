import { Models } from '@dxp/framework/modules';

export class Page {
    title!: string;
    noIndex!: boolean;
    noFollow!: boolean;
    description!: string;
    keywords!: string[];
    image?: Models.Media.Media;
}

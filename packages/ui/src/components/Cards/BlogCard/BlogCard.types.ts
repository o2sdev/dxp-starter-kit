import { Models } from '@dxp/framework/modules';
import { Models as FrontendModels } from '@dxp/utils.frontend';

import { AuthorProps } from '@dxp/ui/components/Author';

export interface BlogCardProps {
    title: string;
    lead: string;
    link?: {
        label: string;
        url: string;
    };
    image?: Models.Media.Media;
    url: string;
    date: string;
    author?: AuthorProps;
    categoryTitle?: string;
    LinkComponent: FrontendModels.Link.LinkComponent;
}

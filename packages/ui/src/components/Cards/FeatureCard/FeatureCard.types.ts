import { Models } from '@dxp/framework/modules';
import { Models as FrontendModels } from '@dxp/utils.frontend';

export type FeatureCardProps = {
    title: string;
    description?: string;
    image?: Models.Media.Media;
    link?: Models.Link.Link;
    LinkComponent: FrontendModels.Link.LinkComponent;
};

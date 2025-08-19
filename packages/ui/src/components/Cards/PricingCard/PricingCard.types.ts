import { Models } from '@dxp/framework/modules';
import { Models as FrontendModels } from '@dxp/utils.frontend';

export type PricingCardProps = {
    image?: Models.Media.Media;
    title: string;
    description?: string;
    price?: Models.Price.Price;
    tags?: Models.Badge.Badge[];
    recommended?: boolean;
    isPromoted?: boolean;
    links?: Models.Link.Link[];
    featureListTitle?: string;
    featureList?: Models.FeatureItem.FeatureItem[];
    LinkComponent: FrontendModels.Link.LinkComponent;
};

export type FeatureItemProps = Models.FeatureItem.FeatureItem;

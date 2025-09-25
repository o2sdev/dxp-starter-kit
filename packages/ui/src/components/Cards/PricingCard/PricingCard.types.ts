import { Models } from '@dxp/framework/modules';
import { Models as FrontendModels } from '@dxp/utils.frontend';

export type PricingCardProps = {
    image?: Models.Media.Media;
    title: string;
    titleType?: 'h2' | 'h3' | 'h4';
    description?: string;
    price?: Models.Price.Price;
    tags?: Models.Badge.Badge[];
    recommended?: boolean;
    isPromoted?: boolean;
    links?: Models.Link.Link[];
    featureListTitle?: string;
    featureList?: Models.FeatureItem.FeatureItem[];
    LinkComponent: FrontendModels.Link.LinkComponent;
    hasPriority?: boolean;
};

export type FeatureItemProps = Models.FeatureItem.FeatureItem;

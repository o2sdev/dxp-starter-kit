import { Models } from '@dxp/framework/modules';
import { Models as FrontendModels } from '@dxp/utils.frontend';
import { VariantProps } from 'class-variance-authority';
import React from 'react';

import { badgeVariants } from '@dxp/ui/elements/badge';

export interface ProductCardProps {
    title: string;
    description?: Models.RichText.RichText;
    price?: Models.Price.Price;
    tags?: ProductCardBadge[];
    status?: ProductCardBadge;
    link?: {
        label: string;
        url: string;
    };
    image?: Models.Media.Media;
    action?: React.ReactNode;
    LinkComponent: FrontendModels.Link.LinkComponent;
}

export interface ProductCardBadge {
    label: string;
    variant: VariantProps<typeof badgeVariants>['variant'];
}

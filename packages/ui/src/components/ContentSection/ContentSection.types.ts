import { Models } from '@dxp/framework/modules';
import { Models as FrontendModels } from '@dxp/utils.frontend';
import React from 'react';

export interface ContentSectionProps {
    title?: string;
    description?: string;
    categoryLink?: Models.Link.Link;
    children: React.ReactNode;
    LinkComponent: FrontendModels.Link.LinkComponent;
}

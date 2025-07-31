import { Models } from '@dxp/utils.frontend';

import { DynamicIconProps } from '../../DynamicIcon';

export interface InformativeCardProps {
    href?: string;
    icon?: DynamicIconProps['name'];
    iconSize?: number;
    title?: string;
    description?: string;
    lineClamp?: number;
    LinkComponent: Models.Link.LinkComponent;
}

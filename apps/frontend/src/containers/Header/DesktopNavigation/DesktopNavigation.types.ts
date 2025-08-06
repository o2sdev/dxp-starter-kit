import { ReactNode } from 'react';

import { CMS } from '@dxp/framework/modules';

export interface DesktopNavigationProps {
    logoSlot?: ReactNode;
    localeSlot?: ReactNode;
    items: CMS.Model.Header.Header['items'];
}

import { ReactNode } from 'react';

import { CMS } from '@dxp/framework/modules';

export interface MobileNavigationProps {
    logoSlot?: ReactNode;
    localeSlot?: ReactNode;
    items: CMS.Model.Header.Header['items'];
    title?: CMS.Model.Header.Header['title'];
    mobileMenuLabel: CMS.Model.Header.Header['mobileMenuLabel'];
}

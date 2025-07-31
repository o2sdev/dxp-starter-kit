import { ReactNode } from 'react';

import { CMS } from '@dxp/framework/modules';

export interface DesktopNavigationProps {
    logoSlot?: ReactNode;
    contextSlot?: ReactNode;
    localeSlot?: ReactNode;
    notificationSlot?: ReactNode;
    userSlot?: ReactNode;
    items: CMS.Model.Header.Header['items'];
}

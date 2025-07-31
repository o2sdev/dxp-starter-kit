import React from 'react';

import { CMS } from '@dxp/framework/modules';

export interface HeaderProps {
    data: CMS.Model.Header.Header;
    children?: React.ReactNode;
    alternativeUrls?: {
        [key: string]: string;
    };
}

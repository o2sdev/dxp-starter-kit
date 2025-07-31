import React from 'react';

import { DynamicIconProps } from '@dxp/ui/components/DynamicIcon';

export type InfoCardProps = {
    title: string;
    value?: React.ReactNode | string;
    icon?: React.ReactNode | DynamicIconProps['name'];
    description?: React.ReactNode | string;
    button?: React.ReactNode;
    className?: string;
};

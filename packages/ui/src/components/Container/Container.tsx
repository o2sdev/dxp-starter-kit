import { cva } from 'class-variance-authority';
import React from 'react';

import { cn } from '@dxp/ui/lib/utils';

import { ContainerProps } from './Container.types';

const containerVariants = cva('w-full mx-auto px-4 py-16 md:px-6 md:py-20', {
    variants: {
        variant: {
            full: 'md:max-w-7xl',
            narrow: 'md:max-w-3xl',
        },
    },
    defaultVariants: {
        variant: 'full',
    },
});

export const Container: React.FC<ContainerProps> = ({ variant = 'full', children, className }) => {
    return (
        <div className={cn('w-full', className)}>
            <div className={containerVariants({ variant })}>
                <div className="">{children}</div>
            </div>
        </div>
    );
};

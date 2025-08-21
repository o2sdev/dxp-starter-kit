import React from 'react';

import { cn } from '@dxp/ui/lib/utils';

import { Button } from '@dxp/ui/elements/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@dxp/ui/elements/dropdown-menu';

import { DynamicIcon } from '../DynamicIcon/DynamicIcon';

import { ActionListProps } from './ActionList.types';

export const ActionList: React.FC<Readonly<ActionListProps>> = ({
    className,
    showMoreLabel,
    actions,
    triggerVariant = 'outline',
}) => {
    return (
        <div className={cn('w-full sm:w-auto flex flex-col sm:flex-row-reverse gap-4 align-end', className)}>
            {actions?.[0]}

            {actions && actions.length > 1 && (
                <div className="flex flex-row sm:flex-row-reverse gap-4">
                    {actions?.[1]}

                    {actions?.length && actions.length > 2 && (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant={triggerVariant} size="icon" aria-label={showMoreLabel}>
                                    <DynamicIcon name="MoreVertical" size={16} />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="center" className="min-w-50 flex flex-col">
                                {actions.slice(2).map((action, index) => (
                                    <DropdownMenuItem asChild key={index.toString()}>
                                        {action}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                </div>
            )}
        </div>
    );
};

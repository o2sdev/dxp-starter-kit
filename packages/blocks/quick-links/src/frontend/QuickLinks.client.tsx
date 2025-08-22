'use client';

import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { InformativeCard } from '@dxp/ui/components/Cards';
import { DynamicIconProps } from '@dxp/ui/components/DynamicIcon';
import { RichText } from '@dxp/ui/components/RichText';

import { Typography } from '@dxp/ui/elements/typography';

import { QuickLinksPureProps } from './QuickLinks.types';

export const QuickLinksPure: React.FC<QuickLinksPureProps> = ({ locale, accessToken, routing, ...component }) => {
    const { Link: LinkComponent } = createNavigation(routing);

    const { title, description, items, preTitle } = component;

    return (
        <div className="w-full flex flex-col gap-5 md:gap-6">
            <div className="h-full w-full flex flex-col gap-2">
                {preTitle && (
                    <Typography variant="body" className="text-muted-foreground">
                        {preTitle}
                    </Typography>
                )}

                {title && (
                    <Typography variant="highlightedMedium" asChild>
                        <h2>{title}</h2>
                    </Typography>
                )}

                {description && (
                    <RichText content={description} baseFontSize="body" className="text-muted-foreground" />
                )}
            </div>

            <ul className="grid grid-flow-row gap-6 sm:grid-cols-[repeat(2,minmax(250px,600px))] lg:grid-cols-[repeat(4,minmax(200px,600px))]">
                {items?.map((item, index) => (
                    <li key={`${item.label}-${index}`} className="w-full">
                        <InformativeCard
                            href={item.url}
                            title={item.label}
                            description={item.description}
                            icon={{
                                name: item.icon as DynamicIconProps['name'],
                                size: 40,
                                className: 'text-primary',
                                strokeWidth: 1,
                            }}
                            LinkComponent={LinkComponent}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

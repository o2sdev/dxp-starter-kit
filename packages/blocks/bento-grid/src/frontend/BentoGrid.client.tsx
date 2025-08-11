'use client';

import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { cn } from '@dxp/ui/lib/utils';

import { FeatureCard } from '@dxp/ui/components/Cards';
import { Container } from '@dxp/ui/components/Container';
import { RichText } from '@dxp/ui/components/RichText';

import { Typography } from '@dxp/ui/elements/typography';

import { BentoGridPureProps } from './BentoGrid.types';

export const BentoGridPure: React.FC<BentoGridPureProps> = ({ locale, accessToken, routing, ...component }) => {
    const { title, description, items, preTitle } = component;
    const { Link: LinkComponent } = createNavigation(routing);

    return (
        <Container>
            <div className="w-full flex flex-col gap-8 md:gap-12">
                <div className={cn('h-full max-w-xl mx-auto flex flex-col gap-5 md:gap-4 text-center')}>
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
                <ul
                    className={cn(
                        'grid grid-flow-row mx-auto gap-3 grid-cols-[repeat(1,minmax(250px,500px))]',
                        items.length === 2 && 'lg:grid-cols-[repeat(2,minmax(250px,500px))]',
                        items.length === 3 && 'lg:grid-cols-[repeat(3,minmax(250px,500px))]',
                    )}
                >
                    {items.map((item, index) => (
                        <li key={`${item.title}-${index}`} className="w-full">
                            <FeatureCard {...item} LinkComponent={LinkComponent} />
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    );
};

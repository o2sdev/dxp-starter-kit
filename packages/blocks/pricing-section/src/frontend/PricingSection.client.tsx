'use client';

import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { PricingCard } from '@dxp/ui/components/Cards/PricingCard';
import { RichText } from '@dxp/ui/components/RichText';

import { Typography } from '@dxp/ui/elements/typography';

import { PricingSectionPureProps } from './PricingSection.types';

export const PricingSectionPure: React.FC<PricingSectionPureProps> = ({
    locale,
    accessToken,
    routing,
    ...component
}) => {
    const { Link: LinkComponent } = createNavigation(routing);
    const { title, subtitle, description, pricingList, headingType } = component;

    const HeadingComponent = headingType ? headingType : 'h2';

    return (
        <div className="w-full flex flex-col gap-16">
            <div className="h-full flex flex-col gap-4 md:gap-5">
                {title && (
                    <Typography variant={headingType === 'h1' ? 'highlightedBig' : 'highlightedMedium'} asChild>
                        <HeadingComponent>{title}</HeadingComponent>
                    </Typography>
                )}

                {subtitle && <Typography variant="subtitle">{subtitle}</Typography>}

                {description && (
                    <RichText content={description} baseFontSize="body" className="text-muted-foreground" />
                )}
            </div>

            {pricingList && pricingList.length > 0 && (
                <ul className="flex flex-col lg:flex-row gap-8 lg:gap-4 items-center lg:items-stretch lg:justify-center ">
                    {pricingList.map((card, index) => (
                        <li key={`${card.title}-${index}`} className="flex-1 max-w-[400px]">
                            <PricingCard {...card} LinkComponent={LinkComponent} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

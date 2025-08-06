'use client';

import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { Container } from '@dxp/ui/components/Container';

import { Typography } from '@dxp/ui/elements/typography';

import { HeroBannerPureProps } from './HeroBanner.types';

export const HeroBannerPure: React.FC<HeroBannerPureProps> = ({ locale, accessToken, routing, ...component }) => {
    const { Link: LinkComponent } = createNavigation(routing);

    const { title, subtitle, description, image, links } = component;

    return (
        <Container variant="narrow">
            <div className="w-full flex flex-col gap-6">
                {title && (
                    <div className="w-full flex flex-col gap-4">
                        <Typography variant="h2" asChild>
                            <h2>{title}</h2>
                        </Typography>

                        {subtitle && (
                            <Typography variant="body" className="text-muted-foreground">
                                {subtitle}
                            </Typography>
                        )}
                    </div>
                )}
            </div>
        </Container>
    );
};

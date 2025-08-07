'use client';

import { Utils } from '@dxp/utils.frontend';
import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { cn } from '@dxp/ui/lib/utils';

import { ActionList } from '@dxp/ui/components/ActionList';
import { Container } from '@dxp/ui/components/Container';
import { DynamicIcon } from '@dxp/ui/components/DynamicIcon';
import { Image } from '@dxp/ui/components/Image';
import { RichText } from '@dxp/ui/components/RichText';

import { Button } from '@dxp/ui/elements/button';
import { Typography } from '@dxp/ui/elements/typography';

import { HeroBannerPureProps } from './HeroBanner.types';

export const HeroBannerPure: React.FC<HeroBannerPureProps> = ({ locale, accessToken, routing, ...component }) => {
    const { Link: LinkComponent } = createNavigation(routing);

    const { title, highlightedText, subtitle, description, image, links, headingType, preTitle, inverted, labels } =
        component;

    const HeadingComponent = headingType ? headingType : 'h2';
    const isImageAvailable = image && image.url;

    return (
        <Container>
            <div
                className={cn(
                    'h-full w-full flex flex-col lg:flex-row gap-12 lg:gap-16',
                    inverted && 'lg:flex-row-reverse',
                )}
            >
                <div className="w-full flex flex-col justify-center flex-1">
                    <div
                        className={cn('w-full flex flex-col gap-8 md:gap-6', !isImageAvailable && 'mx-auto max-w-2xl')}
                    >
                        <div
                            className={cn(
                                'h-full flex flex-col gap-5 md:gap-4',
                                !isImageAvailable && 'items-center text-center',
                            )}
                        >
                            {preTitle && (
                                <Typography variant="body" className="text-muted-foreground">
                                    {preTitle}
                                </Typography>
                            )}

                            {title && (
                                <Typography variant="highlightedBig" asChild>
                                    <HeadingComponent>
                                        {Utils.StringReplace.reactStringReplace(title, {
                                            highlightedText: <span className="text-primary">{highlightedText}</span>,
                                        })}
                                    </HeadingComponent>
                                </Typography>
                            )}

                            {subtitle && (
                                <Typography variant="body" className="text-muted-foreground">
                                    {subtitle}
                                </Typography>
                            )}

                            {description && (
                                <RichText content={description} baseFontSize="body" className="text-muted-foreground" />
                            )}
                        </div>

                        {links && (
                            <ActionList
                                className={cn('sm:flex-row align-start', !isImageAvailable && 'justify-center')}
                                actions={links.map(
                                    (link, index) =>
                                        link.label && (
                                            <Button
                                                asChild
                                                variant={index === 0 ? 'default' : 'link'}
                                                key={link.label}
                                                className={
                                                    index === 0
                                                        ? 'no-underline hover:no-underline'
                                                        : 'no-underline hover:no-underline flex-1'
                                                }
                                            >
                                                <LinkComponent href={link.url}>
                                                    {link.label}
                                                    {link.icon && <DynamicIcon name={link.icon} size={16} />}
                                                </LinkComponent>
                                            </Button>
                                        ),
                                )}
                                showMoreLabel={labels.showMore}
                            />
                        )}
                    </div>
                </div>

                {isImageAvailable && (
                    <div className="w-full flex flex-col justify-center flex-1">
                        <Image
                            src={image.url}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className="object-cover h-auto w-full rounded-xl"
                        />
                    </div>
                )}
            </div>
        </Container>
    );
};

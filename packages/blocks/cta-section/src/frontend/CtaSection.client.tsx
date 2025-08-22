'use client';

import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { cn } from '@dxp/ui/lib/utils';

import { ActionList } from '@dxp/ui/components/ActionList';
import { DynamicIcon } from '@dxp/ui/components/DynamicIcon';
import { Image } from '@dxp/ui/components/Image';
import { RichText } from '@dxp/ui/components/RichText';

import { Link } from '@dxp/ui/elements/link';
import { Typography } from '@dxp/ui/elements/typography';

import { CtaSectionPureProps } from './CtaSection.types';

export const CtaSectionPure: React.FC<CtaSectionPureProps> = ({ locale, accessToken, routing, ...component }) => {
    const { Link: LinkComponent } = createNavigation(routing);

    const { title, description, image, links, preTitle, inverted, labels } = component;

    const isImageAvailable = image && image.url;

    return (
        <div
            className={cn(
                'h-full w-full flex flex-col pt-6 lg:pt-16 rounded-xl shadow-lg bg-primary text-primary-foreground',
                inverted ? 'lg:flex-row-reverse pr-6 lg:pr-16' : 'lg:flex-row pl-6 lg:pl-16',
            )}
        >
            <div
                className={cn(
                    'w-full pb-8 lg:pb-16 pr-6 lg:pr-0 justify-stretch flex-1',
                    inverted ? 'pl-6 lg:pl-0' : 'pr-6 lg:pr-0',
                )}
            >
                <div className={cn('w-full h-full flex flex-col gap-8 md:gap-6', !isImageAvailable && 'mx-auto')}>
                    <div
                        className={cn(
                            'h-full flex flex-col gap-5 md:gap-4 justify-between items-center text-center lg:items-start lg:text-left',
                            !isImageAvailable &&
                                'items-center text-center lg:items-center lg:text-center max-w-2xl mx-auto',
                        )}
                    >
                        <div className="flex flex-col gap-5 md:gap-4">
                            {preTitle && (
                                <Typography variant="body" className="text-primary-foreground">
                                    {preTitle}
                                </Typography>
                            )}

                            {title && (
                                <Typography variant="highlightedMedium" asChild>
                                    <h2>{title}</h2>
                                </Typography>
                            )}
                        </div>

                        {description && (
                            <RichText content={description} baseFontSize="body" className="text-primary-foreground" />
                        )}
                    </div>

                    {links && links.length > 0 && (
                        <ActionList
                            className={cn(
                                'sm:flex-row align-start justify-center lg:justify-start',
                                !isImageAvailable && 'justify-center lg:justify-center',
                            )}
                            actions={links.map(
                                (link, index) =>
                                    link.label && (
                                        <Link
                                            asChild
                                            variant={link.variant}
                                            key={`${link.label}-${index}`}
                                            className={
                                                link.variant === 'primary'
                                                    ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                                                    : 'text-primary-foreground'
                                            }
                                        >
                                            <LinkComponent href={link.url}>
                                                <>
                                                    {link.label}
                                                    {link.icon && <DynamicIcon name={link.icon} size={16} />}
                                                </>
                                            </LinkComponent>
                                        </Link>
                                    ),
                            )}
                            showMoreLabel={labels.showMore}
                        />
                    )}
                </div>
            </div>

            {isImageAvailable && (
                <div className={cn('flex-1 lg:self-end ', inverted ? 'pr-0 lg:pr-16' : 'pl-0 lg:pl-16')}>
                    <Image
                        src={image.url}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className={cn(
                            'w-full h-auto',
                            inverted ? 'rounded-bl-xl rounded-tr-xl' : 'rounded-tl-xl rounded-br-xl',
                        )}
                    />
                </div>
            )}
        </div>
    );
};

'use client';

import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { ActionList } from '@dxp/ui/components/ActionList';
import { DynamicIcon } from '@dxp/ui/components/DynamicIcon';
import { Image } from '@dxp/ui/components/Image';
import { RichText } from '@dxp/ui/components/RichText';

import { Link } from '@dxp/ui/elements/link';
import { Typography } from '@dxp/ui/elements/typography';

import { MediaSectionPureProps } from './MediaSection.types';

export const MediaSectionPure: React.FC<MediaSectionPureProps> = ({ locale, accessToken, routing, ...component }) => {
    const { preTitle, title, description, media, links, labels } = component;
    const { Link: LinkComponent } = createNavigation(routing);

    const isMediaAvailable = media && media.url;

    return (
        <div className="w-full flex flex-col gap-12 md:gap-16">
            <div className="w-full flex flex-col gap-6 md:gap-8">
                <div className="h-full max-w-2xl mx-auto flex flex-col gap-4 md:gap-5 text-center">
                    {preTitle && (
                        <Typography variant="body" className="text-muted-foreground font-semibold">
                            {preTitle}
                        </Typography>
                    )}

                    {title && (
                        <Typography variant="highlightedBig" asChild>
                            <h2>{title}</h2>
                        </Typography>
                    )}

                    {description && (
                        <RichText content={description} baseFontSize="body" className="text-muted-foreground" />
                    )}
                </div>

                {links && links.length > 0 && (
                    <ActionList
                        className="sm:flex-row align-start justify-center"
                        actions={links.map(
                            (link) =>
                                link.label && (
                                    <Link asChild variant={link.variant} key={link.label}>
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

            {isMediaAvailable && (
                <div className="w-full max-w-5xl mx-auto">
                    <div className="w-full flex flex-col justify-center flex-1">
                        <Image
                            src={media.url}
                            alt={media.alt}
                            width={media.width}
                            height={media.height}
                            className="object-cover h-auto w-full rounded-xl shadow-xl/20"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

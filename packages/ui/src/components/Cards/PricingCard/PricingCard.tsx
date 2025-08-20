'use client';

import React from 'react';

import { cn } from '@dxp/ui/lib/utils';

import { DynamicIcon } from '@dxp/ui/components/DynamicIcon';
import { Image } from '@dxp/ui/components/Image';
import { Price } from '@dxp/ui/components/Price';
import { RichText } from '@dxp/ui/components/RichText';
import { TooltipHover } from '@dxp/ui/components/TooltipHover';

import { Badge } from '@dxp/ui/elements/badge';
import { Button } from '@dxp/ui/elements/button';
import { Typography } from '@dxp/ui/elements/typography';

import { FeatureItemProps, PricingCardProps } from './PricingCard.types';

export const FeatureItem: React.FC<FeatureItemProps> = ({ title, description, icon }) => {
    return (
        <div className="flex flex-row gap-3 w-full justify-between">
            <div className="flex flex-row gap-3">
                <div className="mt-0.5">
                    <DynamicIcon name={icon || 'Check'} size={20} className="text-primary" />
                </div>

                <Typography variant="small">{title}</Typography>
            </div>

            {description && (
                <TooltipHover
                    key={description}
                    trigger={(setIsOpen) => (
                        <Button
                            variant="link"
                            onClick={() => setIsOpen(true)}
                            className="no-underline hover:no-underline h-auto p-0 pt-0.5 self-start text-muted-foreground"
                        >
                            {icon && <DynamicIcon name="Info" size={16} />}
                        </Button>
                    )}
                    content={<p>{description}</p>}
                />
            )}
        </div>
    );
};

export const PricingCard: React.FC<Readonly<PricingCardProps>> = (props) => {
    const { title, description, image, price, isPromoted, tags, links, featureListTitle, featureList, LinkComponent } =
        props;

    return (
        <div
            className={cn(
                'flex-1 border-1 border-border rounded-lg h-full',
                isPromoted && 'border-2 border-primary shadow-lg',
            )}
        >
            {image?.url && (
                <div className="relative overflow-hidden h-[264px] flex-shrink-0 rounded-t-md">
                    <Image
                        src={image.url}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="object-cover object-center w-full h-full"
                    />
                </div>
            )}

            <div className="flex flex-col gap-8 p-6 h-full">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-2 justify-between items-center flex-wrap">
                            <Typography variant="highlightedSmall" asChild className={cn(isPromoted && 'text-primary')}>
                                <h3>{title}</h3>
                            </Typography>

                            {tags && tags.length > 0 && (
                                <div className="flex flex-row gap-2 max-h-5">
                                    {tags.map((tag) => (
                                        <Badge key={tag.label} variant={tag.variant}>
                                            {tag.label}
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </div>

                        {description && (
                            <RichText content={description} baseFontSize="small" className="text-muted-foreground" />
                        )}
                    </div>

                    {price?.value !== 0 && (
                        <Typography variant="highlightedMedium">
                            <Price price={price} />
                        </Typography>
                    )}

                    {links && links.length > 0 && (
                        <ul className="flex flex-col gap-2 w-full items-center">
                            {links.map((link, index) => (
                                <li key={`${link.label}-${index}`} className="w-full">
                                    {link.label && (
                                        <Button
                                            asChild
                                            variant={index === 0 ? (isPromoted ? 'default' : 'secondary') : 'link'}
                                            key={link.label}
                                            className="no-underline hover:no-underline w-full"
                                        >
                                            <LinkComponent href={link.url}>
                                                <>
                                                    {link.label}
                                                    {link.icon && <DynamicIcon name={link.icon} size={16} />}
                                                </>
                                            </LinkComponent>
                                        </Button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="flex flex-col gap-4">
                    {featureListTitle && <Typography variant="subtitle">{featureListTitle}</Typography>}

                    {featureList && featureList.length > 0 && (
                        <ul className="flex flex-col gap-4">
                            {featureList.map((feature, index) => (
                                <li key={`${feature.title}-${index}`}>
                                    <FeatureItem {...feature} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

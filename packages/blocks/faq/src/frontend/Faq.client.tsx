'use client';

import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { cn } from '@dxp/ui/lib/utils';

import { RichText } from '@dxp/ui/components/RichText';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@dxp/ui/elements/accordion';
import { Button } from '@dxp/ui/elements/button';
import { Typography } from '@dxp/ui/elements/typography';

import { FaqPureProps, FaqSectionProps } from './Faq.types';

export const FaqPure: React.FC<FaqPureProps> = ({ locale, accessToken, routing, ...component }) => {
    const { Link: LinkComponent } = createNavigation(routing);

    const { title, description, sections, banner, oneColumn, preTitle } = component;

    return (
        <div className="w-full flex flex-col gap-8">
            <div className={cn('w-full flex flex-col gap-8 md:gap-16', oneColumn ? 'flex-col' : 'md:flex-row')}>
                <div className="flex flex-col gap-5 flex-1">
                    {preTitle && (
                        <Typography variant="body" className="text-muted-foreground">
                            {preTitle}
                        </Typography>
                    )}

                    {title && (
                        <Typography variant="h1" asChild>
                            <h2>{title}</h2>
                        </Typography>
                    )}

                    {description && <RichText content={description} className="text-muted-foreground" />}
                </div>

                {sections && sections?.length > 0 && (
                    <div className="flex flex-col gap-8 w-full flex-1">
                        {sections.map((section, index) => (
                            <FaqSection key={index} title={section.title} items={section.items} />
                        ))}
                    </div>
                )}
            </div>

            {banner?.title && (
                <div className="flex flex-col p-6 bg-muted/60 rounded-lg gap-6 items-center">
                    <div className="flex flex-col gap-2 items-center">
                        <Typography variant="h2" asChild>
                            <h2 className="text-foreground">{banner?.title}</h2>
                        </Typography>
                        <RichText content={banner?.description} className="text-muted-foreground" />
                    </div>
                    {banner?.button && (
                        <Button asChild aria-label={banner.button.label}>
                            <LinkComponent href={banner?.button?.url}>{banner.button.label}</LinkComponent>
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
};

const FaqSection: React.FC<FaqSectionProps> = ({ title, items }) => {
    return (
        <div className="flex flex-col gap-2">
            {title && (
                <Typography variant="h3" asChild>
                    <h3>{title}</h3>
                </Typography>
            )}
            {items && items?.length > 0 && (
                <Accordion type="multiple">
                    {items.map((item, index) => (
                        <AccordionItem key={index} value={`${index}`}>
                            <AccordionTrigger>{item.title}</AccordionTrigger>
                            <AccordionContent>
                                <RichText content={item.content} className="text-muted-foreground" />
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            )}
        </div>
    );
};

import { useRouter } from 'next/navigation';
import React from 'react';

import { cn } from '@dxp/ui/lib/utils';

import { DynamicIcon } from '@dxp/ui/components/DynamicIcon';
import { Image } from '@dxp/ui/components/Image';
import { RichText } from '@dxp/ui/components/RichText';

import { Link } from '@dxp/ui/elements/link';
import { Typography } from '@dxp/ui/elements/typography';

import { FeatureCardProps } from '././FeatureCard.types';

export const FeatureCardContent: React.FC<FeatureCardProps> = ({ title, description, image, link, LinkComponent }) => {
    return (
        <div className="flex flex-col relative rounded-lg bg-card w-full h-full border border-border hover:border-primary transition-all duration-300">
            <div className="p-6 md:p-8 flex flex-col gap-2 flex-1">
                <Typography variant="body" className="font-semibold">
                    {title}
                </Typography>

                {description && (
                    <RichText content={description} baseFontSize="small" className="text-muted-foreground" />
                )}

                {link?.url && (
                    <Link asChild variant="link" size="default" className="self-start">
                        <LinkComponent href={link.url}>
                            <>
                                {link.label}
                                {link.icon && <DynamicIcon name={link.icon} size={16} />}
                            </>
                        </LinkComponent>
                    </Link>
                )}
            </div>
            <div className="relative overflow-hidden h-[264px] flex-shrink-0 rounded-b-md">
                {image?.url && image?.alt && (
                    <Image
                        src={image.url}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="object-cover object-center w-full h-full"
                    />
                )}
            </div>
        </div>
    );
};

export const FeatureCard: React.FC<Readonly<FeatureCardProps>> = (props) => {
    const router = useRouter();

    return (
        <div
            tabIndex={-1}
            onClick={() => props.link?.url && router.push(props.link?.url)}
            className={cn('h-full w-full', props.link?.url && 'cursor-pointer')}
        >
            <FeatureCardContent {...props} />
        </div>
    );
};

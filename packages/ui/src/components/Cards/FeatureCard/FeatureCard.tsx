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

                <RichText content={description} baseFontSize="small" className="text-muted-foreground" />

                {link && (
                    <Link asChild variant="default" className="self-start">
                        <LinkComponent href={link.url}>
                            <>
                                {link.label}
                                {link.icon && <DynamicIcon name={link.icon} size={16} />}
                            </>
                        </LinkComponent>
                    </Link>
                )}
            </div>
            <div className="relative overflow-hidden h-[264px] flex-shrink-0 rounded-b-lg">
                {image?.url && image?.alt && (
                    <Image
                        src={image.url}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="object-cover object-center w-full h-auto"
                    />
                )}
            </div>
        </div>
    );
};

export const FeatureCard: React.FC<Readonly<FeatureCardProps>> = (props) => {
    const { LinkComponent } = props;

    if (props.link) {
        return (
            <Link
                asChild
                className="flex flex-grow hover:no-underline w-full h-full items-start whitespace-normal text-card-foreground font-normal"
                tabIndex={-1}
            >
                <LinkComponent href={props.link.url} aria-label={props.title}>
                    <FeatureCardContent {...props} />
                </LinkComponent>
            </Link>
        );
    }
    return <FeatureCardContent {...props} />;
};

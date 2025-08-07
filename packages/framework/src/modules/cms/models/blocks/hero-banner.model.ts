import { Block, Link, Media, RichText } from '@/utils/models';

export class HeroBannerBlock extends Block.Block {
    preTitle?: string;
    title?: string;
    highlightedText?: string;
    subtitle?: string;
    description?: RichText.RichText;
    inverted?: boolean;
    image?: Media.Media;
    links?: Link.Link[];
    headingType?: 'h1' | 'h2' | 'h3';
    labels!: {
        showMore: string;
    };
}

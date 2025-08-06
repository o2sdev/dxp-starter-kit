import { Block, Link, Media, RichText } from '@/utils/models';

export class HeroBannerBlock extends Block.Block {
    preTitle?: string;
    title?: string;
    subtitle?: string;
    description?: RichText.RichText;
    inverted?: boolean;
    image?: Media.Media;
    links?: Link.Link[];
}

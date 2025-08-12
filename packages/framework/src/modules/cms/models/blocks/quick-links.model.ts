import { Block, Link } from '@/utils/models';

export class QuickLinksBlock extends Block.Block {
    preTitle?: string;
    title?: string;
    description?: string;
    items?: {
        title?: string;
        description?: string;
        icon?: string;
        link?: Link.Link;
    }[];
}

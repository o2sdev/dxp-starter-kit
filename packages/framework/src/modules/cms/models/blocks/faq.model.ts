import { Block, Link, RichText } from '@/utils/models';

export class FaqBlock extends Block.Block {
    preTitle?: string;
    title?: string;
    description?: string;
    sections!: FaqSection[];
    oneColumn?: boolean;
    banner?: FaqBoxWithButton;
}

export class FaqSection {
    title?: string;
    items!: FaqItem[];
}

export class FaqItem {
    title!: string;
    content!: RichText.RichText;
}

export class FaqBoxWithButton {
    title?: string;
    description?: RichText.RichText;
    button?: Link.Link;
}

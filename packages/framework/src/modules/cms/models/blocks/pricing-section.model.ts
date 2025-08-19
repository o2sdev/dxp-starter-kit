import { Block, PricingCard } from '@/utils/models';

export class PricingSectionBlock extends Block.Block {
    title?: string;
    subtitle?: string;
    description?: string;
    pricingList?: PricingCard.PricingCard[];
}

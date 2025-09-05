import { VariantProps } from 'class-variance-authority';

import { baseVariant } from '@dxp/ui/lib/utils';

export type ActionListProps = {
    actions?: React.ReactNode[];
    showMoreLabel: string;
    className?: string;
    triggerVariant?: VariantProps<typeof baseVariant>['variant'];
};

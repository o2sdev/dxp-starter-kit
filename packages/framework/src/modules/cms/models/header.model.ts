import { Media } from '@/utils/models';
import { NavigationGroup, NavigationItem } from '@/utils/models/navigation';

export class Header {
    id!: string;
    title?: string;
    logo?: Media.Media;
    languageSwitcherLabel!: string;
    mobileMenuLabel!: {
        open: string;
        close: string;
    };
    items!: (NavigationGroup | NavigationItem)[];
}

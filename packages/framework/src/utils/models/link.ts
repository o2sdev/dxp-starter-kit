export class Link {
    url!: string;
    label!: string;
    description?: string;
    icon?: string;
    variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'destructive';
}

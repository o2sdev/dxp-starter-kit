import { Modules } from '@dxp/api-harmonization';

export interface PageTemplateProps {
    slug: string[];
    data: Modules.Page.Model.PageData;
}

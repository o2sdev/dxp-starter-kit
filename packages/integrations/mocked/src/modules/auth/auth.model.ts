import { Auth } from '@dxp/framework/modules';

export interface Jwt extends Auth.Model.Jwt {
    role: string;
    customer?: {
        id: string;
        roles: string[];
    };
}

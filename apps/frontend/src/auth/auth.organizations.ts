import { updateOrganization as updateOrganizationAuth } from '@dxp/integrations.mocked/auth.updateOrganization';
import { useSession } from 'next-auth/react';

export async function updateOrganization(session: ReturnType<typeof useSession>) {
    return updateOrganizationAuth(session);
}

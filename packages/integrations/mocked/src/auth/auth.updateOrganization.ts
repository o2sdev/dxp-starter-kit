import { useSession } from 'next-auth/react';

export async function updateOrganization(session: ReturnType<typeof useSession>) {
    await session.update({});

    window.location.reload();
}

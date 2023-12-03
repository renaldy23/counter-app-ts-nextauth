import { getServerSession } from 'next-auth';
import React from 'react';

import { options } from '@/utils/nextauth/options';

async function getData(userId: string) {
  return userId;
}

export default async function Page() {
  const session = await getServerSession(options);
  await getData(session?.user?.id as string);

  return <div>Dashboard User</div>;
}

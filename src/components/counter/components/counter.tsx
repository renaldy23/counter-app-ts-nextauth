'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';

export default function Counter() {
  const [counter, setCounter] = useState<number>(0);
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <Button variant="secondary" onClick={() => setCounter(counter - 1)}>
          {' '}
          - Decrement
        </Button>
        <p className="text-2xl font-bold">{counter}</p>
        <Button variant="secondary" onClick={() => setCounter(counter + 1)}>
          Increment +
        </Button>
      </div>
      {session?.user?.email ? (
        <Button variant="danger" onClick={() => signOut()}>
          Log Out
        </Button>
      ) : (
        <Button variant="primary" onClick={() => signIn()}>
          Login
        </Button>
      )}
    </div>
  );
}

'use client';

import React, { useState } from 'react';

import { Button } from '@/components/ui/button';

export default function Counter() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div className="flex gap-4 items-center">
      <Button variant="primary" onClick={() => setCounter(counter - 1)}> - Decrement</Button>
      <p className="text-2xl font-bold">{counter}</p>
      <Button variant="primary" onClick={() => setCounter(counter + 1)}>Increment + </Button>
    </div>
  );
}

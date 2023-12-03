'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { useLogin } from '../hooks/useLogin';

export const AuthLogin = () => {
  const { handleChange, handleCredentialLogin, handleGithubLogin } = useLogin();

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex w-[300px] flex-col gap-4">
        <Input
          size="md"
          type="email"
          placeholder="Your email address"
          name="email"
          onChange={handleChange}
        />
        <Input
          size="md"
          type="password"
          placeholder="Your Password"
          onChange={handleChange}
          name="password"
        />
        <Button onClick={handleCredentialLogin}>Login</Button>
        <Button variant="secondary" onClick={handleGithubLogin}>
          Continue with Github
        </Button>
      </div>
    </main>
  );
};

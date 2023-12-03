'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export const useLogin = () => {
  const [payload, setPayload] = useState({
    email: '',
    password: '',
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleCredentialLogin = () => {
    signIn('credentials', {
      email: payload.email,
      password: payload.password,
      callbackUrl: '/',
      redirect: true,
    });
  };

  const handleGithubLogin = () => {
    signIn('github', { callbackUrl: '/', redirect: true });
  };

  return { handleChange, handleCredentialLogin, handleGithubLogin };
};

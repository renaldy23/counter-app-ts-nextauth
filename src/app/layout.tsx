import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

import { AuthProvider } from '@/context/Provider';

const fontSans = FontSans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Auth | Counter',
  description: 'Generated for personal use - @indrazm',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={twMerge(fontSans.className)}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

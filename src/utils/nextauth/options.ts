import { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GithubCredential from 'next-auth/providers/github';

import prisma from '@/db/utils/prisma';

export const options: AuthOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Your email address' },
        password: { label: 'Password', type: 'password', placeholder: 'Your password' },
      },
      authorize: async (credentials) => {
        const findUser = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });

        if (findUser) {
          return {
            id: findUser.id,
            email: findUser.email,
            name: findUser.name,
          };
        }

        return null;
      },
    }),
    GithubCredential({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    signIn: async ({ user }) => {
      const findUser = await prisma.user.findUnique({
        where: {
          email: user.email as string,
        },
      });

      if (!findUser) {
        await prisma.user.create({
          data: {
            name: user.name,
            email: user.email as string,
            image: user.image,
          },
        });
      }
      return true;
    },
    session: async ({ session }) => {
      if (session.user) {
        const findUser = await prisma.user.findUnique({
          where: {
            email: session.user.email as string,
          },
        });

        if (findUser) {
          session.user.id = findUser.id;
          session.user.role = 'USER';
        }
      }
      return session;
    },
    jwt: async ({ token }) => {
      if (token) {
        const findUser = await prisma.user.findUnique({
          where: {
            email: token.email as string,
          },
        });

        if (findUser) {
          token.role = 'USER';
        }
      }
      return token;
    },
  },
  pages: {
    signIn: '/login',
  },
};

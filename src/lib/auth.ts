import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from '@/lib/prisma';
import bcrypt from "bcrypt";
import NextAuth, { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;
                const user = await prisma.user.findUnique({
                  where: { email: credentials.email },
                });
                if (!user) return null;
    
                const isValid = await bcrypt.compare(credentials.password,user.password);
                if (!isValid) return null;
    
                return {
                id: user.id,
                username: user.username,
                email: user.email,
                userPlan: user.userPlan
                };
            },
        }),
    ],
      callbacks: {
        async jwt({ token, user }) {
          if (user) {
            token.id = user.id;
            token.username = user.username;
            token.userPlan = user.userPlan;
          }
          return token;
        },
        async session({ session, token }) {
          session.user.id = token.id as string;
          session.user.username = token.username as string;
          session.user.userPlan = token.userPlan as string;
          return session;
        },
      },
    secret: process.env.NEXTAUTH_SECRET,
}
// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Usuário", type: "text" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.username === "admin" &&
          credentials?.password === "123"
        ) {
          return { id: "1", name: "Admin" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login", // sua página de login em app/auth/login/page.tsx
  },
});

export { handler as GET, handler as POST };
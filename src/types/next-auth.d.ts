import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

// extendendo o tipo do `User`
declare module "next-auth" {
  interface User extends DefaultUser {
    id: string;
    username: string;
    userPlan: string;
  }

  interface Session {
    user: {
      id: string;
      username: string;
      email: string;
      userPlan: string;
    } & DefaultSession["user"];
  }
}

// também extender o JWT
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username: string;
    userPlan: string;
  }
}

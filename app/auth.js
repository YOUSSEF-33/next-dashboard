import NextAuth from "next-auth";
import { authConfig } from "./authConfig";
import Credentials from "next-auth/providers/credentials";
import { Users } from "./lib/models/user.model";
import bcrypt from "bcrypt";
import { DBconnection } from "./lib/utils";

const login = async (credentials) => {
  try {
    await DBconnection();
    const user = await Users.findOne({ username: credentials.username });
    if (!user) throw new Error("User not found");
    const isPassword = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPassword) throw new Error("password is wrong");
    console.log(user);
    return user;
  } catch (error) {
    throw new Error("credentials is not valid");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks:{
    async jwt({token, user}){
      if(user){
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({session, token}){
      if(token){
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    }
  }
});

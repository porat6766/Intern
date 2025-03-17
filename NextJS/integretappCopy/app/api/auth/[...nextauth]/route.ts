import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { UserService } from "@/AppConfig/Services/UserService";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                try {

                    let user = await UserService.authenticateUser(
                        credentials.email,
                        credentials.password
                    );


                    if (!user) {
                        user = await UserService.authenticateUserAfterSignUp(
                            credentials.email,
                            credentials.password
                        );
                    }


                    return user || null;
                } catch (error) {
                    console.error("Error authenticating user:", error);
                    return null;
                }
            }

        }),
    ],
    callbacks: {
        async signIn({ user, account }) {

            if (account?.provider === "google") {
                try {
                    let existingUser = await UserService.getUserByEmail(user.email!);

                    if (!existingUser) {
                        existingUser = await UserService.createUser(
                            user.name || user.email!.split('@')[0],
                            user.email!,
                            Math.random().toString(36).slice(-8)
                        );
                    }


                    Object.assign(user, existingUser);
                    return true;
                } catch (error) {
                    console.error("Error during Google sign-in:", error);
                    return false;
                }
            }

            return true;
        },
        async jwt({ token, user, account }) {

            if (user) {

                token = {
                    ...token,
                    ...user
                };


                if (account) {
                    token.provider = account.provider;
                }
            }
            return token;
        },
        async session({ session, token }) {

            session.user = {
                ...session.user,
                ...token
            };


            if (session.user.password) {
                delete session.user.password;
            }

            return session;
        },
    },

    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    pages: {
        signIn: "/login",
        error: "/login",
        signOut: "/custom-logout",
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
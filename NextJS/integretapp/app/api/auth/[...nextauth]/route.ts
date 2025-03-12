import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { UserService } from "@/AppConfig/Services/UserService";
import { signJwt } from "@/utils/jwt";
import { cookies } from "next/headers";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === "google") {
                try {
                    
                    const existingUser = await UserService.getUserByEmail(user.email!);

                    if (existingUser) {
                        
                        const token = signJwt({ id: existingUser._id, email: existingUser.email });

                        
                        const cookieStore = await cookies();
                        cookieStore.set("token", token, {
                            httpOnly: true,
                            secure: process.env.NODE_ENV === "production",
                            sameSite: "strict",
                            path: "/",
                            maxAge: 60 * 60 * 24 * 7, 
                        });

                        return true;
                    } else {
                        
                        const newUser = await UserService.createUser(
                            user.name || user.email!.split('@')[0], 
                            user.email!,
                            Math.random().toString(36).slice(-8) 
                        );

                        if (newUser) {
                            
                            const token = signJwt({ id: newUser._id, email: newUser.email });

                            
                            const cookieStore = await cookies();
                            cookieStore.set("token", token, {
                                httpOnly: true,
                                secure: process.env.NODE_ENV === "production",
                                sameSite: "strict",
                                path: "/",
                                maxAge: 60 * 60 * 24 * 7, 
                            });

                            return true;
                        }
                    }
                } catch (error) {
                    console.error("Error during Google sign-in:", error);
                    return false;
                }
            }
            return true;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id;
            }
            return session;
        },
    },
    pages: {
        signIn: "/login",
        error: "/login",
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
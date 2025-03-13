import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
    console.log("Middleware triggered for:", req.nextUrl.pathname);

    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });


    if (session && req.nextUrl.pathname === "/login") {
        console.log("User is already logged in, redirecting to /tasks.");
        return NextResponse.redirect(new URL("/tasks", req.url));
    }


    if (!session && req.nextUrl.pathname !== "/login") {
        console.log("No session found, redirecting to login.");
        return NextResponse.redirect(new URL("/login", req.url));
    }

    console.log("Access granted:", req.nextUrl.pathname);
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/addTask",
        "/tasks",
        "/login",
    ],
};

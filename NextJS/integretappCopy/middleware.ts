import { NextRequest, NextResponse } from "next/server";
import { auth } from "./authMiddleware/auth";

export const middleware = auth(async (req: NextRequest) => {
    console.log("Middleware triggered for:", req.nextUrl.pathname);

    const session = req.auth?.session;

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
});


export const config = {
    matcher: ["/addTask", "/tasks", "/login", "/profile"],

};

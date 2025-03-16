import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
export function auth(handler: Function) {
    return async (req: NextRequest) => {
        const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });


        req.auth = { session };


        return handler(req);
    };
}

import { NextRequest } from "next/server";

declare global {
    namespace NodeJS {
        interface Global {
            auth: { session: any };
        }
    }
}

declare module "next/server" {
    interface NextRequest {
        auth?: { session: any };
    }
}

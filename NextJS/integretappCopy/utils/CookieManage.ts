import { cookies } from "next/headers";

export async function removeTokenFromCookies() {
    const cookieStore = await cookies();
    cookieStore.set("token", "", { path: "/", maxAge: -1 });
}


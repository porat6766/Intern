"use server";

import { signJwt } from "../../utils/jwt";
import { cookies } from "next/headers";
import { UserService } from "@/AppConfig/Services/UserService";
import { removeTokenFromCookies } from "../../utils/CookieManage";


export async function loginAction(prevState: any, formData: FormData) {
    try {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        console.log(email, password);

        if (!email || !password) {
            return { error: "Email and password are required" };
        }

        const user = await UserService.authenticateUser(email, password);
        if (!user) {
            return { error: "Invalid email or password" };
        }

        const token = signJwt({ id: user._id, email: user.email });

        const cookieStore = await cookies();
        cookieStore.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });

        const serializedUser = {
            id: user._id?.toString(),
            email: user.email,
            username: user.username,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        };

        return { success: true, user: serializedUser };
    } catch (error) {
        console.error("Login error:", error);
        return { error: "Internal Server Error" };
    }
}

export async function signupAction(prevState: any, formData: any) {
    try {
        const { username, email, password } = formData;

        if (!username || !email || !password) {
            return { error: "All fields are required" };
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return { error: "Invalid email format" };
        }

        const existingUser = await UserService.getUserByEmail(email);
        if (existingUser) {
            return { error: "User with this email already exists" };
        }

        const newUser = await UserService.createUser(username, email, password);
        if (!newUser) {
            return { error: "Failed to create user" };
        }

        console.log(newUser);

        const plainUser = JSON.parse(JSON.stringify(newUser));

        return { message: "User created successfully!", success: true, user: { ...plainUser, password } };
    } catch (error) {
        console.error("Signup error:", error);
        return { error: "Internal Server Error" };
    }
}


// export async function signupAction(prevState: any, formData: any) {
//     try {
//         const { username, email, password } = formData;

//         if (!username || !email || !password) {
//             return { error: "All fields are required" };
//         }

//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(email)) {
//             return { error: "Invalid email format" };
//         }


//         const existingUser = await UserService.getUserByEmail(email);
//         if (existingUser) {
//             return { error: "User with this email already exists" };
//         }


//         const newUser = await UserService.createUser(username, email, password);
//         if (!newUser) {
//             return { error: "Failed to create user" };
//         }

//         const token = signJwt({ id: newUser._id, email: newUser.email });


//         const cookieStore = await cookies();
//         cookieStore.set("token", token, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === "production",
//             sameSite: "strict",
//             path: "/",
//             maxAge: 60 * 60 * 24 * 7,
//         });


//         const serializedUser = {
//             id: newUser._id?.toString(),
//             email: newUser.email,
//             username: newUser.username,
//             createdAt: newUser.createdAt,
//             updatedAt: newUser.updatedAt,
//         };

//         return { success: true, user: serializedUser };
//     } catch (error) {
//         console.error("Signup error:", error);
//         return { error: "Internal Server Error" };
//     }
// }

export const logoutAction = async () => {
    try {
        await removeTokenFromCookies();
        return {
            message: "Logged out successfully",
            error: null,
            loading: false
        };
    } catch (error) {
        return {
            message: null,
            error: "Logout failed. Please try again.",
            loading: false
        };
    }
};

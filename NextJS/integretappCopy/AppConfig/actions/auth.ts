"use server";

import { UserService } from "@/AppConfig/Services/UserService";
import { removeTokenFromCookies } from "../../utils/CookieManage";

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

        return {
            message: "User created successfully!", success: true, user: plainUser
        };
    } catch (error) {
        console.error("Signup error:", error);
        return { error: "Internal Server Error" };
    }
}

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

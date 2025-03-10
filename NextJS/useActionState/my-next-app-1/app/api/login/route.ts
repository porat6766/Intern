import { LoginForm } from "@/app/login/page";
async function loginUser(data: LoginForm) {
    const { email, password } = data;

    if (email === "test@example.com" && password === "password123") {
        return { success: true };
    } else {
        return { success: false };
    }
}

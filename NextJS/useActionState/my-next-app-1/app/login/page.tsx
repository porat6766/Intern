"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    email: z.string().email("Invalid email address").nonempty("Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters").nonempty("Password is required"),
});

export type LoginForm = z.infer<typeof loginSchema>;

const LoginPage = () => {
    const { handleSubmit, control, formState: { errors } } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
    });

    const [actionState, setActionState] = useState<"loading" | "success" | "error" | null>(null);

    const onSubmit = async (data: LoginForm) => {
        setActionState("loading");

        try {
            const result = await loginUser(data);
            if (result.success) {
                setActionState("success");
                alert("Login successful");
            } else {
                throw new Error("Login failed");
            }
        } catch (error) {
            setActionState("error");
            alert("An error occurred during login");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 text-zinc-900">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...control.register("email")}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...control.register("password")}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={actionState === "loading"}
                            className={`w-full py-3 text-white rounded-md ${actionState === "loading" ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"} focus:outline-none`}
                        >
                            {actionState === "loading" ? "Logging in..." : "Login"}
                        </button>
                    </div>
                </form>

                {actionState === "error" && (
                    <p className="mt-4 text-center text-red-500">Something went wrong. Please try again.</p>
                )}
            </div>
        </div>
    );
};

async function loginUser(data: LoginForm) {
    const { email, password } = data;

    if (email === "test@example.com" && password === "password123") {
        return { success: true };
    } else {
        return { success: false };
    }
}

export default LoginPage;

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../../AppConfig/components/ui/input";
import { Button } from "../../AppConfig/components/ui/button";
import { Card } from "../../AppConfig/components/ui/card";
import { CardContent, CardHeader, CardTitle } from "../../AppConfig/components/ui/card";
import { useRouter } from "next/navigation";
import useUserStore from "../../AppConfig/Store/userZustand";
import { useEffect } from "react";

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

const Login = () => {
    const router = useRouter();
    const { user } = useUserStore();


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(loginSchema),
    });
    useEffect(() => {
        if (user) {
            router.push("/tasks");
        }
    }, [user, router]);

    const onSubmit = async (data: { email: string; password: string }) => {
        console.log("Login Data:", data);

        try {
            const res = await fetch("api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Error("Invalid credentials");
            }

            const responseData = await res.json();
            localStorage.setItem("token", responseData.token);
            console.log("Login Successful:", responseData);
            reset();
            router.push("/tasks");
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };


    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <Card className="w-full max-w-sm shadow-lg">
                <CardHeader>
                    <CardTitle className="text-center">Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <Input
                                type="email"
                                placeholder="Email"
                                {...register("email")}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        <div>
                            <Input
                                type="password"
                                placeholder="Password"
                                {...register("password")}
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>
                        <Button type="submit" className="w-full">Login</Button>
                        <div className="flex flex-col gap-2 justify-between mt-4">
                            <Button variant="outline">Google</Button>
                            <Button variant="outline">GitHub</Button>
                        </div>
                        <p className="text-center mt-4 text-sm">
                            Don't have an account?{" "}
                            <span onClick={() => router.push("/signup")} className="text-blue-500 cursor-pointer">
                                Sign up here
                            </span>
                        </p>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;

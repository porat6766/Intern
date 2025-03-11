"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../../AppConfig/components/ui/input";
import { Button } from "../../AppConfig/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../AppConfig/components/ui/card";
import { IUserSignUp } from "../../AppConfig/Types/User";
import useUserStore from "../../AppConfig/Store/userZustand";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const signupSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

const Signup = () => {
    const router = useRouter()
    const { setUser, user } = useUserStore();

    useEffect(() => {
        if (user) {
            router.push("/tasks");
        }
    }, [user, router]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(signupSchema),
    });

    const onSubmit = async (data: IUserSignUp) => {
        console.log("Signup Data:", data);

        try {
            const res = await fetch("api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Error("Signup failed");
            }

            const responseData = await res.json();
            setUser(responseData.user)
            console.log("Signup Successful:", responseData);
            reset()
        } catch (error) {
            console.error("Error signing up:", error);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <Card className="w-full max-w-sm shadow-lg">
                <CardHeader>
                    <CardTitle className="text-center">Sign Up</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <Input
                                type="text"
                                placeholder="Username"
                                {...register("username")}
                            />
                            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                        </div>
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
                        <Button type="submit" className="w-full">Sign Up</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Signup;

"use client";


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../../AppConfig/components/ui/input";
import { Button } from "../../AppConfig/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../AppConfig/components/ui/card";
import { useRouter } from "next/navigation";
import useUserStore from "../../AppConfig/Store/userZustand";
import { useEffect, useActionState } from "react";
import { loginAction } from "../../AppConfig/actions/auth";

import { FcGoogle } from 'react-icons/fc';
import { AiFillAmazonCircle } from 'react-icons/ai';

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

const Login = () => {
    const router = useRouter();
    const { setUser } = useUserStore();
    const [state, formAction] = useActionState(loginAction, {});

    const {
        register,
        formState: { errors },
    } = useForm({ resolver: zodResolver(loginSchema) });

    useEffect(() => {
        if (state.user) {
            setUser(state.user);
            router.push("/tasks");
        }
    }, [state.user, router, setUser]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <Card className="w-full max-w-sm shadow-lg">
                <CardHeader>
                    <CardTitle className="text-center">Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={formAction} className="space-y-4">
                        <div>
                            <Input type="email" placeholder="Email" {...register("email")} />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        <div>
                            <Input type="password" placeholder="Password" {...register("password")} />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>
                        {state.error && <p className="text-red-500 text-sm">{state.error}</p>}
                        <Button type="submit" className="w-full">Login</Button>
                        <div className="flex flex-col gap-2 justify-between mt-4">
                            <Button
                                variant="outline"
                                className="flex items-center gap-2"
                            // onClick={() => signIn("google")}
                            >
                                <FcGoogle />
                                Google
                            </Button>
                            <Button
                                variant="outline"
                                className="flex items-center gap-2"
                            >
                                <AiFillAmazonCircle />
                                Cognito
                            </Button>
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

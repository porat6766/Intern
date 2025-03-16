"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../../AppConfig/components/ui/input";
import { Button } from "../../AppConfig/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../AppConfig/components/ui/card";
import { useRouter } from "next/navigation";
import useUserStore from "../../AppConfig/Store/userZustand";
import { useEffect, useActionState, startTransition } from "react";
import { signupAction } from "../../AppConfig/actions/auth";
import { signIn } from "next-auth/react";

const signupSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

const SignUp = () => {
    const router = useRouter();
    const { setUser } = useUserStore();
    const [state, formAction] = useActionState(signupAction, {});

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(signupSchema) });

    useEffect(() => {
        if (state?.user) {
            startTransition(async () => {
                setUser(state.user);
                await signIn("credentials", {
                    email: state.user.email,
                    password: state.user.password,
                    redirect: false,
                });
                router.push("/tasks");
            });
        }
    }, [state.user, router, setUser]);

    const onSubmit = async (data: any) => {
        const plainPassword = data.password;

        startTransition(() => {
            formAction({ ...data, plainPassword });
        });
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
                            <Input type="text" placeholder="Username" {...register("username")} />
                            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                        </div>
                        <div>
                            <Input type="email" placeholder="Email" {...register("email")} />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        <div>
                            <Input type="password" placeholder="Password" {...register("password")} />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>
                        {state.error && <p className="text-red-500 text-sm">{state.error}</p>}
                        <Button type="submit" className="w-full" disabled={state.isLoading}>
                            {state.isLoading ? "Signing Up..." : "Sign Up"}
                        </Button>
                        <p className="text-center mt-4 text-sm">
                            Already have an account?{" "}
                            <span onClick={() => router.push("/login")} className="text-blue-500 cursor-pointer">
                                Login here
                            </span>
                        </p>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default SignUp;

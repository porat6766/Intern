"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../AppConfig/components/ui/input";
import { Button } from "../../../AppConfig/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../AppConfig/components/ui/card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import { AiFillAmazonCircle } from "react-icons/ai";
import { FaUserLock } from "react-icons/fa";
import { loginSchema } from "@/AppConfig/ZOD/authZod";
import { refreshHeader } from "@/utils/revalidatePath";

const LoginForm = () => {
    const router = useRouter();

    const [loginError, setLoginError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });


    const onCredentialsSubmit = handleSubmit(async (data) => {
        setLoginError("");
        const response = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });

        if (response?.error) {
            setLoginError("Invalid email or password. Please try again.");
        } else {
            refreshHeader()
            router.push("/tasks");
        }
    });

    return (
        <Card className="w-full max-w-md shadow-lg">
            <CardHeader>
                <CardTitle className="text-center text-2xl">Login</CardTitle>
            </CardHeader>
            <CardContent>

                <div className="mb-6">
                    <h3 className="text-center font-medium mb-4">Local Login</h3>
                    <form onSubmit={onCredentialsSubmit} className="space-y-4">
                        <div>
                            <Input
                                type="email"
                                placeholder="Email"
                                {...register("email")}
                                className={errors.email ? "border-red-500" : ""}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        <div>
                            <Input
                                type="password"
                                placeholder="Password"
                                {...register("password")}
                                className={errors.password ? "border-red-500" : ""}
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>
                        {loginError && <p className="text-red-500 text-sm text-center">{loginError}</p>}
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            <FaUserLock className="mr-2" />
                            {isSubmitting ? "Logging in..." : "Login"}
                        </Button>
                    </form>
                </div>


                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or</span>
                    </div>
                </div>


                <div>
                    <h3 className="text-center font-medium mb-4">External Providers</h3>
                    <div className="flex flex-col gap-3">
                        <Button
                            variant="outline"
                            className="flex items-center gap-2 w-full py-6"
                            onClick={() => signIn("google", { callbackUrl: "/tasks" })}
                        >
                            <FcGoogle size={24} />
                            Sign in with Google
                        </Button>
                        <Button
                            variant="outline"
                            className="flex items-center gap-2 w-full py-6"
                            onClick={() => signIn("cognito", { callbackUrl: "/tasks" })}
                        >
                            <AiFillAmazonCircle size={24} />
                            Sign in with Cognito
                        </Button>

                    </div>
                </div>


                <p className="text-center mt-6 text-sm">
                    Don't have an account?{" "}
                    <span onClick={() => router.push("/signup")} className="text-blue-500 cursor-pointer">
                        Sign up here
                    </span>
                </p>
            </CardContent>
        </Card>
    );
};

export default LoginForm;
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./../ui/input";
import { Button } from "./../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./../ui/card";
import { useRouter } from "next/navigation";
import useUserStore from "../../Store/userZustand";
import { signupAction } from "../../actions/auth";
import { signIn } from "next-auth/react";
import { signupSchema } from "../../ZOD/authZod";
import { refreshHeader } from "@/utils/revalidatePath";
import { ErrorMessage } from "../ErrorMessage";

const SignUp = () => {
    const router = useRouter();
    const { setUser } = useUserStore();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(signupSchema),
    });

    const onSubmit = handleSubmit(async (data) => {
        const response = await signupAction(null, data);

        if (response?.error) {
            if (response.error.includes("email")) {
                setError("email", { message: response.error });
            } else if (response.error.includes("password")) {
                setError("password", { message: response.error });
            } else {
                setError("root", { message: response.error });
            }
            return;
        }

        if (response?.user) {
            setUser(response.user);
            await signIn("credentials", {
                email: response.user.email,
                password: data.password,
                redirect: false,
            });
            refreshHeader();
            router.push("/tasks");
        }
    });

    return (
        <Card className="w-full max-w-sm shadow-lg">
            <CardHeader>
                <CardTitle className="text-center">Sign Up</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <Input type="text" placeholder="Username" {...register("username")} />
                        {errors.username && <ErrorMessage message={errors.username.message!} />}
                    </div>
                    <div>
                        <Input type="email" placeholder="Email" {...register("email")} />
                        {errors.email && <ErrorMessage message={errors.email.message!} />}
                    </div>
                    <div>
                        <Input type="password" placeholder="Password" {...register("password")} />
                        {errors.password && <ErrorMessage message={errors.password.message!} />}
                    </div>
                    {errors.root && <ErrorMessage message={errors.root.message!} />}
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Signing Up..." : "Sign Up"}
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
    );
};

export default SignUp;


"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./../ui/input";
import { Button } from "./../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./../ui/card";
import { useRouter } from "next/navigation";
import useUserStore from "../../Store/userZustand";
import { useEffect, useActionState, startTransition } from "react";
import { signupAction } from "../../actions/auth";
import { signIn } from "next-auth/react";
import { signupSchema } from "../../ZOD/authZod";


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
        <Card className="w-full max-w-sm shadow-lg" >
            <CardHeader>
                <CardTitle className="text-center" > Sign Up </CardTitle>
            </CardHeader>
            < CardContent >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" >
                    <div>
                        <Input type="text" placeholder="Username" {...register("username")} />
                        {errors.username && <p className="text-red-500 text-sm" > {errors.username.message} </p>}
                    </div>
                    < div >
                        <Input type="email" placeholder="Email" {...register("email")} />
                        {errors.email && <p className="text-red-500 text-sm" > {errors.email.message} </p>}
                    </div>
                    < div >
                        <Input type="password" placeholder="Password" {...register("password")} />
                        {errors.password && <p className="text-red-500 text-sm" > {errors.password.message} </p>}
                    </div>
                    {state.error && <p className="text-red-500 text-sm" > {state.error} </p>}
                    <Button type="submit" className="w-full" disabled={state.isLoading} >
                        {state.isLoading ? "Signing Up..." : "Sign Up"}
                    </Button>
                    < p className="text-center mt-4 text-sm" >
                        Already have an account ? {" "}
                        < span onClick={() => router.push("/login")} className="text-blue-500 cursor-pointer" >
                            Login here
                        </span>
                    </p>
                </form>
            </CardContent>
        </Card>
    );
};

export default SignUp;

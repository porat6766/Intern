"use client";

import dynamic from "next/dynamic";
import LoadingSpinner from "../../AppConfig/components/LoadingSpinner";


const SignUp = dynamic(() => import("../../AppConfig/components/Forms/SignupForm"), {
    loading: () => <LoadingSpinner />,
    ssr: false,
});


export default function SignupPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <SignUp />
        </div>
    );
}

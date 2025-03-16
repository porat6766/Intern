"use client";

import dynamic from "next/dynamic";
import LoadingSpinner from '@/AppConfig/components/LoadingSpinner';

const LoginForm = dynamic(() => import("../../AppConfig/components/Forms/LoginForm"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gray-100">
      <LoginForm />
    </div>
  );
};


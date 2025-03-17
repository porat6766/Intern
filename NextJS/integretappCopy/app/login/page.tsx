import LoadingSpinner from '@/AppConfig/components/LoadingSpinner';
import LoginForm from '../../AppConfig/components/Forms/LoginForm';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gray-100">
      <Suspense fallback={<LoadingSpinner />}>
        <LoginForm />
      </Suspense>
    </div>
  );
}

'use client'

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Iuser } from '../Types/User';
import AuthManager from '../Types/User';
import { useUsersStore, useUserStore } from '../store/User';


const schema = z.object({
    email: z.string()
        .email('Enter a valid email address')
        .nonempty('Email is required'),
    password: z.string()
        .min(6, 'Password must be at least 6 characters')
        .nonempty('Password is required'),
});

const authManager = new AuthManager();
const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Iuser>({
        resolver: zodResolver(schema),
    });

    const { addUser } = useUsersStore();
    const { setUser, user } = useUserStore();



    const onSubmit = async (data: Iuser) => {
        try {
            const result = await authManager.signup(data.email, data.password, addUser);
            result && await authManager.login(data.email, data.password, setUser);

            console.log('Signup successful and Login');
        } catch (error: Error | any) {

            console.error('Signup error:', error.message);
        }
    };



    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            {
                user ? <p>{user.email}</p> :
                    <div >
                        <h1 className="text-3xl mb-4">Sign Up</h1>
                        <h1 className="text-3xl mb-4">{user?.email}</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="p-2 border border-gray-300 rounded"
                                {...register('email')}
                            />
                            {errors.email && (
                                <span className="text-red-600">{errors.email.message}</span>
                            )}
                            <input
                                type="password"
                                placeholder="Password"
                                className="p-2 border border-gray-300 rounded"
                                {...register('password')}
                            />
                            {errors.password && (
                                <span className="text-red-600">{errors.password.message}</span>
                            )}
                            <button type="submit" className="p-2 bg-blue-500 text-white rounded">
                                Sign Up
                            </button>
                        </form>
                    </div>
            }
        </div>
    );
};

export default SignUp;

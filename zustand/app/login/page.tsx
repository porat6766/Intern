'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AuthManager, { Iuser } from '../Types/User';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const authManager = new AuthManager();

    // Function to handle form submission
    const onSubmit = async (data: Iuser) => {
        setErrorMessage('');
        setIsLoading(true);

        try {
            const result = await authManager.login(data.email, data.password);
            // Handle success (e.g., redirect, update UI, save token, etc.)
            console.log('Signup successful:', result);
        } catch (error) {
            console.error('Login error:', error);
            setErrorMessage('Login failed, please check your credentials and try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl mb-4">Login</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-4"
            >
                <input
                    type="email"
                    placeholder="Email"
                    className="p-2 border border-gray-300 rounded"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Enter a valid email address',
                        },
                    })}
                />
                {errors.email && (
                    <span className="text-red-600">{errors.email.message}</span>
                )}

                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 border border-gray-300 rounded"
                    {...register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters',
                        },
                    })}
                />
                {errors.password && (
                    <span className="text-red-600">{errors.password.message}</span>
                )}

                <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded"
                    disabled={isLoading}
                >
                    {isLoading ? 'Logging in...' : 'Log In'}
                </button>
                {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default Login;

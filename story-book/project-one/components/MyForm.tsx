import React from 'react';
import { useForm } from 'react-hook-form';
import Button from './Button';

interface FormData {
    username: string;
    email: string;
}

const Form: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg mx-auto mt-8">
            <div>
                <label htmlFor="username" className="block">Username</label>
                <input
                    id="username"
                    type="text"
                    {...register('username', { required: 'Username is required' })}
                    className="px-4 py-2 border rounded-md w-full"
                />
                {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
            </div>

            <div>
                <label htmlFor="email" className="block">Email</label>
                <input
                    id="email"
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    className="px-4 py-2 border rounded-md w-full"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <Button variant="primary">Submit</Button>
        </form>
    );
};

export default Form;

import React from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
    children: React.ReactNode;
    variant?: ButtonVariant;
    className?: string;
    disabled?: boolean;
}

const Button = ({ children, variant = 'primary', className, disabled }: ButtonProps) => {
    const variantStyles: Record<ButtonVariant, string> = {
        primary: 'bg-blue-500 text-white hover:bg-blue-400',
        secondary: 'bg-green-500 text-white hover:bg-green-400',
    };

    const disabledStyles = 'bg-gray-300 text-gray-500 cursor-not-allowed';

    const baseStyles = 'px-4 py-2 rounded-md transition-colors';

    return (
        <button
            className={`${baseStyles} ${disabled ? disabledStyles : variantStyles[variant]} ${className || ''}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;

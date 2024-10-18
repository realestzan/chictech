// components/ErrorMessage.tsx
import React from 'react';

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
    <section className="text-center">
        <span className="text-red-500">{message}</span>
    </section>
);

export default ErrorMessage;

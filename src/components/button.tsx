import React from 'react';

interface ButtonProps {
    content: string;
    className?: string; // Optional prop for className
}

const Button: React.FC<ButtonProps> = (props) => {
    const { content, className } = props;

    return (
        <button className={className}>
            {content}
        </button>
    );
};

export default Button;

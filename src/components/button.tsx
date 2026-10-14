import React from 'react';

interface ButtonProps {
    content: string;
    className?: string;
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

import React from 'react';

const Spinner = () => {
    return (
        <svg
            className="w-[2.5rem] animate-rotate4 transform-origin-center"
            viewBox="25 25 50 50"
        >
            <circle
                className="animate-dash4"
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke="hsl(0, 0%, 100%)"
                strokeWidth="5"
                strokeDasharray="1, 200"
                strokeDashoffset="0"
                strokeLinecap="round"
            ></circle>
        </svg>
    );
};

export default Spinner;
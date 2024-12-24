import React from 'react';

const ProgressBar = () => {
    return (
        <div className="w-full bg-gray-400 rounded-2xl mt-1 h-[3px] absolute bottom-[-2px]">
            <div className="bg-orange-500 h-[3px] rounded-3xl animate-progress"></div>
        </div>
    );
};

export default ProgressBar;
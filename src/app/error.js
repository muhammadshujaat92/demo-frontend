'use client';

import React from 'react';

const GlobalError = ({ error }) => {
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>Oops! Something went wrong.</h2>
            <p>{error.message || 'An unexpected error occurred.'}</p>
        </div>
    );
};

export default GlobalError;
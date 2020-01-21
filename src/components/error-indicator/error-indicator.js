import React from 'react'

import './error-indicator.scss'

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <span className="error-indicator__title">BOOM!</span>
            <span>
                something has gone terribly wrong
            </span>
            <span>
                (but we already sent droids to fix it)
            </span>
        </div>
    );
};
  
export default ErrorIndicator;

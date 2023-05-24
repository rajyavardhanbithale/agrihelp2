import React from 'react';

import './loading.css'

function Loader() {
    return (
        <>
            <div className="loader">
                <div className="loader-content"></div>
                <svg className="loader-animation" viewBox="25 25 50 50">
                    <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke="#222529"></circle>
                </svg>
            </div>
        </>
    );
}


export default Loader;
import React from 'react'

import './spinner.scss'

const Spinner = () => {
    return (
        <div className = 'spinner'>
            <div className = 'spinner__inner'>
                <div className = 'loader-spinner'>
                    <div></div>
                    <div></div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Spinner




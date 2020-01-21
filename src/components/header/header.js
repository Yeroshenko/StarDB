import React from 'react'

import './header.scss'

const Header = ({ onServiceChange }) => {
    return (
        <div className = 'header'>
            <div className = 'logo'>
                <p>
                    SWDB
                </p>
            </div>

            <nav className = 'navigation'>
                <ul className = 'navigation-list'>
                    <li className = 'navigation-item'>
                        <p className = 'navigation-item__link'>
                            People
                        </p>
                    </li>
                    <li className = 'navigation-item'>
                        <p className = 'navigation-item__link'>
                            Planets
                        </p>
                    </li>
                    <li className = 'navigation-item'>
                        <p className = 'navigation-item__link'>
                            Starships
                        </p>
                    </li>
                </ul>
            </nav>
            <button onClick = {onServiceChange} 
                className = 'header__button button' >
                Change Service
            </button>
        </div>
    )
}

export default Header
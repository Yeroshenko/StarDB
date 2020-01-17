import React from 'react'

import './header.css'

const Header = () => {
    return (
        <div className = 'header'>
            <div className = 'logo'>
                <a href = 'javascript:void(0);'>
                    SWDB
                </a>
            </div>

            <nav className = 'navigation'>
                <ul className = 'navigation-list'>
                    <li className = 'navigation-item'>
                        <a href = 'javascript:void(0);' className = 'navigation-item__link'>
                            People
                        </a>
                    </li>
                    <li className = 'navigation-item'>
                        <a href = 'javascript:void(0);' className = 'navigation-item__link'>
                            Planets
                        </a>
                    </li>
                    <li className = 'navigation-item'>
                        <a href = 'javascript:void(0);' className = 'navigation-item__link'>
                            Starships
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
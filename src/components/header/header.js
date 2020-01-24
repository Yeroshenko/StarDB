import React from 'react'
import { Link } from 'react-router-dom'

import './header.scss'

const Header = ({ onServiceChange }) => {
    return (
        <div className = 'header'>
            <h1 className = 'logo'>
                <Link to = '/'>
                    SWDB
                </Link>
            </h1>

            <nav className = 'navigation'>
                <ul className = 'navigation-list'>
                    <li className = 'navigation-item'>
                        <Link to ='/people/' className = 'navigation-item__link'>
                            People
                        </Link>
                    </li>
                    <li className = 'navigation-item'>
                        <Link to ='/planets/' className = 'navigation-item__link'>
                            Planets
                        </Link>
                    </li>
                    <li className = 'navigation-item'>
                        <Link to ='/starships/' className = 'navigation-item__link'>
                            Starships
                        </Link>
                    </li>
                    <li className = 'navigation-item'>
                        <Link to ='/login/' className = 'navigation-item__link'>
                            login
                        </Link>
                    </li>
                    <li className = 'navigation-item'>
                        <Link to ='/secret/' className = 'navigation-item__link'>
                            Secret
                        </Link>
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
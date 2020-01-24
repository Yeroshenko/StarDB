import React from 'react'
import { Redirect } from 'react-router-dom' 

const LoginPage = ({isLoggedIn, onLogin}) => {

    if (isLoggedIn) {
        return(
            <Redirect  to = '/' />
        )
    }

    return(
        <div className = 'login-page card'>
            <p className = 'message'> Login to see secret page! </p>
            <button 
                className = 'button'
                onClick = {onLogin}>
                Login
            </button>
        </div>
    )
}

export default LoginPage
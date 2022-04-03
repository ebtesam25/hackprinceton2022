import React from 'react';
import {useAuth0} from '@auth0/auth0-react'


const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return ( 
        !isAuthenticated && (
            <button onClick = {() => loginWithRedirect()} className="form--submit btn btn-primary btn-block">
                Sign In
            </button>
        )
        
        
    )

}

export default LoginButton


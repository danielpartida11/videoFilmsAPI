import React, {Component} from 'react';

import '../LoginButton/LoginButton.css'

class LoginButton extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className='LoginButton'>
                Login
            </div>
        )
    }
}

export default LoginButton;
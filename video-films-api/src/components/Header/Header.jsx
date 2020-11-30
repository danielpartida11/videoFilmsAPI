import React, {Component} from 'react';

import '../Header/Header.css'
import LoginButton from '../LoginButton/LoginButton';
import RegisterButton from '../RegisterButton/RegisterButton';

class Header extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className='Header'>
                <LoginButton />
                <RegisterButton />
            </div>
        )
        
    }
}

export default Header;
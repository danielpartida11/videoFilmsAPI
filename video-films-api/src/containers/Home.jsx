import React, {Component} from 'react';

import '../containers/Home.css';

import Header from '../components/Header/Header';

class Home extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className='Home'>
                <Header />
            </div>
        )
    }
}

export default Home;
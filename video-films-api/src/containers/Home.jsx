import React, {Component} from 'react';

import '../containers/Home.css';

import Header from '../components/Header/Header';
import Section from '../components/Section/Section';

class Home extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className='Home'>
                <Header />
                <Section />
            </div>
        )
    }
}

export default Home;
import React, {Component} from 'react';
import Films1 from '../Films/Films1';
import Films2 from '../Films/Films2';
import Films3 from '../Films/Films3';
import Films4 from '../Films/Films4';
import Films5 from '../Films/Films5';

import '../Section/Section.css';

class Section extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className='Section'>
                <Films1 />
                <Films2 />
                <Films3 />
                <Films4 />
                <Films5 />
            </div>
        )
    }
}

export default Section;
import React, { Component,useState } from 'react';

import BargraphComponent from './BargraphComponent';
import PiechartComponent from './PiechartComponent';
import { Row,Col} from 'reactstrap';

class GlobalVisualComponent extends Component{
    render(){

        return(
            <div>

                
                <div className = "container">
                <BargraphComponent/>
                </div>
                <div className = "container">
                <PiechartComponent/>
                </div>
         
            </div>
        );

    }
}
export default GlobalVisualComponent;
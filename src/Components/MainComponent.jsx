import React, { Component,useState } from 'react';
import TweetdataComponent from './TweetdataComponent';
import FilterComponent from './FilterComponent';
import LinegraphComponent from './LinegraphComponent';
import { Row,Col} from 'reactstrap';

class MainComponent extends Component{
    render(){

        return(
            <div>
            <Row xs="4">
            <Col className="bg-light border" >
                <FilterComponent/>
            </Col>
            <Col className="bg-light border" >
                <TweetdataComponent/>
            </Col>
            <Col className="bg-light border" >
                <LinegraphComponent/>
            </Col>
          </Row>
          </div>


        );

    }
}
export default MainComponent;
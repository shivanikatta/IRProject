import React, { Component,useState } from 'react';
//import { Accordion,AccordionItem,AccordionHeader,AccordionBody} from 'reactstrap';
//import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card ,FormGroup,Label,Col,Input} from 'reactstrap';


const FilterComponent = (props) => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
  
    const toggle1 = () => setIsOpen1(!isOpen1);
    const toggle2 = () => setIsOpen2(!isOpen2);
  
    return (
      <div>
        <div>
          <Button color="primary" onClick={toggle1} style={{ marginBottom: '1rem' }}>By Country</Button>
        <Collapse isOpen={isOpen1}>
          <Card>
            <CardBody>
            <FormGroup row>
                <Col md={{size: 6, offset: 2}}>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="agree" />
                            <strong>India</strong>
                        </Label>
                    </FormGroup>
                </Col>
                <Col md={{size: 6, offset: 2}}>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="agree" />
                            <strong>United States</strong>
                        </Label>
                    </FormGroup>
                </Col>
                <Col md={{size: 6, offset: 2}}>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="agree" />
                            <strong>Mexico</strong>
                        </Label>
                    </FormGroup>
                </Col>
            </FormGroup>

            </CardBody>
          </Card>
        </Collapse>

        </div>
        
        <div>
        <Button color="primary" onClick={toggle2} style={{ marginBottom: '1rem' }}>By Language</Button>
        <Collapse isOpen={isOpen2}>
          <Card>
            <CardBody>
            <FormGroup row>
                <Col md={{size: 6, offset: 2}}>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="agree" />
                            <strong>English</strong>
                        </Label>
                    </FormGroup>
                </Col>
                <Col md={{size: 6, offset: 2}}>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="agree" />
                            <strong>Hindi</strong>
                        </Label>
                    </FormGroup>
                </Col>
                <Col md={{size: 6, offset: 2}}>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="agree" />
                            <strong>Mexico</strong>
                        </Label>
                    </FormGroup>
                </Col>
            </FormGroup>

            </CardBody>
          </Card>
        </Collapse>
        </div>
      </div>
    );
  }
  
  export default FilterComponent;

//export default FilterComponent;
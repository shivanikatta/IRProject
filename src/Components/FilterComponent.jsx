import React, { Component,useState } from 'react';
//import { Accordion,AccordionItem,AccordionHeader,AccordionBody} from 'reactstrap';
//import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card ,FormGroup,Label,Col,Input} from 'reactstrap';
import TextField from '@mui/material/TextField';
//import TextField from '@mui/styles';
//'@material-ui/core/TextField';
//@material-ui/styles
import Autocomplete from '@mui/material/Autocomplete';
//'@material-ui/lab/Autocomplete';


const FilterComponent = (props) => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
  
    const toggle1 = () => setIsOpen1(!isOpen1);
    const toggle2 = () => setIsOpen2(!isOpen2);

    const [myOptions, setMyOptions] = useState([])
  
  const getDataFromAPI = () => {
    console.log("Options Fetched from API")
  
    fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
      return response.json()
    }).then((res) => {
      console.log(res.data)
      for (var i = 0; i < res.data.length; i++) {
        myOptions.push(res.data[i].employee_name)
      }
      setMyOptions(myOptions)
    })
  }
  
    return (
      <div>
          <div style={{ marginLeft: '2%', marginTop: '60px',marginBottom:'20px' }}>
      <h3>search by topic</h3>
      <Autocomplete
        style={{ width: 200 }}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField {...params}
            onChange={getDataFromAPI}
            variant="standard"
            label="Search Box"
          />
        )}
      />
    </div>
        <div>
          <Button color="primary" onClick={toggle1} style={{ marginBottom: '1rem' }}>By Country</Button>
        <Collapse isOpen={isOpen1}>
          <Card>
            <CardBody>
            <FormGroup row>
                <Col md={{size: 4, offset: 2}}>
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
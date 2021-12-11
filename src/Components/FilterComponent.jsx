import React, { Component } from "react";
//import { Accordion,AccordionItem,AccordionHeader,AccordionBody} from 'reactstrap';
//import React, { useState } from 'react';
import {
  Collapse,
  Button,
  CardBody,
  Card,
  FormGroup,
  Label,
  Col,
  Input,
  Row,
  Badge,
} from "reactstrap";
import TextField from "@mui/material/TextField";
//import TextField from '@mui/styles';
//'@material-ui/core/TextField';
//@material-ui/styles
import Autocomplete from "@mui/material/Autocomplete";
import { FcFilledFilter } from "react-icons/fc";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//'@material-ui/lab/Autocomplete';
class FilterComponent extends Component {
  state = {
    country: null,
    language: null,
    isOpen1: false,
    isOpen2: false,
    myOptions: [],
    startDate: new Date(),
  };

  toggle1 = () => {
    this.setState({ isOpen1: !this.state.isOpen1 });
    console.log("in toggle 1", !this.state.isOpen1);
  };
  toggle2 = () => {
    this.setState({ isOpen2: !this.state.isOpen2 });
    console.log("in toggle 2", !this.state.isOpen2);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log("in Filter handlechange ", this.state.country);
    console.log("in Filter handlechange ", this.state.language);
  };

  getDataFromAPI = () => {
    var myoptions = [];
    console.log("Options Fetched from API");

    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res.data);
        for (var i = 0; i < res.data.length; i++) {
          myoptions.push(res.data[i].employee_name);
        }
        this.setState({ myOptions: myoptions });
        //setMyOptions(myOptions);
      });
  };

  render() {
    console.log("props in the filter component ", this.props);
    return (
      <div>
        <Row>
          <Col xs="auto">
            <h3>Filters </h3>
          </Col>
          <Col xs="auto">
            <FcFilledFilter size={25} />
          </Col>
        </Row>
        <div>
          <Button
            color="primary"
            onClick={() => this.toggle1()}
            style={{ marginBottom: "1rem" }}
          >
            By Country
          </Button>
          <Collapse isOpen={this.state.isOpen1}>
            <Card>
              <CardBody>
                <FormGroup row>
                  <Col md={{ size: 4, offset: 2 }}>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          name="country"
                          value="India"
                          onChange={this.handleChange}
                        />
                        <strong>India</strong>
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={{ size: 6, offset: 2 }}>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          name="country"
                          value="Usa"
                          onChange={this.handleChange}
                        />
                        <strong>United States</strong>
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={{ size: 6, offset: 2 }}>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          name="country"
                          value="Mexico"
                          onChange={this.handleChange}
                        />
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
          <Button
            color="primary"
            onClick={() => this.toggle2()}
            style={{ marginBottom: "1rem" }}
          >
            By Language
          </Button>
          <Collapse isOpen={this.state.isOpen2}>
            <Card>
              <CardBody>
                <FormGroup row>
                  <Col md={{ size: 6, offset: 2 }}>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          name="language"
                          value="en"
                          onChange={this.handleChange}
                        />
                        <strong>English</strong>
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={{ size: 6, offset: 2 }}>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          name="language"
                          value="hi"
                          onChange={this.handleChange}
                        />
                        <strong>Hindi</strong>
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={{ size: 6, offset: 2 }}>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          name="language"
                          value="me"
                          onChange={this.handleChange}
                        />
                        <strong>Mexico</strong>
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
              </CardBody>
            </Card>
          </Collapse>
        </div>

        <div
          style={{ marginLeft: "2%", marginTop: "20px", marginBottom: "20px" }}
        >
          <h5>search by topic</h5>
          <Autocomplete
            style={{ width: 200 }}
            freeSolo
            autoComplete
            autoHighlight
            options={this.state.myOptions}
            renderInput={(params) => (
              <TextField
                {...params}
                onChange={this.getDataFromAPI}
                variant="standard"
                label="Search Box"
              />
            )}
          />
        </div>
        <div>
          <Badge color="primary">Pick Start Date</Badge>
          <DatePicker
            selected={this.state.startDate}
            onChange={(date) => this.setState({ startDate: date })}
          />
        </div>

        <div
          style={{ marginLeft: "2%", marginTop: "20px", marginBottom: "20px" }}
        >
          <Button
            color="primary"
            onClick={() =>
              this.props.onClick(this.state.country, this.state.language)
            }
          >
            {" "}
            Apply{" "}
          </Button>
        </div>
      </div>
    );
  }
}
export default FilterComponent;

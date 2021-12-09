import React, { Component, useState } from "react";
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
} from "reactstrap";
import TextField from "@mui/material/TextField";
//import TextField from '@mui/styles';
//'@material-ui/core/TextField';
//@material-ui/styles
import Autocomplete from "@mui/material/Autocomplete";
//'@material-ui/lab/Autocomplete';
class FilterComponent extends Component {
  state = {
    country: null,
    language: null,
    isOpen1: false,
    isOpen2: false,
    myOptions: [],
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
          style={{ marginLeft: "2%", marginTop: "60px", marginBottom: "20px" }}
        >
          <h3>search by topic</h3>
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
    );
  }
}
export default FilterComponent;

// const FilterComponent = (props) => {
//   const [isOpen1, setIsOpen1] = useState(false);
//   const [isOpen2, setIsOpen2] = useState(false);

//   const toggle1 = () => this.setState({isOpen1: !isOpen1});
//   const toggle2 = () => this.setState({isOpen2: !isOpen2});

//   const [myOptions, setMyOptions] = useState([]);
//   const [country, setMy]

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//     console.log("in handlechange ", this.state);
//   };

//   const getDataFromAPI = () => {
//     console.log("Options Fetched from API");

//     fetch("http://dummy.restapiexample.com/api/v1/employees")
//       .then((response) => {
//         return response.json();
//       })
//       .then((res) => {
//         console.log(res.data);
//         for (var i = 0; i < res.data.length; i++) {
//           myOptions.push(res.data[i].employee_name);
//         }
//         this.setState({myOptions:myOptions});
//         //setMyOptions(myOptions);
//       });
//   };

//   return (
//     <div>
//       <div>
//         <Button
//           color="primary"
//           onClick={toggle1}
//           style={{ marginBottom: "1rem" }}
//         >
//           By Country
//         </Button>
//         <Collapse isOpen={isOpen1}>
//           <Card>
//             <CardBody>
//               <FormGroup row>
//                 <Col md={{ size: 4, offset: 2 }}>
//                   <FormGroup check>
//                     <Label check>
//                       <Input
//                         type="checkbox"
//                         name="India"
//                         onChange={this.handleChange}
//                       />
//                       <strong>India</strong>
//                     </Label>
//                   </FormGroup>
//                 </Col>
//                 <Col md={{ size: 6, offset: 2 }}>
//                   <FormGroup check>
//                     <Label check>
//                       <Input
//                         type="checkbox"
//                         name="USA"
//                         onChange={this.handleChange}
//                       />
//                       <strong>United States</strong>
//                     </Label>
//                   </FormGroup>
//                 </Col>
//                 <Col md={{ size: 6, offset: 2 }}>
//                   <FormGroup check>
//                     <Label check>
//                       <Input
//                         type="checkbox"
//                         name="Mexico"
//                         onChange={this.handleChange}
//                       />
//                       <strong>Mexico</strong>
//                     </Label>
//                   </FormGroup>
//                 </Col>
//               </FormGroup>
//             </CardBody>
//           </Card>
//         </Collapse>
//       </div>

//       <div>
//         <Button
//           color="primary"
//           onClick={toggle2}
//           style={{ marginBottom: "1rem" }}
//         >
//           By Language
//         </Button>
//         <Collapse isOpen={isOpen2}>
//           <Card>
//             <CardBody>
//               <FormGroup row>
//                 <Col md={{ size: 6, offset: 2 }}>
//                   <FormGroup check>
//                     <Label check>
//                       <Input type="checkbox" name="agree" />
//                       <strong>English</strong>
//                     </Label>
//                   </FormGroup>
//                 </Col>
//                 <Col md={{ size: 6, offset: 2 }}>
//                   <FormGroup check>
//                     <Label check>
//                       <Input type="checkbox" name="agree" />
//                       <strong>Hindi</strong>
//                     </Label>
//                   </FormGroup>
//                 </Col>
//                 <Col md={{ size: 6, offset: 2 }}>
//                   <FormGroup check>
//                     <Label check>
//                       <Input type="checkbox" name="agree" />
//                       <strong>Mexico</strong>
//                     </Label>
//                   </FormGroup>
//                 </Col>
//               </FormGroup>
//             </CardBody>
//           </Card>
//         </Collapse>
//       </div>

//       <div
//         style={{ marginLeft: "2%", marginTop: "60px", marginBottom: "20px" }}
//       >
//         <h3>search by topic</h3>
//         <Autocomplete
//           style={{ width: 200 }}
//           freeSolo
//           autoComplete
//           autoHighlight
//           options={myOptions}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               onChange={getDataFromAPI}
//               variant="standard"
//               label="Search Box"
//             />
//           )}
//         />
//       </div>

//       <Button
//         color="primary"
//         onClick={() => this.props.onClick(this.props.country, this.props.date)}
//         style={{ marginBottom: "1rem" }}
//       >
//         {" "}
//         Apply{" "}
//       </Button>
//     </div>
//   );
// };

// export default FilterComponent;

// //export default FilterComponent;

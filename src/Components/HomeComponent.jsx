import React, { Component } from "react";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
} from "reactstrap";
import GlobalVisualComponent from "./GlobalVisualComponent";
import HeaderComponent from "./HeaderComponent";
import SearchComponent from "./SearchComponent";
import FilterComponent from "./FilterComponent";
import { FcSearch } from "react-icons/fc";

import "../App.css";

class HomeComponent extends Component {
  state = {
    query: null,
    searchresult: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log("in handlechange ", this.state);
  };

  handleClick = () => {
    //do something
    console.log("on click button ", this.state);
    var obj = this.getResponse();
  };

  async getResponse() {
    //console.log("id in getresponse for polling",this.state.name.sub_id);
    //console.log("id in getresponse for polling",this.props.subselected.sub_id);
    var url = "http://3.143.229.250:5000/search?query=" + this.state.query;
    const res = await fetch(url);
    console.log(url);
    const ret = await res.json();
    console.log("Inside Get Response :", ret);
    this.setState({ searchresult: ret });
    return ret;
  }

  onFilterSelect(country, language) {
    console.log("filter click", country, language);
    var obj = this.getResponsetweetFilter();
  }

  async getResponsetweetFilter() {
    //console.log("id in getresponse for polling",this.state.name.sub_id);
    //console.log("id in getresponse for polling",this.props.subselected.sub_id);
    var url =
      "http://3.143.229.250:5000/search?query=help&country=india&language=hi";
    const res = await fetch(url);
    console.log(url);
    const ret = await res.json();
    console.log("Inside Get Response :", ret);
    this.setState({ searchresult: ret });
    return ret;
  }

  render() {
    return (
      <div>
        <div>
          <HeaderComponent />
        </div>
        <div className="container">
          <div className="col-12 col-md-9">
            <FormGroup row>
              <Col xs="auto">
                <FcSearch size={30} />
              </Col>
              <Col md={11}>
                <Input
                  type="text"
                  id="search"
                  name="query"
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 10, offset: 2 }}>
                <Button
                  type="submit"
                  color="primary"
                  onClick={() => this.handleClick()}
                >
                  {" "}
                  Search{" "}
                </Button>
              </Col>
            </FormGroup>
          </div>
        </div>
        <div>
          <Row>
            <Col sm="2" className="bg-light border">
              <FilterComponent
                onClick={(country, language) =>
                  this.onFilterSelect(country, language)
                }
              />
            </Col>
            <Col sm="8" className="bg-light border">
              <Routes>
                <Route
                  exact
                  path="/home"
                  element={
                    <SearchComponent searchresult={this.state.searchresult} />
                  }
                />
                <Route
                  exact
                  path="/global"
                  element={<GlobalVisualComponent />}
                />
              </Routes>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default HomeComponent;

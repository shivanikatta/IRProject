import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
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
import QueryVisualComponent from "./QueryVisualComponent";
import moment from "moment";
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
    console.log("the query term ", this.state.query);
    let queryarray = this.state.query.split(" ");
    let multiword = "";

    for (let i = 0; i < queryarray.length - 1; i++) {
      multiword = multiword + queryarray[i] + "%20";
    }
    multiword = multiword + queryarray[queryarray.length - 1];

    console.log("the multi query term ", multiword);
    var url = "http://3.143.229.250:5000/search?query=" + multiword;
    const res = await fetch(url);
    console.log(url);
    const ret = await res.json();
    console.log("Inside Get Response :", ret);
    this.setState({ searchresult: ret });
    return ret;
  }

  onFilterSelect(country, language, startDate, endDate) {
    console.log("filter click", country, language, startDate, endDate);
    console.log(moment(startDate).utc().format("YYYY-MM-DD"));
    console.log(moment(endDate).utc().format("YYYY-MM-DD"));
    let sDate = moment(startDate).utc().format("YYYY-MM-DD");
    let eDate = moment(startDate).utc().format("YYYY-MM-DD");
    let queryarray = this.state.query.split(" ");
    let multiword = "";

    for (let i = 0; i < queryarray.length - 1; i++) {
      multiword = multiword + queryarray[i] + "%20";
    }
    multiword = multiword + queryarray[queryarray.length - 1];

    var obj = this.getResponsetweetFilter(
      multiword,
      country,
      language,
      sDate,
      eDate
    );
  }

  async getResponsetweetFilter(multiword, country, language, sDate, eDate) {
    let curl = "";
    let lurl = "";
    let sdurl = "";
    let edurk = "";
    if (country) {
      curl = "&country=" + country;
    }
    if (language) {
      lurl = "&language=" + language;
    }
    if (sDate && sDate != "Invalid date") {
      sdurl = "&from-date=" + sDate;
    }
    if (eDate && sDate != "Invalid date") {
      edurk = "&to-date=" + eDate;
    }
    var url =
      "http://3.143.229.250:5000/search?query=" +
      multiword +
      curl +
      lurl +
      sdurl +
      edurk;
    //"&country=india&language=hi";
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
                onClick={(country, language, startDate, endDate) =>
                  this.onFilterSelect(country, language, startDate, endDate)
                }
              />
            </Col>
            <Col sm="10" className="bg-light border">
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
                  path="/quevisual"
                  element={<QueryVisualComponent />}
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

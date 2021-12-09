import React, { Component } from "react";
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
import TweetdisplayComponent from "./TweetdisplayComponent";
import FilterComponent from "./FilterComponent";
import LinegraphComponent from "./LinegraphComponent";
import TestTweetComponent from "./TestTweetComponent";

class SearchComponent extends Component {
  state = {
    query: null,
    searchresult: null,
    tweetdata: null,
    data: [
      {
        country: "Usa",
        date: "2021-09-22",
        id: "1440779803590750212",
        sentiment: "positive",
      },
      {
        country: "Usa",
        date: "2021-09-22",
        id: "1440761981984600066",
        sentiment: "positive",
      },
      {
        country: "Usa",
        date: "2021-09-23",
        id: "1440859643824070667",
        sentiment: "positive",
      },
      {
        country: "Usa",
        date: "2021-09-22",
        id: "1440774954165817344",
        sentiment: "positive",
      },
      {
        country: "Usa",
        date: "2021-09-23",
        id: "1440864463825948673",
        sentiment: "positive",
      },
      {
        country: "Usa",
        date: "2021-09-22",
        id: "1440799201202343936",
        sentiment: "positive",
      },
      {
        country: "Usa",
        date: "2021-09-23",
        id: "1440871683867426816",
        sentiment: "positive",
      },
      {
        country: "Usa",
        date: "2021-09-21",
        id: "1440344008379678720",
        sentiment: "positive",
      },
      {
        country: "Usa",
        date: "2021-09-23",
        id: "1440823643852791812",
        sentiment: "positive",
      },
      {
        country: "India",
        date: "2021-09-17",
        id: "1438929030812774403",
        sentiment: "positive",
      },
    ],
  };

  onSubSelect(country, date) {
    console.log("single tweet click", country, date);
    var obj = this.getResponsetweet(country, date);
  }

  async getResponsetweet(country, date) {
    //console.log("id in getresponse for polling",this.state.name.sub_id);
    //console.log("id in getresponse for polling",this.props.subselected.sub_id);
    var url =
      "http://3.143.229.250:5000/vaccine-data?country=" +
      country +
      "&tweet-date=" +
      date;
    const res = await fetch(url);
    console.log(url);
    const ret = await res.json();
    console.log("Inside Get Response :", ret);
    this.setState({ tweetdata: ret });
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

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log("in handlechange ", this.state);
  };

  render() {
    // <input type="text" name="query" onChange={this.handleChange}/>
    // <button type="submit" onClick={this.handleClick}/>
    console.log("In render of search component");
    console.log("searchresult in render", this.state.searchresult);
    let test;

    if (this.state.tweetdata) {
      console.log("inside if loop", this.state.tweetdata.vaccineData);
      test = (
        <Col className="bg-light border">
          <LinegraphComponent tweetdata={this.state.tweetdata} />
        </Col>
      );
    }
    if (this.state.searchresult) {
      return (
        <div>
          <div className="container">
            <div className="col-12 col-md-9">
              <FormGroup row>
                <Col md={10}>
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
            <Row xs="4">
              <Col className="bg-light border">
                <FilterComponent
                  onClick={(country, language) =>
                    this.onFilterSelect(country, language)
                  }
                />
              </Col>
              <Col className="bg-light border">
                {this.state.searchresult.tweets.map((tw) => (
                  <TestTweetComponent
                    key={tw.id}
                    id={tw.id}
                    poiName={tw.poiName}
                    tweet={tw.tweet}
                    verified={tw.verified}
                    sentiment={tw.sentiment}
                    country={tw.country}
                    date={tw.date}
                    onClick={(country, date) => this.onSubSelect(country, date)}
                  />
                ))}
              </Col>
              {test}
            </Row>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="container">
            <div className="col-12 col-md-9">
              <FormGroup row>
                <Col md={10}>
                  <Input
                    type="text"
                    id="search"
                    name="query"
                    placeholder="Search"
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
            <Row xs="4">
              <Col className="bg-light border">
                <FilterComponent />
              </Col>
              {/* <Col className="bg-light border" >
                {this.state.testdata.map(tw => <TweetdisplayComponent key = {tw.id} id={tw.id} sentiment={tw.sentiment} country={tw.country}  date={tw.date} onClick={(country,date) => this.onSubSelect(country,date)}/>)}
                
            </Col> */}
            </Row>
          </div>
        </div>
      );
    }
  }

  //<TweetdataComponent tweetarray ={this.state.searchresult}/>

  //     handleClick(){

  //         console.log('You clicked submit.');
  //         //do something
  //         console.log("on click button ",this.state);
  //         var obj = this.getResponse()
  //       }

  //     async getResponse()
  // {
  //     //console.log("id in getresponse for polling",this.state.name.sub_id);
  //     //console.log("id in getresponse for polling",this.props.subselected.sub_id);
  //     var url = "http://3.143.229.250:5000/search?query=vaccine";
  //     const res = await fetch (url)
  //     console.log(url)
  //     const ret = await res.json()
  //     console.log("Inside Get Response :", ret)
  //     this.setState({ searchresult: ret })
  //     return ret
  // }
}

export default SearchComponent;

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
  };

  onSubSelect(country, date) {
    console.log("single tweet click", country, date);
    var obj = this.getResponsetweet(country, date);
  }

  async getResponsetweet(country, date) {
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

  render() {
    console.log("In render of search component");
    console.log("searchresult in render", this.state.query);
    console.log("searchresult in render", this.state.searchresult);
    let test;

    if (this.state.tweetdata) {
      console.log("inside if loop", this.state.tweetdata.vaccineData);
      test = (
        <Col sm="4">
          <LinegraphComponent tweetdata={this.state.tweetdata} />
        </Col>
      );
    }
    if (this.props.searchresult) {
      return (
        <div>
          <div>
            <Row>
              <Col sm="6">
                {this.props.searchresult.tweets.map((tw) => (
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
      return <div></div>;
    }
  }
}

export default SearchComponent;

import React, { Component } from "react";

import BargraphComponent from "./BargraphComponent";
import PiechartComponent from "./PiechartComponent";
import DonutComponent from "./DonutComponent";
import StackgraphComponent from "./StackgraphComponent";
import HorizontbarComponent from "./HorizontbarComponent";
import WordCloud from "./WordCloud";
import GraphComponent from "./GraphComponent";
import GeoGraphComponent from "./GeoGraphComponent";
import CovidPoiGraphComponent from "./CovidPoiGraphComponent";
import SentimentAnalysis from "./SentimentAnalysis";
import TopicAnalysis from "./TopicAnalysis";
import { Row, Col } from "reactstrap";

class GlobalVisualComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="bg-light border">
          <CovidPoiGraphComponent />
        </div>
        {/* <div className="bg-light border">
          <BargraphComponent />
        </div> */}
        <div className="bg-light border">
          <PiechartComponent />
        </div>
        <div className="bg-light border">
          <DonutComponent />
        </div>
        {/* <div className="bg-light border">
          <StackgraphComponent />
        </div> */}
        {/* <div className="bg-light border">
          <HorizontbarComponent />
        </div> */}
        <div className="bg-light border">
          <WordCloud />
        </div>
        <div className="bg-light border">
          <GraphComponent />
        </div>
        <div className="bg-light border">
          <GeoGraphComponent />
        </div>
        {/* <div className="bg-light border">
          <SentimentAnalysis />
        </div> */}
        <div className="bg-light border">
          <TopicAnalysis />
        </div>
      </div>
    );
  }
}
export default GlobalVisualComponent;

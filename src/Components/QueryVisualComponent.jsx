import React, { Component } from "react";

import BargraphComponent from "./BargraphComponent";
import PiechartComponent from "./PiechartComponent";
import DonutComponent from "./DonutComponent";
import StackgraphComponent from "./StackgraphComponent";
import HorizontbarComponent from "./HorizontbarComponent";
import WordCloud from "./WordCloud";
import { Row, Col } from "reactstrap";

class QueryVisualComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="bg-light border">
          <BargraphComponent />
        </div>
        <div className="bg-light border">
          <PiechartComponent />
        </div>
        <div className="bg-light border">
          <DonutComponent />
        </div>
        <div className="bg-light border">
          <StackgraphComponent />
        </div>
        <div className="bg-light border">
          <HorizontbarComponent />
        </div>
        <div className="bg-light border">
          <WordCloud />
        </div>
      </div>
    );
  }
}
export default QueryVisualComponent;

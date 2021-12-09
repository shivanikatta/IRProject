import React, { Component, useState } from "react";

import BargraphComponent from "./BargraphComponent";
import PiechartComponent from "./PiechartComponent";
import DonutComponent from "./DonutComponent";
import StackgraphComponent from "./StackgraphComponent";
import HorizontbarComponent from "./HorizontbarComponent";
import { Row, Col } from "reactstrap";

class GlobalVisualComponent extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <BargraphComponent />
        </div>
        <div className="container">
          <PiechartComponent />
        </div>
        <div className="container">
          <DonutComponent />
        </div>
        <div className="container">
          <StackgraphComponent />
        </div>
        <div className="container">
          <HorizontbarComponent />
        </div>
      </div>
    );
  }
}
export default GlobalVisualComponent;

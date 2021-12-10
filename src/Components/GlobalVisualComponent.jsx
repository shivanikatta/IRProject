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
      </div>
    );
  }
}
export default GlobalVisualComponent;

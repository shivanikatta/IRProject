import React, { Component } from "react";

import VaccineHesitency from "./VaccineHesitency";
import VaccinePersuasion from "./VaccinePersuasion";
import DonutComponent from "./DonutComponent";
import StackgraphComponent from "./StackgraphComponent";
import HorizontbarComponent from "./HorizontbarComponent";
import WordCloud from "./WordCloud";
import { Row, Col } from "reactstrap";

class Vaccine extends Component {
  render() {
    return (
      <div className="container">
        <div className="bg-light border">
          <VaccineHesitency />
        </div>
        <div className="bg-light border">
          <VaccinePersuasion />
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
export default Vaccine;

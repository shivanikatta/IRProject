import React, { Component } from "react";

import VaccineHesitency from "./VaccineHesitency";
import VaccinePersuasion from "./VaccinePersuasion";
import VHesitancyWord from "./VHesitancyWord";

import { Row, Col } from "reactstrap";

class Vaccine extends Component {
  render() {
    return (
      <div className="container">
        <div className="bg-light border">
          <VaccineHesitency />
        </div>
        <div className="bg-light border">
          <VHesitancyWord />
        </div>
        <div className="bg-light border">
          <VaccinePersuasion />
        </div>
        {/* <div className="bg-light border">
          <VaccineHesitency />
        </div> */}
      </div>
    );
  }
}
export default Vaccine;

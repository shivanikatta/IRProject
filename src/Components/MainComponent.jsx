import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomeComponent from "./HomeComponent";

class MainComponent extends Component {
  render() {
    return (
      <Router>
        <div>
          <HomeComponent />
        </div>
      </Router>
    );
  }
}

export default MainComponent;

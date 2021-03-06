import React, { Component } from "react";
import { Chart } from "react-google-charts";

class GeoGraphComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>No of Tweets per country (INDIA,USA,MEXICO) </h3>
        </div>
        <Chart
          width={"1000px"}
          height={"600px"}
          chartType="GeoChart"
          data={[
            ["Country", "No_of_Tweets"],
            ["India", 57612],
            ["Mexico", 9174],
            ["United States", 54441],
          ]}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey="YOUR_KEY_HERE"
          rootProps={{ "data-testid": "1" }}
          options={{
            title: "No of Tweets per country (INDIA,USA,MEXICO)",
            colors: ["#8FBC8F", "green"],
          }}
        />
      </div>
    );
  }
}

export default GeoGraphComponent;

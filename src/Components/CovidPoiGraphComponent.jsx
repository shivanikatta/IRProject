import React, { Component } from "react";
import { Chart } from "react-google-charts";

class CovidPoiGraphComponent extends Component {
  render() {
    return (
      <div>
        <Chart
          width={"1000px"}
          height={"600px"}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["POI Names", " No of Covid related tweets"],
            ["POTUS", 146],
            ["narendramodi", 142],
            ["lopezobrador_", 109],
            ["MoHFW_INDIA", 261],
            ["mansukhmandviya", 278],
            ["PMOIndia", 182],
            ["KamalaHarris", 216],
            ["FelipeCalderon", 63],
            ["ArvindKejriwal", 170],
            ["NHPINDIA", 208],
            ["JoeBiden", 29],
            ["BarackObama", 27],
            ["Mzavalagc", 12],
            ["lorenzocordovav", 27],
            ["CDCgov", 796],
            ["SSalud_mx", 293],
            ["HHSGov", 369],
            ["SecretaryLevine", 91],
          ]}
          options={{
            title: "Covid related POI Tweets",
            chartArea: { width: "70%" },
            colors: ["#006400"],
            isStacked: true,
            hAxis: {
              title: " ",
              minValue: 0,
            },
            vAxis: {
              title: " POI Names",
            },
          }}
          // For tests
          rootProps={{ "data-testid": "3" }}
        />
      </div>
    );
  }
}

export default CovidPoiGraphComponent;

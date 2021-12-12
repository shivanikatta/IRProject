import React, { Component } from "react";
import { Chart } from "react-google-charts";

class CovidPoiGraphComponent extends Component {
  render() {
    return (
      <div>
        <Chart
          width={"800px"}
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

// ["Element", "Density", { role: "style" }],

//             ["POTUS", 473, "#b87333"],
//             ["narendramodi", 934, "silver", null],
//             ["lopezobrador_", 414, "silver", null],
//             ["MoHFW_INDIA", 173, "color: #e5e4e2", null],
//             ["mansukhmandviya", 1159, "color: #e5e4e2", null],
//             ["PMOIndia", 515, "color: #e5e4e2", null],
//             ["KamalaHarris", 449, "color: #e5e4e2", null],
//             ["FelipeCalderon", 151, "silver", null],
//             ["ArvindKejriwal", 364, "silver", null],
//             ["NHPINDIA", 1159, "silver", null],
//             ["JoeBiden", 75, "#b87333", null],
//             ["BarackObama", 588, "#b87333", null],
//             ["Mzavalagc", 597, "color: #e5e4e2", null],
//             ["lorenzocordovav", , 862, "color: #e5e4e2", null],
//             ["CDCgov", 175, "color: #e5e4e2", null],
//             ["SSalud_mx", 164, "silver", null],
//             ["HHSGov", 330, "silver", null],
//             ["SecretaryLevine", 749, "silver", null],

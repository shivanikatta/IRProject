import React, { Component } from "react";
import { Chart } from "react-google-charts";

class GraphComponent extends Component {
  render() {
    return (
      <div>
        <Chart
          width={"1000px"}
          height={"800px"}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["POI Names", "positive", "neutral", "negative"],
            ["POTUS", 473, 682, 196],
            ["narendramodi", 934, 495, 70],
            ["lopezobrador_", 414, 886, 196],
            ["MoHFW_INDIA", 173, 1124, 54],
            ["mansukhmandviya", 1159, 298, 42],
            ["PMOIndia", 515, 776, 209],
            ["KamalaHarris", 449, 714, 337],
            ["FelipeCalderon", 151, 289, 371],
            ["ArvindKejriwal", 364, 878, 224],
            ["NHPINDIA", 1159, 298, 256],
            ["JoeBiden", 75, 143, 56],
            ["BarackObama", 588, 655, 255],
            ["Mzavalagc", 597, 272, 254],
            ["lorenzocordovav", 353, 862, 267],
            ["CDCgov", 175, 1180, 145],
            ["SSalud_mx", 164, 931, 404],
            ["HHSGov", 330, 866, 93],
            ["SecretaryLevine", 749, 606, 145],
          ]}
          options={{
            title: "Sentiment Analysis of POI Tweets",
            chartArea: { width: "70%" },
            colors: ["green", "#A9A9A9", "#8B0000"],
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

export default GraphComponent;

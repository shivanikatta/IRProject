import React, { Component } from "react";
import { Chart } from "react-google-charts";

class TopicAnalysis extends Component {
  render() {
    return (
      <div>
        <Chart
          width={"1000px"}
          height={"600px"}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Topics", " No of related tweets"],
            ["spread", 6989],
            ["vaccine", 6663],
            ["report", 3059],
            ["antibody", 4506],
            ["help", 3291],
            ["people", 2495],
            ["covid", 3552],
            ["stop", 2462],
            ["transmission", 2517],
            ["harm", 2718],
            ["child", 2217],
            ["pregnant", 2324],
            ["new", 2793],
            ["job", 2266],
            ["treatment", 2713],
            ["death", 3137],
            ["safety", 2507],
            ["booster", 2209],
            ["infection", 2106],
            ["virus", 4010],
          ]}
          options={{
            title: "Topic related  Tweets",
            chartArea: { width: "70%" },
            colors: ["#708090"],
            isStacked: true,
            hAxis: {
              title: " ",
              minValue: 0,
            },
            vAxis: {
              title: " Topic Names",
            },
          }}
          // For tests
          rootProps={{ "data-testid": "3" }}
        />
      </div>
    );
  }
}

export default TopicAnalysis;

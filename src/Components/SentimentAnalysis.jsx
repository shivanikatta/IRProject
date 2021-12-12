import React, { Component } from "react";
import { Chart } from "react-google-charts";

class SentimentAnalysis extends Component {
  render() {
    return (
      <div>
        <Chart
          width={"1000px"}
          height={"600px"}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ["Sentiment", "POI Tweets", "General Population Tweets"],
            ["Positive", 1000, 400],
            ["Neutral", 1170, 460],
            ["Negative", 660, 1120],
          ]}
          options={{
            // Material design options
            chart: {
              title:
                "Comparision of Sentiment Analysis between POI tweets and Non-POI tweets",
              //subtitle: "Sales, Expenses, and Profit: 2014-2017",
            },
            colors: ["#DB7093", "#87CEFA"],
          }}
          // For tests
          rootProps={{ "data-testid": "2" }}
        />
      </div>
    );
  }
}

export default SentimentAnalysis;

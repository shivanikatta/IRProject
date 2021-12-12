import React, { Component } from "react";
//import logo from './logo.svg';
//import '../App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import DonutData from "./donut.json";

am4core.useTheme(am4themes_animated);

class PiechartComponent extends Component {
  componentDidMount() {
    let chart3 = am4core.create("chartdiv3", am4charts.PieChart);

    let title = chart3.titles.create();
    title.text =
      "Percentage of Sentiment on General population Tweets (Non-POI)";
    title.fontSize = 25;
    title.marginBottom = 30;

    chart3.data = DonutData;

    console.log("data", chart3.data);

    let pieSeries = chart3.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "count";
    pieSeries.dataFields.category = "sentiment";

    chart3.innerRadius = am4core.percent(40);
    pieSeries.slices.template.stroke = am4core.color("#4a2abb");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    //chart.paddingRight = 20;
  }

  componentWillUnmount() {
    if (this.chart3) {
      this.chart2.dispose();
    }
  }

  render() {
    return (
      <div
        className="container"
        id="chartdiv3"
        style={{ width: "100%", height: "400px" }}
      ></div>
    );
  }
}

export default PiechartComponent;

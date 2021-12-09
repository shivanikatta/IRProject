import React, { Component } from "react";
//import logo from './logo.svg';
//import '../App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import ChartData from "./chartdata.json";

am4core.useTheme(am4themes_animated);

class HorizontbarComponent extends Component {
  componentDidMount() {
    let chart4 = am4core.create("chartdiv4", am4charts.XYChart);

    let title = chart4.titles.create();
    title.text = " Horizontal bar graph";
    title.fontSize = 25;
    title.marginBottom = 30;

    chart4.data = ChartData;

    console.log("data", chart4.data);

    let categoryAxis = chart4.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "POI";
    categoryAxis.title.text = "POI";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.labels.template.disabled = true;
    //categoryAxis.autoRotateAngle = "45";

    // let xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    // xAxis.title.text = "Clients";

    let valueAxis = chart4.xAxes.push(new am4charts.ValueAxis());
    //valueAxis.min = 0;
    //valueAxis.title.text = "TweetCount";

    // var series = chart4.series.push(new am4charts.ColumnSeries());
    // series.dataFields.valueX = "TweetCount";
    // series.dataFields.categoryY = "POI";

    let series = chart4.series.push(new am4charts.ColumnSeries());
    //series.name = "POI";
    series.columns.template.tooltipText =
      "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
    series.columns.template.fill = am4core.color("#104547"); // fill
    series.dataFields.valueX = "TweetCount";
    series.dataFields.categoryY = "POI";

    // var valueLabel = series.bullets.push(new am4charts.LabelBullet());
    // valueLabel.label.text = "{TweetCount}";
    // valueLabel.label.fontSize = 25;
    // valueLabel.label.horizontalCenter = "left";
    // valueLabel.label.dx = 10;

    var categoryLabel = series.bullets.push(new am4charts.LabelBullet());
    categoryLabel.label.text = "{POI}";
    categoryLabel.label.fontSize = 20;
    categoryLabel.label.horizontalCenter = "right";
    categoryLabel.label.dx = -10;
    categoryLabel.label.fill = am4core.color("#fff");

    chart4.maskBullets = false;
    chart4.paddingRight = 30;

    //chart.paddingRight = 20;
  }

  componentWillUnmount() {
    if (this.chart4) {
      this.chart4.dispose();
    }
  }

  render() {
    return (
      <div
        className="container"
        id="chartdiv4"
        style={{ width: "100%", height: "400px" }}
      ></div>
    );
  }
}

export default HorizontbarComponent;

import React, { Component } from "react";
//import logo from './logo.svg';
//import '../App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class LinegraphComponent extends Component {
  // componentDidMount() {
  //   let chart = am4core.create("chartdiv", am4charts.XYChart);

  //   let title = chart.titles.create();
  //   title.text = " Daily Covid Vaccination per million curve for the tweet";
  //   title.fontSize = 15;
  //   title.marginBottom = 30;

  //   chart.paddingRight = 20;

  //   let data = []; //this.props.tweetdata.vaccineData;
  //   var testdata = this.props.tweetdata.vaccineData;
  //   //let visits = 10;
  //   for (let i = 1; i < 22; i++) {
  //     //visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
  //     data.push({
  //       date: new Date(testdata[i].date),
  //       name: "name" + i,
  //       value: testdata[i].vaccinationCount,
  //     });
  //   }

  //   console.log(
  //     "data in a linegraph",
  //     this.props.tweetdata.vaccineData[0].date
  //   );
  //   console.log("data in a linegraph", data);

  //   chart.data = data;

  //   let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  //   dateAxis.renderer.grid.template.location = 0;

  //   let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  //   valueAxis.tooltip.disabled = true;
  //   valueAxis.renderer.minWidth = 35;

  //   let series = chart.series.push(new am4charts.LineSeries());
  //   series.dataFields.dateX = "date";
  //   series.dataFields.valueY = "value";

  //   series.tooltipText = "{valueY.value}";
  //   chart.cursor = new am4charts.XYCursor();

  //   let scrollbarX = new am4charts.XYChartScrollbar();
  //   scrollbarX.series.push(series);
  //   chart.scrollbarX = scrollbarX;

  //   this.chart = chart;
  // }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    let title = chart.titles.create();
    title.text = " Daily Covid Vaccination per million curve for the tweet";
    title.fontSize = 15;
    title.marginBottom = 30;

    chart.paddingRight = 20;

    let data = []; //this.props.tweetdata.vaccineData;
    var testdata = this.props.tweetdata.vaccineData;
    //let visits = 10;
    for (let i = 1; i < 22; i++) {
      //visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({
        date: new Date(testdata[i].date),
        name: "name" + i,
        value: testdata[i].vaccinationCount,
      });
    }

    console.log(
      "data in a linegraph",
      this.props.tweetdata.vaccineData[0].date
    );
    console.log("data in a linegraph", data);

    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";

    series.tooltipText = "{valueY.value}";
    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    this.chart = chart;

    return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
  }
}

export default LinegraphComponent;

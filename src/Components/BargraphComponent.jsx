import React, { Component } from 'react';
//import logo from './logo.svg';
//import '../App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import ChartData from './chartdata.json';

am4core.useTheme(am4themes_animated);

class BargraphComponent extends Component {


  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    
    chart.data = ChartData;

    console.log("data",chart.data);


    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.title.text = "Countries";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Litres sold (M)";


    let series = chart.series.push(new am4charts.ColumnSeries());
    series.name = "Sales";
    series.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
    series.columns.template.fill = am4core.color("#104547"); // fill
    series.dataFields.valueY = "litres";
    series.dataFields.categoryX = "country";    



    //chart.paddingRight = 20;

    
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div className = "container" id="chartdiv" style={{ width: "100%", height: "400px" }}></div>
    );
  }
}

export default BargraphComponent;
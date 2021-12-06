import React, { Component } from 'react';
//import logo from './logo.svg';
//import '../App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import ChartData from './chartdata.json';

am4core.useTheme(am4themes_animated);

class PiechartComponent extends Component {


  componentDidMount() {

    let chart2 = am4core.create("chartdiv2", am4charts.PieChart);
    
    chart2.data = ChartData;

    console.log("data",chart2.data);

    let pieSeries = chart2.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    chart2.innerRadius = am4core.percent(40);
    pieSeries.slices.template.stroke = am4core.color("#4a2abb");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

       
    //chart.paddingRight = 20;

    
  }

  componentWillUnmount() {
    if (this.chart2) {
      this.chart2.dispose();
    }
  }

  render() {
    return (
      <div className = "container" id="chartdiv2" style={{ width: "100%", height: "400px" }}></div>
    );
  }
}

export default PiechartComponent;
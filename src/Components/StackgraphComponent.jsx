import React, { Component } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import StackData from "./stack.json";

class StackgraphComponent extends Component {
  state = {
    data: StackData,
  };

  render() {
    return (
      <div>
        <BarChart width={900} height={600} data={this.state.data}>
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="pos" stackId="a" fill="green" />
          <Bar dataKey="neu" stackId="a" fill="#A9A9A9" />
          <Bar dataKey="neg" stackId="a" fill="#8B0000" />
        </BarChart>
      </div>
    );
  }
}

export default StackgraphComponent;

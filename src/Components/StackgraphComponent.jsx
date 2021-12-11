import React, { Component } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

class StackgraphComponent extends Component {
  state = {
    data: [
      { name: "A", x: 12, y: 23, z: 122 },
      { name: "B", x: 22, y: 3, z: 73 },
      { name: "C", x: 13, y: 15, z: 32 },
      { name: "D", x: 44, y: 35, z: 23 },
      { name: "E", x: 35, y: 45, z: 20 },
      { name: "F", x: 62, y: 25, z: 29 },
      { name: "G", x: 37, y: 17, z: 61 },
      { name: "H", x: 28, y: 32, z: 45 },
      { name: "I", x: 19, y: 43, z: 93 },
    ],
  };

  render() {
    return (
      <div>
        <BarChart width={900} height={600} data={this.state.data}>
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="x" stackId="a" fill="#8B0000" />
          <Bar dataKey="y" stackId="a" fill="#A9A9A9" />
          <Bar dataKey="z" stackId="a" fill="green" />
        </BarChart>
      </div>
    );
  }
}

export default StackgraphComponent;

import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Chart({ data, title, grid, showActiveUser, dataKey }) {
  return (
    <div className="chart__container">
      <div className="chartTitle">{title}</div>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <YAxis />
          {/* <YAxis dataKey="status" stroke="#5550bd" /> */}
          <Line type="monotone" dataKey={dataKey} />
          <Tooltip />
          {grid && <CartesianGrid stroke="#eee" strokeDasharray="5 5" />}
          {showActiveUser && <Legend />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;

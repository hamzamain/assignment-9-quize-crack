import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData().data;
  // const { id, name, logo, total } = data[0];
  console.log(data);
  return (
    <div>
      <h1>statistics components</h1>
      <LineChart
        className="container my-5"
        width={1000}
        height={400}
        data={data}
      >
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis dataKey="total" />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
      </LineChart>
    </div>
  );
};

export default Statistics;

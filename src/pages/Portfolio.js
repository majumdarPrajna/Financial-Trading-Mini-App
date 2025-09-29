import React, { useEffect, useState } from "react";
import API from "../services/api";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function Portfolio() {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/portfolio").then((res) => setData(res.data));
  }, []);

  if (!data) return <p>Loading...</p>;

  const chartData = data.holdings.map((h) => ({
    name: h.productName,
    value: h.currentValue
  }));

  return (
    <div className="page">
      <h2>Portfolio</h2>
      <p>Wallet Balance: ₹{data.walletBalance}</p>
      <p>Total Invested: ₹{data.totalInvested}</p>
      <p>Returns: ₹{data.returns}</p>

      <PieChart width={400} height={300}>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {chartData.map((_, i) => (
            <Cell key={i} fill={["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][i % 4]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

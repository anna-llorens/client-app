import { FC } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const data = [
  { name: "New", value: 100 },
  { name: "Active", value: 300 },
  { name: "Completed", value: 700 },
];
const COLORS = ["#F7685B", "#FFB946", "#2ED47A", "#FF8042"];

export const StatusPieChart: FC = () => {
  return (
    <PieChart width={350} height={350}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={90}
        outerRadius={110}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend verticalAlign="bottom" height={36} />
    </PieChart>
  );
};

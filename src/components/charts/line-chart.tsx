const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];

import { LineChart } from "@mui/x-charts/LineChart";
import { FC } from "react";
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export const LineChartStatus: FC = () => {
  return (
  
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />
  );
};

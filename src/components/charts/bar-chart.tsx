import { FC } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export const BaBarChartStatus: FC = () => {
  return (
    <BarChart
      xAxis={[
        {
          id: "barCategories",
          data: ["New", "Active", "Completed"],
          scaleType: "band",
        },
      ]}
      series={[
        {
          data: [100, 300, 700],
        },
      ]}
      width={500}
      height={300}
    />
  );
};

import { AppSection } from "@/components/app-section";

import { BarChart } from "@mui/x-charts/BarChart";

export default function Home() {
  return (
    <AppSection>
      <h1>Home</h1>
      <BarChart
        xAxis={[
          {
            id: "barCategories",
            data: ["bar A", "bar B", "bar C"],
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: [2, 5, 3],
          },
        ]}
        width={500}
        height={300}
      />
    </AppSection>
  );
}

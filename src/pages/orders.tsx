import {
  AppSection,
  BaBarChartStatus,
  LineChartStatus,
  StatusPieChart,
  Widget,
} from "@/components";
import { Kanban } from "@/components/kanban";
import { useTheme } from "@mui/material/styles";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

export default function Orders() {
  const theme = useTheme();
  return (
    <AppSection
      style={{ justifyContent: "space-between", marginInline: "24px" }}
    >
      <h1>Orders kanban</h1>
      <Container>
        <Kanban />
        <Widget title="Orders status">
          <StatusPieChart />
        </Widget>
        <Widget title="Incoming request">
          <BaBarChartStatus />
        </Widget>
        <Widget title="Resolved querys">
          <LineChartStatus />
        </Widget>
      </Container>
    </AppSection>
  );
}

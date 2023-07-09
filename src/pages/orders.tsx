import { AppSection, BaBarChartStatus, Widget } from "@/components";
import BasicPie from "@/components/charts/pie-chart";
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
          <BasicPie />
        </Widget>
        <Widget title="Incoming request">
          <BaBarChartStatus />
        </Widget>
      </Container>
    </AppSection>
  );
}

import { AppSection, Widget } from "@/components";
import { Kanban } from "@/components/kanban";
import { useTheme } from "@mui/material/styles";
import styled from "styled-components";

const WidgetContainer = styled.div``;
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
        <WidgetContainer>
          <Widget title="Orders status" />
        </WidgetContainer>
      </Container>
    </AppSection>
  );
}

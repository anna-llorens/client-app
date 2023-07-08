import { AppSection } from "@/components";
import { Kanban } from "@/components/kanban";
import { useTheme } from "@mui/material/styles";
import styled from "styled-components";

const Widget = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #cfd0d2;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  text-align: center;
  cursor: pointer;
`;

const WidgetContainer = styled.div``;

export default function Orders() {
  const theme = useTheme();
  return (
    <AppSection $grid="row" style={{ justifyContent: "space-between" }}>
      <Kanban />
      <WidgetContainer>
        <Widget>Board</Widget>
      </WidgetContainer>
    </AppSection>
  );
}

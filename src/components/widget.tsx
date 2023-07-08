import { FC } from "react";

import styled from "styled-components";
import { StatusPieChart } from "./charts";

const WidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #cfd0d2;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-inline: 16px;
`;

export const Widget: FC<{ title: string }> = ({ title }) => (
  <WidgetContainer>
    <h4>{title}</h4>
    <StatusPieChart />
  </WidgetContainer>
);

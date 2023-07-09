import { FC } from "react";

import styled from "styled-components";

const WidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #cfd0d2;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const Widget: FC<{ title: string; children: any }> = ({
  title,
  children,
}) => (
  <div>
    <WidgetContainer>
      <h4>{title}</h4>
      {children}
    </WidgetContainer>
  </div>
);

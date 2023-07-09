import { Footer, Header } from "@/components";
import { FC } from "react";
import styled from "styled-components";

// Root page layout margins
const AppSectionWrapper = styled.div<{ $grid: "row" | "column" }>`
  margin-top: 80px !important;
  margin: 80px 10% 24px 10%;
  min-height: 81vh;
  display: flex;
  flex-direction: ${(props) => props.$grid};
`;

export const AppSection: FC<{
  appTitle?: string;
  $grid?: "row" | "column";
  children: any;
  style?: any;
}> = ({ appTitle, $grid = "column", style, children }) => (
  <>
    <Header appTitle={appTitle} />
    <AppSectionWrapper $grid={$grid} style={style}>
      {children}
    </AppSectionWrapper>
    <Footer />
  </>
);

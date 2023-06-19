import { Header } from "@/components";
import { FC } from "react";
import { styled } from "styled-components";

// Root page layout margins
const AppSectionWrapper = styled.div`
  margin: 80px 10% 10% 10%;
`;

export const AppSection: FC<{ appTitle?: string; children: any }> = ({
  appTitle,
  children,
}) => (
  <>
    <Header appTitle={appTitle} />
    <AppSectionWrapper>{children}</AppSectionWrapper>
  </>
);

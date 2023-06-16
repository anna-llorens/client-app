import { Routes } from "@/types";
import { HeaderTitle } from "./header-title";
import { styled } from "styled-components";
import { HeaderLink } from "./header-link";

const HeaderItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 24px;
  gap: 24px;
`;

const HeaderLinks = styled.div`
  display: flex;
  gap: 24px;
  justify-content: flex-end;
`;

export const HeaderItems = () => (
  <HeaderItemsWrapper>
    <HeaderTitle />
    <HeaderLinks>
      <HeaderLink route={Routes.ClientSide} label="Client side" />
      <HeaderLink route={Routes.ServerSide} label="Server side" />
      <HeaderLink route={Routes.StaticRendering} label="Static rendering" />
      <HeaderLink route={Routes.Logout} label="Logout" />
    </HeaderLinks>
  </HeaderItemsWrapper>
);

import { HeaderTitle } from "./header-title";
import styled from "styled-components";
import { HeaderLink } from "./header-link";
import { useCurrentUser, useLogout } from "@/hooks";
import { useRouter } from "next/router";
import { Routes } from "@/router";

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
  color: #52575c;
`;

export const HeaderItems = () => {
  const { user } = useCurrentUser();
  const { logout } = useLogout();
  const router = useRouter();
  return (
    <HeaderItemsWrapper>
      <HeaderTitle />
      <HeaderLinks>
        <HeaderLink route={Routes.ClientSide} label="Client side" />
        <HeaderLink route={Routes.ServerSide} label="Server side" />
        <HeaderLink route={Routes.StaticRendering} label="Static rendering" />
        <HeaderLink route={Routes.Orders} label="Orders" />
        {user ? (
          <>
            <HeaderLink route={Routes.Profile} label={"My profile"} />
            <HeaderLink
              onClick={() => logout()}
              route={Routes.Logout}
              label={"Logout"}
            />
          </>
        ) : null}
      </HeaderLinks>
    </HeaderItemsWrapper>
  );
};

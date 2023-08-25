import { useCurrentUser, useLogout } from "@/hooks";
import { Routes } from "@/router";
import Link from "next/link";
import styled from "styled-components";
import { HeaderDropdownItem } from "./header-dropdown-item";

const HeaderLinksContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: flex-end;
  color: #52575c;
`;

export const HeaderLink = (props: any) => (
  <Link href={props?.route}>
    <div {...props}>{props.label}</div>
  </Link>
);

export const HeaderLinks = () => {
  const { user } = useCurrentUser();
  const { logout } = useLogout();
  return (
    <HeaderLinksContainer>
      <HeaderDropdownItem title="Dev tools" />
      {user ? (
        <>
          <HeaderLink route={Routes.Orders} label="Orders" />
          <HeaderLink route={Routes.Profile} label={"My profile"} />
          <HeaderLink
            onClick={() => logout()}
            route={Routes.Logout}
            label={"Logout"}
          />
        </>
      ) : (
        <HeaderLink route={Routes.Logout} label="Login" />
      )}
    </HeaderLinksContainer>
  );
};

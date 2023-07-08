import { HeaderTitle } from "./header-title";
import styled from "styled-components";
import { useCurrentUser, useLogout } from "@/hooks";
import { useRouter } from "next/router";
import { Routes } from "@/router";
import Link from "next/link";

const HeaderLinksContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: flex-end;
  color: #52575c;
`;

const HeaderLink = (props: any) => (
  <Link href={props?.route}>
    <div {...props}>{props.label}</div>
  </Link>
);

export const HeaderLinks = () => {
  const { user } = useCurrentUser();
  const { logout } = useLogout();
  const router = useRouter();
  return (
    <HeaderLinksContainer>
      <HeaderLink route={Routes.ClientSide} label="Client side" />
      <HeaderLink route={Routes.ServerSide} label="Server side" />
      <HeaderLink route={Routes.StaticRendering} label="Static rendering" />

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

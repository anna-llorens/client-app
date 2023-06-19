import { Routes } from "@/types";
import { HeaderTitle } from "./header-title";
import { styled } from "styled-components";
import { HeaderLink } from "./header-link";
import { useLogout } from "@/hooks";
import { useRouter } from "next/router";

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
  color: white;
`;

export const HeaderItems = () => {
  const { logout } = useLogout();
  const router = useRouter();
  return (
    <HeaderItemsWrapper>
      <HeaderTitle />
      <HeaderLinks>
        <HeaderLink route={Routes.ClientSide} label="Client side" />
        <HeaderLink route={Routes.ServerSide} label="Server side" />
        <HeaderLink route={Routes.StaticRendering} label="Static rendering" />

        <button
          onClick={() => {
            logout();
            router.push(Routes.Logout);
          }}
          className="mt-2 border border-solid border-black py-2 px-4 rounded cursor-pointer"
        >
          LOGOUT
        </button>
      </HeaderLinks>
    </HeaderItemsWrapper>
  );
};

import { Routes } from "@/types";
import Link from "next/link";
import styled from "styled-components";

const LoginWrapper = styled.div`
  text-align: center;
  margin-top: 24px;
`;

export default function MainApp() {
  return (
    <LoginWrapper>
      <h1>Login page</h1>
      <Link href={Routes.Home}>
        <button>Login</button>
      </Link>
      <p>TODO: redirect user to login/logout page depending on login status</p>
    </LoginWrapper>
  );
}

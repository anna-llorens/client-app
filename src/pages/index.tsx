import { Header } from "@/components";
import { Routes } from "@/types";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px 10% 10% 10%;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 350px;
  text-align: center;
`;

export default function MainApp() {
  return (
    <>
      <Header />
      <LoginWrapper>
        <h1>Login page</h1>
        <LoginForm>
          <TextField size="small" label="Username or email" />
          <TextField size="small" label="Password" />
          <Link href={Routes.Home}>
            <Button variant="contained">Login</Button>
          </Link>
        </LoginForm>
      </LoginWrapper>
    </>
  );
}

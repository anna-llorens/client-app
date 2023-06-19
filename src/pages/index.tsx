import { Header, LoginForm } from "@/components";
import { Routes } from "@/types";
import { Button, TextField } from "@mui/material";
import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px 10% 10% 10%;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export default function Login() {
  return (
    <>
      <Header />
      <LoginWrapper>
        <LoginForm />
      </LoginWrapper>
    </>
  );
}

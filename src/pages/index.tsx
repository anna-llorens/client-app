import { Header } from "@/components";
import { Routes } from "@/types";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import styled from "styled-components";

import { useRouter } from "next/router";
import { useState } from "react";
import { useLogin } from "@/hooks";

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

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();
  const router = useRouter();

  const onSubmit = () => {
    if (!name || !password) {
      alert("Please enter information");
    } else {
      login(name, password)
        .then((res) => router.push("/home"))
        .catch((e) => alert(e));
    }
  };

  return (
    <>
      <Header />
      <LoginWrapper>
        <h1>Login page</h1>
        <LoginForm>
          <TextField
            size="small"
            label="Username or email"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Username or email"
          />
          <TextField
            size="small"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <Link href={Routes.Home}>
            <Button variant="contained" onClick={onSubmit}>
              Login
            </Button>
          </Link>
        </LoginForm>
      </LoginWrapper>
    </>
  );
}

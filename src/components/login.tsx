import { useLogin } from "@/hooks";
import { TextField, Button } from "@mui/material";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import styled from "styled-components";
import { AppSection } from ".";

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px 10% 10% 10%;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 350px;
  text-align: center;
`;

export const Login: FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();
  const router = useRouter();

  const onSubmit = () => {
    if (!name || !password) {
      return alert("Please enter information");
    } else {
      login(name, password).then((res) => router.push("/home"));
    }
  };

  return (
    <AppSection>
      <LoginWrapper>
        <LoginFormWrapper>
          <h1>Login page</h1>
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
          <Button variant="contained" onClick={onSubmit}>
            Login
          </Button>
        </LoginFormWrapper>
      </LoginWrapper>
    </AppSection>
  );
};


import { Routes } from "@/router";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

const Title = styled.h3`
  color: white;
`;

export const HeaderTitle: FC = () => (
  <Link href={Routes.Home}>
    <Title>APP NANE</Title>
  </Link>
);

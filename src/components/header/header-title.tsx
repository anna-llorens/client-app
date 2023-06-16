import { Routes } from "@/types";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

const Title = styled.h3`
  color: blue;
`;

export const HeaderTitle: FC = () => (
  <Link href={Routes.Home}>
    <Title>AERVIO LOGO</Title>
  </Link>
);

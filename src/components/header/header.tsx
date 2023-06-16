import { FC } from "react";
import { HeaderItems } from "./header-items";
import { styled } from "styled-components";
import Head from "next/head";

const HeaderWrapper = styled.header`
  background-color: #aebac1;
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  color: white;
`;

export const Header: FC<{ appTitle?: string }> = ({
  appTitle = "App title",
}) => (
  <HeaderWrapper>
    <Head>
      <title>{appTitle}</title>
    </Head>
    <HeaderItems />
  </HeaderWrapper>
);

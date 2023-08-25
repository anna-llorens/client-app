import Head from "next/head";
import { FC } from "react";
import styled from "styled-components";
import { HeaderLinks } from "./header-links";
import { HeaderTitle } from "./header-title";

const HeaderWrapper = styled.header`
  background-color: #f6f8fb;
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  color: #52575c;
`;
const HeaderItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 24px;
  gap: 24px;
`;

export const Header: FC<{ appTitle?: string }> = ({
  appTitle = "Aervio Booking Platform",
}) => {
  return (
    <HeaderWrapper>
      <Head>
        <title>{appTitle}</title>
      </Head>
      <HeaderItemsWrapper>
        <HeaderTitle />
        <HeaderLinks />
      </HeaderItemsWrapper>
    </HeaderWrapper>
  );
};

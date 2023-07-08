import { FC } from "react";

import styled from "styled-components";
import Image from "next/image";
import { CompanyLogo } from "./company-logo";

const FooterContainer = styled.footer`
  width: 100%;
  text-align: center;
  background-color: #f6f8fb;
  min-height: 60px;
`;

export const Footer: FC = () => (
  <FooterContainer>
    <CompanyLogo />
  </FooterContainer>
);

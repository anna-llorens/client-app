import { FC } from "react";

import styled from "styled-components";
import { CompanyLogo } from "./company-logo";

const FooterContainer = styled.footer`
  width: 100%;
  text-align: center;
  background-color: #f6f8fb;
  min-height: 40px;
  position: fixed;
  bottom: 0;
  left: 0;
  padding-inline: 10px;
`;

export const Footer: FC = () => (
  <FooterContainer>
    <CompanyLogo />
  </FooterContainer>
);

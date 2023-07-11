import { FC } from "react";
import { useTranslation } from "react-i18next";
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

export const Header: FC = () => {
  const { t } = useTranslation();
  return (
    <HeaderWrapper>
      <HeaderItemsWrapper>
        <HeaderTitle />
        <span>{t("button_label")}</span>
        <HeaderLinks />
      </HeaderItemsWrapper>
    </HeaderWrapper>
  );
};

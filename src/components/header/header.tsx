import { FC } from "react";
import { HeaderTitle } from "./header-title";
import { HeaderItems } from "./header-items";
import { styled } from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #64bbed;
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  color: white;
`;

export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <div>
        <HeaderTitle />
        <HeaderItems />
      </div>
    </HeaderWrapper>
  );
};

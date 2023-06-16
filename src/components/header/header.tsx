import { FC } from "react";
import { HeaderTitle } from "./header-title";
import { HeaderItems } from "./header-items";

export const Header: FC = () => {
  return (
    <header>
      <div>
        <HeaderTitle />
        <HeaderItems />
      </div>
    </header>
  );
};

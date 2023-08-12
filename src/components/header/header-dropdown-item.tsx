import { FC } from "react";

import * as React from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Routes } from "@/router";
import { HeaderLink } from "./header-links";

export const HeaderDropdownItem: FC<{ title: string }> = ({ title }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div
        onClick={(e: React.MouseEvent<HTMLDivElement>) => handleClick(e)}
        style={{ cursor: "pointer" }}
      >
        {title}
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <HeaderLink
            route={Routes.ClientSide}
            label="Client side rendering example"
          />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <HeaderLink
            route={Routes.ServerSide}
            label="Server side rendering example"
          />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <HeaderLink
            route={Routes.StaticRendering}
            label="Static rendering example"
          />
        </MenuItem>
        {/* <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: ["bar A", "bar B", "bar C"],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: [2, 5, 3],
            },
          ]}
          width={500}
          height={300}
        /> */}
      </Menu>
    </>
  );
};

import { FC } from "react";

import styled from "styled-components";
import Head from "next/head";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./kanban-data";

const KanbanContainer = styled.div`
  width: 700px;
  height: 700px;
  overflow-y: auto;
`;

export const Kanban: FC = () => (
  <KanbanContainer>
    <DataGrid rows={rows} columns={columns} />
  </KanbanContainer>
);

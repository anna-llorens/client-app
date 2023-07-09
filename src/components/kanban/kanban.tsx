import { FC } from "react";

import styled from "styled-components";
import Head from "next/head";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./kanban-data";

const KanbanContainer = styled.div`
  height: 650px;
  min-width: 700px;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
`;

export const Kanban: FC = () => (
  <KanbanContainer>
    <DataGrid rows={rows} columns={columns} />
  </KanbanContainer>
);

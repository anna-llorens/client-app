import { Routes } from "@/types";
import Link from "next/link";

export const HeaderItems = () => (
  <div>
    <Link href={Routes.ClientSide}>
      <div>Client side</div>
    </Link>
    <Link href={Routes.ServerSide}>
      <div>Server side</div>
    </Link>
    <Link href={Routes.ServerSide}>
      <div>Static rendering</div>
    </Link>
    <Link href="./">
      <div>Logout</div>
    </Link>
  </div>
);

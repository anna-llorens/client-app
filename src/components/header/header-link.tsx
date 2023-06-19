import { Routes } from "@/router";
import Link from "next/link";

export const HeaderLink = (props: any) => (
  <Link href={props?.route}>
    <div {...props}>{props.label}</div>
  </Link>
);

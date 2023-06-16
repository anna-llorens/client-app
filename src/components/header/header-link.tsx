import { Routes } from "@/types";
import Link from "next/link";

export const HeaderLink = ({
  route,
  label,
}: {
  route: Routes;
  label: string;
}) => (
  <Link href={route}>
    <div>{label}</div>
  </Link>
);

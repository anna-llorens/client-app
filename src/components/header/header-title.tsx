import { Routes } from "@/router";
import Link from "next/link";
import { FC } from "react";

import Image from "next/image";

export const HeaderTitle: FC = () => (
  <div>
    {/* <Link href={Routes.Home}> */}
    <Image
      src="/aervio-logo.png"
      alt="Company logo"
      width="150"
      height="48"
      style={{ marginTop: "6px" }}
    />
    {/* </Link> */}
  </div>
);

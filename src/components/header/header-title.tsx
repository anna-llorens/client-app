import { Routes } from "@/router";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

import Image from "next/image";
import { useCurrentUser } from "@/hooks";

export const HeaderTitle = () => {
  const { user } = useCurrentUser();
  const [route, setRoute] = useState(Routes.Logout);
  console.log(user ? Routes.Home : Routes.Logout);

  useEffect(() => {
    setRoute(user ? Routes.Home : Routes.Logout);
  }, [user]);

  return (
    <div>
      <Link href={route}>
        <Image
          src="/aervio-logo.png"
          alt="Company logo"
          width="150"
          height="48"
          style={{ marginTop: "6px" }}
        />
      </Link>
    </div>
  );
};

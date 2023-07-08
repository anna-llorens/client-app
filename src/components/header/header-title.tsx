import { Routes } from "@/router";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

import Image from "next/image";
import { useCurrentUser } from "@/hooks";
import { CompanyLogo } from "../company-logo";

export const HeaderTitle = () => {
  const { user } = useCurrentUser();
  const [route, setRoute] = useState(Routes.Logout);
  console.log(user ? Routes.Home : Routes.Logout);

  useEffect(() => {
    setRoute(user ? Routes.Home : Routes.Logout);
  }, [user]);

  return (
    <Link href={route}>
      <CompanyLogo />
    </Link>
  );
};

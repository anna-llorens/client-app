import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { User } from "@/types";

export const useCurrentUser = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const currentUser = Cookies.get("currentUser");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  const refetchUser = async (userId: string) => {
    const currentUser = Cookies.get("currentUser");
    if (currentUser) {
      const newUser = {
        ...JSON.parse(currentUser),
      };
      Cookies.set("currentUser", JSON.stringify(newUser));
      setUser(newUser);
    }
  };
  return { user, refetchUser };
};

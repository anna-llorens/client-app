import Cookies from "js-cookie";

export const useLogout = () => {
  debugger;
  const logout = () => {
    Cookies.remove("currentUser");
  };

  return { logout };
};

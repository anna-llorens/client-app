import Cookies from "js-cookie";

export const useLogin = () => {
  const login = async (username: string, password: string) => {
    const user = { username, password };
    
    if (user) {
      Cookies.set("currentUser", JSON.stringify(user));
    }
    return user;
  };

  return { login };
};

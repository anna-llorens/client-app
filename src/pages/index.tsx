import { Footer, Login } from "@/components";
import { useCurrentUser } from "@/hooks";
import Home from "./home";

export default function MainApp() {
  const { user } = useCurrentUser();
  return (
    <>
      {user ? <Home /> : <Login />}
    </>
  );
}

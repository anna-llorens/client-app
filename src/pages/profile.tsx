import { AppSection } from "@/components";
import { useCurrentUser } from "@/hooks";

export default function Profile() {
  const { user } = useCurrentUser();
  return (
    <AppSection>
      <h1>My profile</h1>
      <p>{user ? `Hello ${user.username}` : "You are not logged in !"}</p>
    </AppSection>
  );
}

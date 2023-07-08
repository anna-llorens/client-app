import { AppSection } from "@/components";
import { Kanban } from "@/components/kanban";
import { useTheme } from "@mui/material/styles";

export default function Orders() {
  const theme = useTheme();
  return (
    <AppSection>
      <Kanban />
    </AppSection>
  );
}

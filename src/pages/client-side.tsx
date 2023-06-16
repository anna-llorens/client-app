import Countries from "@/components/countries-graphql";
import { AppSection } from "@/components";

export default function ClientSide() {
  return (
    <AppSection>
      <h1>Client side test</h1>
      <h3>This runs a graphql query directly</h3>
      <Countries />
    </AppSection>
  );
}

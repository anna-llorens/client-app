import { AppSection } from "@/components";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "@/graphql";
import { Country } from "@/types";

export default function ClientSide() {
  const { data, loading, error } = useQuery(GET_COUNTRIES);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    console.error(error);
    return null;
  }
  const countries: Country[] = data.countries.slice(0, 10);
  return (
    <AppSection>
      <h1>Client side test</h1>
      <h3>This runs a graphql query directly</h3>
      <div>
        {countries.map((country) => (
          <div key={country.code}>
            <h3>{country.name}</h3>
            <p>
              {country.code} - {country.emoji}
            </p>
          </div>
        ))}
      </div>
    </AppSection>
  );
}

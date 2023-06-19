import { Country } from "@/types";
import { AppSection } from "@/components";
import { getCountries } from "@/graphql";

export async function getStaticProps() {
  return getCountries(4);
}

export default function StaticRenderingPage({
  countries,
}: {
  countries: Country[];
}) {
  return (
    <AppSection>
      <h1>Static rendering test</h1>
      <h3>This runs getStaticProps()</h3>
      {countries.map((country) => (
        <div key={country.code}>
          <h3>{country.name}</h3>
          <p>
            {country.code} - {country.emoji} - {country.emoji}
          </p>
        </div>
      ))}
    </AppSection>
  );
}

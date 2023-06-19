import { gql } from "@apollo/client";
import client from "../../apollo-client";
import { Country } from "@/types";
import { AppSection } from "@/components";
import { GET_COUNTRIES } from "@/graphql/querys";

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_COUNTRIES,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  };
}

export default function ServerSidePage({
  countries,
}: {
  countries: Country[];
}) {
  return (
    <AppSection>
      <h1>Server side test</h1>
      <h3>This runs getServerSideProps()</h3>
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

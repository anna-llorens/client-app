import { gql } from "@apollo/client";
import client from "../../apollo-client";
import { Country } from "@/types";

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  };
}

export default function Home({ countries }: { countries: Country[] }) {
  console.log(countries);

  return (
    <div>
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
    </div>
  );
}

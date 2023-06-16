import { gql } from "@apollo/client";
import client from "../../apollo-client";
import { Country } from "@/types";
import { AppSection, Header } from "@/components";
import { styled } from "styled-components";

export async function getStaticProps() {
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
      countries: data.countries.slice(0, 2),
    },
  };
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

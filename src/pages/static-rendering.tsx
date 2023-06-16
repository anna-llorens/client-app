import { gql } from "@apollo/client";
import client from "../../apollo-client";

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
      countries: data.countries.slice(0, 4),
    },
  };
}

export default function Login() {
  return (
    <div>
      <h1>Login page</h1>
    </div>
  );
}

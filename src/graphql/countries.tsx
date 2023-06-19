import client from "../../apollo-client";
import { GET_COUNTRIES } from "./querys";

export const getCountries = async (limit = 10) => {
  const { data } = await client.query({
    query: GET_COUNTRIES,
  });

  return {
    props: {
      countries: data.countries.slice(0, limit),
    },
  };
};

import { getCountries } from "@/api/graphql";
import { AppSection } from "@/components";
import { Country } from "@/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

// export async function getStaticProps() {
//   return getCountries(4);
// }

export default function StaticRenderingPage({
  countries,
}: {
  countries: Country[];
}) {
  const { t } = useTranslation();
  return (
    <AppSection>
      <h1>{t("static_rendering_title")}</h1>
      <h3>This runs getStaticProps()</h3>
      {/* {countries.map((country) => (
        <div key={country.code}>
          <h3>{country.name}</h3>
          <p>
            {country.code} - {country.emoji} - {country.emoji}
          </p>
        </div>
      ))} */}
    </AppSection>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      countries: await getCountries(4),
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

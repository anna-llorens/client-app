import { AppSection } from "@/components";
import { useCurrentUser } from "@/hooks";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Profile() {
  const { user } = useCurrentUser();
  const { t } = useTranslation();

  return (
    <AppSection>
      <h1>{t("homepage_nav_link_label")}</h1>
      <p>
        {user
          ? `${t("button_label")}  ${user.username}`
          : "You are not logged in !"}
      </p>
    </AppSection>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

import {
  AppSection,
  BaBarChartStatus,
  StatusPieChart,
  Widget,
} from "@/components";
import { Kanban } from "@/components/kanban";
import { useTheme } from "@mui/material/styles";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Container = styled.div`
  display: flex;
`;

export default function Orders() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <AppSection
      style={{ justifyContent: "space-between", marginInline: "24px" }}
    >
      <h1>Orders kanban</h1>
      <h1>{t("homepage_nav_link_label")}</h1>
      <Container>
        <Kanban />
        <Widget title="Orders status">
          <StatusPieChart />
        </Widget>
        <Widget title="Incoming request">
          <BaBarChartStatus />
        </Widget>
      </Container>
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

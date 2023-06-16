import Head from "next/head";
import Countries from "@/components/countries-graphql";
import ClientOnly from "@/components/client-only";

export default function ClientSide() {
  return (
    <div>
      <Head>
        <title>Client side test</title>
      </Head>
      <main>
        <h1>Client side test</h1>
        <h3>This runs a graphql query directly</h3>
        <ClientOnly>
          <Countries />
        </ClientOnly>
      </main>
    </div>
  );
}

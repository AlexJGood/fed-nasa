import Head from "next/head";
import POTD, { getPOTDData } from "../components/potd";
import Layout from "../components/layout";

export default function Home(props) {
  return (
    <Layout>
      <Head>
        <title>FED-NASA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <POTD potd_data={props.potd_data}></POTD>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const potd_data = await getPOTDData();
  return {
    props: { potd_data },
  };
}

import Head from "next/head";
import Layout from "../components/layout";

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404</title>
      </Head>
      <h2 style={{ textAlign: "center" }}>Content not found</h2>
    </Layout>
  );
}

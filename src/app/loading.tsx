import { Suspense } from "react";
import Layout from "./layout";
import Main from "./page";

export default function Loading() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Main />
      </Suspense>
    </Layout>
  );
}

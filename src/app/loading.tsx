import { Suspense } from "react";
import Layout from "./layout";
import Home from "./page";

export default function Loading() {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    </Layout>
  );
}

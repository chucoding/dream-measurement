"use client";

import CloudCard from "../modules/cloudCard";
import ButtonList from "../modules/buttonList";
import { useEffect, useState } from "react";
import CountBadge from "../modules/countBadge";
import ResultLoading from "./resultLoading";

export default function Flow(props: any) {
  const [tests, setTests] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch("/test.json")
      .then((response) => response.json())
      .then((data) => {
        setTests(data);
      });
  }, []);

  return page != 0 && page === tests.length ? (
    <ResultLoading />
  ) : (
    <div>
      <CloudCard text={tests && tests[page] && tests[page]["text"]} />
      <ButtonList
        list={tests && tests[page] && tests[page]["buttonList"]}
        page={page}
        setPage={setPage}
      />
      <CountBadge count={page + 1} totalCount={tests.length} />
    </div>
  );
}

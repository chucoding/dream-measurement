"use client";

import QuestionCard from "../modules/questionCard";
import ButtonList from "../modules/buttonList";
import { useEffect, useState } from "react";

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

  return (
    <div className="text-center w-[375px] h-full relative">
      <div className="w-full h-full absolute top-0 bottom-0">
        <QuestionCard text={tests && tests[page] && tests[page]["text"]} />
        <ButtonList
          list={tests && tests[page] && tests[page]["buttonList"]}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}

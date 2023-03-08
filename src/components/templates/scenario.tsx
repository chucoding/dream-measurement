"use client";

import CloudCard from "../modules/cloudCard";
import ButtonList from "../modules/buttonList";
import { useEffect, useState } from "react";
import CountBadge from "../modules/countBadge";
import ResultLoading from "./resultLoading";

export default function Scenario({ setNext }: any) {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [scoreList, setScoreList] = useState([]);
  useEffect(() => {
    fetch("/test.json")
      .then((response) => response.json())
      .then((data) => {
        setList(data);
      });
  }, []);

  console.log(scoreList);

  return page != 0 && page === list.length ? (
    <ResultLoading scoreList={scoreList} />
  ) : (
    <div>
      <button
        className={`bg-[url('/reply.png')] bg-cover h-[30px] w-[30px] absolute z-10 left-0`}
        onClick={() => {
          if (page === 0) {
            setNext(false);
          } else {
            setPage(page - 1);
            scoreList.pop();
            setScoreList(scoreList);
          }
        }}
      />
      <CloudCard text={list && list[page] && list[page]["text"]} />
      <ButtonList
        list={list && list[page] && list[page]["buttonList"]}
        page={page}
        setPage={setPage}
        setScoreList={setScoreList}
      />
      <CountBadge count={page + 1} totalCount={list.length} />
    </div>
  );
}

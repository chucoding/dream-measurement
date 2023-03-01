"use client";

import TextCard from "../modules/textCard";
import ButtonList from "../modules/buttonList";
import { useEffect, useState } from "react";

export default function Flow(props: any) {
  const [tests, setTests] = useState([]);

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
        {tests.map((data: any, key: any) => {
          return (
            <div key={key}>
              <TextCard text={data.text} />
              <ButtonList list={data?.buttonList} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Textline from "../modules/textline";
import Flow from "./flow";

export default function OnBoarding(props: any) {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [finish, setFinish] = useState(false);
  const [next, setNext] = useState(false);

  const msgQ = [
    "오늘도 피곤한 하루를 마치고 침대에 뛰어든 당신!",
    "지금부터 자신이 꿈을 꾸는 방식을",
    "떠올리며 테스트에 임해주세요",
  ];
  useEffect(() => {
    setTimeout(() => setText1(msgQ[0]), 1000);
    setTimeout(() => setText2(msgQ[1]), 3000);
    setTimeout(() => setText3(msgQ[2]), 5000);
    setTimeout(() => setFinish(true), 7000);
  }, []);

  return next ? (
    <Flow />
  ) : (
    <div className="text-center w-[375px] h-full relative">
      <div className="w-full h-full absolute top-0 bottom-0">
        <Textline text={text1} />
        <Textline text={text2} />
        <Textline text={text3} />
        {finish ? (
          <button className="animate-pulse" onClick={() => setNext(true)}>
            ▶ 꿈력 측정하기
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import CloudCard from "../modules/cloudCard";
import Textline from "../modules/textline";
import Flow from "./flow";

export default function OnBoarding(props: any) {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [finish, setFinish] = useState(false);
  const [next, setNext] = useState(false);

  return next ? (
    <Flow />
  ) : (
    <div>
      <CloudCard
        text="오늘도 피곤한 하루를 마치고 침대에 뛰어든 당신! 지금부터 자신이 꿈을
        꾸는 환경을 떠올리며 테스트에 임해주세요"
      />
      <button
        className="animate-pulse text-gray-100"
        onClick={() => setNext(true)}
      >
        ▶
      </button>
    </div>
  );
}

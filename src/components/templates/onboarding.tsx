"use client";

import { useState } from "react";
import CloudCardBig from "../modules/cloudCardBig";
import Flow from "./flow";

export default function OnBoarding(props: any) {
  const [next, setNext] = useState(false);

  return next ? (
    <Flow />
  ) : (
    <div>
      <CloudCardBig>
        <h2 className="text-2xl absolute mt-10 left-[23%]">
          오늘도 피곤한 하루를 마치고
          <br /> 침대에 뛰어든 당신!
          <br />
          지금부터 자신이 꿈을 꾸는 환경을 떠올리며
          <br />
          테스트에 임해주세요
        </h2>
      </CloudCardBig>
      <button
        className="absolute top-[70%] animate-pulse text-gray-100"
        onClick={() => setNext(true)}
      >
        ▶
      </button>
    </div>
  );
}

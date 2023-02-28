"use client";
import { useState } from "react";
import Flow from "./flow";
import CloudImage from "../../resources/cloud.png";
import Image from "next/image";

export default function App(props: any) {
  const [start, setStart] = useState(false);

  return start ? (
    <Flow />
  ) : (
    <div className="text-center w-[375px] h-full relative">
      <div className="w-full h-full absolute top-0 bottom-0">
        <div className="inline-block text-center">
          <h1 className="text-3xl absolute top-32 left-24">꿈력 측정 테스트</h1>
          <h2 className="text-1xl absolute top-44 left-32">
            ...당신의 꿈력은 몇 %?
          </h2>
          <img src="/cloud.png" alt="메인이미지" />
        </div>
        <button
          className="bg-white hover:bg-[#808080] text-black font-bold py-2 px-12 rounded-full"
          onClick={() => setStart(true)}
        >
          테스트 시작하기
        </button>
      </div>
    </div>
  );
}

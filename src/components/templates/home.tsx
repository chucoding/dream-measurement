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
        <h1 className="text-4xl">꿈력 측정 테스트</h1>
        <h2 className="text-2xl">...당신의 꿈력은 몇 %?</h2>
        <div className="inline-block text-center">
          <div>
            <img src="/cloud.png" alt="메인이미지" />
          </div>
        </div>
        <button
          className="bg-[#556EA5] hover:bg-[#6C86C3] text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setStart(true)}
        >
          테스트 시작하기
        </button>
      </div>
    </div>
  );
}

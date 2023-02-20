"use client";
import { useState } from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../resources/my-lottie.json";
import Flow from "./flow";

export default function App(props: any) {
  const [start, setStart] = useState(false);

  return start ? (
    <Flow />
  ) : (
    <div className="text-center w-[375px] h-full relative">
      <div className="w-full h-full absolute top-0 bottom-0">
        <h1 className="text-4xl">꿈력 측정기</h1>
        <h2 className="text-2xl">당신의 꿈력을 측정해보세요.</h2>
        <div className="inline-block text-center">
          <Lottie
            loop
            animationData={lottieJson}
            play
            style={{ width: "300px" }}
          />
        </div>
        <button
          className="bg-[#556EA5] hover:bg-[#6C86C3] text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setStart(true)}
        >
          테스트 시작하기
        </button>
        <p>
          지금까지 <b>0</b> 명이 참여했어요!
        </p>
      </div>
    </div>
  );
}

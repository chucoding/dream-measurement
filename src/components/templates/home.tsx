"use client";
import { useState } from "react";
import OnBoarding from "./onboarding";

export default function App(props: any) {
  const [start, setStart] = useState(false);

  return start ? (
    <OnBoarding />
  ) : (
    <div>
      <div className="inline-block text-center">
        <img className="absolute right-2" src="/cloud.png" alt="메인이미지" />
        <h1 className="text-2xl absolute top-32 left-16">꿈력 측정 테스트</h1>
        <h2 className="text-1xl absolute top-40" style={{ left: "88px" }}>
          당신의 꿈력은 몇 %?
        </h2>
      </div>
      <button
        className="relative top-80 bg-white hover:bg-[#808080] text-black font-bold py-2 px-12 rounded-full"
        onClick={() => setStart(true)}
      >
        테스트 시작하기
        <br />
      </button>
      <p className="relative top-80 mt-2 text-gray-100 text-xs">
        모바일 환경을 추천합니다.
      </p>
    </div>
  );
}

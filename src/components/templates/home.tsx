"use client";
import { useState } from "react";
import CloudCardBig from "../modules/cloudCardBig";
import OnBoarding from "./onboarding";

export default function App(props: any) {
  const [start, setStart] = useState(false);
  return start ? (
    <OnBoarding />
  ) : (
    <>
      <div className="inline-block text-center">
        <CloudCardBig>
          <div className="absolute top-[40%] left-[30%]">
            <h1 className="text-5xl font-black">꿈력 측정 테스트</h1>
            <h2 className="text-2xl absolute mt-2 left-[30%]">
              당신의 꿈력은 몇 %?
            </h2>
          </div>
        </CloudCardBig>
      </div>
      <div className="relative top-[70%]">
        <button
          className="bg-white hover:bg-[#808080] text-black font-bold py-2 px-12 rounded-full"
          onClick={() => setStart(true)}
        >
          테스트 시작하기
          <br />
        </button>
        <p className=" mt-2 text-gray-100 text-xs">모바일 환경을 추천합니다.</p>
      </div>
    </>
  );
}

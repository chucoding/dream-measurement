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
      <div
        className="inline-block text-center"
        style={{ fontFamily: "KCCChassam" }}
      >
        <CloudCardBig>
          <div className="absolute top-[35%] left-[100px]">
            <h1 className="text-[45px] font-black">꿈력 측정 테스트</h1>
            <h2 className="text-[25px] absolute mt-[5px] left-[50px]">
              당신의 꿈력은 몇 %?
            </h2>
          </div>
        </CloudCardBig>
      </div>
      <div className="relative top-[70%]" style={{ fontFamily: "KCCChassam" }}>
        <button
          className="bg-white hover:bg-[#808080] text-black font-bold py-[5px] px-[35px] rounded-full"
          onClick={() => setStart(true)}
        >
          테스트 시작하기
          <br />
        </button>
        <p className="mt-[2px] text-gray-100 text-[12px]">
          모바일 환경을 추천합니다
        </p>
      </div>
    </>
  );
}

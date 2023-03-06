"use client";
import { useState } from "react";
import CloudCardWrapper from "../modules/cloudCardWrapper";
import OnBoarding from "./onboarding";

export default function App(props: any) {
  const [start, setStart] = useState(false);
  return start ? (
    <OnBoarding />
  ) : (
    <>
      <div className="inline-block text-center">
        <CloudCardWrapper>
          <div className="absolute top-[35%] left-[27%]">
            <h1 className="text-5xl font-black">꿈력 측정 테스트</h1>
            <h2 className="text-2xl font-medium absolute mt-2 left-[23%]">
              당신의 꿈력은 몇 %?
            </h2>
          </div>
        </CloudCardWrapper>
      </div>
      <div className="relative top-[70%]">
        <button
          className="bg-white hover:bg-[#808080] text-black font-bold py-2 px-12 rounded-full"
          style={{ height: "57px", width: "200px", fontSize: "21px" }}
          onClick={() => setStart(true)}
        >
          테스트 시작하기
          <br />
        </button>
        <p className=" mt-2 text-gray-100" style={{ fontSize: "18px" }}>
          모바일 환경을 추천합니다.
        </p>
      </div>
    </>
  );
}

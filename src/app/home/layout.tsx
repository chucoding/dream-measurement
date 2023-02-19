"use client";
import Lottie from "react-lottie-player";
import lottieJson from "../../resources/my-lottie.json";

export default function App(props: any) {
  return (
    <div className="text-center">
      <h1 className="text-4xl">꿈력 측정기</h1>;
      <h2 className="text-3xl">당신의 꿈력을 측정해보세요.</h2>
      <div className="inline-block text-center">
        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{ width: "300px" }}
        />
      </div>
      <div>
        <button>테스트 시작하기</button>
      </div>
      <div>
        지금까지 <b>0</b> 명이 참여했어요!
      </div>
    </div>
  );
}

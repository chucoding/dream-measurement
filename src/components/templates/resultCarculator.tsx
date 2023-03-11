"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import CloudCardBig from "../modules/cloudCardBig";

export default function ResultLoading({ scoreList }: any) {
  const router = useRouter();

  useEffect(() => {
    let sum = 0;
    for (let score of scoreList) {
      sum += score;
    }
    const average = Math.floor(sum / scoreList.length);
    setTimeout(() => router.push(`result/${average}`), 3000);
  }, []);

  return (
    <div>
      <CloudCardBig>
        <div className="flex justify-center">
          <h1 className="text-5xl font-black absolute top-[40%] left-[35%]">
            꿈력 측정 중
          </h1>
        </div>
      </CloudCardBig>
    </div>
  );
}

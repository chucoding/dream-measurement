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
        <h1 className="text-5xl font-black absolute top-[40%] left-[30%]">
          꿈력 측정중...
        </h1>
      </CloudCardBig>
    </div>
  );
}

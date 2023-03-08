"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import CloudCardBig from "../modules/cloudCardBig";

export default function ResultLoading({ scoreList }: any) {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push("/result/1"), 3000);
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

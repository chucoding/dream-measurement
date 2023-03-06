"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ResultLoading(props: any) {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push("/result/1"), 3000);
  }, []);

  return (
    <div>
      <h1 className="text-2xl absolute top-28 left-20">꿈력 측정중...</h1>
      <img src="/cloud.png" alt="메인이미지" />
    </div>
  );
}

"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Result() {
  const path = usePathname() || "";
  const [data, setData] = useState({
    score: 0,
    title: "",
    description: "",
    tip: "",
  });
  const pid = parseInt(path.substring(8), 10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/result.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data[pid - 1]);
        setLoading(true);
      });
  }, []);

  return loading ? (
    <div>
      <p className="text-2xl">당신의 꿈력이 {data.score} 충전되었습니다.</p>
      <div className="p-20">이미지</div>
      <div className="bg-white rounded-md	p-2 m-2">
        <p>{data.title}</p>
        <p className="p-2">{data.description}</p>
      </div>
      <div className="bg-white rounded-md	p-2 m-2">
        <p className="p-2 flex flex-start">💤당신을 위한 수면팁</p>
        <p className="p-2">{data.tip}</p>
      </div>
    </div>
  ) : (
    <></>
  );
}

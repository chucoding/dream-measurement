"use client";

import { usePathname, redirect } from "next/navigation";
import { useState, useEffect } from "react";
import { Battery } from "@brightlayer-ui/react-progress-icons";

export default function Result() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    tip: "",
  });
  const path = usePathname() || "";
  const score = parseInt(path.substring(8), 10);
  if (isNaN(score) || score < 40 || score > 100) {
    redirect("/");
  }

  useEffect(() => {
    fetch("/result.json")
      .then((response) => response.json())
      .then((data) => {
        if (score >= 40 && score < 56) {
          setData(data[0]);
        } else if (score >= 56 && score < 71) {
          setData(data[1]);
        } else if (score >= 71 && score < 86) {
          setData(data[2]);
        } else if (score >= 86 && score < 101) {
          setData(data[3]);
        }

        setLoading(true);
      });
  }, []);

  return loading ? (
    <div>
      <p className="text-2xl">당신의 꿈력이 {score}% 충전되었습니다.</p>
      <div className="p-10">
        <Battery percent={score} charging size={150} color={"#66CCFF"} />
      </div>
      <div className="bg-white rounded-md	p-2 m-2">
        <b>{data.title}</b>
        <p className="p-2">
          {data.description.split("\n").map((line, key) => {
            return (
              <span key={key}>
                {line}
                <br />
              </span>
            );
          })}
        </p>
      </div>
      <div className="bg-white rounded-md	p-2 m-2">
        <p className="p-2 flex flex-start">💤당신을 위한 드림 팁</p>
        <p className="p-2">{data.tip}</p>
      </div>
    </div>
  ) : (
    <></>
  );
}

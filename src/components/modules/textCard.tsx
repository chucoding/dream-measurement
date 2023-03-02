"use client";
import Text from "../atoms/text";
export default function TextCard({ text }: any) {
  return (
    <div className="h-40 rounded-lg bg-white">
      <div className="text-center">
        <p className="flex justify-center items-center h-40">{text}</p>
      </div>
    </div>
  );
}

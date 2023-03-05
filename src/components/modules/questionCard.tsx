"use client";
export default function questionCard({ text }: any) {
  return (
    <div
      className="bg-[url('/cloud.png')] bg-cover h-[260px] animate-fadein"
      key={text}
    >
      <div className="text-center absolute w-48 left-16">
        <p className="flex justify-center items-center h-60">{text}</p>
      </div>
    </div>
  );
}

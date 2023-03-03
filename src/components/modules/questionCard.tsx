"use client";
export default function questionCard({ text }: any) {
  return (
    <div className="bg-[url('/cloud.png')] bg-cover h-[260px]">
      <div className="text-center">
        <p className="flex justify-center items-center h-60">{text}</p>
      </div>
    </div>
  );
}

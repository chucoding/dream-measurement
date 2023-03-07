"use client";
export default function CloudCard({ text, runAnimate = false }: any) {
  return (
    <div
      className={`bg-[url('/cloud.png')] bg-cover h-[280px] w-[350px] relative right-10 bottom-10 ${
        runAnimate ? "animate-fadein" : ""
      }`}
      key={text}
    >
      <div className="text-center absolute w-48 top-6 left-24">
        <p className="flex justify-center items-center h-60 font-black text-2xl">
          {text}
        </p>
      </div>
    </div>
  );
}

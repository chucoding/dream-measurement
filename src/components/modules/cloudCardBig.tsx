"use client";
export default function CloudCardBig({ children, runAnimate = false }: any) {
  return (
    <div
      className={`bg-[url('/cloud.png')] bg-cover
        h-[400px] w-[450px]
        absolute left-[40%] transform -translate-x-1/2 top-[40%] -translate-y-1/2
        ${runAnimate ? "animate-fadein" : ""}`}
    >
      {children}
    </div>
  );
}

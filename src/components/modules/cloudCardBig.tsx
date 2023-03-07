"use client";
export default function CloudCardBig({ children, runAnimate = false }: any) {
  return (
    <div
      className={`bg-[url('/cloud.png')] bg-cover
        h-[400px] w-[450px] p-10 pt-20 pb-20
        absolute left-[41%] transform -translate-x-1/2 top-[40%] -translate-y-1/2
        ${runAnimate ? "animate-fadein" : ""}`}
    >
      {children}
    </div>
  );
}

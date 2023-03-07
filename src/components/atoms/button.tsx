"use client";

export default function Button({
  data,
  page,
  setPage,
  setScore,
  setScoreList,
}: any) {
  return (
    <button
      className="mt-3 min-h-[60px] text-2xl rounded-lg border w-full h-full p-2"
      onClick={() => {
        setPage(page + 1);
        setScoreList((list: any) => [...list, data?.score]);
      }}
    >
      {data?.text}
    </button>
  );
}

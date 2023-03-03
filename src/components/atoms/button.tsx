"use client";

export default function Button({ text, page, setPage }: any) {
  return (
    <button
      className="mt-3 h-12 rounded-lg border w-full"
      onClick={() => setPage(page + 1)}
    >
      {text}
    </button>
  );
}

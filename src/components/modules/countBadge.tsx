"use client";

export default function CountBadge({ count, totalCount }: any) {
  return (
    <div>
      {count} / {totalCount}
    </div>
  );
}

"use client";

import Button from "../atoms/button";

export default function Card({ list, page, setPage }: any) {
  return (
    <div>
      {list &&
        list.map((data: any, key: any) => {
          return <Button key={key} text={data} page={page} setPage={setPage} />;
        })}
    </div>
  );
}

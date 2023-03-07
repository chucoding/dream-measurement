"use client";

import Button from "../atoms/button";

export default function Card({ list, page, setPage, setScoreList }: any) {
  return (
    <div className="animate-fadein" key={page}>
      {list &&
        list.map((data: any, key: any) => {
          return (
            <Button
              key={key}
              data={data}
              page={page}
              setPage={setPage}
              setScoreList={setScoreList}
            />
          );
        })}
    </div>
  );
}

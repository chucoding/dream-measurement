"use client";

import Button from "../atoms/button";

export default function Card({ list }: any) {
  return (
    <div>
      <Button text={list[0]} />
      <Button text={list[1]} />
      <Button text={list[2]} />
      <Button text={list[3]} />
    </div>
  );
}

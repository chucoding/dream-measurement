"use client";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";

const getCount = () => {
  return 1;
};

const Title = (props: any) => {
  return <h1 className="text-4xl text-center">꿈력 측정기</h1>;
};

const SubTitle = (props: any) => {
  return <h2 className="text-3xl text-center">당신의 꿈력을 측정해보세요.</h2>;
};

const Image = (props: any) => {
  return <div>이미지</div>;
};

const Logo = (props: any) => {
  return <img src="/images/logo.png" alt="로고이미지" />;
};

const Button = (props: any) => {
  return <button>설문에 참여하기</button>;
};

const Count = (props: any) => {
  //const { data } = useQuery("", () => getCount());
  return (
    <div>
      지금까지 <b>0</b> 명이 참여했어요!
    </div>
  );
};

export default function App(props: any) {
  return (
    <div>
      <Title />
      <SubTitle />
      <Logo />
      <Image />
      <Button />
      <Count />
    </div>
  );
}

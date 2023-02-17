"use client";
import { useState } from "react";
import { useQuery } from "react-query";

const getCount = () => {
  return 1;
};

const Title = (props: any) => {
  return <h1>테스트 입니다.</h1>;
};

const SubTitle = (props: any) => {
  return (
    <>
      나만의 <b>성장 라이프</b>를 공유해주세요!
    </>
  );
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
    <>
      지금까지 <b>0</b> 명이 참여했어요!
    </>
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

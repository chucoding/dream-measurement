"use client";
import App from "../components/templates/home";
import { useEffect } from "react";
import Script from "next/script";

export default function Main() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <>
      <App />
      <div style={{ textAlign: "center" }}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1919598055512436"
          crossOrigin="anonymous"
        ></Script>
        <ins
          className="adsbygoogle"
          style={{
            display: "inline-block",
            width: "120px",
            height: "50px",
          }}
          data-ad-client="ca-pub-1919598055512436"
          data-ad-slot="9317183248"
        ></ins>
      </div>
    </>
  );
}

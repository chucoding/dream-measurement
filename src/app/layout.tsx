import "./globals.css";
import Head from "./head";
/**
 * MyFont left-30
 * Dovemayo_gothic left-23
 * KCCChassam left-23
 * Humanbumsuk left-25
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" style={{ fontFamily: "GangwonEdu_OTFBoldA" }}>
      <head>
        <Head />
        <link rel="stylesheet" href="/fonts.css" />
        <script
          defer
          src="https://cdn.swygbro.com/public/widget/swyg-widget.js"
        ></script>
      </head>
      <body>
        <main
          className={`
        absolute
        bg-gradient-to-b from-[#D6EBE4] to-[#D8C7DA]
        min-w-full
        min-h-full
        w-full
        h-full
        overflow-auto
        justify-center
        flex
      `}
        >
          <div className="text-center w-[375px] h-full relative">
            <div className="w-full h-full absolute top-0 bottom-0 align-middle">
              {children}
            </div>
            {/*
            <footer className="absolute bottom-0 right-0 text-right">
              <div className="text-white text-[14px]">
                <p>기획자 : 선예지 | 개발자 : 서현석</p>
                <p>
                  <a href="https://www.swygbro.com/" target="_blank">
                    Prod By. SWYG
                  </a>
                </p>
              </div>
              <div className="text-gray-100 text-[12px]">
                <p>Copyright(C) 꿈력 측정 테스트</p>
                <p>All Rights Reserved.</p>
              </div>
            </footer>
            */}
          </div>
        </main>
      </body>
    </html>
  );
}

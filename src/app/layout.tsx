import "./globals.css";
import localFont from "@next/font/local";

const myFont = localFont({ src: "/fonts/NanumSquareNeo-Variable.ttf" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head />
      <body>
        <main
          className={`
        absolute
        bg-gradient-to-b from-[#D6EBE4] to-[#D8C7DA]
        min-w-full
        min-h-full
        w-full
        h-full
        overflow-hidden
        justify-center
        flex
        p-10
        ${myFont.className}
      `}
        >
          <div className="text-center w-[375px] h-full relative">
            <div className="w-full h-full absolute top-0 bottom-0 align-middle">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

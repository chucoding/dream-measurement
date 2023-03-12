import "./globals.css";
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
        <link rel="stylesheet" href="/fonts.css" />
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
          </div>
        </main>
      </body>
    </html>
  );
}

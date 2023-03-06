import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" style={{ fontFamily: "MyFont" }}>
      <head>
        {" "}
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
        overflow-hidden
        justify-center
        flex
        p-10
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

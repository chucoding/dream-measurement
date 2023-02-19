import { Inter } from "@next/font/google";
import App from "./home/layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Main() {
  return (
    <main
      className={`
        h-screen 
        bg-[#FEF7E5]
        ${inter.variable} font-sans
      `}
    >
      <App />
    </main>
  );
}

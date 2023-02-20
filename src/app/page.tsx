import { Inter } from "@next/font/google";
import App from "../components/templates/home";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Main() {
  return (
    <main
      className={`
        absolute
        bg-[#FEF7E5]
        min-w-full
        min-h-full
        w-full
        h-screen
        overflow-hidden
        justify-center
        flex
        ${inter.variable} font-sans
      `}
    >
      <App />
    </main>
  );
}

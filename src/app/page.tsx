import { Inter } from "@next/font/google";
import App from "./home/layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Main() {
  return (
    <main
      className={`h-screen bg-gradient-to-b from-[#84A1B1] via-[#9C7E76] to-[#6C5873] ${inter.variable} font-sans`}
    >
      <App />
    </main>
  );
}

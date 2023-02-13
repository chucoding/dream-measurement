import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </main>
  );
}
